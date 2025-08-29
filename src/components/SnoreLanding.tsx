import React, { useState, useEffect } from 'react';
import { GlassButton } from './GlassButton';
import FloatingParticles from './FloatingParticles';
import SocialFloatingIcons from './SocialFloatingIcons';
import SlothChatbox from './SlothChatbox';
import MissionModal from './MissionModal';
import AboutModal from './AboutModal';
import WhitepaperModal from './WhitepaperModal';
import TokenomicsModal from './TokenomicsModal';
import RoadmapModal from './RoadmapModal';
import EmailModal from './EmailModal';
import NewsletterForm from './NewsletterForm';
import slothSpaceImage from '@/assets/sloth-space.png';
import slothMoneyMachineImage from '@/assets/sloth-money-machine.png';

const SnoreLanding: React.FC = () => {
  const [isMissionModalOpen, setIsMissionModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isWhitepaperModalOpen, setIsWhitepaperModalOpen] = useState(false);
  const [isTokenomicsModalOpen, setIsTokenomicsModalOpen] = useState(false);
  const [isRoadmapModalOpen, setIsRoadmapModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <FloatingParticles />
      <SocialFloatingIcons onContactClick={() => setIsEmailModalOpen(true)} />
      
      {/* Top Navigation Buttons */}
      <div className="fixed top-8 left-8 z-50">
        <GlassButton 
          variant="secondary" 
          size="sm"
          onClick={() => setIsAboutModalOpen(true)}
        >
          About Our Dream
        </GlassButton>
      </div>
      <div className="fixed top-8 right-8 z-50">
        <GlassButton 
          variant="secondary" 
          size="sm"
          onClick={() => setIsMissionModalOpen(true)}
        >
          Our Mission
        </GlassButton>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 parallax-slow"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
          <img 
            src={slothSpaceImage}
            alt="Sleeping sloth in space with money and rocket"
            className="w-full h-full object-cover object-center breathe mobile-bg-fix"
          />
          
          {/* Enhanced twinkling stars overlay */}
          <div className="absolute inset-0">
            {[...Array(80)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full twinkle-enhanced"
                style={{
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  backgroundColor: i % 4 === 0 ? 'rgba(147,51,234,0.8)' : i % 4 === 1 ? 'rgba(59,130,246,0.8)' : i % 4 === 2 ? 'rgba(236,72,153,0.8)' : 'rgba(255,255,255,0.9)',
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${2 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>

          {/* Shooting stars */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute shooting-star"
                style={{
                  animationDelay: `${i * 3}s`,
                  top: `${Math.random() * 50}%`,
                  left: `-10px`
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col justify-center min-h-screen">
          {/* Title Card Only */}
          <div className="glass-card mb-6 md:mb-8 relative overflow-hidden">
            {/* Floating stars inside card */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white/70 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-2 text-glow relative z-10">
              <span className="bg-gradient-to-r from-primary via-accent to-neon-purple bg-clip-text text-transparent">
                $SNORE
              </span>
            </h1>
          </div>

          {/* Floating ZZZ particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute text-2xl text-primary/60 floating-delayed"
                style={{
                  left: `${20 + i * 10}%`,
                  top: `${30 + (i % 3) * 20}%`,
                  animationDelay: `${i * 0.5}s`
                }}
              >
                Z
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Money Machine Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20">
        <div 
          className="absolute inset-0 parallax-slow"
          style={{ transform: `translateY(${(scrollY - 800) * 0.3}px)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
          <img 
            src={slothMoneyMachineImage}
            alt="Sloth sleeping on money printing machine"
            className="w-full h-full object-cover floating"
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Main Content - Positioned at start of money machine section */}
          <div className="relative mb-8">
            {/* Description Card */}
            <div className="glass-card relative overflow-hidden mb-6 md:mb-8 mx-auto max-w-4xl">
              {/* Floating stars inside card */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-accent/60 rounded-full animate-bounce"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 4}s`,
                      animationDuration: `${3 + Math.random() * 3}s`
                    }}
                  />
                ))}
              </div>
              <div className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed relative z-10 space-y-4 mb-8">
                <p className="cosmic-text">
                  A living lore where the sloth travels the 'akashic field,' snoring Zzz's that become stars, and sometimes, opportunities.
                </p>
                <p className="cosmic-text">
                  Close your eyes, open your mind. Collect the story, not just the token.
                </p>
                <p className="cosmic-text">
                  Share art, remix the sloth, invite a friend to rest.
                </p>
                <p className="cosmic-text font-semibold text-primary text-glow">
                  The calmer we get, the louder the signal becomes.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center relative z-10 max-w-2xl mx-auto">
                <GlassButton 
                  variant="hero" 
                  size="lg"
                  onClick={() => setIsAboutModalOpen(true)}
                  className="w-full sm:w-auto"
                >
                  About Our Dream
                </GlassButton>
                <GlassButton 
                  variant="secondary" 
                  size="lg"
                  onClick={() => setIsMissionModalOpen(true)}
                  className="w-full sm:w-auto"
                >
                  Our Mission
                </GlassButton>
              </div>
            </div>
          </div>

          {/* Your Role Section */}
          <div className="glass-card mb-8 relative overflow-hidden">
            {/* Floating stars inside card */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/50 rounded-full twinkle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary relative z-10">
              Your Role
            </h3>
            <p className="text-lg text-foreground/95 leading-relaxed max-w-2xl mx-auto relative z-10">
              Close your eyes; open your mind. Collect the story, not just the token. 
              Share art, remix the sloth, invite a friend to rest. The calmer we get, 
              the louder the signal becomes.
            </p>
          </div>

          <div className="glass-card relative overflow-hidden">
            {/* Floating stars inside main card */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-neon-purple/40 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${2 + Math.random() * 4}s`
                  }}
                />
              ))}
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-glow relative z-10">
              Sleep. Earn. Repeat.
            </h2>
            <p className="text-xl mb-12 text-foreground/90 leading-relaxed relative z-10">
              While others stress about market movements, our community embraces the zen of passive wealth building. 
              Join the sleepy revolution where dreams become reality.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12 relative z-10">
              <div className="glass-card relative overflow-hidden">
                {/* Stars in feature card */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
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
                <div className="text-4xl mb-4 relative z-10">🦥</div>
                <h3 className="text-xl font-semibold mb-2 text-primary relative z-10">Relax & Hold</h3>
                <p className="text-foreground/85 relative z-10">No stress, no rush. Good things come to sloths who wait.</p>
              </div>
              <div className="glass-card relative overflow-hidden">
                {/* Stars in feature card */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-accent/60 rounded-full animate-bounce"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${2 + Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
                <div className="text-4xl mb-4 relative z-10">💰</div>
                <h3 className="text-xl font-semibold mb-2 text-accent relative z-10">Dream Rewards</h3>
                <p className="text-foreground/85 relative z-10">Earn while you sleep through our innovative staking mechanisms.</p>
              </div>
              <div className="glass-card relative overflow-hidden">
                {/* Stars in feature card */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-neon-purple/60 rounded-full animate-pulse"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 4}s`,
                        animationDuration: `${1.5 + Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
                <div className="text-4xl mb-4 relative z-10">🚀</div>
                <h3 className="text-xl font-semibold mb-2 text-neon-purple relative z-10">Slow & Steady</h3>
                <p className="text-foreground/85 relative z-10">Sustainable growth that doesn't require constant attention.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="glass-card max-w-3xl mx-auto mb-12 relative overflow-hidden">
            {/* Floating stars inside card */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white/50 rounded-full twinkle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`
                  }}
                />
              ))}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow relative z-10">
              Join the Sleepy Community
            </h2>
            <p className="text-xl text-foreground/85 relative z-10">
              Get updates, sleep tips, and exclusive early access to $SNORE features.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </section>

      {/* Cosmic Manifesto Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="glass-card max-w-4xl mx-auto text-center relative overflow-hidden">
            {/* Magical floating stars inside manifesto */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(25)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full animate-pulse"
                  style={{
                    width: `${Math.random() * 3 + 1}px`,
                    height: `${Math.random() * 3 + 1}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    backgroundColor: i % 3 === 0 ? 'rgba(255,255,255,0.6)' : i % 3 === 1 ? 'rgba(147,51,234,0.4)' : 'rgba(34,197,94,0.4)',
                    animationDelay: `${Math.random() * 6}s`,
                    animationDuration: `${2 + Math.random() * 4}s`
                  }}
                />
              ))}
            </div>
            <div className="text-4xl mb-6 relative z-10">🌙</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-glow relative z-10">
              The Cosmic Manifesto of $SNORE
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-foreground/95 leading-relaxed max-w-3xl mx-auto relative z-10">
              <p className="italic">In the beginning, there was noise.<br />
              Charts screamed, feeds scrolled endlessly, and the world forgot how to rest.</p>
              
              <p>Then came the sloth.<br />
              Slow, floating, snoring—he carried a reminder from the akashic field:</p>
              
              <div className="text-primary font-semibold text-xl md:text-2xl space-y-2">
                <p>Rest is alpha.</p>
                <p>Culture compounds.</p>
                <p>Dreams create value.</p>
              </div>
              
              <p>$SNORE is not just a coin. It is a pause button for the digital world.<br />
              A community that grows even when you close your eyes.<br />
              A story that proves: sometimes the best move is no move at all.</p>
              
              <p className="text-accent font-medium">Sleep on it.<br />
              Wake up richer—in memes, in culture, in connection.</p>
              
              <p className="text-2xl font-bold text-glow">
                Welcome to the dream loop. 🦥💤✨
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-glass-border">
        <div className="container mx-auto px-4 text-center">
          <div className="glass-card max-w-2xl mx-auto relative overflow-hidden">
            {/* Floating stars inside footer card */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/40 rounded-full twinkle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 4}s`
                  }}
                />
              ))}
            </div>
            <div className="text-6xl mb-4 relative z-10">🦥</div>
            <h3 className="text-2xl font-bold mb-4 text-primary relative z-10">Sweet Dreams</h3>
            <p className="text-foreground/85 mb-6 relative z-10">
              Remember: The best investors are often the sleepiest ones. 
              Let $SNORE work while you rest.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <GlassButton 
                variant="secondary" 
                size="sm"
                onClick={() => setIsWhitepaperModalOpen(true)}
                className="hover:shadow-[0_0_20px_hsl(var(--neon-purple)/0.6)] transition-all duration-300"
              >
                📄 Whitepaper
              </GlassButton>
              <GlassButton 
                variant="secondary" 
                size="sm"
                onClick={() => setIsTokenomicsModalOpen(true)}
                className="hover:shadow-[0_0_20px_hsl(var(--neon-green)/0.6)] transition-all duration-300"
              >
                💰 Tokenomics
              </GlassButton>
              <GlassButton 
                variant="secondary" 
                size="sm"
                onClick={() => setIsRoadmapModalOpen(true)}
                className="hover:shadow-[0_0_20px_hsl(var(--accent)/0.6)] transition-all duration-300"
              >
                🗺️ Roadmap
              </GlassButton>
            </div>
          </div>
        </div>
      </footer>

      <MissionModal 
        isOpen={isMissionModalOpen} 
        onClose={() => setIsMissionModalOpen(false)} 
      />
      <AboutModal 
        isOpen={isAboutModalOpen} 
        onClose={() => setIsAboutModalOpen(false)} 
      />
      <WhitepaperModal 
        isOpen={isWhitepaperModalOpen} 
        onClose={() => setIsWhitepaperModalOpen(false)} 
      />
      <TokenomicsModal 
        isOpen={isTokenomicsModalOpen} 
        onClose={() => setIsTokenomicsModalOpen(false)} 
      />
      <RoadmapModal 
        isOpen={isRoadmapModalOpen} 
        onClose={() => setIsRoadmapModalOpen(false)} 
      />
      <EmailModal 
        isOpen={isEmailModalOpen} 
        onClose={() => setIsEmailModalOpen(false)} 
      />
      
      <SlothChatbox />
    </div>
  );
};

export default SnoreLanding;