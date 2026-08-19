import { motion } from "framer-motion";
import {
  ShieldCheck,
  Database,
  UserCheck,
  Archive,
  Share2,
  Lock,
  Scale,
} from "lucide-react";

const sections = [
  {
    icon: Database,
    number: "01",
    title: "Collecte des données",
    content: (
      <p className="text-sm leading-7 text-slate-600">
        Lorsque vous contactez O'Phone via le site, certaines données
        personnelles peuvent être collectées, notamment votre nom, votre numéro
        de téléphone ou toute autre information que vous choisissez de nous
        transmettre.
      </p>
    ),
  },
  {
    icon: UserCheck,
    number: "02",
    title: "Utilisation des données",
    content: (
      <p className="text-sm leading-7 text-slate-600">
        Les informations recueillies sont utilisées uniquement afin de répondre
        à vos demandes, assurer le suivi de votre réparation, améliorer nos
        services et communiquer avec vous lorsque cela est nécessaire.
      </p>
    ),
  },
  {
    icon: Archive,
    number: "03",
    title: "Conservation des données",
    content: (
      <p className="text-sm leading-7 text-slate-600">
        Les données personnelles sont conservées uniquement pendant la durée
        nécessaire au traitement de votre demande ou conformément aux
        obligations légales applicables.
      </p>
    ),
  },
  {
    icon: Share2,
    number: "04",
    title: "Partage des informations",
    content: (
      <p className="text-sm leading-7 text-slate-600">
        O'Phone ne vend ni ne cède vos données personnelles à des tiers. Elles
        peuvent uniquement être communiquées lorsqu'un prestataire intervient
        dans le cadre de l'exploitation du site ou lorsque la loi l'impose.
      </p>
    ),
  },
  {
    icon: Lock,
    number: "05",
    title: "Sécurité",
    content: (
      <p className="text-sm leading-7 text-slate-600">
        Des mesures techniques et organisationnelles sont mises en œuvre afin de
        protéger vos données contre tout accès non autorisé, perte, modification
        ou divulgation.
      </p>
    ),
  },
  {
    icon: Scale,
    number: "06",
    title: "Vos droits",
    content: (
      <p className="text-sm leading-7 text-slate-600">
        Conformément au RGPD, vous disposez d'un droit d'accès, de
        rectification, d'effacement, de limitation, d'opposition et de
        portabilité de vos données personnelles.
      </p>
    ),
  },
];

export default function Privacy() {
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
            <ShieldCheck className="h-9 w-9 text-slate-950" />
          </div>

          <span className="mt-8 block text-[11px] font-bold uppercase tracking-[.35em] text-yellow-600">
            Protection des données
          </span>

          <h1 className="mt-5 text-5xl font-black text-slate-950 lg:text-6xl">
            Politique de confidentialité
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-500">
            La protection de vos données personnelles est une priorité. Cette
            politique explique quelles informations peuvent être collectées,
            leur utilisation ainsi que les droits dont vous disposez.
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
            className="group relative overflow-hidden rounded-[34px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,.06)] transition-all duration-300 hover:border-yellow-300 lg:col-span-2"
          >
            <div className="absolute right-8 top-8 text-6xl font-black text-slate-100 transition duration-300 group-hover:text-yellow-100">
              07
            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-yellow-400">
              <ShieldCheck className="h-7 w-7 text-slate-950" />
            </div>

            <h2 className="mt-7 text-2xl font-black text-slate-950">Contact</h2>

            <p className="mt-6 max-w-4xl text-sm leading-7 text-slate-600">
              Pour toute question concernant cette politique de confidentialité
              ou pour exercer vos droits relatifs à vos données personnelles,
              vous pouvez contacter O'Phone par téléphone, par e-mail ou
              directement en boutique. Nous nous engageons à traiter votre
              demande dans les meilleurs délais, conformément à la
              réglementation en vigueur.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
