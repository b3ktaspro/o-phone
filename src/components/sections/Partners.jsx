import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Partners() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-slate-400">
            Nos partenaires
          </span>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-16">
            <a
              href="https://www.free.fr/boutiques/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/52/Logo_de_Free.png"
                alt="Free"
                className="h-20 w-auto object-contain transition duration-300 group-hover:scale-105"
              />

              <div className="mt-3 flex items-center gap-1 text-xs font-medium text-slate-500 transition group-hover:text-slate-900">
                Partenaire Free
                <ArrowUpRight
                  size={14}
                  className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </div>
            </a>

            <div className="hidden h-12 w-px bg-slate-200 md:block" />

            <a
              href="https://www.instagram.com/orientdoree?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
            >
              <img
                src="img/orient-doree.jpg"
                alt="Orient Dorée"
                className="h-20 w-auto object-contain transition duration-300 group-hover:scale-105 rounded-full"
              />

              <div className="mt-3 flex items-center gap-1 text-xs font-medium text-slate-500 transition group-hover:text-slate-900">
                Partenaire • L'Art du Henné
                <ArrowUpRight
                  size={14}
                  className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
