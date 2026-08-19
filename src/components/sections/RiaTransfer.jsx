import { motion } from "framer-motion";

export default function RiaTransfer() {
  return (
    <section className="bg-[#f8f8f8] py-14">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[34px] bg-white shadow-[0_25px_70px_rgba(0,0,0,.05)]"
        >
          <div className="grid lg:grid-cols-[380px_1fr]">
            <div className="relative overflow-hidden bg-[#FFD400]">
              <div className="absolute -left-16 top-10 h-56 w-56 rounded-full border-[30px] border-white/20" />
              <div className="absolute -right-12 bottom-8 h-36 w-36 rounded-full bg-black/10" />

              <div className="relative flex h-full min-h-[280px] items-center justify-center p-8">
                <div className="rotate-[-8deg] rounded-[24px] bg-white p-5 shadow-2xl">
                  <img
                    src="https://cdn.trustpilot.net/consumersite-businessunitimages/54ea25eb0000ff00057d978c/profile-description/7e0b6190-ae42-41f1-a36d-647c126859b3_Ria-Logo_TrustPilot_S.png"
                    alt="Ria"
                    className="w-36 object-contain"
                  />
                </div>

                <div className="absolute bottom-8 right-8 rounded-2xl bg-slate-950 px-5 py-4 text-white">
                  <p className="text-3xl font-black">190+</p>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-white/60">
                    Pays
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-10">
              <span className="inline-flex w-fit border-b-2 border-yellow-400 pb-2 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
                RIA MONEY TRANSFER
              </span>

              <h2 className="mt-6 max-w-xl text-3xl font-black leading-tight tracking-[-0.05em] text-slate-900 sm:text-4xl">
                L'argent traverse
                <br />
                les frontières,
                <span className="block text-yellow-500">
                  pas les complications.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
                O'Phone est également partenaire Ria Money Transfer. Envoyez ou
                recevez votre argent rapidement, de manière fiable et sécurisée
                partout dans le monde.
              </p>

              <div className="mt-8">
                <p className="text-3xl font-black text-slate-900">500K+</p>
                <span className="text-xs text-slate-500">
                  Points de retrait
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
