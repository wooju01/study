import React, { useEffect } from "react";
import { Routes, Route } from "react-router";
import HomePage from "./page/HomePage.jsx";
import ChatPage from "./page/ChatPage.jsx";
import useChatMessages from "./hooks/useChatMessages.js";
import MainLayout from "./layout/MainLayout.jsx";

const lessonTitle = "AI 문서 도우미";

export default function App() {
  // Unit 18: 채팅 State 로직을 Custom Hook으로 이동했습니다.
  const { messages, addMessage } = useChatMessages();
  const messageCount = messages.length;
  const latestQuestion =
    messageCount > 0 ? messages[messageCount - 1].content : null;

  // Unit 17: React 외부의 브라우저 문서 제목을 질문 수와 동기화합니다.
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${lessonTitle} · 질문 ${messages.length}개 | K-Edu`;

    return () => {
      document.title = previousTitle;
    };
  }, [messages.length]);

  return (
    <Routes>
      <Route
        element={
          <MainLayout
            title={lessonTitle}
            messageCount={messageCount}
            latestQuestion={latestQuestion}
          />
        }
      >
        <Route
          index
          element={<HomePage title={lessonTitle} messageCount={messageCount} />}
        />
        <Route
          path="chat"
          element={
            <ChatPage
              title={lessonTitle}
              messages={messages}
              onSend={addMessage}
            />
          }
        />
      </Route>
    </Routes>
  );
}
