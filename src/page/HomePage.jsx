import React from 'react'
import { Link , useNavigate } from 'react-router-dom'

export default function HomePage({title, messageCount}) {
    const navigate = useNavigate();
    return (
     <main id="main-content" className="route-view page-main">
      <div className="page-inner">
        <header className="page-intro">
          <span className="eyebrow">K-EDU · PHASE1 REACT LAB</span>
          <h2>{title}</h2>
          <p>React 수업에서 만든 Chat UI와 문서 작업 UI가 이제 URL별 페이지로 구분됩니다. 실제 AI와 Backend 연결은 다음 단계에서 진행합니다.</p>
        </header>
        <div className="home-grid">
          <section className="home-card">
            <span className="lab-card__tag">Unit 21 · useNavigate</span>
            <h3>AI 채팅 화면</h3>
            <p>지금까지 작성한 질문 {messageCount}개가 유지됩니다. 버튼을 누르면 전체 페이지 새로고침 없이 /chat으로 이동합니다.</p>
            <button type="button" className="home-primary" onClick={() => navigate("/chat")}>채팅으로 이동</button>
          </section>
          <section className="home-card">
            <span className="lab-card__tag">Unit 21 · Link</span>
            <h3>문서 작업 화면</h3>
            <p>선택 파일의 정보를 형제 Component가 공유하는 실습을 /documents 페이지에서 확인합니다.</p>
            <Link className="home-link" to="/documents">문서 작업 열기</Link>
          </section>
          <section className="home-card">
            <span className="lab-card__tag">Unit 22 · Layout</span>
            <h3>공통 Layout</h3>
            <p>페이지를 옮겨도 Sidebar와 Header는 그대로입니다. 설정 페이지에서 구현 범위를 확인하세요.</p>
            <Link className="home-link" to="/settings">설정 페이지 열기</Link>
          </section>
        </div>
      </div>
    </main>
  )
}

