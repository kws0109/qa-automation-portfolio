import { useState } from 'react'
import { motion } from 'framer-motion'
import { Book, Code, Server, Layers, ExternalLink } from 'lucide-react'

const docSections = [
  {
    id: 'overview',
    icon: Book,
    title: 'Overview',
    content: `
## QA Automation Tool

비개발자가 시각적 플로우차트 인터페이스로 모바일 게임 자동화 테스트 시나리오를 만들 수 있는 도구입니다.

### 주요 특징

- **시각적 편집**: 노드 기반 플로우차트로 테스트 시나리오 작성
- **다중 디바이스**: 10대 디바이스 동시 연결 및 병렬 실행
- **이미지 인식**: Template Matching + OCR 기반 UI 인식
- **실시간 모니터링**: WebSocket을 통한 실시간 상태 업데이트
- **종합 리포트**: 비디오 녹화, 스크린샷, PDF 내보내기
    `.trim(),
  },
  {
    id: 'architecture',
    icon: Layers,
    title: 'Architecture',
    content: `
## System Architecture

3-Tier 아키텍처 기반의 확장 가능한 시스템 설계

### Frontend (React)

\`\`\`
Context 분리 (7개)
├── AuthContext       # 인증 상태
├── DeviceContext     # 디바이스 목록
├── ExecutionContext  # 실행 상태
├── UIContext         # UI 상태
├── FlowEditorContext # 노드 편집
├── ScenarioEditorContext # 시나리오 관리
└── EditorPreviewContext  # 미리보기
\`\`\`

### Backend (Node.js)

\`\`\`
Services
├── testExecutor      # 시나리오 실행
├── sessionManager    # 세션 관리
├── imageMatchService # 이미지 매칭
├── ocrService        # OCR 텍스트 인식
├── scheduleManager   # 스케줄 관리
└── deviceLockService # 디바이스 잠금
\`\`\`

### Automation Layer

- Appium + UiAutomator2 Driver
- WebdriverIO Client
- MJPEG Streaming
    `.trim(),
  },
  {
    id: 'api',
    icon: Server,
    title: 'API Reference',
    content: `
## REST API

### Device API

\`\`\`http
GET    /api/device/list           # 디바이스 목록
GET    /api/device/list/detailed  # 상세 정보 포함
GET    /api/device/:id            # 단일 디바이스
PUT    /api/device/:id/alias      # 별칭 수정
\`\`\`

### Session API

\`\`\`http
POST   /api/session/create        # 세션 생성
POST   /api/session/destroy       # 세션 종료
GET    /api/session/list          # 활성 세션 목록
\`\`\`

### Execution API

\`\`\`http
POST   /api/execution/submit      # 테스트 제출
GET    /api/execution/queue       # 대기열 조회
POST   /api/execution/stop/:id    # 실행 중지
\`\`\`

### Schedule API

\`\`\`http
GET    /api/schedules             # 스케줄 목록
POST   /api/schedules             # 스케줄 생성
PUT    /api/schedules/:id         # 스케줄 수정
POST   /api/schedules/:id/run     # 즉시 실행
\`\`\`
    `.trim(),
  },
  {
    id: 'code',
    icon: Code,
    title: 'Code Examples',
    content: `
## Code Examples

### 이미지 매칭

\`\`\`typescript
const result = await imageMatchService.matchTemplate(
  screenshotBuffer,
  templateId,
  {
    threshold: 0.9,
    region: { x: 0, y: 0, width: 500, height: 500 },
    multiScale: { enabled: true, minScale: 0.8, maxScale: 1.2 }
  }
);

if (result.found) {
  await actions.tap(result.centerX, result.centerY);
}
\`\`\`

### 병렬 실행

\`\`\`typescript
const result = await testOrchestrator.submitTest(
  { scenarioId, deviceIds, suiteId },
  userName,
  socketId,
  { priority: 1, testName: 'Daily Regression' }
);

// 가용 디바이스만 즉시 실행, 나머지는 대기열
console.log(result.executionId);
console.log(result.queuedCount);
\`\`\`

### Socket.IO 이벤트

\`\`\`typescript
// 테스트 진행 상황 수신
socket.on('execution:progress', (data) => {
  console.log(\`\${data.deviceId}: \${data.nodeId} - \${data.status}\`);
});

// 테스트 완료
socket.on('execution:complete', (data) => {
  console.log(\`Report ID: \${data.reportId}\`);
});
\`\`\`
    `.trim(),
  },
]

export default function Docs() {
  const [activeSection, setActiveSection] = useState('overview')

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-text mb-4">Documentation</h1>
          <p className="text-xl text-subtext1">
            기술 문서 및 API 레퍼런스
          </p>
          <a
            href="https://github.com/kws0109/QA_Automation/wiki"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-mauve hover:text-lavender transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Full Documentation on GitHub Wiki
          </a>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-64 flex-shrink-0"
          >
            <nav className="sticky top-24 space-y-1">
              {docSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeSection === section.id
                      ? 'bg-mauve/20 text-mauve'
                      : 'text-subtext1 hover:bg-surface0 hover:text-text'
                  }`}
                >
                  <section.icon className="w-5 h-5" />
                  {section.title}
                </button>
              ))}
            </nav>
          </motion.aside>

          {/* Content */}
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-1 min-w-0"
          >
            <div className="p-6 bg-mantle rounded-xl border border-surface0">
              <article className="prose prose-invert max-w-none">
                {docSections.map((section) => (
                  <div
                    key={section.id}
                    className={activeSection === section.id ? 'block' : 'hidden'}
                  >
                    <div className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-subtext1">
                      {section.content.split('\n').map((line, i) => {
                        if (line.startsWith('## ')) {
                          return (
                            <h2 key={i} className="text-2xl font-bold text-text mt-0 mb-4">
                              {line.replace('## ', '')}
                            </h2>
                          )
                        }
                        if (line.startsWith('### ')) {
                          return (
                            <h3 key={i} className="text-lg font-semibold text-text mt-6 mb-3">
                              {line.replace('### ', '')}
                            </h3>
                          )
                        }
                        if (line.startsWith('```')) {
                          return null // Handled by code block
                        }
                        if (line.startsWith('- ')) {
                          return (
                            <p key={i} className="flex items-start gap-2 my-1">
                              <span className="text-green">•</span>
                              {line.replace('- ', '')}
                            </p>
                          )
                        }
                        return (
                          <p key={i} className={line ? 'my-1' : 'my-3'}>
                            {line}
                          </p>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </article>
            </div>
          </motion.main>
        </div>
      </div>
    </div>
  )
}
