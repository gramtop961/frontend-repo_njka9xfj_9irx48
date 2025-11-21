import { BadgeCheck, Thermometer, Droplets, Shield } from 'lucide-react'

export default function Quality({ lang }) {
  const items = [
    { icon: BadgeCheck, titleEN: 'Extra Virgin, <0.2% acidity', titleDE: 'Extra Nativ, <0,2% Säure', descEN: 'First cold press from early harvest olives for maximum polyphenols.', descDE: 'Erste Kaltpressung aus Frühlese‑Oliven für maximale Polyphenole.' },
    { icon: Thermometer, titleEN: 'Cold‑pressed within hours', titleDE: 'Kalt gepresst innerhalb von Stunden', descEN: 'Processed at controlled low temperatures to protect aroma and nutrients.', descDE: 'Verarbeitung bei niedrigen Temperaturen für Aroma und Nährstoffe.' },
    { icon: Droplets, titleEN: 'Unfiltered richness', titleDE: 'Ungefilterte Fülle', descEN: 'Natural cloudiness with full‑bodied mouthfeel and depth.', descDE: 'Natürliche Trübung mit vollem Mundgefühl und Tiefe.' },
    { icon: Shield, titleEN: 'EU certified quality', titleDE: 'EU‑zertifizierte Qualität', descEN: 'Traceable from grove to bottle with rigorous lab testing.', descDE: 'Rückverfolgbar vom Hain bis zur Flasche – streng laborgeprüft.' },
  ]

  return (
    <section id="quality" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12">
          {lang === 'de' ? 'Qualität ohne Kompromisse' : 'Quality without compromise'}
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6">
              <it.icon className="text-[#e9d8a6]" />
              <h3 className="mt-4 text-lg font-medium text-white" dangerouslySetInnerHTML={{ __html: lang==='de'? it.titleDE : it.titleEN }} />
              <p className="mt-2 text-sm text-white/70">{lang==='de'? it.descDE : it.descEN}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
