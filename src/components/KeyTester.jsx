import { useState } from 'react';

function KeyTester() {
  const [lastKey, setLastKey] = useState('');

  return (
    <div>
      <input
        className="border p-2 rounded"
        placeholder="키보드 이벤트 테스트"
        onKeyDown={(e) => setLastKey(e.key)}
      />
      <p>마지막으로 누른 키: {lastKey}</p>
    </div>
  );
}

export default KeyTester;
