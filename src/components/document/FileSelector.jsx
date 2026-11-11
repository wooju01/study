import React from "react";

export default function FileSelector({ onSelect }) {
  function handleChange(event) {
    const file = event.target.files?.[0] ?? null;
    onSelect(file);
  }

  return (
    <div className="document-lab__part">
      <h4>① FileSelector</h4>
      <label htmlFor="document-file">파일을 선택하세요</label>
      <input
        id="document-file"
        type="file"
        accept="application/pdf,image/png,image/jpeg"
        onChange={handleChange}
        aria-describedby="document-file-hint"
      />
      <p id="document-file-hint">
        파일 선택만 합니다. 이 실습에서는 업로드·파일 내용 분석을 하지 않습니다.
      </p>
    </div>
  );
}
