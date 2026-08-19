import { motion } from "framer-motion";
import { Check, Clock3, MapPin, Navigation, Phone } from "lucide-react";

export default function Location() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#faf8f4] py-20 lg:py-28"
    >
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-yellow-100 blur-[170px]" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-100 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-[11px] font-bold uppercase tracking-[.35em] text-yellow-600">
            Notre boutique
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-950 lg:text-6xl">
            Venez rencontrer
            <br />
            l'équipe O'Phone.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-500">
            Réparation, reprise ou achat d'un smartphone reconditionné, notre
            équipe vous accueille directement en magasin.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,.06)]"
          >
            <span className="text-[11px] font-bold uppercase tracking-[.3em] text-yellow-600">
              Pourquoi choisir O'Phone
            </span>

            <h3 className="mt-4 text-3xl font-black text-slate-950">
              L'engagement O'Phone.
            </h3>

            <p className="mt-5 leading-7 text-slate-500">
              Nous mettons l'accent sur la qualité des appareils et la
              satisfaction de nos clients afin de vous proposer une expérience
              simple, fiable et sans compromis.
            </p>

            <div className="mt-8 space-y-5">
              {[
                "Smartphones rigoureusement contrôlés",
                "Garantie sur tous les appareils",
                "Réparation rapide en boutique",
                "Reprise de votre ancien téléphone",
                "Conseils personnalisés",
                "Accompagnement avant et après votre achat",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-400">
                    <Check className="h-5 w-5 text-slate-900" />
                  </div>

                  <p className="font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {[
              {
                icon: MapPin,
                title: "Adresse",
                text: (
                  <>
                    62 Boulevard Frédéric Mistral
                    <br />
                    11100 Narbonne
                  </>
                ),
              },
              {
                icon: Clock3,
                title: "Horaires",
                text: (
                  <>
                    Lundi au Samedi
                    <br />
                    09h30 — 19h00
                  </>
                ),
              },
              {
                icon: Phone,
                title: "Téléphone",
                text: (
                  <>
                    09 67 05 13 36
                    <br />
                    Cliquez pour appeler.
                  </>
                ),
                href: "tel:0967051336",
              },
            ].map((item) => {
              const Card = item.href ? "a" : "div";

              return (
                <Card
                  key={item.title}
                  href={item.href}
                  className="group rounded-[32px] bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(15,23,42,.10)]"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[22px] bg-yellow-400 transition-transform duration-300 group-hover:rotate-6">
                      <item.icon className="h-7 w-7 text-slate-950" />
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-slate-950">
                        {item.title}
                      </h3>

                      <p className="mt-3 leading-7 text-slate-500">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}

            <a
              href="https://maps.google.com/?q=62+Boulevard+Frédéric+Mistral+11100+Narbonne"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-2 overflow-hidden rounded-[32px] bg-slate-950 p-[1px]"
            >
              <div className="flex items-center justify-between rounded-[31px] bg-slate-950 px-7 py-6 transition duration-300 group-hover:bg-slate-900">
                <div>
                  <p className="text-[11px] uppercase tracking-[.3em] text-yellow-400">
                    Navigation
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-white">
                    Ouvrir dans Google Maps
                  </h3>
                </div>

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 transition-transform duration-300 group-hover:rotate-45">
                  <Navigation className="h-7 w-7 text-slate-950" />
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
