import React from "react";

export default function FilePreview({ file }) {
  if (!file) {
    return (
      <div className="document-lab__part">
        <h4>② FilePreview</h4>
        <p>선택된 파일이 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="document-lab__part">
      <h4>② FilePreview</h4>
      <p className="document-lab__filename">{file.name}</p>
      <p>파일 크기: {Math.ceil(file.size / 1024)} KB</p>
      <small>
        파일명·크기 정보만 표시합니다. 이미지나 PDF 본문 미리보기는 후속
        실습에서 구현합니다.
      </small>
    </div>
  );
}
