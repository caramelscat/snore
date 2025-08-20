import React from 'react';
import { Twitter, Send, MessageCircle } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: '#', name: 'Twitter', delay: '0s' },
  { icon: Send, href: '#', name: 'Telegram', delay: '0.5s' },
  { icon: MessageCircle, href: '#', name: 'Discord', delay: '1s' }
];

const SocialFloatingIcons: React.FC = () => {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50">
      {socialLinks.map(({ icon: Icon, href, name, delay }) => (
        <a
          key={name}
          href={href}
          className="glass-button w-16 h-16 rounded-full flex items-center justify-center group floating glow-pulse"
          style={{ animationDelay: delay }}
          aria-label={name}
        >
          <Icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
        </a>
      ))}
    </div>
  );
};

export default SocialFloatingIcons;