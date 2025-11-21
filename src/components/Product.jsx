export default function Product({ lang }) {
  return (
    <section id="product" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="relative mx-auto h-[460px] w-full max-w-sm rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900 to-zinc-800/80 p-4">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#e9d8a6]/20 to-transparent blur-xl" />
              <img src="https://images.unsplash.com/photo-1583336663277-620dc1996580?q=80&w=800&auto=format&fit=crop" alt="Carthago Premium Olive Oil" className="relative h-full w-full rounded-2xl object-cover" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">{lang==='de' ? 'Das Produkt' : 'The Product'}</h2>
            <p className="mt-4 text-white/70">
              {lang==='de' ? (
                'Ein harmonisches Profil mit grünen Noten von Mandeln und Artischocke. Mild-bittere Balance, samtiges Finish.'
              ) : (
                'A harmonious profile with green notes of almond and artichoke. Balanced gentle bitterness, velvety finish.'
              )}
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-4 text-sm text-white/80">
              <li>500 ml • Glass</li>
              <li>First cold press</li>
              <li>Polyphenols &gt; 350 mg/kg</li>
              <li>Acidity &lt; 0.2%</li>
            </ul>
            <div id="shop" className="mt-8 flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center rounded-full bg-gradient-to-br from-[#e9d8a6] to-[#c8a96a] text-black px-6 py-3 font-medium">
                {lang==='de' ? 'Großhandel anfragen' : 'Wholesale Enquiry'}
              </a>
              <a href="#contact" className="inline-flex items-center rounded-full border border-white/20 text-white px-6 py-3 font-medium hover:bg-white/5">
                {lang==='de' ? 'Privatkauf' : 'Private Purchase'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
