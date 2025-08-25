import React, { useState } from 'react';
import { MessageCircle, LucideIcon } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import xLogo from '@/assets/x-logo.png';
import telegramLogo from '@/assets/telegram-logo.png';

interface SocialLink {
  icon: string | LucideIcon;
  href: string;
  name: string;
  delay: string;
  isExternal: boolean;
  isImage: boolean;
}

const socialLinks: SocialLink[] = [
  { icon: xLogo, href: 'https://x.com/SnoreOnSolana', name: 'X: @SnoreOnSolana', delay: '0s', isExternal: true, isImage: true },
  { icon: telegramLogo, href: 'https://t.me/snoreverse', name: 'Telegram: t.me/snoreverse', delay: '0.5s', isExternal: true, isImage: true },
  { icon: MessageCircle, href: '#', name: 'AI Support Chat', delay: '1s', isExternal: false, isImage: false }
];

const SocialFloatingIcons: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hey there! 🦥💤 Welcome to $SNORE support. How can I help you with your cosmic sloth journey?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleLinkClick = (link: SocialLink, e: React.MouseEvent) => {
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
      {/* Social Icons positioned inside planets */}
      <div className="fixed inset-0 pointer-events-none z-40">
        {/* X Logo - Top Planet */}
        <a
          href={socialLinks[0].href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-[8%] top-[20%] w-16 h-16 rounded-full flex items-center justify-center group floating glow-pulse cursor-pointer pointer-events-auto"
          style={{ animationDelay: socialLinks[0].delay }}
          aria-label={socialLinks[0].name}
        >
          <img 
            src={socialLinks[0].icon as string} 
            alt={socialLinks[0].name} 
            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg"
          />
        </a>

        {/* Telegram Logo - Middle Planet */}
        <a
          href={socialLinks[1].href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-[8%] top-[35%] w-16 h-16 rounded-full flex items-center justify-center group floating glow-pulse cursor-pointer pointer-events-auto"
          style={{ animationDelay: socialLinks[1].delay }}
          aria-label={socialLinks[1].name}
        >
          <img 
            src={socialLinks[1].icon as string} 
            alt={socialLinks[1].name} 
            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg"
          />
        </a>

        {/* AI Support Chat - Bottom Planet */}
        <a
          href="#"
          onClick={(e) => handleLinkClick(socialLinks[2], e)}
          className="absolute right-[8%] top-[50%] w-16 h-16 rounded-full flex items-center justify-center group floating glow-pulse cursor-pointer pointer-events-auto"
          style={{ animationDelay: socialLinks[2].delay }}
          aria-label={socialLinks[2].name}
        >
          <MessageCircle className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
        </a>
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