import { useState } from "react";
import { appendUserMessage } from "../messageModel.js";

// Unit 18: UI에서 메시지 저장과 추가 로직을 분리해 재사용 가능한 Hook으로 만듭니다.
export default function useChatMessages() {
  const [messages, setMessages] = useState([]);

  function addMessage(message) {
    setMessages((currentMessages) => appendUserMessage(currentMessages, message));
  }

  return { messages, addMessage };
}
