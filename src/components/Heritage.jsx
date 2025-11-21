import { Leaf } from 'lucide-react'

export default function Heritage({ lang }) {
  return (
    <section id="heritage" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              {lang === 'de' ? 'Nordafrikanisches Erbe, europäischer Anspruch' : 'North African heritage, European standards'}
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              {lang === 'de' ? (
                'Carthago entsteht in sonnenverwöhnten Olivenhainen nahe der Mittelmeerküste. Unsere Oliven werden von Hand gepflückt und innerhalb weniger Stunden kalt gepresst — für Frische und Geschmack ohne Kompromisse.'
              ) : (
                'Carthago is born in sun‑drenched groves near the Mediterranean coast. Hand‑picked olives are cold‑pressed within hours — preserving freshness and uncompromised flavor.'
              )}
            </p>
            <p className="text-white/70 leading-relaxed">
              {lang === 'de' ? (
                'Mit moderner Verarbeitung und strengen EU‑Standards verbinden wir Jahrtausende altes Wissen mit zeitgemäßer Perfektion.'
              ) : (
                'With modern processing and strict EU standards, we blend millennia‑old knowledge with contemporary perfection.'
              )}
            </p>
            <div className="mt-8 inline-flex items-center gap-2 text-[#e9d8a6]">
              <Leaf size={18} />
              <span className="uppercase tracking-widest text-xs">Tunisia • Mediterranean</span>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <img src="https://images.unsplash.com/photo-1695470393142-4c14422ffb9a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPbGl2ZSUyMGdyb3Zlc3xlbnwwfDB8fHwxNzYzNzMwMzEyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Olive groves" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -left-6 -bottom-6 hidden md:block rounded-2xl border border-[#c8a96a]/30 bg-black/50 backdrop-blur px-4 py-3 text-[#e9d8a6]">
              <span className="text-xs uppercase tracking-widest">Kaltgepresst • Extra Nativ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
