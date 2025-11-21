export default function CTA({ lang }) {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-[#c8a96a]/30 bg-gradient-to-br from-[#e9d8a6]/10 to-transparent p-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                {lang==='de' ? 'Bereit für Carthago?' : 'Ready for Carthago?'}
              </h3>
              <p className="mt-3 text-white/70">
                {lang==='de' ? 'Für Vertrieb in Deutschland & der EU sowie private Bestellungen.' : 'For distribution in Germany & the EU, and private orders.'}
              </p>
            </div>
            <form className="grid grid-cols-1 gap-3">
              <input className="rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/40" placeholder={lang==='de' ? 'Ihr Name' : 'Your Name'} />
              <input className="rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/40" placeholder="Email" type="email" />
              <textarea className="rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/40" rows="3" placeholder={lang==='de' ? 'Nachricht' : 'Message'} />
              <button type="button" onClick={() => alert('Thank you! We will contact you shortly.')} className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#e9d8a6] to-[#c8a96a] text-black px-6 py-3 font-medium">
                {lang==='de' ? 'Anfrage senden' : 'Send Enquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
