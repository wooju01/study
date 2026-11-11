import React, { useEffect, useState } from "react";

// Unit 17: Timer는 React 외부 시스템이므로 Effect에서 등록하고 Cleanup합니다.
function ActiveTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setSeconds((current) => current + 1);
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return <output className="lab__timer" aria-label="타이머 경과 시간">{seconds}초 경과</output>;
}

export default function EffectTimerLab() {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <article className="lab-card">
      <div className="lab-card__tag">Unit 17 · useEffect / Cleanup</div>
      <h4>타이머를 켜고 꺼 보세요</h4>
      <p>시작하면 Timer Component가 Mount되어 1초마다 바뀝니다. 중단하면 Unmount되어 Interval이 해제됩니다.</p>
      <div className="lab__controls">
        <button type="button" onClick={() => setIsRunning((running) => !running)}>
          {isRunning ? "타이머 중단" : "타이머 시작"}
        </button>
      </div>
      {isRunning ? (
        <ActiveTimer />
      ) : (
        <p className="lab__muted">타이머 정지 · 시작하면 0초부터 다시 계산합니다.</p>
      )}
    </article>
  );
}
