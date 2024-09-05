import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'daisyui/dist/full.css';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('https://chatify-api.up.railway.app/messages', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessages(response.data);
    };
    fetchMessages();
  }, []);

  const handleSendMessage = async () => {
    const token = localStorage.getItem('token');
    await axios.post(
      'https://chatify-api.up.railway.app/messages',
      { text: newMessage },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setNewMessage('');
  };

  return (
    <div className="flex flex-col h-screen bg-base-100 p-4">
      <div className="flex-grow overflow-y-auto mb-4">
        {messages.map((msg) => (
          <div key={msg.id} className="flex items-start mb-4">
            <img src={msg.avatar} alt="User Avatar" className="w-10 h-10 rounded-full mr-3" />
            <div className="bg-base-200 p-3 rounded-lg max-w-xs">
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center bg-base-200 p-3 rounded-lg">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="input input-bordered flex-grow mr-3"
        />
        <button onClick={handleSendMessage} className="btn btn-primary">
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
