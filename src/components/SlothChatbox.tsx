import React, { useState, useRef, useEffect } from 'react';

const SlothChatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{text: string, from: 'bot' | 'user'}>>([
    {
      text: "✨ Greetings, wanderer. You have opened a window to the universe. I am here to guide you through the lore of Snore. Ask your questions, and if I falter, I shall reveal what I can truly answer. 🌠",
      from: 'bot'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatBoxRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    const text = inputValue.toLowerCase().trim();
    if (!text) return;

    // Add user message
    setMessages(prev => [...prev, { text: inputValue, from: 'user' }]);
    setInputValue('');

    // Bot response with delay
    setTimeout(() => {
      let botResponse = '';
      
      if (text.includes('roadmap')) {
        botResponse = "🌌 Ah, the path of destiny. You may find our roadmap in the stars — look for 'Roadmap' among our scrolls.";
      } else if (text.includes('tokenomics')) {
        botResponse = "💫 The flow of energy is called Tokenomics. Seek its section to know how power moves in Snore.";
      } else if (text.includes('whitepaper')) {
        botResponse = "📜 The sacred white scroll, the Whitepaper, holds the cosmic knowledge. Open it to understand our dream.";
      } else if (text.includes('dream') || text.includes('about')) {
        botResponse = "🌙 The Dream is where our sloth drifts, snoring Zzz's that shape the stars — seek 'About Our Dream' to know our guiding story.";
      } else if (text.includes('mission')) {
        botResponse = "🌌 Our Mission is to slow down the noise, let humans breathe, and weave rest into wealth — find 'Our Mission' among our sacred texts.";
      } else {
        botResponse = "🌠 The universe does not yet hold that answer.\n\nBut I can guide you to these truths:\n- About Our Dream\n- Our Mission\n- Roadmap\n- Tokenomics\n- Whitepaper\n\nOr, reach out to support@snore.live for a direct channel. ✨";
      }

      setMessages(prev => [...prev, { text: botResponse, from: 'bot' }]);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      {/* Floating Sloth Bot Tab */}
      <div 
        className="fixed bottom-6 right-6 cursor-pointer z-40"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 flex items-center justify-center shadow-lg hover:scale-110 transition">
          🦥
        </div>
      </div>

      {/* Bot Chat Box */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 max-h-[70vh] flex flex-col rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl z-50 overflow-hidden">
          
          {/* Bot Header */}
          <div className="bg-gradient-to-r from-blue-500/40 to-purple-500/40 p-3 text-white font-semibold text-center">
            🌌 Snore Bot – The Voice of the Universe
          </div>
          
          {/* Chat Messages */}
          <div 
            ref={chatBoxRef}
            className="flex-1 overflow-y-auto p-4 space-y-3 text-white text-sm scroll-smooth"
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`
                  p-3 rounded-xl
                  ${msg.from === 'bot' 
                    ? 'bg-white/10' 
                    : 'bg-blue-500/40 text-right ml-auto max-w-[80%]'
                  }
                `}
              >
                <div dangerouslySetInnerHTML={{ 
                  __html: msg.text.replace(/\n/g, '<br>')
                }} />
              </div>
            ))}
          </div>
          
          {/* Input Area */}
          <div className="flex p-3 bg-white/10">
            <input 
              type="text" 
              placeholder="Ask the Universe..." 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 rounded-xl p-2 bg-white/20 text-white placeholder-gray-300 outline-none"
            />
            <button 
              onClick={handleSend}
              className="ml-2 px-4 rounded-xl bg-blue-500/70 hover:bg-blue-500 transition text-white font-bold"
            >
              ➤
            </button>
          </div>
        </div>
      )}

    </>
  );
};

export default SlothChatbox;