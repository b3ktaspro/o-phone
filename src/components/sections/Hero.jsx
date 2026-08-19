import { motion } from "framer-motion";
import { FaInstagram, FaSnapchat } from "react-icons/fa6";
import {
  ArrowUpRight,
  ShieldCheck,
  Clock3,
  Smartphone,
  CheckCircle2,
} from "lucide-react";

const features = [
  "Écran cassé",
  "Batterie",
  "Connecteur",
  "Caméra",
  "Face ID",
  "Micro",
];

export default function Hero() {
  const today = new Date().getDay();
  const isOpen = today !== 0;

  return (
    <section className="relative isolate overflow-hidden bg-[#faf8f4] pt-24 lg:pt-32">
      <div className="absolute inset-0">
        <img
          src="https://bangucell.com.br/wp-content/uploads/2025/11/19_08_2021-16_36_19-1.png"
          alt=""
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#faf8f4] via-[#faf8f4]/92 to-[#faf8f4]/20" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f4] via-transparent to-transparent" />
      </div>

      <div className="absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-yellow-300/20 blur-[140px]" />
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-slate-900/10 blur-[160px]" />

      <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-10 px-5 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300/60 bg-white/70 px-3 py-1.5 backdrop-blur-xl">
            <CheckCircle2 size={15} className="text-yellow-500" />

            <span className="text-[11px] font-semibold text-slate-700">
              Réparation de smartphones à Narbonne
            </span>
          </div>

          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-5xl xl:text-6xl">
            Votre téléphone mérite une
            <span className="block text-yellow-500">seconde vie.</span>
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-7 text-slate-900 lg:text-base lg:leading-8 font-bold">
            O'Phone Narbonne répare smartphones, tablettes et appareils mobiles
            avec un diagnostic rapide, un service de proximité et des pièces de
            qualité.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:0967051336"
              className="group inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:scale-105"
            >
              Contacter
              <ArrowUpRight
                size={17}
                className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            <a
              href="https://www.instagram.com/ophone.11?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-900 backdrop-blur-xl transition hover:scale-105 hover:border-yellow-400 hover:bg-yellow-400"
            >
              <FaInstagram size={22} />
            </a>

            <a
              href="https://snapchat.com/t/ydRtJvDs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-900 backdrop-blur-xl transition hover:scale-105 hover:border-yellow-400 hover:bg-yellow-400"
            >
              <FaSnapchat size={22} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {features.map((item) => (
              <div
                key={item}
                className="rounded-full border border-slate-200 bg-white/70 px-3 py-2 text-xs font-medium text-slate-700 backdrop-blur-xl"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative hidden lg:flex items-center justify-center"
        >
          <div className="relative w-full max-w-[500px]">
            <div className="absolute -left-8 top-10 rounded-3xl border border-slate-200 bg-white/95 p-4 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400">
                  <Smartphone size={24} className="text-slate-950" />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-yellow-500">
                    Réparation Express
                  </p>

                  <h3 className="mt-1 text-base font-black text-slate-950">
                    Diagnostic rapide
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    Sans rendez-vous
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[34px] border border-white/70 bg-white p-3 shadow-[0_35px_80px_rgba(15,23,42,0.18)]">
              <img
                src="https://bangucell.com.br/wp-content/uploads/2025/11/19_08_2021-16_36_19-1.png"
                alt="O'Phone Narbonne"
                className="h-[620px] w-full rounded-[26px] object-cover"
              />
            </div>
            <div className="absolute -right-6 top-36 rounded-[28px] border border-slate-200 bg-white/95 p-5 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400">
                  <Clock3 size={22} className="text-slate-950" />
                </div>

                <div>
                  <h3 className="text-base font-black text-slate-950">
                    {isOpen
                      ? "Boutique ouverte aujourd'hui"
                      : "Boutique fermée aujourd'hui"}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {isOpen ? "Lundi au Samedi" : "Ouverture lundi"}
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute right-3 bottom-10 rounded-[28px] border border-slate-200 bg-slate-950 p-5 text-white shadow-2xl">
              <div className="flex items-center gap-3">
                <ShieldCheck size={26} className="text-yellow-400" />

                <div>
                  <h3 className="text-lg font-bold">Pièces de qualité</h3>

                  <p className="mt-1 text-xs text-slate-300">
                    Réparation fiable & garantie
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-20 bottom-40 h-52 w-52 rounded-full bg-yellow-300/30 blur-[110px]" />
            <div className="absolute -left-12 top-1/2 h-36 w-36 rounded-full bg-slate-900/10 blur-[100px]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
