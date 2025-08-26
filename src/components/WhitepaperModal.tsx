import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WhitepaperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WhitepaperModal: React.FC<WhitepaperModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
                backgroundColor: i % 3 === 0 ? 'rgba(147,51,234,0.6)' : i % 3 === 1 ? 'rgba(34,197,94,0.6)' : 'rgba(255,255,255,0.4)',
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Modal Content */}
      <div className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden animate-slide-in-up">
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
                className="absolute w-1 h-1 bg-primary/30 rounded-full twinkle"
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
              <div className="text-6xl mb-4">📄</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
                <span className="bg-gradient-to-r from-neon-purple via-primary to-accent bg-clip-text text-transparent">
                  $SNORE Whitepaper
                </span>
              </h1>
              <p className="text-xl text-accent font-medium italic">
                "Sleep. Hold. Dream. Earn."
              </p>
            </div>

            <div className="prose prose-lg prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-neon-purple mb-4 flex items-center gap-2">
                  🌟 Introduction
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  In a world that never sleeps, $SNORE is the ultimate rebellion — a Solana-based meme coin that proves you can literally make money while you sleep. No complex charts, no endless whitepapers full of jargon. Just a simple, culture-first coin that thrives on humor, community, and virality.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  $SNORE isn't just a token; it's a movement for dreamers, night owls, nappers, and degens who believe passive income should be as effortless as closing your eyes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neon-green mb-4 flex items-center gap-2">
                  ⚡ Why Solana?
                </h2>
                <p className="text-foreground/90 leading-relaxed">
                  We chose Solana because speed and scalability matter when memes go viral. With ultra-low fees, lightning-fast transactions, and a thriving meme ecosystem, Solana ensures $SNORE won't lag behind when the dream turns into a frenzy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  🦥 Core Narrative
                </h2>
                <div className="space-y-4">
                  <div className="glass-card p-4">
                    <h3 className="text-lg font-semibold text-accent mb-2">Pure Meme Energy</h3>
                    <p className="text-foreground/85">No fake promises, no over-complication. $SNORE is pure meme culture distilled into a token.</p>
                  </div>
                  <div className="glass-card p-4">
                    <h3 className="text-lg font-semibold text-neon-purple mb-2">Community First</h3>
                    <p className="text-foreground/85">90% of supply goes directly to liquidity + community.</p>
                  </div>
                  <div className="glass-card p-4">
                    <h3 className="text-lg font-semibold text-neon-green mb-2">Culture Movement</h3>
                    <p className="text-foreground/85">$SNORE is built to evolve — starting as a meme, growing into a brand, and possibly more.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent mb-4 flex items-center gap-2">
                  🌙 Vision
                </h2>
                <div className="glass-card p-6 text-center">
                  <p className="text-xl text-foreground/95 leading-relaxed">
                    The dream is simple: to become the most recognized sleep-themed token in the world, 
                    a cultural symbol that represents resting while your bag grows.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhitepaperModal;