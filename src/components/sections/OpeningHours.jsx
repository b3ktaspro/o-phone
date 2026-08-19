import { motion } from "framer-motion";
import { Clock3 } from "lucide-react";

const schedule = [
  { day: "Lundi", hours: "10:00 - 20:00" },
  { day: "Mardi", hours: "10:00 - 20:00" },
  { day: "Mercredi", hours: "10:00 - 20:00" },
  { day: "Jeudi", hours: "10:00 - 20:00" },
  {
    day: "Vendredi",
    hours: ["10:00 - 12:30", "14:00 - 20:00"],
  },
  { day: "Samedi", hours: "10:00 - 17:00" },
  { day: "Dimanche", hours: "Fermé" },
];

export default function OpeningHours() {
  const today = new Date().getDay();
  const isOpen = today !== 0;

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[36px] border border-slate-200 bg-white"
        >
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-yellow-400">
                <Clock3 size={30} className="text-slate-950" />
              </div>

              <span className="mt-8 block text-[10px] font-bold uppercase tracking-[0.35em] text-slate-400">
                Horaires
              </span>

              <h2 className="mt-3 text-4xl font-black leading-none text-slate-950">
                Cette semaine
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">
                Nos horaires sont mis à jour pour vous permettre de préparer
                votre passage en boutique.
              </p>

              <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {schedule.map((item) => (
                  <motion.div
                    key={item.day}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-2xl bg-slate-100 p-4"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                      {item.day.slice(0, 3)}
                    </p>

                    <div
                      className={`mt-3 text-sm font-bold leading-6 ${
                        item.hours === "Fermé"
                          ? "text-red-500"
                          : "text-slate-900"
                      }`}
                    >
                      {Array.isArray(item.hours)
                        ? item.hours.map((hour) => <div key={hour}>{hour}</div>)
                        : item.hours}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center bg-slate-950 p-8 sm:p-10 lg:p-12">
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-yellow-400">
                Statut
              </span>

              <h3 className="mt-3 text-3xl font-black text-white">
                {isOpen ? "Ouvert aujourd'hui" : "Fermé aujourd'hui"}
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                {isOpen
                  ? "Notre équipe est disponible pour vous accueillir durant les horaires d'ouverture."
                  : "Nous vous retrouverons dès la prochaine ouverture de la boutique."}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
