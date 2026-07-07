import React, { useState } from 'react';
import { Dumbbell, Plus, Minus, Info } from 'lucide-react';
import { motion } from 'motion/react';

export default function OneRepMaxCalculator() {
  const [lift, setLift] = useState('deadlift');
  const [weight, setWeight] = useState(225);
  const [reps, setReps] = useState(5);
  const [showFormulaInfo, setShowFormulaInfo] = useState(false);

  // Epley Formula: 1RM = w * (1 + r/30)
  const estimatedMax = Math.round(weight * (1 + reps / 30));

  const percentages = [
    { pct: 95, label: '95% (Heavy Triple)', weight: Math.round(estimatedMax * 0.95), reps: '2 reps' },
    { pct: 90, label: '90% (Power Set)', weight: Math.round(estimatedMax * 0.90), reps: '3-4 reps' },
    { pct: 85, label: '85% (Strength Block)', weight: Math.round(estimatedMax * 0.85), reps: '5-6 reps' },
    { pct: 80, label: '80% (Hypertrophy)', weight: Math.round(estimatedMax * 0.80), reps: '8 reps' },
    { pct: 70, label: '70% (Speed/Endurance)', weight: Math.round(estimatedMax * 0.70), reps: '12 reps' },
  ];

  const handleWeightChange = (val: number) => {
    setWeight(Math.max(1, weight + val));
  };

  const handleRepsChange = (val: number) => {
    setReps(Math.max(1, Math.min(20, reps + val)));
  };

  return (
    <div id="calculator-section" className="border-4 border-brand-silver bg-brand-gray p-6 relative overflow-hidden -skew-x-[2deg] shadow-[8px_8px_0px_#EA0000]">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:10px_10px]"></div>

      {/* Skewed Badge */}
      <div className="absolute top-0 right-0 bg-accent text-brand-black px-4 py-1 font-display text-sm uppercase font-bold -skew-x-[15deg] transform translate-x-1 -translate-y-0.5 border-l-2 border-b-2 border-brand-silver">
        Strength Engine v1.0
      </div>

      <div className="relative z-10">
        <h3 className="font-display text-3xl text-brand-silver uppercase tracking-tight mb-2">
          ESTIMATE YOUR <span className="text-accent">1-REP MAX</span>
        </h3>
        <p className="text-xs text-zinc-400 uppercase tracking-wider mb-6">
          Calculate your absolute power limit. Select lift type, enter weight and reps.
        </p>

        {/* Lift selector tabs */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          {['deadlift', 'squat', 'bench', 'overhead'].map((type) => (
            <button
              key={type}
              onClick={() => setLift(type)}
              id={`tab-${type}`}
              className={`py-2 text-xs font-display uppercase border-2 transition-all duration-150 -skew-x-[5deg] ${
                lift === type
                  ? 'bg-accent border-brand-silver text-brand-black font-bold'
                  : 'bg-brand-black border-zinc-800 text-zinc-400 hover:border-zinc-500 hover:text-brand-silver'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Inputs row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Weight selector */}
          <div className="border-2 border-zinc-800 p-4 bg-brand-black relative">
            <label className="block text-xs font-display uppercase text-zinc-400 tracking-wider mb-2">
              WEIGHT LIFTED (LBS)
            </label>
            <div className="flex items-center justify-between">
              <button
                onClick={() => handleWeightChange(-10)}
                id="btn-sub-weight-10"
                className="w-10 h-10 border-2 border-zinc-800 hover:border-accent hover:text-accent flex items-center justify-center font-bold text-brand-silver bg-brand-gray transition-all"
              >
                -10
              </button>
              <span className="font-display text-3xl text-brand-silver">{weight}</span>
              <button
                onClick={() => handleWeightChange(10)}
                id="btn-add-weight-10"
                className="w-10 h-10 border-2 border-zinc-800 hover:border-accent hover:text-accent flex items-center justify-center font-bold text-brand-silver bg-brand-gray transition-all"
              >
                +10
              </button>
            </div>
            <input
              type="range"
              min="45"
              max="800"
              value={weight}
              onChange={(e) => setWeight(parseInt(e.target.value) || 45)}
              className="w-full mt-4 accent-accent cursor-pointer"
            />
          </div>

          {/* Reps selector */}
          <div className="border-2 border-zinc-800 p-4 bg-brand-black relative">
            <label className="block text-xs font-display uppercase text-zinc-400 tracking-wider mb-2">
              REPETITIONS
            </label>
            <div className="flex items-center justify-between">
              <button
                onClick={() => handleRepsChange(-1)}
                id="btn-sub-rep"
                className="w-10 h-10 border-2 border-zinc-800 hover:border-accent hover:text-accent flex items-center justify-center font-bold text-brand-silver bg-brand-gray transition-all"
              >
                <Minus size={16} />
              </button>
              <span className="font-display text-3xl text-brand-silver">{reps}</span>
              <button
                onClick={() => handleRepsChange(1)}
                id="btn-add-rep"
                className="w-10 h-10 border-2 border-zinc-800 hover:border-accent hover:text-accent flex items-center justify-center font-bold text-brand-silver bg-brand-gray transition-all"
              >
                <Plus size={16} />
              </button>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              value={reps}
              onChange={(e) => setReps(parseInt(e.target.value) || 1)}
              className="w-full mt-4 accent-accent cursor-pointer"
            />
          </div>
        </div>

        {/* Results Banner */}
        <div className="bg-brand-black border-l-4 border-accent p-4 flex items-center justify-between mb-6">
          <div>
            <span className="block text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
              ESTIMATED ONE REP MAX
            </span>
            <span className="font-display text-4xl text-brand-silver uppercase tracking-tight">
              {estimatedMax} <span className="text-xs text-accent">LBS</span>
            </span>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-zinc-400 text-xs justify-end">
              <button 
                onClick={() => setShowFormulaInfo(!showFormulaInfo)}
                className="hover:text-accent transition-colors"
                title="Formula details"
                id="btn-formula-info"
              >
                <Info size={14} />
              </button>
              <span className="uppercase text-[9px] tracking-widest font-mono">Epley Standard</span>
            </div>
            <div className="font-display text-lg text-accent uppercase">
              {lift === 'deadlift' ? 'MONSTER PULL' : lift === 'squat' ? 'IRON LEGS' : lift === 'bench' ? 'IRON CHEST' : 'SOLID SHOULDERS'}
            </div>
          </div>
        </div>

        {showFormulaInfo && (
          <motion.div 
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 p-3 bg-zinc-950 border border-zinc-800 text-xs text-zinc-400 font-mono"
          >
            Formula: 1RM = w * (1 + r/30). Recommended for heavy compound lifting. Real-life limits vary by fatigue, CNS activation, and execution.
          </motion.div>
        )}

        {/* Percentage matrix */}
        <div>
          <h4 className="text-xs font-display uppercase text-zinc-400 tracking-widest mb-3 border-b border-zinc-800 pb-1">
            TRAINING LOAD SPECTRUM
          </h4>
          <div className="space-y-2">
            {percentages.map((item) => (
              <div
                key={item.pct}
                className="flex items-center justify-between text-xs font-mono py-1.5 border-b border-zinc-900 hover:bg-zinc-950 px-1 transition-colors"
              >
                <span className="text-zinc-500 font-bold">{item.label}</span>
                <span className="text-brand-silver font-bold">
                  {item.weight} lbs <span className="text-[10px] text-accent">({item.reps})</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
