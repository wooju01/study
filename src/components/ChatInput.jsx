import React, { useState } from "react";

export default function ChatInput({ onSend, placeholder }) {
  // Unit 10: 사용자가 현재 입력하고 있는 내용
  const [input, setInput] = useState("");

  // Unit 12: form 제출 시 새로고침을 막고, 부모 App으로 전달합니다.
  function handleSubmit(event) {
    event.preventDefault();
    const message = input.trim();
    if (!message) return;
    onSend(message);
    setInput("");
  }

  return (
    <form className="composer" aria-label="메시지 입력창" onSubmit={handleSubmit}>
      <label className="visually-hidden" htmlFor="chat-message">메시지</label>
      <textarea
        id="chat-message"
        className="composer__textarea"
        placeholder={placeholder}
        rows="2"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <div className="composer__tools">
        <button className="attach" type="button" disabled title="파일 업로드 실습에서 활성화됩니다">
          <span aria-hidden="true">＋</span> 파일 첨부
        </button>
        <button className="clear-draft" type="button" disabled={!input} onClick={() => setInput("")}>
          지우기
        </button>
        <span className="composer__hint">화면 반영 · 서버 전송 없음</span>
        <button className="send" type="submit" disabled={!input.trim()} aria-label="메시지 전송">
          <span aria-hidden="true">↑</span>
        </button>
      </div>
    </form>
  );
}
