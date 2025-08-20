import React from 'react';
import { X } from 'lucide-react';
import { GlassButton } from './GlassButton';

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
      <div className="relative glass-card max-w-2xl w-full max-h-[80vh] overflow-y-auto fade-in-scale">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full glass-bg flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="pr-16">
          <h2 className="text-3xl font-bold mb-6 text-glow">Our Mission</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              In the vast cosmos of cryptocurrency, where volatility reigns supreme and fortunes are made and lost in the blink of an eye, there exists a revolutionary concept: the power of sleep.
            </p>
            <p>
              <span className="text-primary font-semibold">$SNORE</span> represents more than just another meme coin. It embodies the philosophy that sometimes, the best investment strategy is to simply... sleep on it.
            </p>
            <p>
              Our mission is to create a community of relaxed investors who understand that patience, like our sleepy sloth mascot, often yields the sweetest dreams of prosperity.
            </p>
            <div className="glass-card bg-primary/10 border-primary/30 mt-6 p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Core Values</h3>
              <ul className="space-y-2">
                <li>• <strong>Patience:</strong> Good things come to those who wait</li>
                <li>• <strong>Community:</strong> Together we dream, together we prosper</li>
                <li>• <strong>Innovation:</strong> Bridging meme culture with cutting-edge DeFi</li>
                <li>• <strong>Sustainability:</strong> Building for the long-term future</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionModal;