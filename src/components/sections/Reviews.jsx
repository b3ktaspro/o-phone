import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaStar } from "react-icons/fa";

const STORE_IMAGE =
  "https://i.pinimg.com/1200x/e5/30/ff/e530ff7b3b72a6a8c173de374ae02a12.jpg";

const reviews = [
  {
    name: "Dominique Perrot",
    text: "Mon amie a été ravie de l'accueil et de l'efficacité du vendeur pour nettoyer son téléphone Samsung qui....",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjULWYDLadE-pyNZSgJxEjPWuhcZbut4H_ejq8nqs0hxy9A8qeFOYQ=w72-h72-p-rp-mo-ba12-br100",
  },
  {
    name: "Hamony Yuliynov",
    text: "Super magasin très gentil très à l'écoute. Pas mal de choix que ce soit côté bazar ou électronique à proximité de la gare.",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocJ74LTX0ocT10b-6E284haY81e7QVD_423ReNAre7rbItu6=w72-h72-p-rp-mo-br100",
  },
  {
    name: "Nana",
    text: "Merci pour le professionnalisme et l’honnêteté du gérant, produits de qualité et magasin de confiance.",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjUQlghysfgYr3VGWWrGXBvmyJLkGXHni2Et4LW3dHr2w9-agmI=w72-h72-p-rp-mo-ba12-br100",
  },
  {
    name: "Hanaaa Bk",
    text: "Très bon magasin situé à Narbonne. Accueil chaleureux, service rapide et professionnel.",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjVpCX6wn-7LIGBMYpYTuu7or4hM8RZNW04v9goEbuhxNidV3CU=w72-h72-p-rp-mo-br100",
  },
  {
    name: "Jacques Debihi",
    text: "Les meilleurs sur Narbonne. Dépannage rapide de mon iPhone avec un accueil irréprochable.",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocKfcws6Q5bqC2IX_gwxILcoeHhzJlSONG9L-Mg_BeSxdcAHFw=w72-h72-p-rp-mo-br100",
  },
  {
    name: "Lisa Melo",
    text: "Travail rapide, efficace et très professionnel. Je recommande vivement.",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocLjIDidHOOX0-ygEBfPxd8EoyTOVSi6z3XAyfN6hqFFkVE8GQ=w72-h72-p-rp-mo-br100",
  },
];

const duplicated = [...reviews, ...reviews];

function Card({ review }) {
  return (
    <article className="w-[300px] shrink-0 rounded-[34px] border border-neutral-200 bg-white/90 p-3 backdrop-blur-xl">
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={review.avatar}
              alt=""
              className="h-11 w-11 rounded-full"
            />

            <div>
              <h3 className="text-[15px] font-semibold tracking-[-0.03em] text-neutral-900">
                {review.name}
              </h3>

              <div className="mt-1 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={9} className="text-[#FABB05]" />
                ))}
              </div>
            </div>
          </div>

          <img
            src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
            alt=""
            className="h-5 w-5"
          />
        </div>

        <div className="mt-6 rounded-[22px] bg-neutral-50 p-5">
          <svg
            width="26"
            height="20"
            viewBox="0 0 26 20"
            fill="none"
            className="mb-4 text-neutral-300"
          >
            <path
              d="M11 0H3L0 9V20H11V9H5L7 0ZM26 0H18L15 9V20H26V9H20L22 0Z"
              fill="currentColor"
            />
          </svg>

          <p className="line-clamp-5 text-[14px] leading-7 text-neutral-600">
            {review.text}
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />

            <span className="text-[11px] text-neutral-500">Avis Google</span>
          </div>

          <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-neutral-400">
            GOOGLE
          </span>
        </div>
      </div>
    </article>
  );
}

export default function Reviews() {
  const slider = useRef(null);

  useEffect(() => {
    let x = 0;
    let last = performance.now();
    let raf;

    const animate = (time) => {
      const delta = (time - last) / 16.67;
      last = time;

      x += delta * 0.55;

      if (slider.current) {
        const max = slider.current.scrollWidth / 2;

        if (x >= max) x = 0;

        slider.current.style.transform = `translate3d(-${x}px,0,0)`;
      }

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[#F8F8F6] py-24"
    >
      <img
        src={STORE_IMAGE}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-[0.02]"
      />

      <div className="absolute inset-0 bg-white/92" />

      <div className="relative mx-auto mb-16 flex max-w-7xl flex-col gap-8 px-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.45em] text-neutral-400">
            GOOGLE REVIEWS
          </span>

          <h2 className="mt-4 text-4xl font-black leading-[0.9] tracking-[-0.08em] text-neutral-900 sm:text-6xl">
            Des expériences.
            <br />
            Pas des promesses.
          </h2>
        </div>

        <a
          href="https://maps.app.goo.gl/txDDGHWiYkohfTE5A"
          target="_blank"
          className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white"
        >
          Donner mon avis
          <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#F8F8F6] to-transparent" />
        <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#F8F8F6] to-transparent" />

        <div ref={slider} className="flex gap-5 px-5 will-change-transform">
          {duplicated.map((review, index) => (
            <Card key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
