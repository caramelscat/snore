import React, { useState } from 'react';

const SlothChatbox = () => {
  const [messages, setMessages] = useState<Array<{text: string, from: 'bot' | 'user'}>>([]);
  const [inputValue, setInputValue] = useState('');

  const knowledgeBase = {
    "dream": "🌙 The Dream is where our sloth drifts, snoring Zzz's that shape the stars — our guiding story.",
    "mission": "🌌 Our Mission is to slow down the noise, let humans breathe, and weave rest into wealth.",
    "whitepaper": "📜 The Whitepaper reveals the path of the sloth — economics, vision, and lore all aligned.",
    "tokenomics": "💰 Tokenomics: Supply, flow, and resting value — all crafted to sustain the dreamscape.",
    "roadmap": "🛤️ The Roadmap charts the journey of the sloth across constellations of time and milestones."
  };

  const handleSend = () => {
    const q = inputValue.toLowerCase().trim();
    if (!q) return;

    // Add user message
    setMessages(prev => [...prev, { text: inputValue, from: 'user' }]);
    setInputValue('');

    // Find and add bot response with delay
    setTimeout(() => {
      let found = false;
      for (let key in knowledgeBase) {
        if (q.includes(key)) {
          setMessages(prev => [...prev, { text: knowledgeBase[key as keyof typeof knowledgeBase], from: 'bot' }]);
          found = true;
          break;
        }
      }
      
      if (!found) {
        setMessages(prev => [...prev, { 
          text: "🌠 I sense your question drifts beyond my stars...\n\nI can guide you with these paths: Dream, Mission, Whitepaper, Tokenomics, Roadmap.\n\nFor deeper wisdom, write to the Keepers: support@snore.live 🌌", 
          from: 'bot' 
        }]);
      }
    }, 600);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 w-80 max-h-[70vh] flex flex-col rounded-2xl shadow-2xl backdrop-blur-md bg-white/10 border border-white/20 overflow-hidden z-[9999]">
      {/* Header */}
      <div className="p-3 text-center text-white font-semibold tracking-wide border-b border-white/10">
        ✨ Snore Oracle ✨
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3 text-white text-sm leading-relaxed">
        {messages.length === 0 && (
          <div className="text-gray-300 italic">
            🌌 Ask me about our Dream, Mission, Whitepaper, Tokenomics, or Roadmap...
          </div>
        )}
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`
              px-3 py-2 rounded-xl max-w-[75%] break-words
              ${msg.from === 'bot' 
                ? 'self-start text-left bg-blue-500/30 text-white' 
                : 'self-end text-right bg-white/20 text-white ml-auto'
              }
            `}
          >
            <div dangerouslySetInnerHTML={{ 
              __html: msg.text.replace(/\n/g, '<br>')
            }} />
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 border-t border-white/10 flex items-center gap-2">
        <input
          type="text"
          placeholder="Ask the Oracle..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 px-3 py-2 rounded-xl bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSend}
          className="px-3 py-2 rounded-xl bg-blue-500/80 hover:bg-blue-500 transition text-white font-semibold"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default SlothChatbox;