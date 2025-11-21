import { motion } from 'framer-motion'

export default function Hero({ lang }) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-20%] h-[60vh] w-[60vw] -translate-x-1/2 rounded-full gold-gradient opacity-20 aurora" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-semibold tracking-tight text-white"
            >
              Carthago
              <span className="block gold-text">
                Extra Virgin Olive Oil
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-lg text-white/80 max-w-xl"
            >
              {lang === 'de' ? (
                'Kaltgepresstes, extra natives Olivenöl aus Tunesien — ein Ausdruck mediterraner Eleganz und ursprünglicher Qualität.'
              ) : (
                'Cold‑pressed extra virgin olive oil from Tunisia — an expression of Mediterranean elegance and pure quality.'
              )}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex items-center gap-3"
            >
              <a href="#shop" className="inline-flex items-center rounded-full bg-gradient-to-br from-[#e9d8a6] to-[#c8a96a] text-black px-6 py-3 font-medium">
                {lang === 'de' ? 'Jetzt bestellen' : 'Order Now'}
              </a>
              <a href="#heritage" className="inline-flex items-center rounded-full border border-white/20 text-white px-6 py-3 font-medium hover:bg-white/5">
                {lang === 'de' ? 'Unsere Geschichte' : 'Our Story'}
              </a>
            </motion.div>
            <div className="mt-10 grid grid-cols-3 gap-6 text-white/70">
              {[['0.2%','Acidity'],['500+','Sun hours'],['100%','Cold-pressed']].map(([k, v], i) => (
                <div key={i} className="">
                  <div className="text-2xl font-semibold text-white">{k}</div>
                  <div className="text-xs uppercase tracking-widest">{lang==='de' ? (v==='Acidity'?'Säuregrad': v==='Sun hours'?'Sonnenstunden':'Kaltgepresst') : v}</div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="relative"
          >
            <div className="relative mx-auto h-[520px] w-[320px] rounded-[2rem] bg-gradient-to-b from-zinc-900 to-zinc-800/80 border border-white/10 p-4 float">
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-[#e9d8a6]/20 to-transparent blur-xl" />
              <img src="https://images.unsplash.com/photo-1603048297172-c92544798d5a?q=80&w=800&auto=format&fit=crop" alt="Carthago bottle" className="relative h-full w-full object-cover rounded-[1.6rem]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
