import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaInstagram, FaSnapchat } from "react-icons/fa6";
import { Link } from "react-router-dom";

const navigation = [
  { label: "Accueil", href: "#" },
  { label: "À propos", href: "#about" },
  { label: "Avis", href: "#reviews" },
  { label: "FAQ", href: "faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-5 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[36px] bg-slate-950"
        >
          <div className="grid lg:grid-cols-[1.2fr_.8fr]">
            <div className="p-8 sm:p-10 lg:p-12">
              <span className="text-[10px] font-bold uppercase tracking-[.35em] text-yellow-400">
                O'Phone
              </span>

              <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
                Une réparation ?
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/60">
                Passez en boutique ou contactez-nous pour un diagnostic rapide.
              </p>

              <a
                href="tel:0967051336"
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-yellow-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-105"
              >
                09 67 05 13 36
                <ArrowUpRight
                  size={17}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>

            <div className="border-t border-white/10 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-[.3em] text-yellow-400">
                    Navigation
                  </h3>

                  <div className="mt-5 space-y-3">
                    {navigation.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block w-fit text-sm text-white/65 transition hover:text-white"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-[.3em] text-yellow-400">
                    Social
                  </h3>

                  <div className="mt-5 flex gap-3">
                    <a
                      href="https://www.instagram.com/ophone.11?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-white transition hover:bg-yellow-400 hover:text-slate-950"
                    >
                      <FaInstagram size={18} />
                    </a>

                    <a
                      href="https://snapchat.com/t/ydRtJvDs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 text-white transition hover:bg-yellow-400 hover:text-slate-950"
                    >
                      <FaSnapchat size={18} />
                    </a>
                  </div>

                  <img
                    src="img/logo-o-phone-backgroundpng.png"
                    alt="O'Phone"
                    className="mt-8 h-10 w-auto opacity-90"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-white/10 px-8 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12">
            <p>© 2026 O'Phone</p>

            <div className="flex flex-wrap gap-4">
              <Link to="/legal" className="transition hover:text-white">
                Mentions légales
              </Link>

              <Link to="/privacy" className="transition hover:text-white">
                Confidentialité
              </Link>

              <Link to="/terms" className="transition hover:text-white">
                CGV
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
