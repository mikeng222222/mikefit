import React, { useState } from 'react';
import { Quote, Flame, Heart, Trophy, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Testimonial } from '../types';

export default function InteractiveWall() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const ironMotivations = [
    "SWEAT IS FAT CRYING. GRIND HARDER.",
    "GRAVITY IS A DECISION. LIFT THROUGH IT.",
    "THE ONLY WEAKNESS IS THE REASON IN YOUR HEAD.",
    "EXCUSES DO NOT BUILD CAGES.",
    "IF THE BAR DOES NOT BEND, YOU ARE PRETENDING.",
    "PAIN IS THERMODYNAMIC INFORMATION LEAVING THE FLESH.",
    "REPS TODAY. REIGN TOMORROW.",
    "COMPROMISE IS THE PATH OF THE DEFEATED."
  ];

  const [currentMotivation, setCurrentMotivation] = useState(ironMotivations[0]);
  const [isRotating, setIsRotating] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "MARCUS 'THE BULL' STEELE",
      role: "Competitive Strongman",
      quote: "I threw up twice on my first leg day under Mike. 10/10 would squat again. My deadlift skyrocketed by 80 lbs in three months.",
      stat: "+80 LBS DEAD"
    },
    {
      id: 2,
      name: "SABRINA 'HELLCAT' VOX",
      role: "Combat Athlete",
      quote: "The tactical conditioning here is pure torment. My speed and endurance reached military thresholds. Absolute industrial paradise.",
      stat: "V02 MAX +18%"
    },
    {
      id: 3,
      name: "VIKTOR 'KRONOS' CHEN",
      role: "Powerlifter",
      quote: "No soft music, no hand-holding. Just raw steel, chalk, and high-voltage training blocks. MIKEFIT is where excuses go to burn.",
      stat: "700 LBS CLUB"
    }
  ];

  const getNextMotivation = () => {
    setIsRotating(true);
    setTimeout(() => {
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * ironMotivations.length);
      } while (ironMotivations[nextIndex] === currentMotivation);
      
      setCurrentMotivation(ironMotivations[nextIndex]);
      setIsRotating(false);
    }, 400);
  };

  return (
    <section id="interactive-wall" className="py-20 px-4 max-w-7xl mx-auto border-t border-zinc-950">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Grid Content: Motivation Generator & Live Numbers */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <span className="text-xs font-mono tracking-widest text-accent font-bold uppercase block mb-2">
              BIOMETRIC IMPACT // PROTOCOL 03
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-brand-silver uppercase tracking-tight">
              THE WALL OF <span className="text-stroke-silver">VICTORY</span>
            </h2>
            <div className="w-16 h-2 bg-accent mt-4 -skew-x-12"></div>
          </div>

          <p className="text-zinc-400 text-sm uppercase leading-relaxed font-sans max-w-md">
            Biometrics do not lie. Here are the raw indicators of our collective focus. Tap the generator below to load aggressive stimulus.
          </p>

          {/* Aggressive Motivation Generator */}
          <div className="border-2 border-brand-silver bg-brand-gray p-6 relative -skew-x-[6deg] overflow-hidden shadow-[4px_4px_0px_#EA0000]">
            <div className="absolute right-2 top-2 font-mono text-[9px] text-zinc-600">MOTIVATION ENGINE v1.4</div>
            <span className="block text-[10px] font-mono uppercase text-accent font-bold tracking-widest mb-3">
              [DAILY AGGRESSIVE STIMULUS]
            </span>

            <div className="min-h-[80px] flex items-center mb-4">
              <p className={`font-display text-xl md:text-2xl text-brand-silver uppercase tracking-tight transition-all duration-300 ${isRotating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                "{currentMotivation}"
              </p>
            </div>

            <button
              onClick={getNextMotivation}
              id="btn-rotate-motivation"
              className="px-4 py-2.5 bg-brand-black hover:bg-accent text-zinc-400 hover:text-brand-black font-display text-xs uppercase font-bold tracking-wider border border-zinc-800 hover:border-brand-silver flex items-center gap-2 transition-all duration-150"
            >
              <RefreshCw size={14} className={isRotating ? 'animate-spin' : ''} />
              <span>ROTATE STIMULUS</span>
            </button>
          </div>

          {/* Raw Numbers / Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            <div className="border border-zinc-800 p-4 bg-brand-black/60 -skew-x-[5deg]">
              <span className="font-display text-3xl md:text-4xl text-accent block">2,400+</span>
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block mt-1">TONS LIFTED DAILY</span>
            </div>
            <div className="border border-zinc-800 p-4 bg-brand-black/60 -skew-x-[5deg]">
              <span className="font-display text-3xl md:text-4xl text-brand-silver block">100%</span>
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block mt-1">ZERO EXCUSES ACCEPTED</span>
            </div>
            <div className="border border-zinc-800 p-4 bg-brand-black/60 -skew-x-[5deg]">
              <span className="font-display text-3xl md:text-4xl text-brand-silver block">98.4%</span>
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block mt-1">GOAL BREACH RATIO</span>
            </div>
          </div>
        </div>

        {/* Right Grid Content: Survivors (Testimonials Carousel) */}
        <div className="lg:col-span-6">
          <div className="border-4 border-zinc-800 bg-brand-gray p-8 relative -skew-y-[1deg] shadow-[8px_8px_0px_#FFFFFF]">
            <div className="absolute top-0 right-0 bg-brand-silver text-brand-black px-4 py-1 font-display text-sm uppercase font-bold -skew-x-[15deg] transform translate-x-1 -translate-y-0.5 border-l-2 border-b-2 border-brand-silver">
              SURVIVOR REPORTS
            </div>

            <div className="mb-6">
              <Quote size={40} className="text-accent opacity-30" />
            </div>

            {/* Carousel Tabs */}
            <div className="space-y-6">
              <div className="min-h-[140px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={quoteIndex}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <p className="text-zinc-300 font-sans italic text-sm md:text-base leading-relaxed">
                      "{testimonials[quoteIndex].quote}"
                    </p>

                    <div className="flex items-center justify-between border-t border-zinc-800 pt-4">
                      <div>
                        <h4 className="font-display text-lg text-brand-silver uppercase tracking-wider">
                          {testimonials[quoteIndex].name}
                        </h4>
                        <span className="text-xs text-zinc-500 font-mono uppercase">
                          {testimonials[quoteIndex].role}
                        </span>
                      </div>
                      <div className="bg-accent text-brand-black font-display font-bold px-3 py-1.5 text-xs -skew-x-12 border border-brand-silver">
                        {testimonials[quoteIndex].stat}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Indicators */}
              <div className="flex items-center gap-2">
                {testimonials.map((test, idx) => (
                  <button
                    key={test.id}
                    onClick={() => setQuoteIndex(idx)}
                    id={`btn-testimonial-nav-${idx}`}
                    className={`h-2.5 transition-all -skew-x-[20deg] ${
                      quoteIndex === idx ? 'w-10 bg-accent' : 'w-4 bg-zinc-800 hover:bg-zinc-600'
                    }`}
                    aria-label={`Testimonial slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
