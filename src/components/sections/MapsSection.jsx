import { motion } from "framer-motion";
import { MapPin, Clock3, Phone } from "lucide-react";

export default function MapsSection() {
  return (
    <section className="relative overflow-hidden bg-[#faf8f4] py-16 lg:py-24">
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-yellow-100 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-100 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-yellow-600">
            Notre boutique
          </span>

          <h2 className="mt-4 text-4xl font-black text-slate-950 lg:text-5xl">
            Venez nous rencontrer
            <br />à Narbonne.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-500">
            Réparation, reprise ou achat d'un smartphone reconditionné. Notre
            équipe vous accueille directement en boutique.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[34px] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,.06)]"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-yellow-400">
              <MapPin className="h-7 w-7 text-slate-950" />
            </div>

            <h3 className="mt-8 text-3xl font-black text-slate-950">
              O'Phone Narbonne
            </h3>

            <p className="mt-4 leading-7 text-slate-500">
              62 Boulevard Frédéric Mistral
              <br />
              11100 Narbonne
            </p>

            <div className="my-8 h-px bg-slate-100" />

            <div className="space-y-5">
              <div className="flex items-center gap-4 rounded-2xl bg-[#faf8f4] p-4">
                <Clock3 className="h-5 w-5 text-yellow-600" />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[.2em] text-slate-400">
                    Horaires
                  </p>

                  <p className="mt-1 font-semibold text-slate-800">
                    Lun. - Sam. • 9h30 - 19h00
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-[#faf8f4] p-4">
                <Phone className="h-5 w-5 text-yellow-600" />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[.2em] text-slate-400">
                    Contact
                  </p>

                  <p className="mt-1 font-semibold text-slate-800">
                    Conseils & réparations
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-300 p-[1px]">
              <div className="rounded-2xl bg-white px-6 py-5">
                <p className="text-sm leading-7 text-slate-600">
                  Déposez votre téléphone directement en boutique. La plupart
                  des diagnostics sont réalisés immédiatement.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[34px] border border-white bg-white p-3 shadow-[0_20px_60px_rgba(15,23,42,.08)]"
          >
            <div className="overflow-hidden rounded-[26px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2908.996681086442!2d3.0021934113271747!3d43.188580482237285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b1ad0031b03f2f%3A0x313b7970718b9888!2zT-KAmFBIT05F!5e0!3m2!1sfr!2sfr!4v1784635977891!5m2!1sfr!2sfr"
                title="O'Phone Narbonne"
                className="h-[620px] w-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
