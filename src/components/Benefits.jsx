import { Heart, Salad, Flame, Sparkles } from 'lucide-react'

export default function Benefits({ lang }) {
  const items = [
    { icon: Heart, titleEN: 'Heart health', titleDE: 'Herzgesundheit', textEN: 'High in monounsaturated fats and antioxidants.', textDE: 'Reich an einfach ungesättigten Fettsäuren und Antioxidantien.' },
    { icon: Salad, titleEN: 'Culinary versatility', titleDE: 'Kulinarische Vielseitigkeit', textEN: 'From dressings to finishing, elevate every dish.', textDE: 'Von Dressings bis Finish – veredelt jedes Gericht.' },
    { icon: Flame, titleEN: 'Anti‑inflammatory', titleDE: 'Entzündungshemmend', textEN: 'Polyphenols contribute to reduced inflammation.', textDE: 'Polyphenole tragen zur Reduktion von Entzündungen bei.' },
    { icon: Sparkles, titleEN: 'Natural beauty', titleDE: 'Natürliche Schönheit', textEN: 'Nourishes skin and hair as part of a daily ritual.', textDE: 'Pflegt Haut und Haar als Teil eines täglichen Rituals.' },
  ]

  return (
    <section id="benefits" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <it.icon className="text-[#e9d8a6]" />
              <h3 className="mt-3 font-medium text-white">{lang==='de'? it.titleDE : it.titleEN}</h3>
              <p className="mt-2 text-sm text-white/70">{lang==='de'? it.textDE : it.textEN}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
