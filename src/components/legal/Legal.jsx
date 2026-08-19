import { motion } from "framer-motion";
import {
  Scale,
  Building2,
  ShieldCheck,
  Server,
  Copyright,
  Gavel,
} from "lucide-react";

const sections = [
  {
    icon: Building2,
    title: "Éditeur du site",
    number: "01",
    content: (
      <div className="grid gap-4 text-sm leading-7 text-slate-600 sm:grid-cols-2">
        <p>
          <span className="font-semibold text-slate-900">Nom commercial</span>
          <br />
          O'Phone
        </p>

        <p>
          <span className="font-semibold text-slate-900">Raison sociale</span>
          <br />
          O'BAZAR
        </p>

        <p>
          <span className="font-semibold text-slate-900">SIREN</span>
          <br />
          987 619 335
        </p>

        <p>
          <span className="font-semibold text-slate-900">Téléphone</span>
          <br />
          09 67 05 13 36
        </p>

        <p className="sm:col-span-2">
          <span className="font-semibold text-slate-900">Adresse</span>
          <br />
          62 Boulevard Frédéric Mistral
          <br />
          11100 Narbonne
        </p>
      </div>
    ),
  },
  {
    icon: ShieldCheck,
    title: "Directeur de publication",
    number: "02",
    content: (
      <p className="text-sm leading-7 text-slate-600">
        Le directeur de la publication est <strong>O'Phone</strong>.
      </p>
    ),
  },
  {
    icon: Server,
    title: "Hébergement",
    number: "03",
    content: (
      <p className="text-sm leading-7 text-slate-600">
        Le site est hébergé par <strong>Netlify, Inc.</strong>
      </p>
    ),
  },
  {
    icon: Copyright,
    title: "Propriété intellectuelle",
    number: "04",
    content: (
      <p className="text-sm leading-7 text-slate-600">
        Les textes, images, logos, photographies, éléments graphiques et plus
        généralement l'ensemble du contenu présent sur ce site sont protégés par
        le Code de la propriété intellectuelle. Toute reproduction totale ou
        partielle est interdite sans autorisation préalable.
      </p>
    ),
  },
  {
    icon: Scale,
    title: "Responsabilité",
    number: "05",
    content: (
      <p className="text-sm leading-7 text-slate-600">
        O'Phone met tout en œuvre pour assurer l'exactitude des informations
        diffusées sur ce site, sans toutefois garantir leur exhaustivité ou leur
        disponibilité permanente. L'utilisation du site relève de la
        responsabilité de l'utilisateur.
      </p>
    ),
  },
  {
    icon: Gavel,
    title: "Droit applicable",
    number: "06",
    content: (
      <p className="text-sm leading-7 text-slate-600">
        Les présentes mentions légales sont soumises au droit français. Tout
        litige relève de la compétence des juridictions françaises.
      </p>
    ),
  },
];

export default function Legal() {
  return (
    <section className="relative overflow-hidden bg-[#faf8f4] py-32">
      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-yellow-100 blur-[170px]" />
      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-orange-100 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[28px] bg-yellow-400 shadow-lg">
            <Scale className="h-9 w-9 text-slate-950" />
          </div>

          <span className="mt-8 block text-[11px] font-bold uppercase tracking-[.35em] text-yellow-600">
            Informations légales
          </span>

          <h1 className="mt-5 text-5xl font-black text-slate-950 lg:text-6xl">
            Mentions légales
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-500">
            Retrouvez toutes les informations légales concernant O'Phone, son
            activité et l'exploitation du site internet.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-7 lg:grid-cols-2">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[34px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,.06)] transition-all duration-300 hover:border-yellow-300"
            >
              <div className="absolute right-8 top-8 text-6xl font-black text-slate-100 transition duration-300 group-hover:text-yellow-100">
                {section.number}
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-yellow-400">
                <section.icon className="h-7 w-7 text-slate-950" />
              </div>

              <h2 className="mt-7 text-2xl font-black text-slate-950">
                {section.title}
              </h2>

              <div className="mt-6">{section.content}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
