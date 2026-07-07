import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, CheckCircle2, Send, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactFormState } from '../types';

interface ContactSectionProps {
  initialGoal?: string;
}

export default function ContactSection({ initialGoal = '' }: ContactSectionProps) {
  const [form, setForm] = useState<ContactFormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    goal: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // When external plan is selected, update the form's primary goal
  useEffect(() => {
    if (initialGoal) {
      setForm((prev) => ({ ...prev, goal: initialGoal }));
    }
  }, [initialGoal]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple frontend validation
    if (!form.firstName || !form.lastName || !form.email || !form.phone || !form.goal) {
      setErrorMessage('ALL FIELDS PROTOCOL MUST BE SATISFIED.');
      return;
    }
    
    setErrorMessage('');
    setIsSubmitting(true);

    const formId = (import.meta as any).env.VITE_FORMBOLD_FORM_ID;

    if (formId) {
      try {
        const response = await fetch(`https://formbold.com/s/${formId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            "First Name": form.firstName,
            "Last Name": form.lastName,
            "Email": form.email,
            "Phone": form.phone,
            "Primary Goal": form.goal,
            "Submitted At": new Date().toISOString()
          })
        });

        if (response.ok) {
          setIsSuccess(true);
        } else {
          const errorData = await response.json().catch(() => ({}));
          setErrorMessage(errorData.message || 'FORMBOLD SERVER REJECTED TRANSMISSION. CONFIRM FORM ID STATUS.');
        }
      } catch (error) {
        console.error('FormBold submission error:', error);
        setErrorMessage('NETWORK BOUNDARY BREACHED. TRANSMISSION BLOCKED.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Simulate submission flow
      // Change the button text to "Processing Action...", disable the button, wait 1.5 seconds, then replace with Success view
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
    }
  };

  const handleReset = () => {
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      goal: ''
    });
    setIsSuccess(false);
  };

  return (
    <section id="contact-us-section" className="py-20 px-4 max-w-7xl mx-auto border-t border-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Contact Us info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="relative">
            <span className="text-xs font-mono tracking-widest text-accent font-bold uppercase block mb-2">
              STAY CONNECTED // PROTOCOL 05
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-brand-silver uppercase tracking-tight">
              CONTACT <span className="text-stroke-silver">MIKEFIT</span>
            </h2>
            <div className="w-16 h-2 bg-accent mt-4 -skew-x-12"></div>
          </div>

          <p className="text-zinc-400 text-sm uppercase leading-relaxed max-w-md">
            We do not compromise. We do not coddle. If you are ready to breach your boundaries, get in touch or command deployment at the grid.
          </p>

          <div className="space-y-6">
            {/* Location Block */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 border-2 border-brand-silver flex items-center justify-center bg-brand-gray text-accent rounded-none shrink-0 -skew-x-6">
                <MapPin size={22} />
              </div>
              <div>
                <h4 className="font-display text-base text-brand-silver uppercase tracking-wider">
                  LOCATION HQ
                </h4>
                <p className="text-xs text-zinc-500 font-mono uppercase mt-1">
                  104 HARDCORE WAY, REINFORCED DISTRICT, LN 1093
                </p>
              </div>
            </div>

            {/* Phone Block */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 border-2 border-brand-silver flex items-center justify-center bg-brand-gray text-accent rounded-none shrink-0 -skew-x-6">
                <Phone size={22} />
              </div>
              <div>
                <h4 className="font-display text-base text-brand-silver uppercase tracking-wider">
                  COMMUNICATION GRID
                </h4>
                <p className="text-xs text-zinc-500 font-mono uppercase mt-1">
                  +1 (888) RAW-IRON // +1 (888) 729-4766
                </p>
              </div>
            </div>

            {/* Mail Block */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 border-2 border-brand-silver flex items-center justify-center bg-brand-gray text-accent rounded-none shrink-0 -skew-x-6">
                <Mail size={22} />
              </div>
              <div>
                <h4 className="font-display text-base text-brand-silver uppercase tracking-wider">
                  ENCRYPTED TRANSMISSIONS
                </h4>
                <p className="text-xs text-zinc-500 font-mono uppercase mt-1">
                  GRIND@MIKEFIT.COM // SECURE@MIKEFIT.COM
                </p>
              </div>
            </div>
          </div>

          {/* Slashed banner */}
          <div className="border border-zinc-800 bg-zinc-950 p-4 -skew-x-6 relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-accent"></div>
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 bg-accent animate-ping rounded-none shrink-0"></span>
              <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                VISITING TIME: 0400 - 2300 DAILY. IRON NEVER SLEEPS.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Lead capture form inside a card */}
        <div className="lg:col-span-7">
          <div className="border-4 border-brand-silver bg-brand-gray p-8 relative -skew-x-[1deg] shadow-[8px_8px_0px_#EA0000]">
            
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="font-display text-2xl text-brand-silver uppercase tracking-tight">
                      INITIATE APPLICATION PROTOCOL
                    </h3>
                    <p className="text-xs text-zinc-400 uppercase mt-1 tracking-wider">
                      Fill out the parameters below to request command deployment.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 bg-accent/20 border border-accent text-accent font-mono text-xs uppercase tracking-wider">
                      ⚠️ ERROR: {errorMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* First Name */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-1.5">
                          FIRST NAME <span className="text-accent">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          placeholder="JACK"
                          id="input-first-name"
                          className="w-full bg-brand-black border border-zinc-800 focus:border-accent text-brand-silver py-2.5 px-4 outline-none font-mono text-xs uppercase transition-colors"
                        />
                      </div>

                      {/* Last Name */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-1.5">
                          LAST NAME <span className="text-accent">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          placeholder="REAPER"
                          id="input-last-name"
                          className="w-full bg-brand-black border border-zinc-800 focus:border-accent text-brand-silver py-2.5 px-4 outline-none font-mono text-xs uppercase transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Email */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-1.5">
                          EMAIL ADDRESS <span className="text-accent">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          placeholder="JACK.REAPER@DEADLIFT.COM"
                          id="input-email"
                          className="w-full bg-brand-black border border-zinc-800 focus:border-accent text-brand-silver py-2.5 px-4 outline-none font-mono text-xs uppercase transition-colors"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-1.5">
                          PHONE NUMBER <span className="text-accent">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          placeholder="+1 (555) 019-2831"
                          id="input-phone"
                          className="w-full bg-brand-black border border-zinc-800 focus:border-accent text-brand-silver py-2.5 px-4 outline-none font-mono text-xs uppercase transition-colors"
                        />
                      </div>
                    </div>

                    {/* Primary Goal */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-zinc-400 mb-1.5">
                        PRIMARY GOAL <span className="text-accent">*</span>
                      </label>
                      <select
                        name="goal"
                        value={form.goal}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        id="select-primary-goal"
                        className="w-full bg-brand-black border border-zinc-800 focus:border-accent text-brand-silver py-2.5 px-4 outline-none font-mono text-xs uppercase transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="text-zinc-600 bg-brand-black">-- SELECT PROTOCOL --</option>
                        <option value="Build Muscle" className="bg-brand-black">BUILD RAW MUSCLE MASS</option>
                        <option value="Increase Strength" className="bg-brand-black">INCREASE 1RM / ABSOLUTE POWER</option>
                        <option value="Fat Loss" className="bg-brand-black">SHRED EXCESS WEIGHT / METABOLIC</option>
                        <option value="Athletic Performance" className="bg-brand-black">TACTICAL SPEED & CONDITIONING</option>
                        <option value="Mental Toughness" className="bg-brand-black">STRESS VACCINATION / MENTAL GRIT</option>
                        <option value="Customized Membership Plan" className="bg-brand-black">LOCK IN PLAN BUILDER ESTIMATE</option>
                      </select>
                    </div>

                    {/* Skewed aggressive submit button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        id="btn-submit-form"
                        className={`w-full py-4 text-center font-display text-lg uppercase tracking-wider font-bold transition-all duration-150 -skew-x-[12deg] ${
                          isSubmitting
                            ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed border-2 border-zinc-700'
                            : 'bg-accent hover:bg-brand-silver text-brand-black hover:text-brand-black border-2 border-brand-silver shadow-[4px_4px_0px_#FFFFFF] hover:shadow-none hover:-translate-y-0.5 active:translate-y-0'
                        }`}
                      >
                        <span className="inline-flex items-center gap-2">
                          <Send size={18} />
                          {isSubmitting ? 'Processing Action...' : 'SUBMIT COMMAND'}
                        </span>
                      </button>
                    </div>

                    {/* Safety guarantee */}
                    <p className="text-[10px] text-zinc-600 font-mono uppercase text-center mt-4">
                      Your data is secure. We only transmit biometric files internally. No telemetries.
                    </p>

                    {/* FormBold Connection Indicator */}
                    <div className="mt-3 p-2.5 bg-brand-black/60 border border-zinc-800 text-[10px] font-mono uppercase text-center flex items-center justify-center gap-2 -skew-x-[3deg]">
                      <span className={`w-2 h-2 rounded-none inline-block ${(import.meta as any).env.VITE_FORMBOLD_FORM_ID ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500 animate-pulse'}`}></span>
                      <span>
                        FORMBOLD: {(import.meta as any).env.VITE_FORMBOLD_FORM_ID ? 'ACTIVE (TRANSMITTING LEADS)' : 'SIMULATION (SET VITE_FORMBOLD_FORM_ID IN SECRETS)'}
                      </span>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success-view"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 bg-accent text-brand-black flex items-center justify-center mb-6 -skew-x-12 animate-bounce border-2 border-brand-silver">
                    <CheckCircle2 size={48} className="stroke-[3px]" />
                  </div>

                  <h3 className="font-display text-3xl text-brand-silver uppercase tracking-tight mb-2">
                    APPLICATION RECEIVED
                  </h3>
                  
                  <div className="font-mono text-xs text-accent uppercase tracking-widest font-bold mb-6">
                    TRANSMISSION PROTOCOL ACKNOWLEDGED [SECURE_OK]
                  </div>

                  <div className="bg-brand-black border border-zinc-800 p-4 max-w-md -skew-x-3 mb-8">
                    <p className="text-xs text-zinc-400 leading-relaxed uppercase">
                      We have compiled your strength profile. A MIKEFIT Lead Tactical Officer will contact you via secure call or encrypted mail in less than 24 hours. Prepare your body.
                    </p>
                  </div>

                  <button
                    onClick={handleReset}
                    id="btn-submit-another"
                    className="px-6 py-3 bg-brand-black hover:bg-accent text-brand-silver hover:text-brand-black border-2 border-brand-silver hover:border-brand-silver font-display text-sm uppercase font-bold tracking-wider -skew-x-[10deg] transition-all duration-150 shadow-[4px_4px_0px_#EA0000] hover:shadow-none hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Submit Another
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
