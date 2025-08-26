import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TokenomicsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TokenomicsModal: React.FC<TokenomicsModalProps> = ({ isOpen, onClose }) => {
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
                backgroundColor: i % 3 === 0 ? 'rgba(34,197,94,0.6)' : i % 3 === 1 ? 'rgba(147,51,234,0.6)' : 'rgba(255,255,255,0.4)',
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
                className="absolute w-1 h-1 bg-neon-green/30 rounded-full twinkle"
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
              <div className="text-6xl mb-4">💰</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
                <span className="bg-gradient-to-r from-neon-green via-accent to-primary bg-clip-text text-transparent">
                  $SNORE Tokenomics
                </span>
              </h1>
            </div>

            <div className="prose prose-lg prose-invert max-w-none space-y-8">
              <section>
                <div className="glass-card p-6 text-center mb-8">
                  <h2 className="text-3xl font-bold text-neon-green mb-4">
                    Total Supply: 420,000,000,000 $SNORE
                  </h2>
                  <p className="text-lg text-accent">Launch: Stealth + LP Lock</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                  📊 Allocations
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="glass-card p-6 relative overflow-hidden">
                    <div className="absolute top-4 right-4 text-4xl opacity-20">🔒</div>
                    <h3 className="text-xl font-bold text-neon-green mb-2">Liquidity Pool</h3>
                    <div className="text-3xl font-bold text-neon-green mb-2">70%</div>
                    <p className="text-foreground/85">(locked)</p>
                  </div>
                  
                  <div className="glass-card p-6 relative overflow-hidden">
                    <div className="absolute top-4 right-4 text-4xl opacity-20">🎁</div>
                    <h3 className="text-xl font-bold text-accent mb-2">Community Incentives</h3>
                    <div className="text-3xl font-bold text-accent mb-2">10%</div>
                    <p className="text-foreground/85">(airdrops, meme contests, staking when live)</p>
                  </div>
                  
                  <div className="glass-card p-6 relative overflow-hidden">
                    <div className="absolute top-4 right-4 text-4xl opacity-20">📢</div>
                    <h3 className="text-xl font-bold text-neon-purple mb-2">Marketing</h3>
                    <div className="text-3xl font-bold text-neon-purple mb-2">10%</div>
                    <p className="text-foreground/85">(viral campaigns, influencer pushes, exchange listings)</p>
                  </div>
                  
                  <div className="glass-card p-6 relative overflow-hidden">
                    <div className="absolute top-4 right-4 text-4xl opacity-20">👥</div>
                    <h3 className="text-xl font-bold text-primary mb-2">Team</h3>
                    <div className="text-3xl font-bold text-primary mb-2">10%</div>
                    <p className="text-foreground/85">(vested for 12 months — showing long-term commitment)</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-accent mb-4 flex items-center gap-2">
                  🌟 Key Philosophy
                </h2>
                <div className="space-y-4">
                  <div className="glass-card p-4 border-l-4 border-neon-green">
                    <p className="text-lg font-medium text-neon-green">
                      Liquidity is the heart of trust → 70% locked.
                    </p>
                  </div>
                  <div className="glass-card p-4 border-l-4 border-primary">
                    <p className="text-lg font-medium text-primary">
                      Team only earns if $SNORE lasts.
                    </p>
                  </div>
                  <div className="glass-card p-4 border-l-4 border-accent">
                    <p className="text-lg font-medium text-accent">
                      Community is the meme engine → contests, airdrops, rewards.
                    </p>
                  </div>
                </div>
              </section>

              {/* Visual representation */}
              <section className="text-center">
                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Distribution Breakdown</h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-neon-green rounded-full"></div>
                      <span className="text-sm">Liquidity (70%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-accent rounded-full"></div>
                      <span className="text-sm">Community (10%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-neon-purple rounded-full"></div>
                      <span className="text-sm">Marketing (10%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-primary rounded-full"></div>
                      <span className="text-sm">Team (10%)</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsModal;