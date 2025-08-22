import React from 'react';
import { X } from 'lucide-react';

interface MissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MissionModal: React.FC<MissionModalProps> = ({ isOpen, onClose }) => {
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
          {[...Array(35)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-pulse"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: i % 5 === 0 ? 'rgba(255,255,255,0.9)' : i % 5 === 1 ? 'rgba(147,51,234,0.7)' : i % 5 === 2 ? 'rgba(34,197,94,0.7)' : i % 5 === 3 ? 'rgba(59,130,246,0.7)' : 'rgba(251,191,36,0.6)',
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${2 + Math.random() * 5}s`
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
            <div className="text-5xl mb-4">🌙</div>
            <h2 className="text-4xl font-bold text-glow">Our Mission: Sleep On It. Wake Up Richer.*</h2>
            <p className="text-sm text-foreground/70 mt-2">*figuratively, not financial advice.</p>
          </div>
          
          <div className="space-y-8 text-foreground/95 leading-relaxed">
            <div className="text-center text-lg font-medium">
              <p>We're building the first meme-native sleep economy.</p>
              <p className="mt-2">$SNORE is a playful revolt against 24/7 grind culture—the coin that proves you don't need to be chronically online to belong in web3. While the timeline chases every candle, our sloth reminds you: value compounds even when your eyes are closed.</p>
            </div>

            <div className="glass-card relative overflow-hidden">
              {/* Stars in section card */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-primary/60 rounded-full twinkle"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 4}s`
                    }}
                  />
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary relative z-10">Why Now</h3>
              <p className="relative z-10">
                Memes are the internet's fastest distribution system. Stories (doge, shiba, pepe, bonk) spread because they're simple, sticky, and sharable. $SNORE advances that playbook with a universal behavior—sleep—and a ritual the whole world practices daily. When culture meets circadian rhythm, you get an always-on meme that grows even when you're off.
              </p>
            </div>

            <div className="glass-card relative overflow-hidden">
              {/* Stars in section card */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-accent/70 rounded-full animate-bounce"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${2 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-accent relative z-10">What We're Making</h3>
              <div className="grid md:grid-cols-2 gap-4 relative z-10">
                <div className="space-y-3">
                  <p><span className="text-primary font-semibold">The dream loop</span> — a delight engine of animations, quests, and seasonal drops that reward showing up, chilling out, and sharing the vibe.</p>
                  <p><span className="text-accent font-semibold">Zzz-to-earn moments</span> — periodic community events where holding, contributing art, or simply being part of the story unlocks playful perks. No promises—just unexpected delight.</p>
                </div>
                <div className="space-y-3">
                  <p><span className="text-neon-purple font-semibold">The calmest brand in crypto</span> — apple-grade design, glass UI, and a sloth who floats across a starry sky printing memes (and occasionally, fortunes).</p>
                  <p><span className="text-primary font-semibold">Culture &gt; chart</span> — we optimize for narrative density, not noise. Fewer announcements, higher craft, stronger signals.</p>
                </div>
              </div>
            </div>

            <div className="glass-card relative overflow-hidden">
              {/* Stars in section card */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-neon-purple/60 rounded-full animate-pulse"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 5}s`,
                      animationDuration: `${2 + Math.random() * 3}s`
                    }}
                  />
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neon-purple relative z-10">What We Believe</h3>
              <div className="grid md:grid-cols-2 gap-4 text-lg relative z-10">
                <div className="space-y-2">
                  <p><span className="text-primary">Rest is alpha.</span> Clarity beats hurry.</p>
                  <p><span className="text-accent">Memes are infrastructure.</span> They route attention. Attention routes value.</p>
                </div>
                <div className="space-y-2">
                  <p><span className="text-neon-purple">Community is the protocol.</span> Art, humor, and shared rituals create gravity.</p>
                  <p><span className="text-primary">Delight compounds.</span> When people feel good here, they bring people here.</p>
                </div>
              </div>
            </div>

            <div className="glass-card relative overflow-hidden">
              {/* Stars in section card */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white/80 rounded-full twinkle"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 6}s`
                    }}
                  />
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-glow relative z-10">How We'll Play the Game (Differently)</h3>
              <div className="space-y-4 relative z-10">
                <p><span className="text-primary font-semibold">Story first:</span> a living lore where the sloth travels the "akashic canopy," snoring Zzz's that become stars—and sometimes, opportunities.</p>
                <p><span className="text-accent font-semibold">Drop cadence, not spam:</span> meticulously crafted releases that feel like product keynotes, not hype threads.</p>
                <p><span className="text-neon-purple font-semibold">Sleep-proof onboarding:</span> two-click join, wallet or email, and you're in the dream loop. Wake up, check the sky, smile.</p>
                <p><span className="text-primary font-semibold">Creator orbit:</span> artists, animators, and devs earn visibility in-app. The culture builds itself—slowly, beautifully.</p>
              </div>
            </div>

            <div className="glass-card bg-red-500/10 border-red-500/30 relative overflow-hidden">
              {/* Warning stars */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-red-400/60 rounded-full animate-pulse"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`
                    }}
                  />
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-red-400 relative z-10">What We Refuse</h3>
              <p className="text-red-300 relative z-10">
                No burnout marketing. No predatory FOMO. No fake urgency. If $SNORE isn't relaxing, it isn't $SNORE.
              </p>
            </div>

            <div className="glass-card relative overflow-hidden">
              {/* Stars in section card */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-accent/70 rounded-full animate-bounce"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 4}s`,
                      animationDuration: `${2 + Math.random() * 3}s`
                    }}
                  />
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-accent relative z-10">Your Role</h3>
              <p className="relative z-10">
                Close your eyes; open your mind. Collect the story, not just the token. Share art, remix the sloth, invite a friend to rest. The calmer we get, the louder the signal becomes.
              </p>
            </div>

            <div className="glass-card bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
              {/* Special stars for final section */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full twinkle"
                    style={{
                      width: `${Math.random() * 3 + 1}px`,
                      height: `${Math.random() * 3 + 1}px`,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      backgroundColor: 'rgba(255,255,255,0.9)',
                      animationDelay: `${Math.random() * 5}s`
                    }}
                  />
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-glow relative z-10">The Promise (of feeling, not finance)</h3>
              <p className="mb-4 relative z-10">
                We can't promise profits. We can promise taste, craft, humor, and a home on the internet that lets you breathe. If wealth arrives, it arrives because culture chose us—together.
              </p>
              <p className="text-2xl font-bold text-glow relative z-10">
                $SNORE — the meme you can sleep on.
              </p>
              <p className="text-xl text-primary font-medium relative z-10">
                Dream with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionModal;