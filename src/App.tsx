import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import {
  ArrowUpRight,
  BarChart3,
  Globe,
  Instagram,
  MousePointer2,
  Search,
  Zap,
  Layers3,
  Menu,
  X,
  ChevronRight,
  Plus,
  Minus,
  Quote,
} from 'lucide-react';
import { PrivacyPolicy, TermsOfUse, LegalModal } from './components/Legal';

const services = [
  {
    id: '01',
    title: 'Landing Pages',
    description:
      'Conversion-focused pages with strategic messaging, fast load times, and a structure built for paid media.',
    icon: <Zap className="w-5 h-5" />,
  },
  {
    id: '02',
    title: 'Corporate Websites',
    description:
      'Modern websites that position your brand with clarity, authority, and a premium experience on every device.',
    icon: <Globe className="w-5 h-5" />,
  },
  {
    id: '03',
    title: 'Conversion Design',
    description:
      'Visual and content architecture designed to guide users, reduce friction, and increase lead generation.',
    icon: <MousePointer2 className="w-5 h-5" />,
  },
  {
    id: '04',
    title: 'Performance Marketing',
    description:
      'Campaigns and digital assets connected to real business goals, with constant metric review and practical optimization.',
    icon: <BarChart3 className="w-5 h-5" />,
  },
  {
    id: '05',
    title: 'SEO & Content',
    description:
      'Technical structure, copy, and strategic content to expand organic visibility and sustain long-term growth.',
    icon: <Search className="w-5 h-5" />,
  },
  {
    id: '06',
    title: 'Digital Presence',
    description:
      'We extend your brand across digital channels and touchpoints with visual consistency, positioning, and commercial focus.',
    icon: <Instagram className="w-5 h-5" />,
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Initial Briefing',
    description:
      'We gather your company information, goals, services, references, and everything needed to plan the project properly.',
  },
  {
    number: '02',
    title: 'Production Starts',
    description:
      'Our developers start building your website with the approved structure, visual direction, and content strategy.',
  },
  {
    number: '03',
    title: 'Review & Validation',
    description:
      'The website is finished and you review all pages, sections, and information to confirm everything is correct.',
  },
  {
    number: '04',
    title: 'Payment',
    description:
      'After your approval, you complete the payment with confidence and full visibility of the final project.',
  },
  {
    number: '05',
    title: 'Website Goes Live',
    description:
      'Once payment is completed, we publish the website and make it live for your audience and customers.',
  },
];

const caseStudies = [
  {
    title: 'Insurance Brokers',
    description: 'Lead-focused landing pages and quote funnels that increase policy requests and booked calls.',
  },
  {
    title: 'Medical Clinics',
    description: 'High-trust websites that improve appointment conversion and present services with clarity.',
  },
  {
    title: 'Veterinarians',
    description: 'Conversion-ready pages for pet care services, emergency bookings, and recurring consultations.',
  },
  {
    title: 'Schools',
    description: 'Enrollment-oriented digital experiences that highlight programs, structure, and credibility.',
  },
  {
    title: 'Electricians',
    description: 'Fast local pages built to capture urgent service requests and qualified WhatsApp leads.',
  },
  {
    title: 'Auto Repair Shops',
    description: 'Practical service websites that turn searches into inspections, diagnostics, and bookings.',
  },
];

const faqs = [
  {
    question: 'What does Amplios actually do?',
    answer:
      'We are a marketing agency focused on creating landing pages and modern websites that are strategic, polished, and built to drive real business results.',
  },
  {
    question: 'Do you only handle website creation?',
    answer:
      'No. We can support strategy, copy, design, publishing, measurement, and ongoing optimization of your digital presence.',
  },
  {
    question: 'How quickly can a project go live?',
    answer:
      'Timelines vary based on complexity, but lean landing page projects usually move quickly when scope and content are aligned from the start.',
  },
  {
    question: 'Is the focus on aesthetics or performance?',
    answer:
      'Both. Our work combines contemporary visual design with structure, speed, and clarity so the site looks strong and converts effectively.',
  },
];

const testimonials = [
  {
    quote:
      'Amplios gave us a sharper online presence and a site structure that finally supports our sales process.',
    author: 'John',
    role: 'Founder, Northline Insurance',
  },
  {
    quote:
      'Our new pages look premium, load fast, and generate better quality leads from day one.',
    author: 'Emily',
    role: 'Director, BrightCare Clinic',
  },
  {
    quote:
      'The project made our service communication much clearer and improved appointment requests consistently.',
    author: 'Michael',
    role: 'Owner, GreenPaws Vet',
  },
  {
    quote:
      'Amplios delivered a practical website that helps us close more local service calls every week.',
    author: 'David',
    role: 'Manager, VoltFix Electrical',
  },
];

const stats = [
  { label: 'Projects', value: '120+' },
  { label: 'Pages', value: '300+' },
  { label: 'ROAS', value: '8.4x' },
  { label: 'Leads', value: '+500k' },
];

const pricingPlans = [
  {
    name: '',
    price: 'USD 680',
    subtitle: 'A complete website package for businesses that need authority, speed, and conversion.',
    features: [
      'Custom website development',
      'Modern UI/UX design',
      'Full website setup and launch',
      'On-page SEO optimization',
      'Security setup and hardening',
      'SSL and performance configuration',
      'Hosting included for 1 year',
      '30 days of free maintenance',
    ],
  },
];

const AccordionItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 px-8 flex justify-between items-center text-left group"
      >
        <span className="text-xl font-semibold tracking-tight group-hover:text-primary transition-colors">{question}</span>
        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-8 px-8 text-white/50 leading-relaxed max-w-2xl">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: 'privacy' | 'terms' | null }>({
    isOpen: false,
    type: null,
  });
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans antialiased selection:bg-primary selection:text-black">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(123,44,255,0.03)_0%,transparent_70%)]" />

        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5,
            }}
            animate={{
              y: [null, `${Math.random() * 100}%`],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute w-1 h-1 bg-primary rounded-full"
          />
        ))}
      </div>

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-black/40 backdrop-blur-3xl py-3 border-b border-white/5' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter flex items-center gap-3 group cursor-pointer">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-sm group-hover:bg-primary/40 transition-all" />
              <div className="relative w-5 h-5 border-2 border-primary rounded-sm flex items-center justify-center overflow-hidden">
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="absolute top-0 left-0 w-full h-[2px] bg-primary shadow-[0_0_10px_#7b2cff]"
                />
              </div>
            </div>
            <span className="font-display tracking-[0.2em] text-sm">AMPLIOS</span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
            <a href="#about" className="hover:text-primary transition-colors">01. About</a>
            <a href="#services" className="hover:text-primary transition-colors">02. Services</a>
            <a href="#process" className="hover:text-primary transition-colors">03. Process</a>
            <a href="#cases" className="hover:text-primary transition-colors">04. Work</a>
            <a href="mailto:connect@amplios.work" className="relative group px-6 py-2 overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-primary translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
              <div className="absolute inset-0 border border-primary/50 group-hover:border-primary transition-colors rounded-full" />
              <span className="relative z-10 text-primary group-hover:text-black transition-colors">Contact Amplios</span>
            </a>
          </div>

          <button className="md:hidden text-white p-2 glass rounded-lg" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-[#020202] pt-24 px-8 md:hidden flex flex-col"
          >
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <div className="relative z-10 flex flex-col gap-8 text-4xl font-bold tracking-tighter">
              <a href="#about" className="flex items-center gap-4 group" onClick={() => setIsMenuOpen(false)}>
                <span className="text-xs font-mono text-primary">01</span> About
              </a>
              <a href="#services" className="flex items-center gap-4 group" onClick={() => setIsMenuOpen(false)}>
                <span className="text-xs font-mono text-primary">02</span> Services
              </a>
              <a href="#process" className="flex items-center gap-4 group" onClick={() => setIsMenuOpen(false)}>
                <span className="text-xs font-mono text-primary">03</span> Process
              </a>
              <a href="#cases" className="flex items-center gap-4 group" onClick={() => setIsMenuOpen(false)}>
                <span className="text-xs font-mono text-primary">04</span> Work
              </a>
              <a
                href="mailto:connect@amplios.work"
                className="bg-primary text-black py-5 rounded-2xl text-xl mt-8 text-center font-bold uppercase tracking-widest"
                onClick={() => setIsMenuOpen(false)}
              >
                Start a project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
        <motion.div style={{ opacity, scale }} className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-8 animate-float">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Digital marketing agency
            </div>
            <h1 className="text-6xl md:text-[120px] font-bold tracking-tighter leading-[0.9] mb-10 text-gradient uppercase">
              Websites that <br />
              <span className="text-primary">perform.</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/40 mb-12 font-light leading-relaxed tracking-tight">
              <span className="text-white">Amplios</span> is a marketing agency focused on building
              landing pages and modern websites that are fast, strategic, and designed to help brands sell better online.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a
                href="mailto:connect@amplios.work"
                className="group relative px-12 py-5 overflow-hidden bg-primary text-black font-bold uppercase tracking-widest text-sm transition-all hover:shadow-[0_0_30px_rgba(123,44,255,0.4)] rounded-2xl"
              >
                <div className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  Start a project
                  <ArrowUpRight size={18} />
                </span>
              </a>
              <a href="#services" className="text-white/50 hover:text-white transition-colors text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-2">
                View services
                <div className="w-8 h-[1px] bg-white/20" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-10 left-10 hidden lg:block">
          <div className="flex flex-col gap-4">
            <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em]">Status</div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <div className="text-[10px] font-mono text-primary uppercase">Projects in progress</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 hidden lg:block">
          <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] text-right">Base</div>
          <div className="text-[10px] font-mono text-white/40 uppercase text-right mt-2">São Paulo, Brazil</div>
        </div>
      </section>

      <div className="py-10 border-y border-white/5 bg-white/[0.02] overflow-hidden relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 mx-6">
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white/5 uppercase">Landing pages</span>
              <div className="w-3 h-3 rounded-full bg-primary/20" />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white/5 uppercase">Modern websites</span>
              <div className="w-3 h-3 rounded-full bg-primary/20" />
              <span className="text-4xl md:text-6xl font-bold tracking-tighter text-white/5 uppercase">Performance</span>
            </div>
          ))}
        </div>
      </div>

      <section id="about" className="py-40 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="text-primary font-mono text-xs mb-6 tracking-[0.4em] uppercase">01 // About</div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 uppercase leading-none">
                Design, strategy <br />
                <span className="text-white/20">and results.</span>
              </h2>
              <p className="text-lg text-white/40 leading-relaxed mb-10 font-light">
                We create digital experiences that combine sharp positioning, contemporary aesthetics, and a focus on conversion.
                Every page is built to communicate more clearly, create trust, and move users toward the next action.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {stats.slice(0, 2).map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-bold text-white mb-2 tracking-tighter">{stat.value}</div>
                    <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <motion.div whileHover={{ y: -10 }} className="glass p-8 rounded-3xl border-primary/20 aspect-square flex flex-col justify-between">
                <div className="w-12 h-12 border border-primary/30 rounded-xl flex items-center justify-center">
                  <Zap className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tighter">Speed</h3>
              </motion.div>
              <motion.div whileHover={{ y: -10 }} className="bg-primary p-8 rounded-3xl aspect-square flex flex-col justify-between text-black">
                <div className="w-12 h-12 border border-black/20 rounded-xl flex items-center justify-center">
                  <Layers3 size={24} />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tighter">Structure</h3>
              </motion.div>
              <motion.div whileHover={{ y: -10 }} className="glass p-8 rounded-3xl border-primary/20 aspect-square flex flex-col justify-between">
                <div className="w-12 h-12 border border-primary/30 rounded-xl flex items-center justify-center">
                  <Globe className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tighter">Presence</h3>
              </motion.div>
              <motion.div whileHover={{ y: -10 }} className="glass p-8 rounded-3xl border-primary/20 aspect-square flex flex-col justify-between">
                <div className="w-12 h-12 border border-primary/30 rounded-xl flex items-center justify-center">
                  <BarChart3 className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tighter">Conversion</h3>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-40 bg-white/[0.01] relative">
        <div className="absolute inset-0 grid-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <div className="text-primary font-mono text-xs mb-6 tracking-[0.4em] uppercase">02 // Services</div>
              <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none">
                What <span className="text-primary">Amplios</span> delivers.
              </h2>
            </div>
            <p className="text-white/30 text-lg font-light max-w-sm text-right">
              Digital solutions for brands that need a stronger presence, higher-performing pages, and clearer communication.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="bg-[#020202] p-12 group relative overflow-hidden rounded-3xl border border-white/5 hover:border-primary/20 transition-colors"
              >
                <div className="absolute top-0 right-0 p-6 text-white/5 font-mono text-4xl transition-colors">{service.id}</div>
                <div className="w-12 h-12 border border-white/10 rounded-xl flex items-center justify-center mb-10 group-hover:border-primary group-hover:bg-primary/5 transition-all">
                  <div className="text-white/50 group-hover:text-primary transition-colors">{service.icon}</div>
                </div>
                <h3 className="text-2xl font-bold mb-6 tracking-tighter uppercase group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-10 font-light">{service.description}</p>
                <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 group-hover:text-white transition-colors">
                  Learn more <ChevronRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-40 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-32">
            <div className="text-primary font-mono text-xs mb-6 tracking-[0.4em] uppercase">03 // Process</div>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none">
              How we <span className="text-primary">build.</span>
            </h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-0 right-0 top-9 h-[1px] bg-white/10" />
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="relative bg-[#020202] border border-white/10 rounded-2xl p-6 group hover:border-primary/40 transition-colors min-h-[260px]"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="w-8 h-8 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-mono flex items-center justify-center">
                      {step.number}
                    </div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30">Step {step.number}</div>
                  </div>
                  <h3 className="text-base font-bold mb-4 uppercase tracking-tight group-hover:text-primary transition-colors">{step.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed font-light">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-8 w-6 h-6 rounded-full border border-white/10 bg-[#020202] items-center justify-center text-white/40 z-10">
                      <ChevronRight size={14} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-10 border border-primary/30 bg-primary/10 rounded-2xl px-6 py-6 text-center">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3">
              Risk-free delivery model
            </h3>
            <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-4">
              We work with a transparent process: you follow each stage, review the final website in detail, and only move to payment
              after approval. This keeps the project secure, predictable, and aligned with your expectations.
            </p>
            <p className="text-sm md:text-base text-white/85 font-medium">
              Yes, you only make the payment after the website is ready and approved by you.
            </p>
          </div>
        </div>
      </section>

      <section id="cases" className="py-40 bg-white/[0.01] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
              <div className="text-primary font-mono text-xs mb-6 tracking-[0.4em] uppercase">04 // Work</div>
              <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none">
                Industries <span className="text-primary">we serve.</span>
              </h2>
            </div>
            <p className="text-white/30 text-lg font-light max-w-md text-right">
              We have delivered high-performance digital projects across multiple business segments and service markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                className="bg-[#020202] p-12 group relative overflow-hidden rounded-3xl border border-white/5 hover:border-primary/20 transition-colors"
              >
                <div className="w-12 h-12 border border-white/10 rounded-xl flex items-center justify-center mb-10 group-hover:border-primary group-hover:bg-primary/5 transition-all">
                  <Layers3 className="w-5 h-5 text-white/50 group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6 tracking-tighter uppercase group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed font-light">
                    {study.description}
                  </p>
                  <div className="mt-10 h-[1px] w-full bg-white/10 group-hover:bg-primary/40 transition-colors" />
                  <div className="mt-6 text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 group-hover:text-white transition-colors">
                    Proven delivery
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="text-primary font-mono text-xs mb-6 tracking-[0.4em] uppercase">05 // Testimonials</div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
              Client <span className="text-primary">testimonials.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, index) => (
              <div key={index} className="bg-[#020202] p-16 relative overflow-hidden group rounded-3xl border border-white/5">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Quote className="text-white/5 absolute top-10 right-10" size={120} />
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary font-mono text-xs">
                    {t.author[0]}
                  </div>
                  <div>
                    <div className="font-bold text-lg uppercase tracking-tighter">{t.author}</div>
                    <div className="text-white/30 text-[10px] font-mono uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
                <p className="text-2xl font-light leading-relaxed text-white/70 relative z-10">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 bg-white/[0.01] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="text-primary font-mono text-xs mb-6 tracking-[0.4em] uppercase">06 // Pricing</div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
              Simple <span className="text-primary">pricing.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-1 max-w-4xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-3xl border border-primary/40 p-12 md:p-16 lg:p-20 bg-gradient-to-br from-primary/20 via-primary/10 to-[#020202] shadow-[0_0_60px_rgba(123,44,255,0.18)]"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                <div className="mx-auto mb-5 flex w-fit items-center justify-center text-center px-4 py-2 rounded-full border border-primary/40 bg-primary/15 text-primary text-[10px] font-bold uppercase tracking-[0.3em]">
                  Premium quality website
                </div>
                <div className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-white/70 mb-4 text-center">{plan.name}</div>
                <div className="text-5xl md:text-6xl font-bold tracking-tighter mb-5 text-center">{plan.price}</div>
                <p className="text-primary text-sm md:text-base font-semibold text-center mb-6 uppercase tracking-[0.2em]">
                  One-time payment
                </p>
                <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 text-center max-w-2xl mx-auto">{plan.subtitle}</p>
                <div className="space-y-4 mb-12 max-w-xl mx-auto">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center gap-3 text-base text-white/90 text-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_rgba(123,44,255,0.8)]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="mailto:connect@amplios.work"
                  className="mx-auto flex w-fit items-center gap-3 px-10 py-4 rounded-2xl bg-primary text-black text-xs font-bold uppercase tracking-[0.25em] hover:shadow-[0_0_35px_rgba(123,44,255,0.45)] transition-all"
                >
                  Start this project <ArrowUpRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-24">
            <div className="text-white/20 font-mono text-xs mb-6 tracking-[0.4em] uppercase">Questions</div>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none">FAQ.</h2>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-transparent">
                <AccordionItem question={faq.question} answer={faq.answer} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-60 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(123,44,255,0.1)_0%,transparent_70%)]" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 className="text-6xl md:text-[140px] font-bold tracking-tighter mb-12 text-gradient uppercase leading-none">
              Ready to bring <br />
              <span className="text-primary">your project to life?</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/30 mb-16 font-light max-w-3xl mx-auto tracking-tight">
              If you need a landing page or website with strong visual direction and a focus on measurable results, Amplios is ready to build it with you.
            </p>
            <a
              href="mailto:connect@amplios.work"
              className="inline-flex items-center gap-4 bg-primary text-black px-16 py-6 font-bold text-xl uppercase tracking-[0.2em] hover:shadow-[0_0_50px_rgba(123,44,255,0.5)] transition-all hover:scale-105 rounded-2xl"
            >
              Contact Amplios
              <ChevronRight size={24} />
            </a>
          </motion.div>
        </div>
      </section>

      <footer className="py-24 bg-black border-t border-white/5 text-white/20 text-[10px] font-mono uppercase tracking-[0.2em]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-2">
              <div className="text-white text-2xl font-bold tracking-tighter mb-8">AMPLIOS</div>
              <p className="max-w-xs leading-loose text-white/40 font-light normal-case tracking-normal text-sm">
                A marketing agency focused on landing pages and modern websites for brands that want to grow with clarity and performance.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-8 tracking-[0.3em]">Location</h4>
              <p className="leading-loose text-white/40 normal-case tracking-normal text-sm">
                Av. Paulista, 1636<br />
                São Paulo, SP<br />
                01310-200
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-8 tracking-[0.3em]">Social</h4>
              <div className="flex flex-col gap-4 normal-case tracking-normal text-sm">
                <a href="https://www.instagram.com/amplios.ag/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a>
                <a href="https://www.linkedin.com/company/agenciaamplios/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
                <a href="mailto:connect@amplios.work" className="hover:text-primary transition-colors">Contact</a>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p>© 2026 Amplios // All rights reserved.</p>
            <div className="flex gap-12">
              <button onClick={() => setLegalModal({ isOpen: true, type: 'privacy' })} className="hover:text-white transition-colors cursor-pointer">
                Privacy Policy
              </button>
              <button onClick={() => setLegalModal({ isOpen: true, type: 'terms' })} className="hover:text-white transition-colors cursor-pointer">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {legalModal.isOpen && (
          <LegalModal
            isOpen={legalModal.isOpen}
            onClose={() => setLegalModal({ isOpen: false, type: null })}
            title={legalModal.type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
          >
            {legalModal.type === 'privacy' ? <PrivacyPolicy /> : <TermsOfUse />}
          </LegalModal>
        )}
      </AnimatePresence>
    </div>
  );
}
