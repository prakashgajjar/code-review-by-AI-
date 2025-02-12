import React, { useContext, useEffect, useRef, useState } from "react";
import contextProvider from "../Hooks/ConetxtProvider";

const DisplayText = () => {
  const { receivedData, inputData , show } = useContext(contextProvider);
  const [messages, setMessages] = useState([]); 
  const messageRef = useRef(null);
  
  useEffect(() => {
    if (inputData) {
      setMessages((prev) => [...prev, { text: inputData, sender: "user" }]);  
  }
}, [inputData]);

  useEffect(() => {
    if (receivedData) {
      setMessages((prev) => [...prev, { text: receivedData, sender: "ai" }]);
    }
  }, [receivedData]);
 
  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollTop = messageRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex justify-center mt-20">
      <div
        ref={messageRef}
        className="h-[680px] w-[1050px] overflow-y-auto scrollbar-hide rounded-xl p-6 "
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            } mt-2`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-[80%] ${
                msg.sender === "user"
                  ? "bg-zinc-900 bg-opacity-30 text-white"
                  : "bg-gray-700 bg-opacity-40 text-white"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayText;
