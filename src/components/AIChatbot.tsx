import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import './AIChatbot.css';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [threadId, setThreadId] = useState<string | null>(localStorage.getItem('onepoint_chat_thread_id'));
  const [messages, setMessages] = useState<Message[]>(() => {
    try {
      const savedMessages = localStorage.getItem('onepoint_chat_messages');
      if (savedMessages) {
        return JSON.parse(savedMessages);
      }
    } catch (error) {
      console.error('Error loading messages from localStorage:', error);
    }
    return [
      {
        id: '1',
        text: "Hi! I'm Dexter, the OnePoint AI. We help businesses optimize their systems and automate growth. What's your name, and what's on your mind today?",
        sender: 'bot',
        timestamp: new Date()
      }
    ];
  });

  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('onepoint_chat_messages', JSON.stringify(messages));
    scrollToBottom();
  }, [messages]);

  // Create thread if one doesn't exist in localStorage
  useEffect(() => {
    let isMounted = true;
    if (isOpen && !threadId) {
      const createThread = async () => {
        try {
          const response = await fetch('/api/chat/thread', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
          });
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          const data = await response.json();
          if (isMounted && data.threadId) {
            setThreadId(data.threadId);
            localStorage.setItem('onepoint_chat_thread_id', data.threadId);
          }
        } catch (error) {
          console.error('Error creating thread:', error);
        }
      };
      createThread();
    }
    return () => { isMounted = false };
  }, [isOpen, threadId]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          threadId: threadId || (await (await fetch('/api/chat/thread', { method: 'POST' })).json()).threadId,
          message: userMessage.text 
        }),
      });
      
      const data = await response.json();
      
      if (data.response) {
        // Split response by double or triple newlines to simulate separate messages
        const parts = data.response.split(/\n{2,}/).filter((p: string) => p.trim() !== '');
        
        for (let i = 0; i < parts.length; i++) {
          if (i > 0) {
            setIsTyping(true);
            await new Promise(resolve => setTimeout(resolve, 1000 + (parts[i].length * 10))); // Simulate typing
            setIsTyping(false);
          }
          
          const botMessage: Message = {
            id: (Date.now() + i).toString(),
            text: parts[i],
            sender: 'bot',
            timestamp: new Date()
          };
          setMessages(prev => [...prev, botMessage]);
        }
      } else {
        throw new Error("No response from assistant");
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm having trouble connecting to the system. Please try again or email reno@onepointcto.com directly.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="ai-chatbot-container">
      {!isOpen && (
        <button className="chat-toggle-btn" onClick={() => setIsOpen(true)}>
          <MessageCircle size={27} />
        </button>
      )}

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            {/* Header with updated name: OnePoint AI */}
            <div className="chat-header-title">
              <Bot size={20} />
              <h3>OnePoint AI</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:opacity-70">
              <X size={20} />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map(msg => (
              <div key={msg.id} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            {isTyping && <div className="typing-indicator">Assistant is thinking...</div>}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-area">
            <input 
              type="text" 
              placeholder="Ask me anything..." 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button className="send-btn" onClick={handleSend}>
              <Send size={18} />
            </button>
          </div>
          <div className="chat-footer">
            Managed by OnePoint CTO
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatbot;
