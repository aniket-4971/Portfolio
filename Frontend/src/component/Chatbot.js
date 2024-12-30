import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await axios.post('http://localhost:5000/api/chat', { message: input },{
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const aiResponse = response.data.reply;

      const botMessage = { sender: 'bot', text: aiResponse.summary };

      if (aiResponse.actionItems && aiResponse.actionItems.length > 0) {
        botMessage.actionItems = aiResponse.actionItems.map((item, index) => (
          <li key={index}>{item}</li>
        ));
      }

      setMessages((prevMessages) => [...prevMessages, botMessage]);
      console.log(response);
      console.log(botMessage);
      
    } catch (error) {
      console.error('Error:', error);
      const botMessage = { sender: 'bot', text: 'Sorry, something went wrong.' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }

    setInput(''); 
  };

  return (
    <div className="chatbot-wrapper">
      <div className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close Chat' : 'Chat with Me'}
      </div>
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3>Chat with Aniket</h3>
            <button className="close-btn" onClick={() => setIsOpen(false)}>X</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chatbot-message ${msg.sender}`}>
                {msg.text}
                {msg.actionItems && (
                  <ul>{msg.actionItems}</ul>
                )}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me about my resume..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
