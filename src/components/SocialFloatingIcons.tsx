import React, { useState } from 'react';
import { Twitter, Send, MessageCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';

const socialLinks = [
  { icon: Twitter, href: 'https://x.com/SnoreOnSolana', name: 'X: @SnoreOnSolana', delay: '0s', isExternal: true },
  { icon: Send, href: 'https://t.me/snoreverse', name: 'Telegram: t.me/snoreverse', delay: '0.5s', isExternal: true },
  { icon: MessageCircle, href: '#', name: 'AI Support Chat', delay: '1s', isExternal: false }
];

const SocialFloatingIcons: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hey there! 🦥💤 Welcome to $SNORE support. How can I help you with your cosmic sloth journey?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleLinkClick = (link: typeof socialLinks[0], e: React.MouseEvent) => {
    if (!link.isExternal) {
      e.preventDefault();
      setIsChatOpen(true);
    }
  };

  const sendMessage = () => {
    if (!inputMessage.trim()) return;
    
    const newMessages = [
      ...messages,
      { role: 'user', content: inputMessage },
      { role: 'assistant', content: 'Thanks for your message! Our cosmic sloth is processing your query... 🦥✨ For now, this is a demo - but soon I\'ll be powered by AI to help with all your $SNORE questions!' }
    ];
    
    setMessages(newMessages);
    setInputMessage('');
  };

  return (
    <>
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50">
        {socialLinks.map(({ icon: Icon, href, name, delay, isExternal }) => (
          <a
            key={name}
            href={href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            onClick={(e) => handleLinkClick({ icon: Icon, href, name, delay, isExternal }, e)}
            className="glass-button w-16 h-16 rounded-full flex items-center justify-center group floating glow-pulse cursor-pointer"
            style={{ animationDelay: delay }}
            aria-label={name}
          >
            <Icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
          </a>
        ))}
      </div>

      <Dialog open={isChatOpen} onOpenChange={setIsChatOpen}>
        <DialogContent className="glass-card border-accent/20 max-w-md">
          <div className="absolute inset-0 -z-10">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 bg-accent/60 rounded-full animate-pulse`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
          <DialogHeader>
            <DialogTitle className="text-accent flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              AI Support Chat 🦥💤
            </DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-64 pr-4">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.role === 'user'
                        ? 'bg-primary/20 text-primary-foreground'
                        : 'bg-accent/20 text-accent-foreground'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="flex gap-2 mt-4">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about $SNORE..."
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              className="glass-button border-accent/20"
            />
            <Button
              onClick={sendMessage}
              className="glass-button border-accent/20 hover:bg-accent/20"
            >
              Send
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SocialFloatingIcons;