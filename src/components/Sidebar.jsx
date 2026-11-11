import React from "react";

export default function Sidebar() {
  return (
    <aside className="sidebar" aria-label="대화 사이드바">
      <div className="brand">
        <span className="brand__icon" aria-hidden="true">K</span>
        <span><strong>K-Edu</strong><small>AI LEARNING LAB</small></span>
      </div>
      <button className="new-chat" type="button" disabled title="새 대화 기능은 이후 실습에서 구현합니다">
        <span aria-hidden="true">＋</span> 새 대화
      </button>
      <nav className="history" aria-label="예시 대화 목록">
        <h2>사이드바 디자인 미리보기</h2>
        <ul>
          <li className="history__active">문서 핵심 요약하기</li>
          <li>API 요청 구조 이해</li>
          <li>React 컴포넌트 만들기</li>
        </ul>
      </nav>
      <p className="sidebar__footer"><span aria-hidden="true">●</span> 실습 04 · Hook 실험</p>
    </aside>
  );
}
