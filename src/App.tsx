import React, { useState } from 'react';
import { 
  Flame, 
  Zap, 
  Dumbbell, 
  ShieldCheck, 
  Activity, 
  ChevronDown, 
  ChevronRight, 
  MapPin, 
  Phone, 
  Mail, 
  Menu, 
  X,
  Target,
  AlertTriangle,
  Scale
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Subcomponents
import MarqueeTicker from './components/MarqueeTicker';
import ProgramsGrid from './components/ProgramsGrid';
import OneRepMaxCalculator from './components/OneRepMaxCalculator';
import MembershipSlider from './components/MembershipSlider';
import InteractiveWall from './components/InteractiveWall';
import ContactSection from './components/ContactSection';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // High-level integration state: when user customizes a plan, we pass the title to the contact form primary goal dropdown
  const [targetGoal, setTargetGoal] = useState('');

  const handlePlanSelection = (planName: string, totalPrice: number) => {
    // Set the goal to Customized Plan
    setTargetGoal('Customized Membership Plan');
    
    // Smooth scroll down to the contact us section
    const contactSec = document.getElementById('contact-us-section');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const smoothScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const marqueeTexts = [
    "MIKEFIT INDUSTRIAL",
    "NO CODDLING",
    "SHUT UP AND SQUAT",
    "RAW IRON 24/7",
    "CNS OVERLOAD ALLOWED",
    "GRAVITY IS A CHOICE",
    "SWEAT IS FAT CRYING",
    "PAIN IS BIOMETRIC DETAILS",
    "RISE GRIND REPEAT"
  ];

  return (
    <div className="min-h-screen bg-brand-black text-brand-silver font-sans selection:bg-accent selection:text-brand-black">
      
      {/* 1. Header / Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-brand-black/90 backdrop-blur-md border-b-2 border-brand-silver">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          
          {/* Logo with aggressive skew and red accent */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2 group"
            id="navbar-logo"
          >
            <div className="bg-accent text-brand-black p-1.5 rotate-12 -skew-x-12 border border-brand-silver font-display text-xl leading-none font-black flex items-center justify-center">
              MF
            </div>
            <span className="font-display text-3xl md:text-4xl tracking-tighter text-brand-silver uppercase group-hover:text-accent transition-colors">
              MIKE<span className="text-accent">FIT</span>
            </span>
          </a>

          {/* Desktop Navigation links */}
          <nav className="hidden lg:flex items-center gap-8 font-mono text-xs font-bold uppercase tracking-widest">
            <button 
              onClick={() => smoothScrollTo('programs-section')} 
              className="hover:text-accent transition-colors cursor-pointer text-left"
              id="nav-link-programs"
            >
              [01_PROGRAMS]
            </button>
            <button 
              onClick={() => smoothScrollTo('calculator-section')} 
              className="hover:text-accent transition-colors cursor-pointer text-left"
              id="nav-link-calculator"
            >
              [02_1RM_CALC]
            </button>
            <button 
              onClick={() => smoothScrollTo('membership-planner')} 
              className="hover:text-accent transition-colors cursor-pointer text-left"
              id="nav-link-membership"
            >
              [03_MEMBERSHIP]
            </button>
            <button 
              onClick={() => smoothScrollTo('interactive-wall')} 
              className="hover:text-accent transition-colors cursor-pointer text-left"
              id="nav-link-testimonials"
            >
              [04_REPORTS]
            </button>
            <button 
              onClick={() => smoothScrollTo('contact-us-section')} 
              className="hover:text-accent transition-colors cursor-pointer text-left"
              id="nav-link-contact"
            >
              [05_CONTACT]
            </button>
          </nav>

          {/* Slashed "JOIN NOW" Header CTA */}
          <div className="hidden sm:block">
            <button
              onClick={() => smoothScrollTo('contact-us-section')}
              id="btn-header-join"
              className="px-6 py-2 bg-accent hover:bg-brand-silver text-brand-black hover:text-brand-black font-display text-sm uppercase font-bold tracking-wider -skew-x-[15deg] border-2 border-brand-silver shadow-[4px_4px_0px_#FFFFFF] hover:shadow-none transition-all duration-150"
            >
              JOIN NOW
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="btn-mobile-menu-toggle"
            className="lg:hidden p-2 border-2 border-zinc-800 hover:border-accent text-brand-silver hover:text-accent transition-colors -skew-x-6 bg-brand-gray"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 z-30 bg-brand-black border-b-4 border-brand-silver py-8 px-4 flex flex-col gap-6 lg:hidden"
          >
            <button 
              onClick={() => smoothScrollTo('programs-section')} 
              className="text-left py-2 px-4 border-l-4 border-zinc-800 hover:border-accent font-display text-xl tracking-wide uppercase text-brand-silver hover:text-accent transition-all"
              id="mob-link-programs"
            >
              01_PROGRAMS
            </button>
            <button 
              onClick={() => smoothScrollTo('calculator-section')} 
              className="text-left py-2 px-4 border-l-4 border-zinc-800 hover:border-accent font-display text-xl tracking-wide uppercase text-brand-silver hover:text-accent transition-all"
              id="mob-link-calculator"
            >
              02_1RM_CALCULATOR
            </button>
            <button 
              onClick={() => smoothScrollTo('membership-planner')} 
              className="text-left py-2 px-4 border-l-4 border-zinc-800 hover:border-accent font-display text-xl tracking-wide uppercase text-brand-silver hover:text-accent transition-all"
              id="mob-link-membership"
            >
              03_MEMBERSHIP_PLANNER
            </button>
            <button 
              onClick={() => smoothScrollTo('interactive-wall')} 
              className="text-left py-2 px-4 border-l-4 border-zinc-800 hover:border-accent font-display text-xl tracking-wide uppercase text-brand-silver hover:text-accent transition-all"
              id="mob-link-testimonials"
            >
              04_SURVIVOR_REPORTS
            </button>
            <button 
              onClick={() => smoothScrollTo('contact-us-section')} 
              className="text-left py-2 px-4 border-l-4 border-zinc-800 hover:border-accent font-display text-xl tracking-wide uppercase text-brand-silver hover:text-accent transition-all"
              id="mob-link-contact"
            >
              05_CONTACT_APPLICATION
            </button>

            <div className="pt-4 px-4">
              <button
                onClick={() => smoothScrollTo('contact-us-section')}
                id="btn-mobile-join"
                className="w-full py-4 bg-accent text-brand-black font-display text-lg uppercase font-bold tracking-wider -skew-x-[12deg] border-2 border-brand-silver"
              >
                JOIN THE PROTOCOL
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for sticky header */}
      <div className="h-20"></div>

      {/* 2. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-16 px-4">
        {/* Grungy background design details */}
        <div className="absolute inset-0 bg-[radial-gradient(#EA0000_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.04]"></div>
        
        {/* Diagonal slash background accents */}
        <div className="absolute right-0 bottom-0 top-0 w-1/4 bg-zinc-900/40 -skew-x-[30deg] pointer-events-none border-l border-zinc-800/40"></div>
        <div className="absolute left-10 top-20 w-80 h-80 rounded-full bg-accent/5 filter blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Hero: Typography Aggression */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Skewed Tech Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1 border border-accent bg-accent/10 text-accent font-mono text-xs uppercase tracking-widest -skew-x-[15deg]">
              <span className="w-2 h-2 bg-accent inline-block animate-ping rounded-none shrink-0"></span>
              <span>BIOMETRIC POWERHOUSE [24/7 OPEN]</span>
            </div>

            {/* Massive Aggressive Titles */}
            <div className="space-y-2">
              <h1 className="font-display text-6xl sm:text-7xl md:text-8xl text-brand-silver leading-none uppercase tracking-tighter">
                RAW IRON.<br />
                <span className="text-stroke-accent flicker-neon text-accent">UNCOMPROMISING</span><br />
                POWER.
              </h1>
              <p className="font-mono text-sm md:text-base text-zinc-400 tracking-wider uppercase max-w-xl leading-relaxed">
                We design environments where comfort burns and capability reigns. Zero templates. Zero compromises. Pure mechanical tension.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => smoothScrollTo('contact-us-section')}
                id="btn-hero-deploy"
                className="px-8 py-5 bg-accent hover:bg-brand-silver text-brand-black hover:text-brand-black font-display text-xl uppercase font-bold tracking-wider border-2 border-brand-silver -skew-x-[12deg] shadow-[6px_6px_0px_#FFFFFF] hover:shadow-none transition-all duration-150 hover:-translate-y-1 active:translate-y-0"
              >
                DEPLOY ENVELOPE
              </button>
              <button
                onClick={() => smoothScrollTo('calculator-section')}
                id="btn-hero-calc"
                className="px-6 py-5 bg-brand-black hover:bg-zinc-900 text-brand-silver font-display text-base uppercase tracking-widest border-2 border-zinc-800 hover:border-brand-silver -skew-x-[10deg] transition-all duration-150 shadow-[4px_4px_0px_#EA0000] hover:shadow-none hover:-translate-y-1 active:translate-y-0"
              >
                COMPUTE 1-REP MAX
              </button>
            </div>

            {/* Industrial details metrics */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t-2 border-zinc-900 font-mono text-xs text-zinc-500 uppercase">
              <div>
                <span className="text-accent block font-bold text-sm">// LATENCY</span>
                <span>ZERO EXCUSES</span>
              </div>
              <div>
                <span className="text-brand-silver block font-bold text-sm">// LOAD SCALE</span>
                <span>40+ RIGS & PLATFORMS</span>
              </div>
              <div className="hidden md:block">
                <span className="text-brand-silver block font-bold text-sm">// AIR SUPPLY</span>
                <span>INDUSTRIAL OZONE FLOW</span>
              </div>
            </div>

          </div>

          {/* Right Hero: Highlight Interactive Widget preview or Stark Brutalist Visual */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-accent/5 -skew-x-6 rotate-3 border-2 border-dashed border-zinc-800 pointer-events-none"></div>
            
            {/* Quick 1RM calculation visualizer */}
            <div className="relative transform hover:scale-[1.01] transition-transform duration-200">
              <div className="bg-brand-black border-4 border-brand-silver p-5 -skew-x-[3deg] shadow-[8px_8px_0px_#EA0000]">
                <div className="flex items-center justify-between border-b-2 border-zinc-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Activity size={18} className="text-accent animate-pulse" />
                    <span className="font-display text-sm tracking-widest text-zinc-400">MF BIOMETRIC PREVIEW</span>
                  </div>
                  <span className="font-mono text-[9px] text-zinc-500 bg-zinc-900 px-2 py-0.5 border border-zinc-800">CAGE_NODE_09</span>
                </div>
                
                {/* 1RM mini preview graph */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase text-zinc-400">PROT_01 / Squat Depth Max</span>
                    <span className="font-display text-base text-accent">495 LBS</span>
                  </div>
                  <div className="h-6 bg-brand-gray border border-zinc-800 flex overflow-hidden">
                    <div className="w-[85%] bg-accent h-full -skew-x-12 transform translate-x-1"></div>
                    <div className="w-[15%] bg-zinc-900 h-full"></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase text-zinc-400">PROT_02 / Deadlift Speed</span>
                    <span className="font-display text-base text-brand-silver">625 LBS</span>
                  </div>
                  <div className="h-6 bg-brand-gray border border-zinc-800 flex overflow-hidden">
                    <div className="w-[95%] bg-brand-silver h-full -skew-x-12 transform translate-x-1"></div>
                    <div className="w-[5%] bg-zinc-900 h-full"></div>
                  </div>

                  {/* Motivational mini-prompt */}
                  <div className="bg-zinc-950 border border-zinc-900 p-3 flex gap-3 items-start">
                    <div className="p-1 border border-zinc-800 text-zinc-500 font-mono text-[10px] uppercase">INFO</div>
                    <p className="font-mono text-[10px] text-zinc-500 uppercase leading-relaxed">
                      Lifting mechanics at MIKEFIT are tracked dynamically. Use our calculators below to configure physical payload benchmarks.
                    </p>
                  </div>
                </div>

                {/* Subheading action to calculator */}
                <button
                  onClick={() => smoothScrollTo('calculator-section')}
                  id="btn-hero-visual-scroll"
                  className="w-full mt-4 py-2.5 bg-brand-gray hover:bg-zinc-800 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-brand-silver border border-zinc-800 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>CALCULATE YOUR CAPACITY</span>
                  <ChevronDown size={14} className="animate-bounce" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. High-voltage Scrolling Marquee Ticker */}
      <MarqueeTicker texts={marqueeTexts} speed="medium" />

      {/* 4. Programs Grid Segment */}
      <ProgramsGrid />

      {/* Interactive Segment Split Banner: Dark concrete panel with calculators */}
      <div className="bg-zinc-950 border-y-4 border-zinc-900 py-20 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#EA0000_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.02]"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          
          {/* Left Column: Interactive 1RM Calculator */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative">
              <span className="text-xs font-mono tracking-widest text-accent font-bold uppercase block mb-1">
                MEASURE PARAMETERS // PROTOCOL 03
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-brand-silver uppercase tracking-tight">
                COMPUTE <span className="text-stroke-accent">MAXIMUM POTENTIAL</span>
              </h2>
              <div className="w-12 h-1 bg-accent mt-3 -skew-x-12"></div>
            </div>
            
            <p className="text-xs text-zinc-400 uppercase leading-relaxed max-w-md font-sans">
              Enter details from your last heavy set to forecast your theoretical 1-Rep Max threshold. Accurate planning yields violent progress.
            </p>

            <OneRepMaxCalculator />
          </div>

          {/* Right Column: Interactive Membership Planner */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative">
              <span className="text-xs font-mono tracking-widest text-accent font-bold uppercase block mb-1">
                MEMBERSHIP PROFILES // PROTOCOL 04
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-brand-silver uppercase tracking-tight">
                ESTIMATE <span className="text-stroke-silver">MEMBERSHIP SCALES</span>
              </h2>
              <div className="w-12 h-1 bg-brand-silver mt-3 -skew-x-12"></div>
            </div>
            
            <p className="text-xs text-zinc-400 uppercase leading-relaxed max-w-md font-sans">
              Select your base tactical frequency and toggle specialized add-ons to build your customized membership footprint.
            </p>

            <MembershipSlider onSelectPlan={handlePlanSelection} />
          </div>

        </div>
      </div>

      {/* 5. Interactive Wall segment (Testimonials & Motivations) */}
      <InteractiveWall />

      {/* 6. Contact & Application Section */}
      {/* We pass the targetGoal state to ContactSection so it is synchronized when a user selects a plan above */}
      <ContactSection initialGoal={targetGoal} />

      {/* 7. Stark Footer */}
      <footer className="bg-brand-black border-t-4 border-brand-silver pt-16 pb-8 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Logo and signature */}
            <div className="md:col-span-5 space-y-6">
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="font-display text-4xl tracking-tighter text-brand-silver uppercase block"
                id="footer-logo"
              >
                MIKE<span className="text-accent">FIT</span>
              </a>
              <p className="text-xs text-zinc-500 uppercase font-mono max-w-sm leading-relaxed">
                A non-compromising industrial strength grid. Comfort is an error. Capability is the design objective.
              </p>

              {/* Small Signature required by user: Logo, standard placeholder links, copyright, and a small signature reading "Rise [red dot] Grind" */}
              <div className="flex items-center gap-2 font-display text-lg uppercase tracking-wider text-brand-silver">
                <span>RISE</span>
                <span className="w-2.5 h-2.5 bg-accent rounded-none inline-block"></span>
                <span>GRIND</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="font-display text-sm text-brand-silver uppercase tracking-wider border-b border-zinc-900 pb-1">
                GRID PROTOCOLS
              </h4>
              <ul className="space-y-2 font-mono text-xs text-zinc-400 uppercase">
                <li>
                  <button onClick={() => smoothScrollTo('programs-section')} className="hover:text-accent cursor-pointer" id="footer-link-programs">
                    [01_PROGRAMS]
                  </button>
                </li>
                <li>
                  <button onClick={() => smoothScrollTo('calculator-section')} className="hover:text-accent cursor-pointer" id="footer-link-calculator">
                    [02_1RM_CALC]
                  </button>
                </li>
                <li>
                  <button onClick={() => smoothScrollTo('membership-planner')} className="hover:text-accent cursor-pointer" id="footer-link-membership">
                    [03_TIERS]
                  </button>
                </li>
                <li>
                  <button onClick={() => smoothScrollTo('interactive-wall')} className="hover:text-accent cursor-pointer" id="footer-link-reports">
                    [04_REPORTS]
                  </button>
                </li>
              </ul>
            </div>

            {/* Support / Safety Links */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="font-display text-sm text-brand-silver uppercase tracking-wider border-b border-zinc-900 pb-1">
                SECURE POLICIES
              </h4>
              <ul className="space-y-2 font-mono text-xs text-zinc-400 uppercase">
                <li><a href="#" className="hover:text-accent" id="footer-link-terms">[TERMS_OF_PAIN]</a></li>
                <li><a href="#" className="hover:text-accent" id="footer-link-liability">[LIABILITY_RELEASE]</a></li>
                <li><a href="#" className="hover:text-accent" id="footer-link-cookies">[COOKIE_DECRYPT]</a></li>
                <li><span className="text-zinc-600">[SECURE_IP: {new Date().getFullYear()}.07.07]</span></li>
              </ul>
            </div>

          </div>

          {/* Footer bottom details */}
          <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-zinc-600 uppercase">
            <div>
              &copy; {new Date().getFullYear()} MIKEFIT INDUSTRIAL SYSTEM. ALL BIOMETRIC RIGHTS PERSISTED.
            </div>
            <div className="flex items-center gap-4">
              <span>DESIGNED FOR RAW CAPACITY</span>
              <span>VER_2.4.0_STABLE</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
