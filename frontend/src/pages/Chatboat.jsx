import React, { useState } from "react";
import { Bot, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Chatboat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! How can I help you?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    // Add user message
    const newMessages = [...messages, { from: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    // Dummy bot reply after 500ms
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Where Are you now" },
      ]);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="p-3 bg-blue-600 rounded-full text-white shadow-lg hover:bg-blue-700"
        >
          <Bot size={24} />
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
            className="w-80 h-96 bg-white rounded-xl shadow-xl flex flex-col"
          >
            {/* Header */}
            <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
              <span className="font-semibold">ChatBot</span>
              <button onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-lg max-w-[80%] ${
                    msg.from === "user"
                      ? "bg-blue-100 self-end ml-auto"
                      : "bg-gray-100"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-2 border-t flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-3 py-1 border rounded-full text-sm focus:outline-none"
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className="text-blue-600 font-semibold"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatboat;
