import React from "react";

export default function SummaryAction({ file, onChack }) {
  return (
    <div className="document-lab__part">
      <h4>③ SummaryAction</h4>
      <p>{file ? `선택된 파일: ${file.name}` : "파일을 선택하세요."}</p>
      <button onClick={onChack} disabled={!file}>
        요약 준비
      </button>
      <small>파일을 선택하면 요약을 준비할 수 있습니다.</small>
    </div>
  );
}
