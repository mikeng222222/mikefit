import React, { useState } from 'react';
import { ShieldCheck, Flame, Zap, Check, Lock, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface MembershipSliderProps {
  onSelectPlan: (planName: string, price: number) => void;
}

export default function MembershipSlider({ onSelectPlan }: MembershipSliderProps) {
  const [frequency, setFrequency] = useState(1); // 0 = 3 days/week, 1 = 5 days/week, 2 = UNLIMITED
  const [locker, setLocker] = useState(false);
  const [coaching, setCoaching] = useState(false);
  const [merch, setMerch] = useState(false);

  const freqOptions = [
    { label: 'RECON / 3 DAYS', basePrice: 49, description: 'Standard industrial gym access. Ideal for general power-maintenance.' },
    { label: 'TACTICAL / 5 DAYS', basePrice: 79, description: 'High-voltage conditioning. Full access to heavy cages and tactical mats.' },
    { label: 'WARLORD / UNLIMITED', basePrice: 109, description: 'Non-stop raw strength. 24/7 keycard, heavy iron, and zero compromise.' }
  ];

  const currentOption = freqOptions[frequency];
  let totalPrice = currentOption.basePrice;
  if (locker) totalPrice += 15;
  if (coaching) totalPrice += 50;
  if (merch) totalPrice += 20;

  const handleSelect = () => {
    onSelectPlan(currentOption.label.split(' / ')[1] + ' Tier with Add-ons', totalPrice);
  };

  return (
    <div id="membership-planner" className="border-4 border-brand-silver bg-brand-black p-6 relative overflow-hidden -skew-y-[1deg] shadow-[8px_8px_0px_#EA0000]">
      {/* Red grid decoration */}
      <div className="absolute inset-y-0 right-0 w-1/3 bg-accent/5 pointer-events-none skew-x-12"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <Zap size={18} className="text-accent animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-accent font-bold uppercase">Membership Customizer</span>
        </div>
        
        <h3 className="font-display text-3xl text-brand-silver uppercase tracking-tight mb-4">
          BUILD YOUR <span className="text-stroke-accent">TIER OF PAIN</span>
        </h3>

        <p className="text-xs text-zinc-400 uppercase mb-6 leading-relaxed">
          Configure your access protocol. Add specialized industrial tools and real-time coaching variables below.
        </p>

        {/* Access Frequency Tabs */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          {freqOptions.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => setFrequency(idx)}
              id={`freq-btn-${idx}`}
              className={`p-3 text-left border-2 transition-all duration-150 relative overflow-hidden -skew-x-[10deg] ${
                frequency === idx
                  ? 'bg-brand-gray border-accent text-brand-silver'
                  : 'bg-zinc-950 border-zinc-900 text-zinc-500 hover:border-zinc-700'
              }`}
            >
              <div className="font-display text-xs md:text-sm uppercase tracking-tight">
                {opt.label.split(' / ')[0]}
              </div>
              <div className="font-display text-lg md:text-xl text-accent mt-1">
                ${opt.basePrice}<span className="text-[10px] text-zinc-500 font-mono">/MO</span>
              </div>
            </button>
          ))}
        </div>

        {/* Selected Tier Description */}
        <div className="bg-brand-gray/60 p-4 border border-zinc-800 mb-6 -skew-x-[2deg]">
          <span className="block text-[10px] font-mono uppercase text-accent font-bold tracking-wider mb-1">
            SELECTED ENVELOPE: {currentOption.label}
          </span>
          <p className="text-xs text-zinc-300 leading-relaxed uppercase font-sans">
            {currentOption.description}
          </p>
        </div>

        {/* Add-on Matrix */}
        <div className="space-y-3 mb-6">
          <h4 className="text-[10px] font-display uppercase tracking-widest text-zinc-500 border-b border-zinc-800 pb-1">
            ADDITIONAL COMBAT AUGMENTATIONS
          </h4>

          {/* Addon 1 */}
          <button
            onClick={() => setLocker(!locker)}
            id="addon-locker"
            className={`w-full flex items-center justify-between p-3 border-2 transition-all -skew-x-[5deg] ${
              locker ? 'bg-accent/10 border-accent/60 text-brand-silver' : 'bg-brand-black border-zinc-900 text-zinc-400 hover:border-zinc-800'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-4 h-4 border flex items-center justify-center rounded-none ${locker ? 'bg-accent border-brand-silver' : 'border-zinc-700'}`}>
                {locker && <Check size={12} className="text-brand-black stroke-[4px]" />}
              </div>
              <div className="text-left">
                <span className="block text-xs font-display uppercase tracking-tight">LOCKER + RECOVERY PROTOCOL</span>
                <span className="block text-[9px] text-zinc-500 uppercase font-mono">Personal safe locker, infrared sauna access, and ice pools.</span>
              </div>
            </div>
            <span className="font-display text-sm text-accent">+$15/MO</span>
          </button>

          {/* Addon 2 */}
          <button
            onClick={() => setCoaching(!coaching)}
            id="addon-coaching"
            className={`w-full flex items-center justify-between p-3 border-2 transition-all -skew-x-[5deg] ${
              coaching ? 'bg-accent/10 border-accent/60 text-brand-silver' : 'bg-brand-black border-zinc-900 text-zinc-400 hover:border-zinc-800'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-4 h-4 border flex items-center justify-center rounded-none ${coaching ? 'bg-accent border-brand-silver' : 'border-zinc-700'}`}>
                {coaching && <Check size={12} className="text-brand-black stroke-[4px]" />}
              </div>
              <div className="text-left">
                <span className="block text-xs font-display uppercase tracking-tight">RAW STRENGTH COACHING</span>
                <span className="block text-[9px] text-zinc-500 uppercase font-mono">Personalized biometric review and custom weekly loading programs.</span>
              </div>
            </div>
            <span className="font-display text-sm text-accent">+$50/MO</span>
          </button>

          {/* Addon 3 */}
          <button
            onClick={() => setMerch(!merch)}
            id="addon-merch"
            className={`w-full flex items-center justify-between p-3 border-2 transition-all -skew-x-[5deg] ${
              merch ? 'bg-accent/10 border-accent/60 text-brand-silver' : 'bg-brand-black border-zinc-900 text-zinc-400 hover:border-zinc-800'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-4 h-4 border flex items-center justify-center rounded-none ${merch ? 'bg-accent border-brand-silver' : 'border-zinc-700'}`}>
                {merch && <Check size={12} className="text-brand-black stroke-[4px]" />}
              </div>
              <div className="text-left">
                <span className="block text-xs font-display uppercase tracking-tight">HEAVY DUTY GEAR DROPS</span>
                <span className="block text-[9px] text-zinc-500 uppercase font-mono">MIKEFIT custom industrial strap, raw chalk, and performance tee monthly.</span>
              </div>
            </div>
            <span className="font-display text-sm text-accent">+$20/MO</span>
          </button>
        </div>

        {/* Aggressive Price Display and Action Button */}
        <div className="border-t-4 border-dashed border-zinc-800 pt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="block text-[10px] text-zinc-500 font-mono uppercase tracking-widest font-bold">TOTAL ESTIMATE</span>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-5xl text-brand-silver tracking-tight">
                ${totalPrice}
              </span>
              <span className="text-xs text-zinc-500 font-mono uppercase">/ MONTHLY</span>
            </div>
          </div>

          <button
            onClick={handleSelect}
            id="btn-select-custom-plan"
            className="w-full sm:w-auto px-6 py-4 bg-accent hover:bg-brand-silver text-brand-black hover:text-brand-black font-display text-lg uppercase font-bold tracking-wider border-2 border-brand-silver transition-all duration-150 hover:-translate-y-1 hover:translate-x-1 active:translate-y-0 active:translate-x-0 -skew-x-[12deg] shadow-[4px_4px_0px_#FFFFFF] hover:shadow-none"
          >
            LOCK IN PROTOCOL
          </button>
        </div>

        {/* Disclaimer */}
        <div className="mt-4 text-center">
          <span className="text-[9px] text-zinc-600 uppercase font-mono">
            *No sign-up fee. Standard terms of pain apply. Exit anytime after 3 months.
          </span>
        </div>
      </div>
    </div>
  );
}
