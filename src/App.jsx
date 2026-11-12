import React, { useEffect } from "react";
import { Routes, Route } from "react-router";
import HomePage from "./page/HomePage.jsx";
import useChatMessages from "./hooks/useChatMessages.js";

const lessonTitle = "AI 문서 도우미";

export default function App() {
  // Unit 18: 채팅 State 로직을 Custom Hook으로 이동했습니다.
  const { messages, addMessage } = useChatMessages();
  const messageCount = messages.length;
  const latesQuestion =
    messageCount > 0 ? messages[messageCount - 1].text : null;

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
        index
        element={<HomePage title={lessonTitle} messageCount={messageCount} />}
      />
    </Routes>
    /*<div className="app-shell">
      <Sidebar />
      <div className="workspace">
        <Header title={lessonTitle} />
        <main id="main-content" className="conversation">
          <div className="conversation-inner">
            <section className="welcome" aria-labelledby="welcome-title">
              <div className="welcome__heading">
                <span className="eyebrow">K-EDU · PHASE1 REACT LAB</span>
                <StatusBadge label="LOCAL" />
              </div>
              <h2 id="welcome-title">{lessonTitle}에 오신 것을 환영합니다</h2>
              <p>
                질문 목록은 그대로 유지됩니다. 이번 단계에서는 State가 언제
                초기화되는지, Effect가 언제 동작하는지 직접 확인해 봅니다.
              </p>
            </section>
            <MessageList messages={messages} />
            <section className="react-labs" aria-labelledby="labs-title">
              <div className="react-labs__heading">
                <h3 id="labs-title">React Hook 동작 실험</h3>
                <p>아래 학습 패널의 임시 입력은 채팅 질문 목록과 별개입니다.</p>
              </div>
              <div className="react-labs__grid">
                <StateLifecycleLab />
                <EffectTimerLab />
              </div>
            </section>
            <DocumentPage />
          </div>
        </main>
        <div className="composer-wrap">
          <ChatInput onSend={addMessage} placeholder="질문을 입력하세요..." />
          <Footer />
        </div>
      </div>
    </div>*/
  );
}
