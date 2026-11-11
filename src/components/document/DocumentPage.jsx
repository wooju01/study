import { useState } from "react";
import FileSelector from "./FileSelector";
import FilePreview from "./FilePreview";
import SummaryAction from "./SummaryAction";

export default function DocumentPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [checked, setChecked] = useState(false);

  function handleSelect(file) {
    setSelectedFile(file);
    setChecked(false);
  }
  return (
    <section className="document-lab" aria-labelledby="document-lab-title">
      <div className="document-lab__heading">
        <span className="lab-card__tag">Unit 20 · Lifting State Up</span>
        <h3 id="document-lab-title">문서 선택 State 공유 실험</h3>
        <p>
          선택한 파일 하나를 미리보기 정보와 요약 준비 버튼이 함께 사용합니다.
          업로드하거나 내용을 읽지 않습니다.
        </p>
      </div>
      <div className="document-lab__grid">
        <FileSelector onSelect={handleSelect} />
        <FilePreview file={selectedFile} />
        <SummaryAction file={selectedFile} onCheck={() => setChecked(true)} />
      </div>
      <p className="document-lab__notice" role="status">
        선택 파일의 준비 상태만 확인했습니다. 실제 서버 업로드·AI 요약은
        실행하지 않았습니다.
      </p>
    </section>
  );
}
