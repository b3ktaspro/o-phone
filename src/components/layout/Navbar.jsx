import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const links = [
  { name: "Accueil", to: "/#" },
  { name: "Avis", to: "/#reviews" },
  { name: "À propos", to: "/#about" },
  { name: "FAQ", to: "/faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);

    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  useEffect(() => {
    const resize = () => window.innerWidth >= 1024 && setOpen(false);
    const escape = (e) => e.key === "Escape" && setOpen(false);

    window.addEventListener("resize", resize);
    window.addEventListener("keydown", escape);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("keydown", escape);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -70 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.45 }}
        className="fixed inset-x-0 top-0 z-[100] px-4 pt-5"
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-[26px] border px-5 py-3 transition-all duration-300 ${
            scrolled
              ? "border-slate-200 bg-white/95 shadow-[0_20px_60px_rgba(15,23,42,.08)] backdrop-blur-xl"
              : "border-white/40 bg-white/70 backdrop-blur-2xl"
          }`}
        >
          <HashLink smooth to="/#">
            <img
              src="img/logo-o-phone-backgroundpng.png"
              alt="O'Phone"
              className="h-11 w-auto"
            />
          </HashLink>

          <nav className="hidden items-center gap-2 rounded-full bg-[#faf8f4] p-2 lg:flex">
            {links.map((link) =>
              link.to === "/faq" ? (
                <Link
                  key={link.name}
                  to={link.to}
                  className="rounded-full px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-slate-950"
                >
                  {link.name}
                </Link>
              ) : (
                <HashLink
                  key={link.name}
                  smooth
                  to={link.to}
                  className="rounded-full px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-slate-950"
                >
                  {link.name}
                </HashLink>
              ),
            )}
          </nav>

          <div className="hidden lg:block">
            <HashLink
              smooth
              to="/#contact"
              className="group inline-flex items-center gap-3 rounded-2xl bg-slate-950 px-5 py-3 font-semibold text-white transition hover:scale-[1.03]"
            >
              Contacter
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-yellow-400">
                <ArrowUpRight
                  size={16}
                  className="text-slate-950 transition group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>
            </HashLink>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white lg:hidden"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[90] bg-black"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed inset-0 z-[95] overflow-y-auto bg-[#faf8f4] pt-28"
            >
              <div className="mx-auto max-w-lg px-6">
                <div className="rounded-[34px] bg-white p-5 shadow-[0_25px_60px_rgba(15,23,42,.08)]">
                  {links.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.06 }}
                    >
                      {link.to === "/faq" ? (
                        <Link
                          to={link.to}
                          onClick={() => setOpen(false)}
                          className="group flex items-center justify-between rounded-2xl px-5 py-5 transition hover:bg-[#faf8f4]"
                        >
                          <span className="text-2xl font-black text-slate-950">
                            {link.name}
                          </span>

                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 transition group-hover:rotate-12">
                            <ArrowUpRight
                              size={18}
                              className="text-slate-950"
                            />
                          </div>
                        </Link>
                      ) : (
                        <HashLink
                          smooth
                          to={link.to}
                          onClick={() => setOpen(false)}
                          className="group flex items-center justify-between rounded-2xl px-5 py-5 transition hover:bg-[#faf8f4]"
                        >
                          <span className="text-2xl font-black text-slate-950">
                            {link.name}
                          </span>

                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 transition group-hover:rotate-12">
                            <ArrowUpRight
                              size={18}
                              className="text-slate-950"
                            />
                          </div>
                        </HashLink>
                      )}
                    </motion.div>
                  ))}
                </div>

                <HashLink
                  smooth
                  to="/#contact"
                  onClick={() => setOpen(false)}
                  className="mt-8 flex items-center justify-center gap-3 rounded-[22px] bg-slate-950 py-5 text-lg font-bold text-white"
                >
                  Contacter
                  <ArrowUpRight size={18} />
                </HashLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
