import { useState } from 'react';
import Button from './Button';

function NameInput() {
  const [name, setName] = useState('');

  return (
    <div className="m-2">
      <input
        className="border p-2 rounded"
        placeholder="이름을 입력하세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>{name}님!</p>
      <p>글자 수: {name.length}</p>
      <Button text="지우기" onClick={() => setName('')} color="green" />
    </div>
  );
}

export default NameInput;
