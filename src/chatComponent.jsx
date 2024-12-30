import React, { useState, useEffect } from 'react';
import qaData from './chat.json'; // Adjust the path as necessary

const ChatComponent = () => {
  const [isChatActive, setIsChatActive] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const startChat = () => {
    setIsChatActive(true);
    setMessages([]); // Clear previous messages if needed
  };

  const endChat = () => {
    setIsChatActive(false);
  };

  const handleSendMessage = (message) => {
    if (message) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, sender: 'user' },
      ]);

      // Find the answer from the JSON data
      const foundQA = qaData.chats.find(
        (qa) => qa.question.toLowerCase() === message.toLowerCase()
      );

      // Simulate a bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: foundQA ? foundQA.answer : "I'm sorry, I don't understand that.",
            sender: 'bot',
          },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white shadow-lg rounded-lg">
      {isChatActive ? (
        <div className="flex flex-col h-80">
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`my-2 p-2 rounded-lg ${
                  msg.sender === 'user'
                    ? 'bg-blue-500 text-white self-end'
                    : 'bg-gray-200 self-start'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-2 border-t">
            <input
              type="text"
              placeholder="Type a message..."
              className="border rounded w-full p-2"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage(userInput);
                  setUserInput('');
                }
              }}
            />
          </div>
          <button
            className="mt-2 bg-red-500 text-white p-2 rounded"
            onClick={endChat}
          >
            End Chat
          </button>
        </div>
      ) : (
        <div className="p-4">
          <button
            className="bg-green-500 text-white p-2 rounded"
            onClick={startChat}
          >
            Start Chat
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatComponent;