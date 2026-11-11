# K-Edu 문서 도우미 — React 실습앱

실습 04: **Unit 15~18 / State 보존·Hook·Effect·Custom Hook**. 실습 03 질문 목록을 유지하면서 State 수명·외부 동기화 학습 기능을 추가했습니다.

교안 권장 환경: Node.js 24 LTS.

```bash
npm install
npm run dev
```

브라우저에서 Vite가 출력한 주소로 접속합니다.

```bash
npm test
npm run build
```

`npm test`는 Node 기본 기능만 사용하는 정적 소스 검사입니다. 실제 React/Vite 설치·빌드는 **검증 전**입니다. 패키지 Lock은 첫 설치 후 검증해 반영하며, 그 전에는 `npm ci`를 사용하지 않습니다.

현재 **질문 입력·지우기·전송은 그대로 유지**됩니다. 대화 질문 배열은 `useChatMessages` Custom Hook으로 분리했고, React 실험 패널에서 Draft State 보존·초기화와 타이머 Effect/Cleanup을 관찰합니다. 브라우저 탭 제목은 질문 개수에 따라 변경됩니다. Backend·AI 응답·대화 저장은 없으며, 새 대화와 첨부 버튼은 비활성화입니다.

실습 01~04의 단계별 학습 문서는 바로 위 폴더에 있습니다. 각 이전 단계의 원본 코드는 Git 커밋으로 보존되어 있습니다.
