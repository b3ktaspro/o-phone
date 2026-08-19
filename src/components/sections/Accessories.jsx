import { motion } from "framer-motion";

const accessories = [
  {
    title: "Coques",
    description:
      "Large choix de coques pour protéger efficacement votre smartphone.",
    price: "À partir de 9,90 €",
    image:
      "https://png.pngtree.com/png-vector/20250327/ourmid/pngtree-luxury-soft-silicone-iphone-case-ultra-slim-shockproof-protective-cover-png-image_15880649.png",
  },
  {
    title: "Protections d'écran",
    description:
      "Verres trempés haute résistance pour une protection optimale.",
    price: "À partir de 7,90 €",
    image:
      "https://www.wave-concept.com/upload/image/film-en-verre-trempe-6d-pour-iphone-11-p-image-39336-grande.png",
  },
  {
    title: "Écouteurs",
    description: "Écouteurs filaires et Bluetooth pour tous vos appareils.",
    price: "À partir de 8,90 €",
    image:
      "https://png.pngtree.com/png-clipart/20230504/ourmid/pngtree-airpods-png-image_7081756.png",
  },
  {
    title: "Chargeurs",
    description: "Chargeurs rapides compatibles iPhone, Samsung et USB-C.",
    price: "À partir de 10,90 €",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/055/395/916/small/high-quality-white-usb-charger-outlet-perfect-for-modern-devices-free-png.png",
  },
];

export default function Accessories() {
  return (
    <section className="bg-[#f8f8f8] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <span className="text-[10px] font-black uppercase tracking-[0.35em] text-yellow-500">
              Accessoires
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 lg:text-6xl">
              Le détail qui fait la différence.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-slate-600">
            Une gamme d'accessoires sélectionnés pour protéger, recharger et
            prolonger la durée de vie de votre appareil.
          </p>
        </motion.div>

        <div className="mt-16 space-y-5">
          {accessories.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-[34px] bg-white"
            >
              <div className="grid items-center gap-8 p-6 md:grid-cols-[170px_1fr] lg:p-8">
                <div className="flex h-40 items-center justify-center rounded-[24px] bg-[#f5f5f5]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-28 object-contain transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div>
                  <span className="inline-flex rounded-full bg-yellow-100 px-3 py-1 text-[11px] font-black text-yellow-700">
                    {item.price}
                  </span>

                  <h3 className="mt-4 text-2xl font-black tracking-[-0.03em] text-slate-950 lg:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
