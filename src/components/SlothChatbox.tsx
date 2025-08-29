import React, { useState } from 'react';

const SlothChatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{text: string, from: 'bot' | 'user'}>>([]);
  const [inputValue, setInputValue] = useState('');

  const faqs = {
    "dream": "Our Dream: A living lore where the sloth travels the akashic field, snoring Zzz's that become stars — and sometimes opportunities.",
    "mission": "Our Mission: The calmer we get, the louder the signal becomes. We're here to make resting powerful.",
    "whitepaper": "Whitepaper: Explore the full lore, utility, and vision inside our official whitepaper. (link to your PDF here)",
    "tokenomics": "Tokenomics: $SNORE is designed with fair distribution, community vibes, and sustainability at its heart.",
    "roadmap": "Roadmap: Step by step, dream by dream — building art, community, and opportunities for the future."
  };

  const handleSend = () => {
    const q = inputValue.toLowerCase().trim();
    if (!q) return;

    // Add user message
    setMessages(prev => [...prev, { text: inputValue, from: 'user' }]);
    setInputValue('');

    // Find and add bot response
    let found = false;
    for (let key in faqs) {
      if (q.includes(key)) {
        setMessages(prev => [...prev, { text: faqs[key as keyof typeof faqs], from: 'bot' }]);
        found = true;
        break;
      }
    }
    
    if (!found) {
      setMessages(prev => [...prev, { 
        text: "Zzz... I don't know this one, friend. Please email 📩 support@snore.live and the humans will help.", 
        from: 'bot' 
      }]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-[280px] max-w-[85vw] font-sans z-[9999]">
      {/* Header */}
      <div 
        className="glass-card p-3 rounded-t-2xl cursor-pointer text-center font-bold text-white hover:bg-white/20 transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        🦥 Chat with SnoreBot
      </div>
      
      {/* Body */}
      {isOpen && (
        <div className="glass-card border-t-0 h-[320px] rounded-b-2xl flex flex-col backdrop-blur-xl">
          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto text-sm space-y-2">
            {messages.length === 0 && (
              <div className="text-white/70 text-center py-4">
                💤 Ask me about our dream, mission, tokenomics, or roadmap!
              </div>
            )}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`
                  p-3 rounded-lg max-w-[85%] break-words text-sm
                  ${msg.from === 'bot' 
                    ? 'bg-white/10 text-white border border-white/20' 
                    : 'bg-primary/20 text-white ml-auto border border-primary/30'
                  }
                `}
              >
                {msg.from === 'bot' ? '🦥 ' : '💭 '}{msg.text}
              </div>
            ))}
          </div>
          
          {/* Input */}
          <div className="flex border-t border-white/20 bg-black/20 rounded-b-2xl">
            <input
              type="text"
              placeholder="Ask me something..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 p-3 border-0 bg-transparent text-white placeholder-white/60 rounded-bl-2xl outline-none text-sm"
            />
            <button
              onClick={handleSend}
              className="bg-primary/80 hover:bg-primary border-0 px-4 py-3 rounded-br-2xl cursor-pointer text-white font-medium transition-colors duration-200"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SlothChatbox;