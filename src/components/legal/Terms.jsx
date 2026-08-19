import { motion } from "framer-motion";
import {
  FileText,
  ScrollText,
  Globe,
  Wrench,
  AlertTriangle,
  Copyright,
  ExternalLink,
  RefreshCw,
  Gavel,
} from "lucide-react";

const sections = [
  {
    icon: ScrollText,
    number: "01",
    title: "Objet",
    content: (
      <p className="text-sm leading-7 text-slate-600">
        Les présentes conditions générales d'utilisation définissent les
        modalités d'accès et d'utilisation du site internet d'O'Phone ainsi que
        les droits et obligations de chaque utilisateur.
      </p>
    ),
  },
  {
    icon: Globe,
    number: "02",
    title: "Accès au site",
    content: (
      <p className="text-sm leading-7 text-slate-600">
        Le site est accessible gratuitement à toute personne disposant d'une
        connexion Internet. Des interruptions temporaires peuvent intervenir
        pour des opérations de maintenance ou de mise à jour.
      </p>
    ),
  },
  {
    icon: Wrench,
    number: "03",
    title: "Services proposés",
    content: (
      <p className="text-sm leading-7 text-slate-600">
        Le site présente les services de réparation, de reprise et de vente de
        smartphones reconditionnés proposés par O'Phone. Les informations sont
        communiquées à titre indicatif et peuvent évoluer à tout moment.
      </p>
    ),
  },
  {
    icon: AlertTriangle,
    number: "04",
    title: "Responsabilité",
    content: (
      <p className="text-sm leading-7 text-slate-600">
        O'Phone met tout en œuvre pour garantir la fiabilité des informations
        publiées. Toutefois, aucune garantie ne peut être apportée quant à
        l'absence d'erreurs ou d'omissions. L'utilisateur demeure responsable de
        l'usage qu'il fait des informations présentes sur le site.
      </p>
    ),
  },
  {
    icon: Copyright,
    number: "05",
    title: "Propriété intellectuelle",
    content: (
      <p className="text-sm leading-7 text-slate-600">
        Les textes, photographies, logos, éléments graphiques et plus
        généralement l'ensemble des contenus du site sont protégés par le Code
        de la propriété intellectuelle. Toute reproduction totale ou partielle
        est interdite sans autorisation préalable.
      </p>
    ),
  },
  {
    icon: ExternalLink,
    number: "06",
    title: "Liens externes",
    content: (
      <p className="text-sm leading-7 text-slate-600">
        Le site peut contenir des liens vers des sites tiers. O'Phone ne peut
        être tenu responsable du contenu, des politiques ou du fonctionnement de
        ces services externes.
      </p>
    ),
  },
];

export default function Terms() {
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
            <FileText className="h-9 w-9 text-slate-950" />
          </div>

          <span className="mt-8 block text-[11px] font-bold uppercase tracking-[.35em] text-yellow-600">
            Informations légales
          </span>

          <h1 className="mt-5 text-5xl font-black text-slate-950 lg:text-6xl">
            Conditions générales
            <br />
            d'utilisation
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-500">
            En accédant au site internet d'O'Phone, vous acceptez les présentes
            conditions générales d'utilisation. Nous vous invitons à les lire
            attentivement.
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

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.5 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-[34px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,.06)] transition-all duration-300 hover:border-yellow-300"
          >
            <div className="absolute right-8 top-8 text-6xl font-black text-slate-100 transition duration-300 group-hover:text-yellow-100">
              07
            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-yellow-400">
              <RefreshCw className="h-7 w-7 text-slate-950" />
            </div>

            <h2 className="mt-7 text-2xl font-black text-slate-950">
              Modification des conditions
            </h2>

            <p className="mt-6 text-sm leading-7 text-slate-600">
              O'Phone se réserve le droit de modifier les présentes conditions
              générales d'utilisation à tout moment. Les nouvelles dispositions
              entrent en vigueur dès leur publication sur le site.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.58 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-[34px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,.06)] transition-all duration-300 hover:border-yellow-300"
          >
            <div className="absolute right-8 top-8 text-6xl font-black text-slate-100 transition duration-300 group-hover:text-yellow-100">
              08
            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-yellow-400">
              <Gavel className="h-7 w-7 text-slate-950" />
            </div>

            <h2 className="mt-7 text-2xl font-black text-slate-950">
              Droit applicable
            </h2>

            <p className="mt-6 text-sm leading-7 text-slate-600">
              Les présentes conditions générales d'utilisation sont régies par
              le droit français. En cas de litige, les juridictions françaises
              territorialement compétentes seront seules habilitées à connaître
              du différend.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
