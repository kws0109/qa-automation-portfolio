import { motion } from 'framer-motion'
import { CheckCircle2, Circle } from 'lucide-react'

interface Phase {
  id: string
  title: string
  date: string
  status: 'completed' | 'current'
  description: string
  highlights: string[]
}

const phases: Phase[] = [
  {
    id: 'phase0',
    title: 'Phase 0: TypeScript Migration',
    date: '2026-01',
    status: 'completed',
    description: '전체 코드베이스 TypeScript 전환',
    highlights: [
      'Backend .js → .ts 전환',
      'Frontend .jsx → .tsx 전환',
      '타입 정의 및 인터페이스 작성',
    ],
  },
  {
    id: 'phase1',
    title: 'Phase 1: Image Recognition',
    date: '2026-01',
    status: 'completed',
    description: '이미지 기반 UI 인식 기능',
    highlights: [
      'Template Matching (Sharp + pixelmatch)',
      'MJPEG 실시간 스트리밍',
      'tapImage, waitUntilImage 액션',
    ],
  },
  {
    id: 'phase2',
    title: 'Phase 2: Multi-Device Support',
    date: '2026-01',
    status: 'completed',
    description: '다중 디바이스 연결 및 관리',
    highlights: [
      'DeviceManager (ADB 스캔)',
      'SessionManager (멀티 세션)',
      'Actions 클래스 리팩토링 (DI)',
      'DeviceDashboard UI',
    ],
  },
  {
    id: 'phase3',
    title: 'Phase 3: Parallel Execution & Reports',
    date: '2026-01',
    status: 'completed',
    description: '병렬 실행 및 통합 리포트',
    highlights: [
      'ParallelExecutor (Promise.allSettled)',
      'ParallelReportService',
      '비디오 녹화 및 타임라인',
      '스크린샷 갤러리',
    ],
  },
  {
    id: 'phase4',
    title: 'Phase 4: Scheduling & Export',
    date: '2026-01',
    status: 'completed',
    description: '스케줄링 및 리포트 내보내기',
    highlights: [
      'node-cron 기반 예약 실행',
      'PDF/HTML 내보내기',
      'Slack 알림 연동',
      '비디오 타임라인 마커',
    ],
  },
  {
    id: 'refactoring',
    title: 'Major Refactoring',
    date: '2026-01-28',
    status: 'completed',
    description: '대규모 코드 품질 개선',
    highlights: [
      'Context 분리 (7개)',
      'testExecutor 모듈화 (5개 모듈)',
      'Rate Limiting 미들웨어',
      'Zod 스키마 검증',
      'ErrorBoundary 추가',
    ],
  },
  {
    id: 'current',
    title: 'Current: Enterprise Features',
    date: '2026-01-30',
    status: 'current',
    description: '엔터프라이즈 기능 추가',
    highlights: [
      'Suite 실행 시스템',
      '디바이스 잠금 & 대기열',
      'R2 클라우드 저장소',
      '메트릭 대시보드',
      'Server Manager (Electron)',
    ],
  },
]

export default function Timeline() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-text mb-4">Development Timeline</h1>
          <p className="text-xl text-subtext1">
            프로젝트의 성장 과정을 살펴보세요
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-surface1" />

          {/* Phases */}
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-20"
              >
                {/* Icon */}
                <div className="absolute left-5 -translate-x-1/2">
                  {phase.status === 'completed' ? (
                    <CheckCircle2 className="w-6 h-6 text-green" />
                  ) : (
                    <Circle className="w-6 h-6 text-mauve fill-mauve" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`p-6 rounded-xl border ${
                    phase.status === 'current'
                      ? 'bg-mauve/10 border-mauve/30'
                      : 'bg-mantle border-surface0'
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-text">
                      {phase.title}
                    </h3>
                    <span className="px-2 py-0.5 bg-surface0 text-subtext0 text-xs rounded">
                      {phase.date}
                    </span>
                    {phase.status === 'current' && (
                      <span className="px-2 py-0.5 bg-mauve/20 text-mauve text-xs rounded">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-subtext1 mb-4">{phase.description}</p>
                  <ul className="space-y-1">
                    {phase.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-subtext0">
                        <span className="text-green mt-0.5">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: 'Phases Completed', value: '6' },
            { label: 'Total Commits', value: '200+' },
            { label: 'Files Changed', value: '100+' },
            { label: 'Lines of Code', value: '15K+' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-4 bg-mantle rounded-xl border border-surface0 text-center"
            >
              <p className="text-2xl font-bold text-mauve">{stat.value}</p>
              <p className="text-sm text-subtext0">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
