import React from "react";

export default function ChatMessage({ message }) {
  return (
    <article className="message message--user">
      <p className="user-bubble">{message.content}</p>
    </article>
  );
}
