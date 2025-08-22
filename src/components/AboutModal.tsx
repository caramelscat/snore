import React from 'react';
import { X } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative glass-card max-w-4xl w-full max-h-[80vh] overflow-y-auto fade-in-scale">
        {/* Floating stars inside modal */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: i % 4 === 0 ? 'rgba(255,255,255,0.8)' : i % 4 === 1 ? 'rgba(147,51,234,0.6)' : i % 4 === 2 ? 'rgba(34,197,94,0.6)' : 'rgba(59,130,246,0.6)',
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${2 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full glass-bg flex items-center justify-center hover:bg-white/20 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="pr-16 relative z-10">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">🦥💤</div>
            <h2 className="text-4xl font-bold text-glow">Meet the Sloth</h2>
          </div>
          
          <div className="space-y-8 text-foreground/95 leading-relaxed">
            <div className="text-center text-lg">
              <p>Every movement needs a face. Every meme needs a mascot.</p>
              <p>For $SNORE, that face is the sloth who sleeps, dreams, and somehow prints money while doing it.</p>
            </div>

            <div className="glass-card relative overflow-hidden">
              {/* Stars in section card */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/60 rounded-full twinkle"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`
                    }}
                  />
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary relative z-10">Who He Is</h3>
              <p className="relative z-10">
                He's not lazy—he's wise. In a world that never stops scrolling, trading, refreshing charts, and burning out, our sloth whispers the ancient truth: <span className="text-accent font-semibold">"rest is alpha."</span>
              </p>
              <p className="mt-4 relative z-10">
                He sleeps on a bed of dollar bills, floats through cosmic skies, and snores out Zzz's that drift upward into the stars. Each Zzz is a dream, a meme, and a signal that spreads across the digital world.
              </p>
            </div>

            <div className="glass-card relative overflow-hidden">
              {/* Stars in section card */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-neon-purple/50 rounded-full animate-bounce"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 4}s`,
                      animationDuration: `${2 + Math.random() * 3}s`
                    }}
                  />
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neon-purple relative z-10">What He Represents</h3>
              <div className="space-y-4 relative z-10">
                <p><span className="text-primary font-semibold">Patience in chaos.</span> While others chase every pump, the sloth knows great memes (and wealth) come to those who chill.</p>
                <p><span className="text-accent font-semibold">Effortless abundance.</span> He doesn't grind—yet the money printer hums. That's not a promise, it's a metaphor: when culture compounds, value flows.</p>
                <p><span className="text-neon-purple font-semibold">Universality.</span> We all sleep. We all dream. That's why this meme is bigger than any one chain or chart—it's a story everyone can join.</p>
              </div>
            </div>

            <div className="glass-card relative overflow-hidden">
              {/* Stars in section card */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-accent/70 rounded-full animate-pulse"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 5}s`,
                      animationDuration: `${1.5 + Math.random() * 3}s`
                    }}
                  />
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-accent relative z-10">Why It Matters</h3>
              <p className="relative z-10">
                The sloth isn't just a mascot. He's a reminder. A meme economy can be funny and beautiful. It can feel less like speculation and more like storytelling. And sometimes, the best thing you can do for your bags… is to close your eyes and let the culture do its thing.
              </p>
            </div>

            <div className="glass-card bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
              {/* Special stars for final section */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full twinkle"
                    style={{
                      width: `${Math.random() * 3 + 1}px`,
                      height: `${Math.random() * 3 + 1}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      backgroundColor: 'rgba(255,255,255,0.9)',
                      animationDelay: `${Math.random() * 4}s`
                    }}
                  />
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-glow relative z-10">Your Part in His Dream</h3>
              <p className="mb-4 relative z-10">
                Every holder, every artist, every dreamer keeps him flying. The more people believe in his story, the louder his snore becomes. And that's how memes turn into movements.
              </p>
              <p className="text-xl font-semibold text-glow relative z-10">
                Meet the sloth. Hold the dream. Sleep on it.
              </p>
              <p className="text-lg text-primary font-medium relative z-10">
                Because in this corner of Web3… sleeping is winning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;