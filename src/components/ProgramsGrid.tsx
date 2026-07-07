import React, { useState } from 'react';
import { Dumbbell, Swords, HeartPulse, Sparkles, ChevronRight, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Program } from '../types';

export default function ProgramsGrid() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const programs: Program[] = [
    {
      id: 'p1',
      code: 'PROT_01',
      title: 'RAW POWERLIFTING',
      description: 'Absolute strength generation. Focus on Squat, Bench Press, and Deadlift. Master neural recruitment and structural density.',
      intensity: 'KILLER',
      features: ['1RM optimization cycles', 'Chains and band overloading', 'CNS recovery planning', 'Platform velocity feedback']
    },
    {
      id: 'p2',
      code: 'PROT_02',
      title: 'COMBAT ATHLETICS',
      description: 'Conditioning for tactical supremacy. Explosive power, rotational velocity, grip endurance, and cognitive performance under fatigue.',
      intensity: 'EXTREME',
      features: ['Sandbag & Log carries', 'Heavy sled drag intervals', 'Rotational medicine ball slams', 'Grip torture protocols']
    },
    {
      id: 'p3',
      code: 'PROT_03',
      title: 'HARDCORE CARDIO',
      description: 'Metabolic shock. High-intensity interval workouts utilizing rowers, air bikes, and structural complexes designed to incinerate body fat.',
      intensity: 'HIGH',
      features: ['Tabata assault cycles', 'Barbell conditioning complexes', 'Rucking and hill repeats', 'V02 Max threshold breaches']
    },
    {
      id: 'p4',
      code: 'PROT_04',
      title: 'RECOVERY PROTOCOL',
      description: 'Active restoration. Decompress heavy joints, release hyper-toned muscle tissue, and activate the parasympathetic nervous system.',
      intensity: 'HIGH',
      features: ['Myofascial compression', 'Infrared thermal therapy', 'Controlled hypoxia breathwork', 'Postural alignment drills']
    }
  ];

  return (
    <section id="programs-section" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="relative">
          <span className="text-xs font-mono tracking-widest text-accent font-bold uppercase block mb-2">
            CHOOSE YOUR WEAPON // PROTOCOL 02
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-brand-silver uppercase tracking-tight">
            TRAINING <span className="text-stroke-silver">PROGRAMS</span>
          </h2>
          <div className="w-24 h-2 bg-accent mt-4 -skew-x-12"></div>
        </div>
        <p className="text-xs text-zinc-500 uppercase font-mono max-w-xs">
          Select a program to inspect details, parameters, split layouts, and intensity schedules.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map((prog, index) => (
          <div
            key={prog.id}
            id={`program-card-${prog.id}`}
            className="group border-2 border-brand-silver bg-brand-gray p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-2 hover:translate-x-2 shadow-[4px_4px_0px_#FFFFFF] hover:shadow-[0px_0px_15px_rgba(234,0,0,0.4)] hover:border-accent -skew-x-[3deg]"
          >
            <div>
              {/* Program Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-accent font-bold">{prog.code}</span>
                <span className={`text-[10px] font-mono border px-2 py-0.5 font-bold ${
                  prog.intensity === 'KILLER' ? 'bg-accent/20 border-accent text-accent' :
                  prog.intensity === 'EXTREME' ? 'bg-orange-500/10 border-orange-500 text-orange-500' :
                  'bg-yellow-500/10 border-yellow-500 text-yellow-500'
                }`}>
                  {prog.intensity}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl text-brand-silver group-hover:text-accent transition-colors mb-3 uppercase tracking-tight">
                {prog.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-zinc-400 font-sans leading-relaxed mb-6">
                {prog.description}
              </p>
            </div>

            {/* Action */}
            <button
              onClick={() => setSelectedProgram(prog)}
              id={`btn-view-program-${prog.id}`}
              className="w-full py-2 bg-brand-black group-hover:bg-accent text-brand-silver group-hover:text-brand-black text-xs font-display uppercase font-bold tracking-wider border border-zinc-800 group-hover:border-brand-silver -skew-x-6 flex items-center justify-center gap-1 transition-all duration-150"
            >
              <span>INSPECT SPLIT</span>
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>

      {/* Detail Overlay Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-black/90 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.95, rotate: -1 }}
              id="program-modal"
              className="w-full max-w-2xl bg-brand-gray border-4 border-brand-silver p-6 md:p-8 relative -skew-x-[2deg] shadow-[12px_12px_0px_#EA0000]"
            >
              {/* Corner industrial ticks */}
              <div className="absolute top-2 left-2 text-[10px] text-zinc-600 font-mono">⚡ PROTOCOL: ACTIVE</div>
              
              <button
                onClick={() => setSelectedProgram(null)}
                id="btn-close-modal"
                className="absolute top-4 right-4 text-zinc-500 hover:text-accent border-2 border-zinc-800 hover:border-accent p-1.5 bg-brand-black transition-all -skew-x-6"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <div className="mt-4 space-y-6">
                <div>
                  <span className="text-xs font-mono text-accent font-bold tracking-widest uppercase">
                    {selectedProgram.code} // CORE DRILL SCHEDULE
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl text-brand-silver uppercase tracking-tight mt-1">
                    {selectedProgram.title}
                  </h3>
                </div>

                <p className="text-xs md:text-sm text-zinc-300 font-sans leading-relaxed">
                  {selectedProgram.description}
                </p>

                {/* Training Splits block */}
                <div>
                  <h4 className="text-xs font-display uppercase tracking-widest text-zinc-500 border-b border-zinc-800 pb-1 mb-3">
                    WEEKLY SPLIT BREAKDOWN
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProgram.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs font-mono text-brand-silver bg-brand-black border border-zinc-800 p-2.5 -skew-x-3"
                      >
                        <Check size={14} className="text-accent shrink-0 mt-0.5 stroke-[3px]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sample Workout Split Grid */}
                <div className="border border-dashed border-zinc-800 p-4 bg-zinc-950/40 font-mono text-xs text-zinc-400">
                  <span className="text-[10px] text-accent uppercase font-bold tracking-wider block mb-2">
                    SAMPLE INTAKE WORKOUT
                  </span>
                  <div className="space-y-1.5">
                    <div className="flex justify-between border-b border-zinc-900 pb-1">
                      <span>1. HEAVY EXPLOSIVE WORK</span>
                      <span className="text-brand-silver">5 sets x 3 reps @ 85% 1RM</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-900 pb-1">
                      <span>2. UNILATERAL ACCESSORY</span>
                      <span className="text-brand-silver">3 sets x 8 reps per side</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-900 pb-1">
                      <span>3. MECHANICAL TENSION DUMP</span>
                      <span className="text-brand-silver">4 sets x 12 reps @ 65% 1RM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>4. FINISHER PLIABILITY</span>
                      <span className="text-brand-silver">10 min AMRAP carries & hold</span>
                    </div>
                  </div>
                </div>

                {/* Modal actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href="#contact-us-section"
                    onClick={() => setSelectedProgram(null)}
                    id="btn-modal-apply"
                    className="flex-1 text-center py-3 bg-accent hover:bg-brand-silver text-brand-black hover:text-brand-black font-display text-base uppercase font-bold tracking-wider border-2 border-brand-silver -skew-x-[10deg] transition-all duration-150 shadow-[4px_4px_0px_#FFFFFF] hover:shadow-none"
                  >
                    APPLY FOR THIS PROTOCOL
                  </a>
                  <button
                    onClick={() => setSelectedProgram(null)}
                    id="btn-modal-back"
                    className="px-6 py-3 bg-brand-black hover:bg-zinc-900 text-zinc-400 hover:text-brand-silver border-2 border-zinc-800 hover:border-zinc-500 font-display text-sm uppercase -skew-x-[10deg] transition-all"
                  >
                    DISMISS
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
