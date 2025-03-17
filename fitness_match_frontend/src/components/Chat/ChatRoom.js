import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

const ChatRoom = ({ matchId }) => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => socket.off("message");
  }, []);

  const sendMessage = () => {
    socket.emit("sendMessage", { matchId, text });
    setText("");
  };

  return (
    <div>
      <h3>Chat</h3>
      <div>
        {messages.map((msg, idx) => (
          <p key={idx}>{msg.text}</p>
        ))}
      </div>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type a message..." />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatRoom;
