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
    <div className="fixed bottom-5 right-5 w-[300px] max-w-[90%] font-sans z-[9999]">
      {/* Header */}
      <div 
        className="bg-[#f4c542] p-2.5 rounded-t-3xl cursor-pointer text-center font-bold text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        🦥 Chat with SnoreBot
      </div>
      
      {/* Body */}
      {isOpen && (
        <div className="bg-white border border-gray-300 border-t-0 h-[350px] rounded-b-3xl flex flex-col">
          {/* Messages */}
          <div className="flex-1 p-2.5 overflow-y-auto text-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`
                  my-1.5 p-2 rounded-lg max-w-[80%] break-words
                  ${msg.from === 'bot' 
                    ? 'bg-gray-100' 
                    : 'bg-green-100 ml-auto'
                  }
                `}
              >
                {msg.from === 'bot' ? '🦥 ' : ''}{msg.text}
              </div>
            ))}
          </div>
          
          {/* Input */}
          <div className="flex border-t border-gray-300">
            <input
              type="text"
              placeholder="Ask me something..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 p-2 border-0 rounded-bl-3xl outline-none text-sm"
            />
            <button
              onClick={handleSend}
              className="bg-[#f4c542] border-0 px-3 py-2 rounded-br-3xl cursor-pointer text-black font-medium hover:bg-[#e6b23c] transition-colors"
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