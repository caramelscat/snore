import React, { useState, useEffect } from 'react';
import { GlassButton } from './GlassButton';
import FloatingParticles from './FloatingParticles';
import SocialFloatingIcons from './SocialFloatingIcons';
import MissionModal from './MissionModal';
import NewsletterForm from './NewsletterForm';
import slothSpaceImage from '@/assets/sloth-space.png';
import slothMoneyMachineImage from '@/assets/sloth-money-machine.png';

const SnoreLanding: React.FC = () => {
  const [isMissionModalOpen, setIsMissionModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <FloatingParticles />
      <SocialFloatingIcons />
      
      {/* Top Navigation Buttons */}
      <div className="fixed top-8 left-8 z-50">
        <GlassButton variant="secondary" size="sm">
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
            className="w-full h-full object-cover breathe"
          />
          
          {/* Twinkling stars overlay */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="slide-in-up opacity-0" style={{ animationDelay: '0.5s' }}>
            <h1 className="text-6xl md:text-8xl font-black mb-6 text-glow">
              <span className="bg-gradient-to-r from-primary via-accent to-neon-purple bg-clip-text text-transparent">
                $SNORE
              </span>
            </h1>
          </div>
          
          <div className="slide-in-up opacity-0" style={{ animationDelay: '1s' }}>
            <p className="text-xl md:text-2xl mb-8 text-foreground/90 max-w-2xl mx-auto leading-relaxed">
              The sleepy sloth that dreams of wealth while you sleep. 
              <br />
              <span className="text-primary font-medium">Snore your way to prosperity.</span>
            </p>
          </div>

          <div className="slide-in-up opacity-0 flex flex-wrap gap-6 justify-center" style={{ animationDelay: '1.5s' }}>
            <GlassButton variant="hero" size="lg">
              About Our Dream
            </GlassButton>
            <GlassButton 
              variant="secondary" 
              size="lg"
              onClick={() => setIsMissionModalOpen(true)}
            >
              Our Mission
            </GlassButton>
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
          {/* Your Role Section */}
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
              Your Role
            </h3>
            <p className="text-lg text-foreground/95 leading-relaxed max-w-2xl mx-auto">
              Close your eyes; open your mind. Collect the story, not just the token. 
              Share art, remix the sloth, invite a friend to rest. The calmer we get, 
              the louder the signal becomes.
            </p>
          </div>

          <div className="glass-card">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-glow">
              Sleep. Earn. Repeat.
            </h2>
            <p className="text-xl mb-12 text-foreground/90 leading-relaxed">
              While others stress about market movements, our community embraces the zen of passive wealth building. 
              Join the sleepy revolution where dreams become reality.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="glass-card">
                <div className="text-4xl mb-4">🦥</div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Relax & Hold</h3>
                <p className="text-foreground/85">No stress, no rush. Good things come to sloths who wait.</p>
              </div>
              <div className="glass-card">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-semibold mb-2 text-accent">Dream Rewards</h3>
                <p className="text-foreground/85">Earn while you sleep through our innovative staking mechanisms.</p>
              </div>
              <div className="glass-card">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-2 text-neon-purple">Slow & Steady</h3>
                <p className="text-foreground/85">Sustainable growth that doesn't require constant attention.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
              Join the Sleepy Community
            </h2>
            <p className="text-xl text-foreground/85">
              Get updates, sleep tips, and exclusive early access to $SNORE features.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-glass-border">
        <div className="container mx-auto px-4 text-center">
          <div className="glass-card max-w-2xl mx-auto">
            <div className="text-6xl mb-4">🦥</div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Sweet Dreams</h3>
            <p className="text-foreground/85 mb-6">
              Remember: The best investors are often the sleepiest ones. 
              Let $SNORE work while you rest.
            </p>
            <div className="flex justify-center gap-4">
              <GlassButton variant="secondary" size="sm">
                Whitepaper
              </GlassButton>
              <GlassButton variant="secondary" size="sm">
                Tokenomics
              </GlassButton>
              <GlassButton variant="secondary" size="sm">
                Roadmap
              </GlassButton>
            </div>
          </div>
        </div>
      </footer>

      <MissionModal 
        isOpen={isMissionModalOpen} 
        onClose={() => setIsMissionModalOpen(false)} 
      />
    </div>
  );
};

export default SnoreLanding;