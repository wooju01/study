import React from "react";
import { Link } from "react-router";

export default function SettingsPage() {
  return (
    <main id="main-content" className="route-view page-main">
      <div className="page-inner">
        <header className="page-intro">
          <span className="eyebrow">K-EDU · PHASE1 REACT LAB</span>
          <h2>설정 · 학습용 안내</h2>
          <p>
            이 페이지는 Router와 공통 Layout을 확인하기 위한 정적 화면입니다.
          </p>
        </header>
        <section className="settings-panel">
          <h3>현재 구현 범위</h3>
          <p>
            질문 입력·목록, 파일 선택 정보 표시, React Hook 실험, 페이지 이동이
            구현되어 있습니다.
          </p>
          <p>
            실제 사용자 설정, 로그인, AI 모델 선택, 서버 API는 아직 구현하지
            않았습니다.
          </p>
          <Link to="/chat">채팅 화면으로 돌아가기</Link>
        </section>
      </div>
    </main>
  );
}
