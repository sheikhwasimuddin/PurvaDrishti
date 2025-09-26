import React, { useState, useEffect, useRef } from 'react';

// --- A simple Markdown Parser ---
const parseMarkdown = (text) => {
    if (!text) return '';
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
        .replace(/^\s*\*[ \t]/gm, '<li>') // List items
        .replace(/<li>(.*?)(\n|$)/g, '<li>$1</li>') // Close list items
        .replace(/<\/li><li>/g, '</li><li>') // Fix adjacent list items
        .replace(/(<li>.*?<\/li>)/g, '<ul>$1</ul>') // Wrap in <ul>
        .replace(/<\/ul>\s*<ul>/g, ''); // Join adjacent lists
};

// --- Dictionary of Supported Languages ---
const SUPPORTED_LANGUAGES = {
        "en": "English",
        "hi": "हिन्दी",            // Hindi (Pan-India, esp. North & Central)
      
        // --- One major regional language from each state ---
        "as": "অসমীয়া",           // Assamese (Assam)
        "bn": "বাংলা",            // Bengali (West Bengal, Tripura)
        "gu": "ગુજરાતી",         // Gujarati (Gujarat)
        "kn": "ಕನ್ನಡ",           // Kannada (Karnataka)
        "ks": "कश्मीरी",          // Kashmiri (Jammu & Kashmir)
        "kok": "कोंकणी",          // Konkani (Goa)
        "ml": "മലയാളം",          // Malayalam (Kerala)
        "mr": "मराठी",            // Marathi (Maharashtra)
        "mni": "ꯃꯤꯇꯩ ꯂꯣꯟ",     // Meitei/Manipuri (Manipur)
        "or": "ଓଡ଼ିଆ",            // Odia (Odisha)
        "pa": "ਪੰਜਾਬੀ",           // Punjabi (Punjab)
        "sa": "संस्कृतम्",        // Sanskrit (Uttarakhand, also classical)
        "sd": "سنڌي",            // Sindhi (some parts, historical)
        "ta": "தமிழ்",           // Tamil (Tamil Nadu, Puducherry)
        "te": "తెలుగు",          // Telugu (Andhra Pradesh, Telangana)
        "ur": "اردو",             // Urdu (Jammu & Kashmir, Telangana, UP, Bihar, etc.)
      
      
      
};

// --- Helper Components with New Icons ---
const BotMessage = ({ text }) => (
    <div className="message-container" style={{ display: 'flex', gap: '12px' }}>
        <div className="avatar">
            {/* New Bot Icon (Stylized Eye for "Foresight") */}
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12,9a3,3,0,0,0-3,3,3,3,0,0,0,3,3,3,3,0,0,0,3-3,3,3,0,0,0-3-3m0,8a5,5,0,0,1-5-5,5,5,0,0,1,5-5,5,5,0,0,1,5,5,5,5,0,0,1-5,5m0-12C7,5,2.73,7.11,1,11.5,2.73,15.89,7,18,12,18s9.27-2.11,11-6.5C21.27,7.11,17,5,12,5Z"></path></svg>
        </div>
        <div className="bot-message-bubble">
            <div dangerouslySetInnerHTML={{ __html: parseMarkdown(text) }}></div>
        </div>
    </div>
);

const UserMessage = ({ text }) => (
    <div className="message-container" style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
        <div className="user-message-bubble">
            <p style={{ margin: 0 }}>{text}</p>
        </div>
    </div>
);

const LoadingIndicator = () => (
    <div className="message-container" style={{ display: 'flex', gap: '12px' }}>
        <div className="avatar">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12,9a3,3,0,0,0-3,3,3,3,0,0,0,3,3,3,3,0,0,0,3-3,3,3,0,0,0-3-3m0,8a5,5,0,0,1-5-5,5,5,0,0,1,5-5,5,5,0,0,1,5,5,5,5,0,0,1-5,5m0-12C7,5,2.73,7.11,1,11.5,2.73,15.89,7,18,12,18s9.27-2.11,11-6.5C21.27,7.11,17,5,12,5Z"></path></svg>
        </div>
        <div className="bot-message-bubble">
            <div className="loading-dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    </div>
);

// --- The Main Chatbot Application ---
export default function App() {
    const [messages, setMessages] = useState([{ type: 'bot', text: 'Hello! I am **Purva Drishti**, your assistant for Disaster Management. How can I help you today?' }]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isMinimized, setIsMinimized] = useState(true);
    const [selectedLang, setSelectedLang] = useState('en');
    const chatContainerRef = useRef(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputValue.trim() || isLoading) return;
        
        const newUserMessage = { type: 'user', text: inputValue };
        setMessages(prev => [...prev, newUserMessage]);
        setInputValue('');
        setIsLoading(true);

        try {
            const response = await fetch('http://127.0.0.1:5000/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: inputValue, language: selectedLang }),
            });
            if (!response.ok) {
                const errData = await response.json();
                throw new Error(errData.error || 'A network error occurred.');
            }
            const data = await response.json();
            const newBotMessage = { type: 'bot', text: data.reply };
            setMessages(prev => [...prev, newBotMessage]);
        } catch (err) {
            console.error("API Error:", err);
            const errorMessage = { type: 'bot', text: `Sorry, I encountered an error: ${err.message}` };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

                :root {
                    --chat-font-family: 'Inter', sans-serif;
                    --brand-color: #3B82F6;
                    --light-gray: #F3F4F6;
                    --medium-gray: #E5E7EB;
                    --dark-gray: #4B5563;
                    --text-color: #1F2937;
                }

                .floating-chat-button {
                    font-family: var(--chat-font-family);
                    position: fixed; bottom: 20px; right: 20px;
                    width: 60px; height: 60px; border-radius: 50%;
                    background-color: var(--brand-color); color: white;
                    border: none; cursor: pointer;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                    display: flex; align-items: center; justify-content: center;
                    z-index: 1000; transition: transform 0.2s ease-in-out, box-shadow 0.2s ease;
                }
                .floating-chat-button:hover {
                    transform: scale(1.1);
                    box-shadow: 0 6px 16px rgba(0,0,0,0.2);
                }

                .chat-window {
                    font-family: var(--chat-font-family);
                    position: fixed; bottom: 20px; right: 20px;
                    width: 400px; height: 600px; background-color: white;
                    border-radius: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);
                    display: flex; flex-direction: column;
                    z-index: 1000; color: var(--text-color);
                    animation: slide-up-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .chat-header {
                    padding: 16px; border-bottom: 1px solid var(--medium-gray);
                    display: flex; justify-content: space-between; align-items: center;
                    flex-shrink: 0;
                }
                .chat-header h2 { margin: 0; font-size: 18px; font-weight: 600; }
                .chat-header p { margin: 0; font-size: 14px; color: #6B7280; }
                .chat-header .controls { display: flex; align-items: center; gap: 16px; }
                .chat-header select { font-family: var(--chat-font-family); font-size: 14px; border: 1px solid var(--medium-gray); border-radius: 6px; padding: 4px 8px; background-color: transparent; cursor: pointer; }
                .chat-header button { background: none; border: none; cursor: pointer; color: #9CA3AF; padding: 4px; }
                .chat-header button:hover { color: var(--dark-gray); }

                .chat-main {
                    flex: 1; padding: 16px; overflow-y: auto;
                    display: flex; flex-direction: column; gap: 16px;
                }

                .message-container {
                    animation: slide-up-fade 0.4s ease-out;
                }
                .avatar {
                    width: 40px; height: 40px; border-radius: 50%;
                    background-color: var(--light-gray); color: var(--dark-gray);
                    display: flex; align-items: center; justify-content: center;
                    flex-shrink: 0; padding: 8px; box-sizing: border-box;
                }
                .bot-message-bubble {
                    background-color: var(--light-gray); color: var(--text-color);
                    padding: 12px 16px; border-radius: 12px; border-top-left-radius: 0px;
                    max-width: 80%;
                }
                .user-message-bubble {
                    background-color: var(--brand-color); color: white;
                    padding: 12px 16px; border-radius: 12px; border-top-right-radius: 0px;
                    max-width: 80%;
                }
                .bot-message-bubble ul { margin: 8px 0; padding-left: 20px; }
                .bot-message-bubble li { margin-bottom: 4px; }
                
                .chat-footer {
                    padding: 16px; border-top: 1px solid var(--medium-gray); flex-shrink: 0;
                }
                .chat-footer form { display: flex; align-items: center; gap: 8px; }
                .chat-footer input {
                    flex: 1; border: 1px solid #D1D5DB; border-radius: 8px;
                    padding: 10px 14px; font-size: 14px;
                    outline: none; font-family: var(--chat-font-family);
                    transition: border-color 0.2s, box-shadow 0.2s;
                }
                .chat-footer input:focus {
                    border-color: var(--brand-color);
                    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.4);
                }
                .chat-footer button {
                    background-color: var(--brand-color); border-radius: 8px; padding: 10px;
                    border: none; color: white; cursor: pointer;
                    display: flex; align-items: center; justify-content: center;
                    transition: background-color 0.2s;
                }
                .chat-footer button:hover:not(:disabled) { background-color: #2563EB; }
                .chat-footer button:disabled { background-color: #93C5FD; cursor: not-allowed; }
                
                .loading-dots { display: flex; align-items: center; gap: 6px; }
                .loading-dots .dot { width: 8px; height: 8px; background-color: #9CA3AF; border-radius: 50%; animation: pulse 1.4s infinite; }
                .loading-dots .dot:nth-child(2) { animation-delay: 0.2s; }
                .loading-dots .dot:nth-child(3) { animation-delay: 0.4s; }
                
                @keyframes slide-up-fade {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
                `}
            </style>

            {isMinimized ? (
                <button onClick={() => setIsMinimized(false)} className="floating-chat-button" aria-label="Open Chat">
                    {/* New Floating Chat Icon */}
                    <svg style={{ width: '32px', height: '32px' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </button>
            ) : (
   <div className="chat-window">
        <div className="chat-header p-4 border-b border-gray-200">
            {/* Use flexbox to align items horizontally */}
            <div className="flex items-center gap-3">

                {/* 1. Logo Container */}
                <div className="w-10 h-10 bg-gradient-to-br from-white-500 to-gray-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    {/* The logo image should be smaller than its container */}
                    <img src="/logo.png" alt="Logo" className="w-16 h-8" />
                </div>

                {/* 2. Text Container (for title and subtitle) */}
                <div>
                    {/* Converted inline styles to Tailwind classes */}
                    <h2 className="text-lg font-semibold text-gray-800">Purva Drishti</h2>
                    <p className="text-sm text-gray-500">AI Disaster Assistant</p>
                </div>

            </div>
            <div className="controls">
                <select value={selectedLang} onChange={(e) => setSelectedLang(e.target.value)} aria-label="Select Language">
                    {Object.entries(SUPPORTED_LANGUAGES).map(([code, name]) => ( <option key={code} value={code}>{name}</option> ))}
                </select>
                <button onClick={() => setIsMinimized(true)} aria-label="Minimize Chat">
                    {/* New Minimize Icon */}
                    <svg style={{ width: '20px', height: '20px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
                </button>
            </div>
        </div>
        <main ref={chatContainerRef} className="chat-main">
            {messages.map((msg, index) => {
                if (msg.type === 'bot') return <BotMessage key={index} text={msg.text} />;
                if (msg.type === 'user') return <UserMessage key={index} text={msg.text} />;
                return null;
            })}
            {isLoading && <LoadingIndicator />}
        </main>
        <footer className="chat-footer">
            <form onSubmit={handleSendMessage}>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Ask a question..." disabled={isLoading} />
                <button type="submit" disabled={isLoading || !inputValue.trim()} aria-label="Send Message">
                    {/* New Send Icon (Paper Airplane) */}
                    <svg style={{ width: '20px', height: '20px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                </button>
            </form>
        </footer>
    </div>
            )}
        </>
    );
}