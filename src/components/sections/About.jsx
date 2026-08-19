import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const items = [
    "Diagnostic précis avant toute intervention.",
    "Réparation de smartphones, tablettes et appareils électroniques.",
    "Pièces sélectionnées pour leur fiabilité.",
    "Accueil en boutique sans rendez-vous.",
  ];

  return (
    <section id="about" className="py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-5">
        <div className="rounded-[36px] border border-slate-200 bg-white p-5 sm:p-7 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <div className="overflow-hidden rounded-[28px]">
                <img
                  src="img/ext-ophone3.jpeg"
                  alt="O'Phone Narbonne"
                  className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[460px]"
                />
              </div>

              <div className="mt-5 rounded-[28px] border border-slate-200 p-5">
                <span className="text-[10px] font-black uppercase tracking-[0.35em] text-yellow-500">
                  O'PHONE
                </span>

                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <h3 className="text-3xl font-black leading-none text-slate-950">
                      Depuis
                      <br />
                      Narbonne
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-500">
                      Réparation rapide, propre et transparente.
                    </p>
                  </div>

                  <span className="text-6xl font-black tracking-[-0.08em] text-slate-100">
                    01
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-200" />

                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-yellow-500">
                  À PROPOS
                </span>
              </div>

              <h2 className="mt-8 max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950 sm:text-5xl lg:text-6xl">
                Chaque réparation
                <br />
                mérite la même
                <br />
                exigence.
              </h2>

              <div className="mt-10 grid gap-8 lg:grid-cols-2">
                <p className="text-[15px] leading-8 text-slate-600">
                  Situé à proximité de la gare de Narbonne, O'Phone accompagne
                  particuliers et professionnels pour la réparation de
                  smartphones, tablettes et appareils électroniques. Notre
                  équipe vous accueille directement en boutique avec un service
                  rapide, transparent et soigné afin de retrouver votre appareil
                  dans les meilleures conditions.
                </p>

                <p className="text-[15px] leading-8 text-slate-600">
                  Écran cassé, batterie usée, connecteur de charge défectueux,
                  problème de caméra ou de haut-parleur : chaque intervention
                  est réalisée avec soin grâce à des composants sélectionnés
                  pour leur fiabilité et un diagnostic précis avant toute
                  réparation.
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {items.map((item, index) => (
                  <motion.div
                    key={item}
                    whileHover={{ y: -5 }}
                    className="group rounded-[24px] border border-slate-200 p-5 transition-all duration-300 hover:border-slate-950"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400">
                        <CheckCircle2 size={18} className="text-slate-950" />
                      </div>

                      <span className="text-xs font-black text-slate-300">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="mt-6 text-sm font-semibold leading-7 text-slate-800">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
