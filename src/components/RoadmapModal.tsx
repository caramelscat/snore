import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RoadmapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RoadmapModal: React.FC<RoadmapModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const phases = [
    {
      phase: "Phase 1: Dreaming Begins",
      period: "Months 0–3",
      emoji: "🌱",
      color: "neon-green",
      items: [
        "Stealth launch on Solana + LP lock.",
        "Deploy website, socials, and whitepaper.",
        "Organic community growth through memes & virality.",
        "First meme contests + community airdrops."
      ]
    },
    {
      phase: "Phase 2: The Nap",
      period: "Months 3–6",
      emoji: "😴",
      color: "primary",
      items: [
        "Initial marketing push (Twitter/X, Telegram, TikTok).",
        "First small CEX listing.",
        "Merch mockups (pillows, eye masks, plushies).",
        "Partnerships with meme pages + influencers."
      ]
    },
    {
      phase: "Phase 3: REM Cycle",
      period: "Months 6–9",
      emoji: "🌙",
      color: "neon-purple",
      items: [
        "Expand ecosystem awareness → meme-to-brand.",
        "Larger CEX listings.",
        "Community-driven NFT art drops (sleep-themed).",
        "Global meme competition."
      ]
    },
    {
      phase: "Phase 4: Awakening",
      period: "Months 9–12",
      emoji: "🚀",
      color: "accent",
      items: [
        "$SNORE becomes a recognizable brand.",
        "Strategic partnerships (possible tie-ins with wellness/sleep brands).",
        "Explore staking, merch store, and gamified \"sleep-to-earn\" concept.",
        "Roadmap scaling beyond 12 months (2+ years)."
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with dreamy sparkles */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      >
        {/* Floating sparkles in background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: i % 4 === 0 ? 'rgba(34,197,94,0.6)' : i % 4 === 1 ? 'rgba(147,51,234,0.6)' : i % 4 === 2 ? 'rgba(59,130,246,0.6)' : 'rgba(255,255,255,0.4)',
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Modal Content */}
      <div className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden animate-slide-in-up">
        <div className="glass-card p-8 md:p-12 relative overflow-y-auto max-h-[90vh] cosmic-reader">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 p-2 rounded-full glass-button hover:shadow-[0_0_20px_hsl(var(--destructive)/0.5)] transition-all duration-300 group"
          >
            <X className="w-6 h-6 text-foreground/80 group-hover:text-destructive transition-colors" />
          </button>

          {/* Floating stars inside modal */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-accent/30 rounded-full twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 space-y-8">
            <div className="text-center mb-12">
              <div className="text-6xl mb-4">🗺️</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
                <span className="bg-gradient-to-r from-accent via-neon-purple to-neon-green bg-clip-text text-transparent">
                  $SNORE Roadmap
                </span>
              </h1>
            </div>

            <div className="space-y-8">
              {phases.map((phase, index) => (
                <div key={index} className="relative">
                  {/* Connection line to next phase */}
                  {index < phases.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-current to-transparent opacity-30" />
                  )}
                  
                  <div className="glass-card p-6 relative overflow-hidden hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-500 group">
                    {/* Phase indicator */}
                    <div className="absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-40 transition-opacity">
                      {phase.emoji}
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className={`text-4xl p-3 rounded-full glass-button text-${phase.color} glow-pulse`}>
                        {phase.emoji}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h2 className={`text-2xl font-bold text-${phase.color} mb-2 md:mb-0`}>
                            {phase.phase}
                          </h2>
                          <span className="text-sm text-foreground/70 bg-black/20 px-3 py-1 rounded-full border border-glass-border">
                            {phase.period}
                          </span>
                        </div>
                        
                        <ul className="space-y-3">
                          {phase.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-3 text-foreground/90">
                              <div className={`w-2 h-2 bg-${phase.color} rounded-full mt-2 flex-shrink-0`} />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Future vision */}
            <div className="glass-card p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${2 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
              <div className="text-5xl mb-4 relative z-10">✨</div>
              <h3 className="text-2xl font-bold text-glow mb-4 relative z-10">
                Beyond the Roadmap
              </h3>
              <p className="text-lg text-foreground/90 max-w-2xl mx-auto leading-relaxed relative z-10">
                The journey doesn't end here. As our community grows and dreams evolve, 
                so will our roadmap. The best ideas often come from the sleepiest minds. 🦥💤
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapModal;