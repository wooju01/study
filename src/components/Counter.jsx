import { useState } from 'react';
import Button from './Button';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>{count}</div>
      <Button text="버튼 숫자 증가" onClick={() => setCount(count + 1)} color="blue" className="w-38 h-12" />
      <Button text="버튼 숫자 감소" onClick={() => setCount(count - 1)} color="red" className="w-38 h-12" />
      <Button text="버튼 숫자 초기화" onClick={() => setCount(0)} color="green" className="w-38 h-12" />
    </div>
  );
}

export default Counter;
