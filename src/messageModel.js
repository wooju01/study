// Unit 14: 목록의 기존 항목을 수정하지 않고 새 질문을 추가합니다.
// ID는 삭제/재정렬 기능이 없는 현재 실습에서 마지막 ID보다 1 크게 만듭니다.
export function appendUserMessage(currentMessages, text) {
  const lastMessage = currentMessages[currentMessages.length - 1];
  const nextId = lastMessage ? lastMessage.id + 1 : 1;

  return [
    ...currentMessages,
    { id: nextId, role: "user", content: text },
  ];
}
