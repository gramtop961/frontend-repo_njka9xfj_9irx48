import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Heritage from './components/Heritage'
import Quality from './components/Quality'
import Benefits from './components/Benefits'
import Product from './components/Product'
import CTA from './components/CTA'

function App() {
  const [lang, setLang] = useState('en')

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0b0b0b] via-black to-black" />
      <div className="absolute inset-0 -z-10 opacity-[0.15]" style={{backgroundImage:'url(https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)', backgroundSize:'cover', backgroundPosition:'center'}} />

      <Navbar onLangChange={setLang} lang={lang} />
      <main>
        <Hero lang={lang} />
        <Heritage lang={lang} />
        <Quality lang={lang} />
        <Benefits lang={lang} />
        <Product lang={lang} />
        <CTA lang={lang} />
      </main>
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between text-xs text-white/60">
          <p>© {new Date().getFullYear()} Carthago. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Impressum</a>
            <a href="#" className="hover:text-white">AGB</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
