import React, { useState } from 'react';

const SlothChatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{text: string, from: 'bot' | 'user'}>>([]);
  const [inputValue, setInputValue] = useState('');

  const faqs = {
    "dream": "🌠 Our Dream: A living lore where the sloth drifts through the Akashic field, snoring Zzz's that weave into stars — and sometimes, opportunities.",
    "mission": "🌌 Our Mission: To show humanity that rest is powerful. The calmer we become, the louder our universal signal echoes.",
    "whitepaper": "📜 Whitepaper: Explore the full lore, utility, and vision in our sacred scroll. (link to your PDF here)",
    "tokenomics": "💰 Tokenomics: $SNORE is crafted with fair distribution, community harmony, and longevity of the dream.",
    "roadmap": "🗺️ Roadmap: Step by step, dream by dream — unfolding art, community, and cosmic opportunities."
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
        text: "🌌 Child of the stars, I have not yet dreamed this answer. But I can share what I know:\n\n🔹 Our Dream\n🔹 Our Mission\n🔹 Whitepaper\n🔹 Tokenomics\n🔹 Roadmap\n\n📩 Should your curiosity go beyond the constellations, whisper to my keepers at support@snore.live", 
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
    <div className="fixed bottom-5 right-5 w-[320px] max-w-[90%] z-[9999]" style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>
      {/* Header */}
      <div 
        className="p-3 rounded-t-[18px] cursor-pointer text-center font-bold text-[#2d1f00] hover:opacity-90 transition-all duration-300"
        style={{ 
          background: 'linear-gradient(90deg, #f4c542, #ffdd77)',
          boxShadow: '0 0 10px rgba(255,220,120,0.7)'
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        🌌 Ask the SnoreBot
      </div>
      
      {/* Body */}
      {isOpen && (
        <div className="border border-[#444] border-t-0 h-[380px] rounded-b-[18px] flex flex-col overflow-hidden" 
             style={{ 
               background: '#0d0d1a',
               boxShadow: '0 0 20px rgba(255,255,255,0.15)'
             }}>
          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto text-[15px] text-white space-y-2"
               style={{ 
                 background: 'radial-gradient(circle at top left, #1a1a2e, #000)',
                 backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')"
               }}>
            {messages.length === 0 && (
              <div className="text-white/70 text-center py-4">
                🌠 Whisper your cosmic questions...
              </div>
            )}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`
                  p-3 rounded-[14px] max-w-[80%] break-words text-sm animate-fade-in
                  ${msg.from === 'bot' 
                    ? 'text-[#ffeaa7]' 
                    : 'text-[#2d1f00] ml-auto'
                  }
                `}
                style={{
                  background: msg.from === 'bot' 
                    ? 'rgba(255,255,255,0.08)' 
                    : 'linear-gradient(90deg,#f4c542,#ffdd77)'
                }}
              >
                <div dangerouslySetInnerHTML={{ 
                  __html: msg.from === 'bot' 
                    ? `🦥✨ ${msg.text.replace(/\n/g, '<br>')}`
                    : msg.text 
                }} />
              </div>
            ))}
          </div>
          
          {/* Input */}
          <div className="flex border-t border-[#333]">
            <input
              type="text"
              placeholder="Whisper your question..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 p-3 border-0 bg-[#1a1a2e] text-white placeholder-white/60 rounded-bl-[18px] outline-none text-sm"
            />
            <button
              onClick={handleSend}
              className="bg-[#f4c542] hover:bg-[#e6b23c] border-0 px-4 py-3 rounded-br-[18px] cursor-pointer font-bold transition-colors duration-200"
            >
              ✨
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SlothChatbox;