import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

const plans = [
  {
    operator: "Free",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/52/Logo_de_Free.png",
    title: "Forfaits Free Prépayés",
    offers: [
      {
        price: "4,99 €",
        description: "Appels & SMS illimités",
      },
      {
        price: "9,99 €",
        description: "Appels & SMS illimités • 200 Go",
      },
      {
        price: "14,99 €",
        description: "Appels & SMS illimités • 300 Go",
      },
      {
        price: "19,99 €",
        description: "Appels & SMS illimités • 350 Go",
      },
    ],
  },
  {
    operator: "Syma Mobile",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Syma_Mobile_logo.svg/3840px-Syma_Mobile_logo.svg.png",
    title: "Forfaits Syma Mobile",
    offers: [
      {
        price: "4,99 €",
        description: "Appels & SMS illimités",
      },
      {
        price: "9,99 €",
        description: "Appels & SMS illimités • 200 Go",
      },
      {
        price: "14,99 €",
        description: "Appels & SMS illimités • 300 Go",
      },
      {
        price: "19,99 €",
        description: "Appels & SMS illimités • 350 Go",
      },
    ],
  },

  /*
  {
    operator: "Orange",
    logo: "https://logos-marques.com/wp-content/uploads/2021/02/Orange-SA-logo.png",
    title: "Forfaits Orange",
    offers: [
      {
        price: "À venir",
        description: "Renseignez-vous directement en boutique.",
      },
    ],
  },
  */

  /*
  {
    operator: "SFR",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c2/SFR_logo_2014.png",
    title: "Forfaits SFR",
    offers: [
      {
        price: "À venir",
        description: "Renseignez-vous directement en boutique.",
      },
    ],
  },
  */

  /*
  {
    operator: "Bouygues",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Bouygues_Telecom_%28alt_logo%29.svg/1280px-Bouygues_Telecom_%28alt_logo%29.svg.png",
    title: "Forfaits Bouygues Telecom",
    offers: [
      {
        price: "À venir",
        description: "Renseignez-vous directement en boutique.",
      },
    ],
  },
  */
];

export default function MobilePlans() {
  return (
    <section className="bg-[#faf8f4] py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-yellow-500">
              Forfaits mobiles
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 lg:text-6xl">
              Trouvez le forfait qui correspond à vos besoins.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-600">
            O'Phone vous accompagne dans le choix de votre forfait mobile avec
            plusieurs opérateurs directement en boutique.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.operator}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-[32px] border border-slate-200 bg-white"
            >
              <div className="flex items-center gap-5 border-b border-slate-200 bg-[#faf8f4] p-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-slate-200 bg-white p-4">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.3 }}
                    src={plan.logo}
                    alt={plan.operator}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <Smartphone size={16} className="text-yellow-500" />

                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
                      Mobile
                    </span>
                  </div>

                  <h3 className="mt-3 text-2xl font-black text-slate-950">
                    {plan.title}
                  </h3>
                </div>
              </div>

              <div className="divide-y divide-slate-200">
                {plan.offers.map((offer, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-6 p-6 transition hover:bg-[#faf8f4]"
                  >
                    <div>
                      <p className="text-xl font-black text-slate-950">
                        {offer.price}
                      </p>

                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {offer.description}
                      </p>
                    </div>

                    <span className="rounded-full bg-yellow-400 px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-slate-950">
                      Disponible
                    </span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
