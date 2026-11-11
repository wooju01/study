import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Counter from './components/Counter';
import KeyTester from './components/KeyTester';
import NameInput from './components/NameInput';

const menus = [
  { id: 'button', label: '버튼', component: <Counter /> },
  { id: 'key', label: '키', component: <KeyTester /> },
  { id: 'name', label: '네임인풋', component: <NameInput /> },
];

function App() {
  const [selected, setSelected] = useState('button');
  const current = menus.find((menu) => menu.id === selected);

  return (
    <div className="flex flex-1">
      <Sidebar menus={menus} selected={selected} onSelect={setSelected} />
      <main className="flex-1 p-4">
        <ul>
          <li>이름</li>
          <li>과목명</li>
          <li>오늘수업날짜</li>
        </ul>
        {current.component}
      </main>
    </div>
  );
}

export default App;
