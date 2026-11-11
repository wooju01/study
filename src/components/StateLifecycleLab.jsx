import React, { useState } from "react";

// Unit 15: 이 입력 State는 DraftEditor가 UI 트리에 남아 있을 때만 유지됩니다.
function DraftEditor({ roomId }) {
  const [draft, setDraft] = useState("");

  return (
    <div className="lab__draft">
      <label htmlFor="draft-experiment">공간 {roomId}의 임시 입력</label>
      <input
        id="draft-experiment"
        type="text"
        value={draft}
        onChange={(event) => setDraft(event.target.value)}
        placeholder="보존되는 문장을 입력하세요"
      />
      <p>현재 입력: {draft || "내용 없음"}</p>
    </div>
  );
}

export default function StateLifecycleLab() {
  const [isOpen, setIsOpen] = useState(true);
  const [roomId, setRoomId] = useState("A");
  const [renderCount, setRenderCount] = useState(0);

  return (
    <article className="lab-card">
      <div className="lab-card__tag">Unit 15 · State 보존</div>
      <h4>입력 State는 언제 사라질까?</h4>
      <p>부모의 다른 State가 바뀌어도 같은 위치의 입력은 유지됩니다. 컴포넌트를 제거하거나 key를 바꾸면 초기화됩니다.</p>
      <div className="lab__controls">
        <button type="button" onClick={() => setRenderCount((count) => count + 1)}>
          부모 다시 렌더 ({renderCount})
        </button>
        <button type="button" onClick={() => setRoomId((room) => (room === "A" ? "B" : "A"))}>
          공간 바꾸기
        </button>
        <button type="button" onClick={() => setIsOpen((open) => !open)}>
          {isOpen ? "입력창 닫기" : "입력창 열기"}
        </button>
      </div>
      {isOpen ? (
        <DraftEditor key={roomId} roomId={roomId} />
      ) : (
        <p className="lab__muted">입력 컴포넌트가 Unmount되었습니다. 다시 열면 State가 새로 생성됩니다.</p>
      )}
    </article>
  );
}
