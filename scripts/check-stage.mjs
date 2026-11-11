import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { appendUserMessage } from "../src/messageModel.js";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const read = (path) => readFileSync(join(root, path), "utf8");

test("Unit 4~5: Vite 진입점과 개발 스크립트", () => {
  assert.equal(JSON.parse(read("package.json")).scripts.dev, "vite");
  assert.match(read("index.html"), /id="root"/);
  assert.match(read("src/main.jsx"), /createRoot/);
});

test("Unit 6~7: JSX와 분리된 Component", () => {
  const app = read("src/App.jsx");
  for (const name of ["Sidebar", "Header", "ChatInput", "Footer", "StatusBadge", "MessageList", "StateLifecycleLab", "EffectTimerLab"]) {
    assert.ok(existsSync(join(root, "src/components", name + ".jsx")));
    assert.ok(app.includes("import " + name));
    assert.ok(app.includes("<" + name));
  }
  assert.match(read("src/components/ChatInput.jsx"), /htmlFor=/);
  assert.match(app, /className=/);
});

test("Unit 8: Props 전달과 재사용", () => {
  const app = read("src/App.jsx");
  assert.ok(app.includes("<Header title={lessonTitle} />"));
  assert.match(read("src/components/Header.jsx"), /function Header\(\{ title \}\)/);
  assert.match(read("src/components/StatusBadge.jsx"), /function StatusBadge\(\{ label \}\)/);
  assert.ok(app.includes('<StatusBadge label="LOCAL" />'));
});

test("Unit 9~10: useState와 함수형 갱신", () => {
  assert.ok(read("src/components/ChatInput.jsx").includes('useState("")'));
  const app = read("src/App.jsx");
  const hook = read("src/hooks/useChatMessages.js");
  assert.ok(hook.includes("setMessages((currentMessages) => appendUserMessage(currentMessages, message))"));
  assert.ok(hook.includes("const [messages, setMessages] = useState([])"));
});

test("Unit 11~12: Controlled textarea와 전송 폼", () => {
  const input = read("src/components/ChatInput.jsx");
  assert.ok(input.includes("value={input}"));
  assert.ok(input.includes("onChange={(event) => setInput(event.target.value)}"));
  assert.ok(input.includes("onSubmit={handleSubmit}"));
  assert.ok(input.includes("event.preventDefault()"));
  assert.ok(input.includes("if (!message) return;"));
  assert.ok(input.includes("disabled={!input.trim()}"));
  assert.ok(input.includes('type="submit"'));
  assert.ok(input.includes('onClick={() => setInput("")}'));
  assert.ok(read("src/App.jsx").includes("onSend={addMessage}"));
});

test("실습 03 경계: 실제 AI 요청·Router·첨부 기능 없음", () => {
  const app = read("src/App.jsx");
  const input = read("src/components/ChatInput.jsx");
  assert.ok(!app.includes("fetch("));
  assert.ok(!input.includes("fetch("));
  assert.ok(read("src/components/MessageList.jsx").includes("messages.map("));
  assert.ok(!app.includes("react-router"));
  assert.ok(read("src/components/Sidebar.jsx").includes('type="button" disabled'));
  assert.ok(input.includes('className="attach" type="button" disabled'));
});

test("Unit 13: 빈 목록/목록/안내 문구에 조건부 렌더링 적용", () => {
  const list = read("src/components/MessageList.jsx");
  assert.ok(list.includes("messages.length === 0 ? ("));
  assert.ok(list.includes("messages.length > 0 && ("));
  assert.ok(list.includes("아직 전송한 질문이 없습니다."));
  assert.ok(list.includes("<ChatMessage key={message.id} message={message} />"));
});

test("Unit 14: map과 안정적인 ID 기반 key 사용", () => {
  const list = read("src/components/MessageList.jsx");
  assert.ok(list.includes("messages.map((message) => ("));
  assert.ok(list.includes("key={message.id}"));
  assert.ok(!list.includes("key={index}"));
  assert.ok(read("src/App.jsx").includes("<MessageList messages={messages} />"));
});

test("Unit 14: 메시지 추가는 불변성을 유지하며 ID를 증가시킨다", () => {
  const original = [];
  const first = appendUserMessage(original, "첫 질문");
  const second = appendUserMessage(first, "둘째 질문");
  assert.deepEqual(original, []);
  assert.notStrictEqual(first, original);
  assert.deepEqual(first, [{ id: 1, role: "user", content: "첫 질문" }]);
  assert.deepEqual(second, [
    { id: 1, role: "user", content: "첫 질문" },
    { id: 2, role: "user", content: "둘째 질문" },
  ]);
  assert.deepEqual(first, [{ id: 1, role: "user", content: "첫 질문" }]);
});

test("Unit 15: 같은 위치 State 보존과 Unmount/key 초기화 실험", () => {
  const lab = read("src/components/StateLifecycleLab.jsx");
  assert.ok(lab.includes('const [draft, setDraft] = useState("")'));
  assert.ok(lab.includes("setRenderCount((count) => count + 1)"));
  assert.ok(lab.includes("key={roomId}"));
  assert.ok(lab.includes("setIsOpen((open) => !open)"));
  assert.ok(lab.includes("isOpen ? ("));
});

test("Unit 16: Hook은 Component와 Custom Hook의 최상위 수준에 위치한다", () => {
  const hook = read("src/hooks/useChatMessages.js");
  const app = read("src/App.jsx");
  assert.ok(hook.includes('import { useState } from "react"'));
  assert.ok(hook.includes("export default function useChatMessages() {"));
  assert.ok(hook.includes("const [messages, setMessages] = useState([])"));
  assert.ok(app.includes("const { messages, addMessage } = useChatMessages()"));
});

test("Unit 17: document.title 동기화와 Timer Cleanup 구현", () => {
  const app = read("src/App.jsx");
  const timer = read("src/components/EffectTimerLab.jsx");
  assert.ok(app.includes("document.title ="));
  assert.ok(app.includes("}, [messages.length])"));
  assert.ok(app.includes("document.title = previousTitle"));
  assert.ok(timer.includes("useEffect(() => {"));
  assert.ok(timer.includes("window.setInterval("));
  assert.ok(timer.includes("window.clearInterval(intervalId)"));
  assert.ok(timer.includes("}, [])"));
});

test("Unit 18: 채팅 상태 로직을 Custom Hook으로 분리", () => {
  const app = read("src/App.jsx");
  const hook = read("src/hooks/useChatMessages.js");
  assert.ok(app.includes('import useChatMessages from "./hooks/useChatMessages.js"'));
  assert.ok(app.includes("const { messages, addMessage } = useChatMessages()"));
  assert.ok(app.includes("<ChatInput onSend={addMessage}"));
  assert.ok(hook.includes('import { appendUserMessage } from "../messageModel.js"'));
  assert.ok(hook.includes("return { messages, addMessage }"));
});

test("실습 04 경계: 기존 채팅·목록 유지, Backend와 Router를 도입하지 않는다", () => {
  const app = read("src/App.jsx");
  const hook = read("src/hooks/useChatMessages.js");
  assert.ok(app.includes("<MessageList messages={messages} />"));
  assert.ok(read("src/components/ChatInput.jsx").includes("onSubmit={handleSubmit}"));
  assert.ok(!app.includes("fetch("));
  assert.ok(!hook.includes("fetch("));
  assert.ok(!app.includes("react-router"));
  assert.ok(read("src/components/Sidebar.jsx").includes('type="button" disabled'));
});
