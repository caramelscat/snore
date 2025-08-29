import React, { useState } from 'react';

const FloatingNewsletterWidget: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    const subject = encodeURIComponent("New newsletter signup");
    const body = encodeURIComponent(`Please add this email to the mailing list:\n${email}`);
    const mailto = `mailto:support@snore.live?subject=${subject}&body=${body}`;

    // Trigger user's email client to send the signup notification
    window.location.href = mailto;

    // Clear input and show confirmation
    setEmail('');
    setIsSubmitted(true);
    setIsOpen(false);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <>
      {/* Floating sloth button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 w-[70px] h-[70px] rounded-full glass-bg border border-glass-border flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:scale-110 transition-transform duration-300 z-40"
      >
        🦥
      </div>

      {/* Popup form */}
      {isOpen && (
        <div className="fixed bottom-[100px] right-5 w-[300px] glass-card p-5 z-50 animate-fadeInUp">
          {isSubmitted ? (
            <div className="text-center">
              <div className="text-4xl mb-2">🌙</div>
              <p className="text-primary font-medium">Welcome to the dream!</p>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-semibold text-center mb-4">🌙 Join the Dream</h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email..."
                  className="w-full px-3 py-2 rounded-xl glass-bg border border-glass-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-2 px-4 rounded-xl bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-bold hover:scale-105 transition-transform duration-300"
                >
                  Join
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default FloatingNewsletterWidget;