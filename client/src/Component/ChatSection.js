import React from "react";
import "../css/chat.css";
function ChatSection({ username }) {
  return (
    <div className="message_container">
      <div className="message_section">
        <div className="message_clip" />
        <p className="message">
          <span>{username}</span>
          hello
        </p>
      </div>
      <div className="message_section">
        <p className="reciver_message">
          <span>{username}</span>
          hello arpit this side how are you vbvb vibv vb ds v ds vbdsb dvb ds
          doi vhds soh dh iosd
        </p>
        <div className="reciver_clip" />
      </div>
      <div className="message_section">
        <div className="message_clip" />
        <p className="message">
          <span>{username}</span>
          hello arpit this side how are you vbvb vibv vb ds v ds vbdsb dvb ds
          doi vhds soh dh iosd
        </p>
      </div>
      <div className="message_section">
        <p className="reciver_message">
          <span>{username}</span>
          hello arpit this side how are you vbvb vibv vb ds v ds vbdsb dvb ds
          doi vhds soh dh iosd
        </p>
        <div className="reciver_clip" />
      </div>
    </div>
  );
}

export default ChatSection;
