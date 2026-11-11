import React from "react";
import ChatMessage from "./ChatMessage.jsx";

export default function MessageList({ messages }) {
  return (
    <section className="thread" aria-labelledby="thread-title">
      <div className="thread__heading">
        <h3 id="thread-title">내 질문</h3>
        <span>전송 횟수: {messages.length}회</span>
      </div>

      {/* Unit 13: 배열이 비었는지에 따라 서로 다른 화면을 보여줍니다. */}
      {messages.length === 0 ? (
        <div className="thread__empty">
          <strong>아직 전송한 질문이 없습니다.</strong>
          <p>아래 입력창에서 첫 질문을 전송해 보세요.</p>
        </div>
      ) : (
        <div className="messages" aria-label="전송한 질문 목록">
          {/* Unit 14: 각 항목을 map으로 렌더링하고, index가 아닌 고유 ID를 key로 사용합니다. */}
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>
      )}

      {/* Unit 13: 질문이 있을 때만 안내 문구를 출력합니다. */}
      {messages.length > 0 && (
        <p className="thread__note">현재는 질문만 화면에 누적됩니다. AI 답변이나 서버 저장은 아직 없습니다.</p>
      )}
    </section>
  );
}
