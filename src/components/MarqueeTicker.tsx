import React from 'react';

interface MarqueeProps {
  texts: string[];
  reverse?: boolean;
  speed?: 'slow' | 'medium' | 'fast';
}

export default function MarqueeTicker({ texts, reverse = false, speed = 'medium' }: MarqueeProps) {
  const duration = speed === 'fast' ? '15s' : speed === 'slow' ? '40s' : '25s';
  
  // Duplicate texts to make it seamless
  const repeatedTexts = [...texts, ...texts, ...texts, ...texts];

  return (
    <div className="relative w-full overflow-hidden bg-accent text-brand-black py-4 border-y-4 border-brand-silver -skew-y-2 select-none z-10">
      <div 
        className="flex whitespace-nowrap gap-12 text-2xl md:text-4xl font-display uppercase tracking-widest"
        style={{
          animation: `marquee ${duration} linear infinite ${reverse ? 'reverse' : 'normal'}`,
        }}
      >
        {repeatedTexts.map((text, idx) => (
          <span key={idx} className="flex items-center gap-6">
            <span>{text}</span>
            <span className="w-3 h-3 bg-brand-black rounded-none rotate-45 inline-block"></span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
      `}</style>
    </div>
  );
}
