import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const primaryBrands = [
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    description:
      "Les iPhone les plus recherchés, contrôlés et reconditionnés avec soin.",
    color: "#111827",
    bg: "bg-zinc-900",
  },
  {
    name: "Samsung",
    logo: "https://download.logo.wine/logo/Samsung_Electronics/Samsung_Electronics-Logo.wine.png",
    description:
      "Toute la gamme Galaxy avec des performances adaptées à tous les usages.",
    color: "#2563eb",
    bg: "bg-blue-600",
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    description:
      "Une expérience Android pure accompagnée d'un excellent appareil photo.",
    color: "#ef4444",
    bg: "bg-red-500",
  },
  {
    name: "Xiaomi",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg",
    description: "Des smartphones puissants au meilleur rapport qualité/prix.",
    color: "#f97316",
    bg: "bg-orange-500",
  },
  {
    name: "Huawei",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/04/Huawei_Standard_logo.svg",
    description: "Des appareils élégants reconnus pour leur autonomie.",
    color: "#dc2626",
    bg: "bg-rose-600",
  },
  {
    name: "OnePlus",
    logo: "https://static.vecteezy.com/system/resources/previews/068/764/245/non_2x/oneplus-logo-mobile-company-brand-official-icon-transparent-background-free-png.png",
    description:
      "Fluidité, rapidité et performances pour les utilisateurs exigeants.",
    color: "#b91c1c",
    bg: "bg-red-700",
  },
];

const extraBrands = [
  {
    name: "Oppo",
    logo: "https://download.logo.wine/logo/Oppo/Oppo-Logo.wine.png",
    description:
      "Des smartphones élégants offrant autonomie et recharge ultra rapide.",
    color: "#16a34a",
    bg: "bg-green-600",
  },
  {
    name: "Realme",
    logo: "https://www.pikpng.com/pngl/b/555-5552688_realme-is-a-shenzhen-based-chaines-smartphone-manufacturer.png",
    description: "Performance et excellent rapport qualité/prix.",
    color: "#eab308",
    bg: "bg-yellow-500",
  },
  {
    name: "Honor",
    logo: "https://vectorseek.com/wp-content/uploads/2023/10/Huawei-Honor-white-Logo-Vector.svg-.png",
    description: "Des appareils modernes alliant design et autonomie.",
    color: "#0f172a",
    bg: "bg-slate-900",
  },
  {
    name: "Wiko",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Wiko_logo.svg/1280px-Wiko_logo.svg.png",
    description: "Une expérience Wiko fluide et fiable.",
    color: "#2563eb",
    bg: "bg-blue-700",
  },
  {
    name: "Sony",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg",
    description: "Des smartphones réputés pour leur qualité multimédia.",
    color: "#18181b",
    bg: "bg-zinc-800",
  },
  {
    name: "Et bien d'autres",
    logo: "https://pngimg.com/uploads/plus/plus_PNG75.png",
    description:
      "Nous prenons également en charge de nombreuses autres marques.",
    color: "#ca8a04",
    bg: "bg-yellow-600",
  },
];

function BrandCard({ brand, index }) {
  return (
    <motion.div
      key={brand.name}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
      }}
      className="group overflow-hidden rounded-2xl bg-white shadow-lg"
    >
      <div className={`relative h-32 lg:h-36 ${brand.bg}`}>
        <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-white/15" />
        <div className="absolute right-6 top-6 h-20 w-20 rounded-full border border-white/10" />

        <motion.div
          whileHover={{
            rotate: -8,
            scale: 1.08,
          }}
          transition={{
            type: "spring",
            stiffness: 220,
          }}
          className="absolute bottom-[-20px] left-1/2 flex h-20 w-20 lg:h-24 lg:w-24 -translate-x-1/2 items-center justify-center rounded-2xl border border-white/20 bg-white shadow-xl"
        >
          <img
            src={brand.logo}
            alt={brand.name}
            className="h-9 lg:h-11 object-contain"
          />
        </motion.div>
      </div>

      <div className="px-3 sm:px-4 lg:px-5 pt-12 lg:pt-14 pb-5 text-center">
        <h3 className="text-sm sm:text-base lg:text-xl font-black text-slate-900">
          {brand.name}
        </h3>

        <p className="mt-2 text-[11px] sm:text-[12px] lg:text-[13px] leading-4 lg:leading-5 text-slate-500">
          {brand.description}
        </p>

        <div className="mt-4 lg:mt-5 flex justify-center gap-2">
          <span
            className="h-2 w-2 lg:h-2.5 lg:w-2.5 rounded-full"
            style={{ background: brand.color }}
          />

          <span className="h-2 w-2 lg:h-2.5 lg:w-2.5 rounded-full bg-yellow-400" />

          <span className="h-2 w-2 lg:h-2.5 lg:w-2.5 rounded-full bg-slate-200" />
        </div>

        <div className="mt-4 lg:mt-5 h-[2px] overflow-hidden rounded-full bg-slate-100">
          <motion.div
            initial={{ width: "20%" }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.35 }}
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, ${brand.color}, #facc15)`,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Brands() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-[#faf8f4] py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl text-center"
        >
          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[.3em] text-yellow-600">
            Marques prises en charge
          </span>

          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black leading-tight text-slate-900">
            Une expérience
            <br />
            inspirée des stores.
          </h2>
        </motion.div>

        <div className="mt-8 lg:mt-10 grid grid-cols-2 xl:grid-cols-3 gap-3">
          {primaryBrands.map((brand, index) => (
            <BrandCard key={brand.name} brand={brand} index={index} />
          ))}
        </div>

        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <div className="mt-3 grid grid-cols-2 xl:grid-cols-3 gap-3">
                {extraBrands.map((brand, index) => (
                  <BrandCard
                    key={brand.name}
                    brand={brand}
                    index={index + primaryBrands.length}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="group inline-flex items-center gap-3 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            {showMore ? "Voir moins" : "Voir plus"}

            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${
                showMore ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
