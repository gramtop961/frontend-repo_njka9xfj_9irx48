import { useState } from 'react'
import { ShoppingCart, Globe, Menu } from 'lucide-react'

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
]

export default function Navbar({ onLangChange, lang }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-full border border-[#c8a96a]/20 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
          <div className="flex items-center justify-between px-6 py-3">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#e9d8a6] to-[#c8a96a]" />
              <span className="font-semibold tracking-wide text-white text-lg">Carthago</span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#heritage" className="text-white/80 hover:text-white transition-colors">{lang === 'de' ? 'Herkunft' : 'Heritage'}</a>
              <a href="#quality" className="text-white/80 hover:text-white transition-colors">{lang === 'de' ? 'Qualität' : 'Quality'}</a>
              <a href="#benefits" className="text-white/80 hover:text-white transition-colors">{lang === 'de' ? 'Vorteile' : 'Benefits'}</a>
              <a href="#product" className="text-white/80 hover:text-white transition-colors">{lang === 'de' ? 'Produkt' : 'Product'}</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">{lang === 'de' ? 'Kontakt' : 'Contact'}</a>
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setOpen(!open)}
                className="md:hidden inline-flex items-center justify-center rounded-full h-10 w-10 border border-white/10 text-white/80 hover:text-white"
              >
                <Menu size={18} />
              </button>
              <div className="hidden md:flex items-center gap-2">
                <div className="flex items-center gap-1 bg-white/5 rounded-full p-1">
                  {LANGUAGES.map(l => (
                    <button
                      key={l.code}
                      onClick={() => onLangChange(l.code)}
                      className={`px-3 py-1 rounded-full text-xs tracking-wide ${lang === l.code ? 'bg-[#c8a96a] text-black' : 'text-white/80 hover:text-white'}`}
                    >
                      <span className="inline-flex items-center gap-1">
                        {l.code === 'de' && <Globe size={14} />}
                        {l.label}
                      </span>
                    </button>
                  ))}
                </div>
                <a href="#shop" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#e9d8a6] to-[#c8a96a] text-black px-4 py-2 font-medium">
                  <ShoppingCart size={16} /> {lang === 'de' ? 'Jetzt kaufen' : 'Shop Now'}
                </a>
              </div>
            </div>
          </div>

          {open && (
            <div className="md:hidden px-6 pb-4">
              <div className="flex flex-col gap-3">
                <a href="#heritage" className="text-white/80 hover:text-white transition-colors">{lang === 'de' ? 'Herkunft' : 'Heritage'}</a>
                <a href="#quality" className="text-white/80 hover:text-white transition-colors">{lang === 'de' ? 'Qualität' : 'Quality'}</a>
                <a href="#benefits" className="text-white/80 hover:text-white transition-colors">{lang === 'de' ? 'Vorteile' : 'Benefits'}</a>
                <a href="#product" className="text-white/80 hover:text-white transition-colors">{lang === 'de' ? 'Produkt' : 'Product'}</a>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">{lang === 'de' ? 'Kontakt' : 'Contact'}</a>
                <div className="flex items-center gap-2 pt-2">
                  {LANGUAGES.map(l => (
                    <button
                      key={l.code}
                      onClick={() => onLangChange(l.code)}
                      className={`px-3 py-1 rounded-full text-xs tracking-wide border ${lang === l.code ? 'border-[#c8a96a] text-[#c8a96a]' : 'border-white/10 text-white/70'}`}
                    >
                      {l.label}
                    </button>
                  ))}
                  <a href="#shop" className="ml-auto inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#e9d8a6] to-[#c8a96a] text-black px-4 py-2 font-medium">
                    <ShoppingCart size={16} /> {lang === 'de' ? 'Jetzt kaufen' : 'Shop Now'}
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
