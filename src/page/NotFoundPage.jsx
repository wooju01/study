import React from "react";
import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <main id="main-content" className="route-view page-main">
      <div className="page-inner">
        <header className="page-intro">
          <span className="eyebrow">404 · K-EDU</span>
          <h2>페이지를 찾을 수 없습니다.</h2>
          <p>주소를 다시 확인하거나 홈 화면으로 이동해 주세요.</p>
        </header>
        <Link className="home-link" to="/">
          홈으로 이동
        </Link>
      </div>
    </main>
  );
}
