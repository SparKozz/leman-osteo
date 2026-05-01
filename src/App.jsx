import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Activity, Baby, Trophy, ShieldCheck, Award, MapPin, Clock, Phone, Mail,
  Calendar, Menu, X, Star, Quote, Instagram, Facebook, Linkedin, ArrowRight,
  CheckCircle2, Leaf
} from 'lucide-react'

const NAV = [
  { href: '#services', label: 'Services' },
  { href: '#apropos', label: 'À propos' },
  { href: '#avis', label: 'Témoignages' },
  { href: '#contact', label: 'Contact' },
]

const BOOKING_URL = 'https://www.onedoc.ch/fr/osteopathe/geneve'

const sectionReveal = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
}

function Logo({ className = '' }) {
  return (
    <a href="#top" className={`flex items-center gap-2 group ${className}`}>
      <div className="w-9 h-9 rounded-full bg-sage-600 flex items-center justify-center transition-transform group-hover:rotate-6">
        <Leaf className="w-5 h-5 text-pearl-50" strokeWidth={1.8} />
      </div>
      <div className="leading-tight">
        <div className="font-display text-lg text-sage-800">Léman Ostéo</div>
        <div className="text-[10px] uppercase tracking-[0.22em] text-sage-500">& Bien-être</div>
      </div>
    </a>
  )
}

function CTAButton({ children, onClick, variant = 'primary', className = '' }) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 group'
  const styles = variant === 'primary'
    ? 'bg-sage-700 text-pearl-50 hover:bg-sage-800 shadow-sm hover:shadow-lg hover:-translate-y-0.5'
    : 'border border-sage-300 text-sage-800 hover:border-sage-700 hover:bg-sage-50'
  return (
    <button onClick={onClick} className={`${base} ${styles} ${className}`}>
      <Calendar className="w-4 h-4" />
      <span>{children}</span>
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
    </button>
  )
}

function Navbar({ onBook }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md transition-all duration-300 ${scrolled ? 'border-b border-pearl-200 shadow-sm shadow-sage-900/5' : 'border-b border-white/20'}`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-10">
          {NAV.map(n => (
            <a key={n.href} href={n.href} className="text-sm text-sage-700 hover:text-sage-900 transition-colors relative group">
              {n.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-sage-700 transition-all group-hover:w-full" />
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <CTAButton onClick={onBook}>Prendre RDV</CTAButton>
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-6 h-6 text-sage-800" /> : <Menu className="w-6 h-6 text-sage-800" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-pearl-50 border-t border-pearl-200 px-6 py-6 space-y-4">
          {NAV.map(n => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block text-sage-700 py-2">
              {n.label}
            </a>
          ))}
          <CTAButton onClick={onBook} className="w-full justify-center">Prendre RDV</CTAButton>
        </div>
      )}
    </header>
  )
}

function Hero({ onBook }) {
  return (
    <motion.section id="top" className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden" {...sectionReveal}>
      <div className="absolute inset-0 grain opacity-40 pointer-events-none" />
      <div className="absolute top-40 -right-32 w-[480px] h-[480px] rounded-full bg-sage-200/40 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-[380px] h-[380px] rounded-full bg-sage-100/60 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage-100 border border-sage-200 text-sage-700 text-xs uppercase tracking-[0.18em] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-sage-500 animate-pulse" />
            Cabinet ouvert · Plainpalais, Genève
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-sage-900 leading-[1.05] mb-8">
            Retrouvez votre <em className="text-sage-600 not-italic font-normal">équilibre</em>,<br />
            sans compromis.
          </h1>
          <p className="text-lg md:text-xl text-sage-700/80 max-w-xl leading-relaxed mb-10 font-light">
            Une approche ostéopathique douce et précise, pensée pour les sportifs, les futures mamans et tous ceux qui souhaitent vivre sans douleur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton onClick={onBook}>Prendre rendez-vous</CTAButton>
            <a href="#services" className="inline-flex items-center gap-2 px-6 py-3 text-sage-800 hover:text-sage-600 transition-colors">
              Découvrir nos soins <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm text-sage-600">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sage-500" /> Diplôme fédéral CDS</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sage-500" /> Remboursé assurances</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sage-500" /> 1ʳᵉ séance sous 48h</div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-sage-200 via-sage-100 to-pearl-100 overflow-hidden relative shadow-2xl shadow-sage-900/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-8">
                  <Leaf className="w-20 h-20 mx-auto text-sage-600 mb-6" strokeWidth={1} />
                  <p className="font-display italic text-2xl text-sage-800 leading-snug">
                    « Le corps possède en lui les ressources de sa propre guérison. »
                  </p>
                  <p className="mt-4 text-sm text-sage-600 tracking-wide">— A. T. Still</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-pearl-50 rounded-2xl p-5 shadow-xl border border-pearl-200 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-sage-600 text-sage-600" />)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-sage-900">4.9 / 5</div>
                  <div className="text-xs text-sage-600">+ 240 avis vérifiés</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

const SERVICES = [
  {
    icon: Trophy,
    title: 'Ostéopathie du sport',
    desc: 'Préparation, récupération et traitement des blessures pour amateurs et compétiteurs. Approche fonctionnelle adaptée à votre discipline.',
    points: ['Tendinopathies', 'Entorses & lombalgies', 'Préparation compétition'],
  },
  {
    icon: Baby,
    title: 'Grossesse & post-partum',
    desc: 'Un accompagnement tout en douceur pour la future maman et son bébé. Confort, sommeil, préparation à l\'accouchement.',
    points: ['Sciatique de grossesse', 'Reflux nourrisson', 'Récupération post-partum'],
  },
  {
    icon: Activity,
    title: 'Mal de dos & cervicalgies',
    desc: 'Lombalgies, hernies, tensions liées au télétravail. Diagnostic global et plan de traitement personnalisé.',
    points: ['Cervicales & migraines', 'Sciatique', 'Posture & ergonomie'],
  },
]

function Services({ onBook }) {
  return (
    <motion.section id="services" className="py-24 lg:py-32 relative" {...sectionReveal}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16 lg:mb-20">
          <div className="text-xs uppercase tracking-[0.22em] text-sage-500 mb-4">Nos spécialités</div>
          <h2 className="text-4xl lg:text-5xl font-light text-sage-900 leading-tight">
            Des soins ciblés,<br />
            <em className="text-sage-600 not-italic">une attention universelle.</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((s, i) => (
            <article key={i} className="group bg-pearl-50 border border-pearl-200 rounded-3xl p-8 lg:p-10 shadow-sm shadow-sage-900/5 hover:border-sage-300 hover:shadow-md hover:shadow-sage-900/10 transition-all duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-2xl bg-sage-100 flex items-center justify-center mb-8 group-hover:bg-sage-600 transition-colors duration-500">
                <s.icon className="w-6 h-6 text-sage-700 group-hover:text-pearl-50 transition-colors duration-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl text-sage-900 mb-4 font-medium">{s.title}</h3>
              <p className="text-sage-700/80 leading-relaxed mb-6 font-light">{s.desc}</p>
              <ul className="space-y-2 mb-8">
                {s.points.map((p, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-sage-700">
                    <span className="w-1 h-1 rounded-full bg-sage-500" /> {p}
                  </li>
                ))}
              </ul>
              <button onClick={onBook} className="text-sm text-sage-700 hover:text-sage-900 font-medium inline-flex items-center gap-2 group/link">
                Réserver une séance
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

const REASSURANCE = [
  { icon: Award, title: 'Diplôme fédéral CDS', desc: 'Formation reconnue par la Conférence suisse des directrices et directeurs cantonaux de la santé.' },
  { icon: ShieldCheck, title: 'Remboursé par les assurances', desc: 'Pris en charge par toutes les assurances complémentaires (Helsana, CSS, Groupe Mutuel, SWICA…).' },
  { icon: MapPin, title: 'Au cœur de Plainpalais', desc: 'À 3 minutes de l\'arrêt « Plainpalais ». Cabinet accessible et parking à proximité.' },
]

function Reassurance() {
  return (
    <motion.section id="apropos" className="py-24 lg:py-32 bg-sage-50/60 border-y border-pearl-200 relative overflow-hidden" {...sectionReveal}>
      <div className="absolute inset-0 grain opacity-30 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5">
          <div className="text-xs uppercase tracking-[0.22em] text-sage-500 mb-4">Pourquoi nous choisir</div>
          <h2 className="text-4xl lg:text-5xl font-light text-sage-900 leading-tight mb-8">
            La rigueur suisse,<br />
            <em className="text-sage-600 not-italic">la chaleur humaine.</em>
          </h2>
          <p className="text-lg text-sage-700/80 leading-relaxed font-light mb-8">
            Notre cabinet réunit deux ostéopathes diplômés fédéraux, animés par une même conviction : prendre le temps d'écouter avant de soigner. Chaque séance dure 50 minutes — le temps qu'il faut pour comprendre votre histoire et y répondre avec justesse.
          </p>
          <div className="flex items-center gap-4 pt-4 border-t border-sage-200">
            <div className="flex -space-x-3">
              {['M', 'L'].map((c, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-sage-600 border-2 border-pearl-50 flex items-center justify-center text-pearl-50 font-display text-sm">{c}</div>
              ))}
            </div>
            <div className="text-sm text-sage-700">
              <div className="font-medium">Marie Dubois & Lucas Favre</div>
              <div className="text-sage-500">Ostéopathes D.O. — Diplômés CDS</div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 space-y-4">
          {REASSURANCE.map((r, i) => (
            <div key={i} className="flex gap-6 p-6 lg:p-8 bg-pearl-50 rounded-2xl border border-pearl-200 hover:border-sage-300 transition-colors">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-sage-700 flex items-center justify-center">
                <r.icon className="w-5 h-5 text-pearl-50" strokeWidth={1.6} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-sage-900 mb-1">{r.title}</h3>
                <p className="text-sage-700/80 font-light leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

const TESTIMONIALS = [
  {
    name: 'Camille R.',
    role: 'Marathonienne · Eaux-Vives',
    text: 'À deux semaines de Lausanne Marathon, une douleur au mollet me coupait dans ma préparation. Trois séances ont suffi. Diagnostic précis, écoute remarquable.',
    rating: 5,
  },
  {
    name: 'Sophie M.',
    role: 'Maman de jumeaux',
    text: 'J\'ai consulté pendant et après ma grossesse. La douceur du toucher, les conseils pratiques pour le quotidien… Je recommande à toutes les futures mamans de Genève.',
    rating: 5,
  },
  {
    name: 'Antoine D.',
    role: 'Cadre · Banque privée',
    text: 'Un mal de dos chronique lié au télétravail qui m\'empoisonnait la vie depuis deux ans. Approche globale, conseils ergonomiques. Le confort est revenu, durablement.',
    rating: 5,
  },
]

function Testimonials() {
  return (
    <motion.section id="avis" className="py-24 lg:py-32 relative" {...sectionReveal}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <div className="text-xs uppercase tracking-[0.22em] text-sage-500 mb-4">Ils nous font confiance</div>
          <h2 className="text-4xl lg:text-5xl font-light text-sage-900 leading-tight">
            Des résultats <em className="text-sage-600 not-italic">qui parlent</em>.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className="bg-gradient-to-br from-pearl-50 to-sage-50 border border-pearl-200 rounded-3xl p-8 lg:p-10 flex flex-col">
              <Quote className="w-8 h-8 text-sage-400 mb-6" strokeWidth={1.2} />
              <blockquote className="text-sage-800 leading-relaxed font-light flex-1 mb-8">
                « {t.text} »
              </blockquote>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-sage-600 text-sage-600" />
                ))}
              </div>
              <figcaption className="border-t border-sage-200 pt-4">
                <div className="font-medium text-sage-900">{t.name}</div>
                <div className="text-sm text-sage-600">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function CTASection({ onBook }) {
  return (
    <motion.section className="py-24 lg:py-32" {...sectionReveal}>
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="relative bg-sage-800 rounded-3xl p-10 lg:p-16 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-sage-600/40 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-sage-700/60 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-light text-pearl-50 leading-tight mb-4">
                Votre prochain rendez-vous,<br />
                <em className="text-sage-200 not-italic">à portée de clic.</em>
              </h2>
              <p className="text-pearl-200/80 font-light leading-relaxed">
                Réservez en ligne 24/7. Première séance disponible sous 48h dans la majorité des cas.
              </p>
            </div>
            <div className="md:justify-self-end">
              <button onClick={onBook} className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-pearl-50 text-sage-900 hover:bg-pearl-100 transition-all hover:-translate-y-0.5 font-medium shadow-2xl group">
                <Calendar className="w-5 h-5" />
                Ouvrir le calendrier
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="bg-sage-900 text-pearl-100 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 grain opacity-20 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-sage-700">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 rounded-full bg-sage-600 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-pearl-50" strokeWidth={1.8} />
              </div>
              <div className="leading-tight">
                <div className="font-display text-lg text-pearl-50">Léman Ostéo</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-sage-300">& Bien-être</div>
              </div>
            </div>
            <p className="text-sm text-pearl-200/70 leading-relaxed font-light">
              Cabinet d'ostéopathie au cœur de Plainpalais. Diplômés fédéraux, remboursé par les assurances complémentaires.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.22em] text-sage-300 mb-5">Adresse</h4>
            <div className="aspect-[4/3] rounded-xl overflow-hidden border border-sage-700 mb-4">
              <iframe
                title="Carte cabinet"
                src="https://www.openstreetmap.org/export/embed.html?bbox=6.135%2C46.193%2C6.150%2C46.200&layer=mapnik&marker=46.1965%2C6.1425"
                className="w-full h-full grayscale opacity-90"
                loading="lazy"
              />
            </div>
            <p className="text-sm text-pearl-200/80 flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-sage-400" />
              Rue de Carouge 42<br />1205 Genève · Plainpalais
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.22em] text-sage-300 mb-5">Horaires</h4>
            <ul className="space-y-2 text-sm text-pearl-200/80">
              <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-sage-400" /> Lun – Ven · 8h – 19h</li>
              <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-sage-400" /> Samedi · 9h – 13h</li>
              <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-sage-400" /> Dimanche · Fermé</li>
              <li className="pt-3 mt-3 border-t border-sage-700 text-sage-300 text-xs">Urgences : ligne dédiée 7j/7</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.22em] text-sage-300 mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-pearl-200/80">
              <li><a href="tel:+41223456789" className="flex items-center gap-2 hover:text-pearl-50 transition-colors"><Phone className="w-4 h-4 text-sage-400" /> +41 22 345 67 89</a></li>
              <li><a href="mailto:contact@leman-osteo.ch" className="flex items-center gap-2 hover:text-pearl-50 transition-colors"><Mail className="w-4 h-4 text-sage-400" /> contact@leman-osteo.ch</a></li>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-sage-700 hover:border-sage-400 hover:bg-sage-800 flex items-center justify-center transition-all">
                  <Icon className="w-4 h-4 text-pearl-200" strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-sage-300">
          <div>© {new Date().getFullYear()} Léman Ostéo & Bien-être · Tous droits réservés</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-pearl-50 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-pearl-50 transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function BookingModal({ open, onClose }) {
  if (!open) return null
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-sage-900/60 backdrop-blur-sm" onClick={onClose}>
      <motion.div initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="bg-pearl-50 rounded-[2rem] max-w-md w-full p-8 lg:p-10 relative border border-white/70 shadow-2xl shadow-sage-900/20" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-5 right-5 w-9 h-9 rounded-full hover:bg-pearl-200 flex items-center justify-center transition-colors">
          <X className="w-5 h-5 text-sage-700" />
        </button>
        <div className="w-14 h-14 rounded-2xl bg-sage-100 flex items-center justify-center mb-6">
          <Calendar className="w-6 h-6 text-sage-700" strokeWidth={1.5} />
        </div>
        <h3 className="text-2xl font-medium text-sage-900 mb-3">Réservation en ligne</h3>
        <p className="text-sage-700/80 font-light leading-relaxed mb-8">
          Vous allez être redirigé vers notre plateforme de réservation sécurisée OneDoc. Vous pourrez choisir votre praticien et votre créneau en quelques clics.
        </p>
        <div className="space-y-3 mb-8 text-sm">
          {['Choix du praticien', 'Créneaux en temps réel', 'Confirmation immédiate par e-mail'].map((t, i) => (
            <div key={i} className="flex items-center gap-3 text-sage-700">
              <CheckCircle2 className="w-4 h-4 text-sage-500" /> {t}
            </div>
          ))}
        </div>
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-sage-700 text-pearl-50 hover:bg-sage-800 transition-all font-medium group">
          Continuer vers OneDoc
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
        <p className="text-xs text-sage-500 text-center mt-4">Connexion sécurisée · Données chiffrées</p>
      </motion.div>
    </motion.div>
  )
}

export default function App() {
  const [booking, setBooking] = useState(false)
  const open = () => setBooking(true)
  const close = () => setBooking(false)
  return (
    <>
      <Navbar onBook={open} />
      <main>
        <Hero onBook={open} />
        <Services onBook={open} />
        <Reassurance />
        <Testimonials />
        <CTASection onBook={open} />
      </main>
      <Footer />
      <BookingModal open={booking} onClose={close} />
    </>
  )
}
