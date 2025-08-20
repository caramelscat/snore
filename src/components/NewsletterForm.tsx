import React, { useState } from 'react';
import { GlassButton } from './GlassButton';
import { Mail } from 'lucide-react';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="glass-card max-w-md mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <Mail className="w-6 h-6 text-primary" />
        <h3 className="text-xl font-semibold">Stay in the Loop</h3>
      </div>
      
      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="text-4xl mb-4">🦥</div>
          <p className="text-primary font-medium">Thanks for joining our sleepy community!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl glass-bg border border-glass-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300"
              required
            />
          </div>
          <GlassButton type="submit" variant="primary" className="w-full">
            Join the Dream Team
          </GlassButton>
        </form>
      )}
    </div>
  );
};

export default NewsletterForm;