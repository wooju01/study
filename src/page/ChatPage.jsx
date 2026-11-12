import React from "react";
import StatusBadge from "../components/StatusBadge";
import MessageList from "../components/MessageList.jsx";
import StateLifecycleLab from "../components/StateLifecycleLab.jsx";
import EffectTimerLab from "../components/EffectTimerLab.jsx";
import ChatInput from "../components/ChatInput.jsx";

export default function ChatPage({ title, messages, onSend }) {
  return (
    <div className="route-view chat-view">
      <main id="main-content" className="conversation">
        <div className="conversation-inner">
          <section className="welcome" aria-labelledby="welcome-title">
            <div className="welcome-heading">
              <span className="eyebrow">K-EDU · PHASE1 REACT LAB</span>
              <StatusBadge label="LOCAL" />
            </div>
            <h2 id="welcome-title">{title}에 오신 것을 환영합니다</h2>
            <p>
              질문을 보내면 중앙 목록과 공통 Header·Sidebar의 질문 수가 함께
              바뀝니다. 서버나 AI에는 아직 전송하지 않습니다.
            </p>
          </section>
          <MessageList messages={messages} />{" "}
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
        </div>
      </main>
      <div className="coomposer-wrap">
        <ChatInput onSend={onSend} placeholder="질문을 입력하세요..." />
      </div>
    </div>
  );
}
