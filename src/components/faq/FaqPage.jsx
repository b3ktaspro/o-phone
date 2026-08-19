import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Combien de temps dure une réparation ?",
    answer:
      "Le délai dépend du type de réparation, de la disponibilité des pièces et de l'activité en boutique. Lors de la prise en charge de votre appareil, nous vous communiquerons une estimation du temps nécessaire avant toute intervention.",
  },
  {
    question: "Faut-il prendre rendez-vous ?",
    answer:
      "Aucun rendez-vous n'est nécessaire. Vous pouvez venir directement en boutique pendant nos horaires d'ouverture, du lundi au samedi. Notre équipe vous accueille et réalise un diagnostic sur place.",
  },
  {
    question: "Réparez-vous toutes les marques ?",
    answer:
      "Nous intervenons sur Apple, Samsung, Xiaomi, Huawei, Oppo, Google Pixel, Honor, OnePlus et de nombreuses autres marques.",
  },
  {
    question: "Les pièces utilisées sont-elles de qualité ?",
    answer:
      "Nous sélectionnons des pièces de qualité afin de garantir des réparations fiables et durables pour votre appareil.",
  },
  {
    question: "Mes données seront-elles conservées ?",
    answer:
      "Vos données personnelles restent strictement confidentielles. Elles sont utilisées uniquement dans le cadre de la prise en charge et du suivi de votre réparation, conformément à la réglementation en vigueur. Aucune information n'est partagée avec des tiers sans votre accord.",
  },
  {
    question: "Que faire si mon téléphone ne s'allume plus ?",
    answer:
      "Apportez votre appareil en boutique. Nous réalisons un diagnostic afin d'identifier précisément l'origine de la panne avant toute réparation.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    rotate: -8,
    y: 80,
  },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Faq() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="bg-[#faf8f4] py-12 lg:py-16">
      <div className="mx-auto max-w-4xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-yellow-500">
            Questions fréquentes
          </span>

          <h2 className="mt-10 text-3xl font-black text-slate-950 lg:text-4xl">
            Une question ?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600">
            Retrouvez les réponses aux questions les plus fréquentes concernant
            nos réparations, nos délais et la prise en charge de vos appareils.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-3"
        >
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <motion.div
                key={faq.question}
                variants={card}
                whileHover={{
                  y: -6,
                  rotate: 0,
                  scale: 1.01,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className={`group relative overflow-hidden rounded-2xl border bg-white ${
                  isOpen ? "border-yellow-300 shadow-lg" : "border-slate-200"
                }`}
              >
                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.9 }}
                  className="absolute inset-y-0 w-20 -skew-x-12 bg-white/40 blur-xl"
                />

                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="relative flex w-full items-center justify-between px-5 py-5 text-left"
                >
                  <span className="pr-4 text-sm font-bold text-slate-950 sm:text-base">
                    {faq.question}
                  </span>

                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-yellow-400 text-slate-950"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="border-t border-slate-100 px-5 pb-5 pt-4">
                        <p className="text-sm leading-7 text-slate-600">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-yellow-400 transition-transform duration-300 group-hover:scale-x-100" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
