import React from 'react';
import { Mail } from 'lucide-react';
import xLogo from '@/assets/x-logo.png';
import telegramLogo from '@/assets/telegram-logo.png';

interface SocialFloatingIconsProps {
  onContactClick: () => void;
}

const SocialFloatingIcons: React.FC<SocialFloatingIconsProps> = ({ onContactClick }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {/* X Logo - Top Planet */}
      <a
        href="https://x.com/SnoreOnSolana"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-[8%] top-[20%] w-16 h-16 rounded-full flex items-center justify-center group floating glow-pulse cursor-pointer pointer-events-auto"
        style={{ animationDelay: '0s' }}
        aria-label="X: @SnoreOnSolana"
      >
        <img 
          src={xLogo} 
          alt="X: @SnoreOnSolana" 
          className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg"
        />
      </a>

      {/* Telegram Logo - Middle Planet */}
      <a
        href="https://t.me/snoreverse"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-[8%] top-[35%] w-16 h-16 rounded-full flex items-center justify-center group floating glow-pulse cursor-pointer pointer-events-auto"
        style={{ animationDelay: '0.5s' }}
        aria-label="Telegram: t.me/snoreverse"
      >
        <img 
          src={telegramLogo} 
          alt="Telegram: t.me/snoreverse" 
          className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg"
        />
      </a>

      {/* Contact - Bottom Planet */}
      <button
        onClick={onContactClick}
        className="absolute right-[8%] top-[50%] w-16 h-16 rounded-full flex items-center justify-center group floating glow-pulse cursor-pointer pointer-events-auto"
        style={{ animationDelay: '1s' }}
        aria-label="Contact Us"
      >
        <Mail className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
      </button>
    </div>
  );
};

export default SocialFloatingIcons;