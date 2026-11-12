import React from "react";
import DocumentSelectionLab from "../components/document/DocumentPage.jsx";

export default function DocumentPage() {
  return (
    <main id="main-content" className="route-view page-main">
      <div className="page-inner">
        <header className="page-intro">
          <span className="eyebrow">DOCUMENT WORKSPACE · UI LAB</span>
          <h2>문서 작업</h2>
          <p>
            Unit 20에서 만든 파일 선택과 공유 State 실험입니다. 실제 업로드·문서
            처리 기능은 이후 단원에서 구현합니다.
          </p>
        </header>
        <DocumentSelectionLab />
      </div>
    </main>
  );
}
