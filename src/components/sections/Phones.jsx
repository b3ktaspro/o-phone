import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const phones = [
  {
    name: "Samsung Galaxy",
    image:
      "https://www.pngall.com/wp-content/uploads/13/Samsung-Galaxy-Transparent.png",
    price: "À partir de 89,99€",
    description:
      "Un smartphone Samsung accessible, fiable et idéal pour un usage quotidien.",
  },
  {
    name: "Nokia 105",
    image: "img/nokia105.png",
    price: "24,99€",
    description:
      "Téléphone simple et robuste, parfait pour les appels, les SMS et une excellente autonomie.",
  },
  {
    name: "Samsung Galaxy A13",
    image:
      "https://media.e.leclerc/8806094387216_1?fit=fit&op_sharpen=1&resmode=bilin&fmt=pjpeg&qlt=85&trim=0.5&wid=450&hei=450",
    price: "À partir de 129€",
    description:
      "Un smartphone fiable pour les appels, les réseaux sociaux et le multimédia.",
  },
  {
    name: "Samsung Galaxy A33 5G",
    image:
      "https://media.e.leclerc/8806094268133_6?fit=fit&op_sharpen=1&resmode=bilin&fmt=pjpeg&qlt=85&trim=0.5&wid=450&hei=450",
    price: "À partir de 129€",
    description:
      "Profitez de la 5G, d'un écran AMOLED et d'une excellente autonomie.",
  },
  {
    name: "Redmi A5",
    image:
      "https://www.kodmitra.com/wp-content/uploads/2025/04/xiaomi-redmi-a5-4gb-128gb-blue-eu-1.png",
    price: "À partir de 139€",
    description:
      "Un excellent choix pour un usage quotidien avec un très bon rapport qualité-prix.",
  },
  {
    name: "iPhone 11",
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11.jpg",
    price: "À partir de 199€",
    description:
      "L'iPhone idéal pour profiter de l'écosystème Apple à petit prix.",
  },
  {
    name: "iPhone 12",
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12.jpg",
    price: "À partir de 269€",
    description:
      "Compatible 5G avec écran OLED et excellentes performances au quotidien.",
  },
  {
    name: "iPhone 13",
    image: "https://freepngimg.com/thumb/iphone_13/89621-iphone-13.png",
    price: "À partir de 395€",
    description:
      "Puissant, fluide et doté d'une excellente autonomie pour tous les usages.",
  },
  {
    name: "iPhone 14",
    image: "https://pngimg.com/uploads/iphone_14/iphone_14_PNG21.png",
    price: "À partir de 459€",
    description:
      "Des performances de dernière génération avec un appareil photo performant.",
  },
  {
    name: "iPhone 15",
    image:
      "https://www.quelbonplan.fr/cdn/shop/files/667c1f9e34e27145b8e1531e.webp?v=1784859566",
    price: "À partir de 574€",
    description:
      "Le dernier iPhone avec USB-C, Dynamic Island et une expérience premium.",
  },
];

export default function Phones() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frameId;
    let offset = 0;
    const speed = 0.45;
    let lastTime = performance.now();

    const animate = (time) => {
      const delta = time - lastTime;
      lastTime = time;

      offset += speed * (delta / 16.67);

      const halfWidth = track.scrollWidth / 2;

      if (offset >= halfWidth) {
        offset -= halfWidth;
      }

      track.style.transform = `translate3d(-${offset}px,0,0)`;

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      track.style.transform = "";
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#faf8f4] py-24">
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-100 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-100 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="text-[11px] font-bold uppercase tracking-[.35em] text-yellow-600">
            Téléphones disponibles
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900 lg:text-5xl">
            Découvrez nos smartphones disponibles en boutique
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600">
            Découvrez une sélection de smartphones reconditionnés,
            rigoureusement testés et prêts à l'emploi.
          </p>
        </motion.div>

        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-[#faf8f4] to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-[#faf8f4] to-transparent md:w-40" />

        <div className="overflow-hidden py-6">
          <div ref={trackRef} className="flex gap-8 will-change-transform">
            {[...phones, ...phones].map((phone, index) => (
              <motion.article
                key={index}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
                className="group relative w-[265px] shrink-0"
              >
                <div className="absolute inset-x-4 bottom-0 h-10 rounded-full bg-black/10 blur-xl transition-all duration-500 group-hover:scale-110" />

                <div className="relative rounded-[36px] border border-white/60 bg-white/80 p-5 backdrop-blur-xl shadow-[0_15px_45px_rgba(15,23,42,.07)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(15,23,42,.12)]">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-lg font-black text-slate-900">
                      {phone.price}
                    </span>
                  </div>

                  <div className="relative mb-6 flex h-44 items-center justify-center overflow-hidden rounded-[28px] bg-gradient-to-br from-[#fffdf8] to-[#fff4cf]">
                    <div className="absolute h-28 w-28 rounded-full border border-yellow-300/40" />
                    <div className="absolute h-40 w-40 rounded-full border border-yellow-200/30" />

                    <motion.img
                      src={phone.image}
                      alt={phone.name}
                      whileHover={{
                        y: -8,
                        scale: 1.08,
                      }}
                      transition={{ duration: 0.35 }}
                      className="relative z-10 h-40 object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,.15)]"
                    />
                  </div>

                  <h3 className="text-xl font-black text-slate-900">
                    {phone.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {phone.description}
                  </p>

                  <div className="mt-6 h-[2px] w-10 rounded-full bg-yellow-400 transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
