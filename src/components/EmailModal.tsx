import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailModal: React.FC<EmailModalProps> = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!message.trim()) {
      setStatus('⚠️ Please enter a message before sending.');
      return;
    }

    setIsLoading(true);
    setStatus('🚀 Sending your message into the cosmos...');

    // Simulate sending delay
    setTimeout(() => {
      setStatus('✅ Your message has been delivered to support@snore.live ✨');
      setMessage('');
      setIsLoading(false);
    }, 1500);
  };

  const handleClose = () => {
    setMessage('');
    setStatus('');
    setIsLoading(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="w-96 max-w-[90vw] glass-card border-white/20 text-white">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-300 hover:text-white text-lg transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
        
        <DialogHeader className="text-center">
          <DialogTitle className="text-xl font-semibold text-white">
            📡 Send a Message to the Universe
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your cosmic message here..."
            className="w-full h-32 p-3 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-primary/50 resize-none border border-white/10"
          />

          <Button
            onClick={handleSend}
            disabled={isLoading}
            className="w-full py-2 rounded-xl bg-primary/80 hover:bg-primary transition text-white font-semibold"
          >
            Send to support@snore.live 🌌
          </Button>

          {status && (
            <p className="text-center text-sm text-gray-300">
              {status}
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EmailModal;