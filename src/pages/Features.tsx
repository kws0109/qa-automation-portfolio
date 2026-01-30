import { motion } from 'framer-motion'
import {
  Smartphone,
  Image,
  Zap,
  FileText,
  Clock,
  Users,
  Lock,
  Bell,
  Cloud,
  BarChart3,
  Video,
  Search
} from 'lucide-react'

const featureCategories = [
  {
    title: '디바이스 관리',
    description: '대규모 디바이스 팜 운영을 위한 기능',
    features: [
      {
        icon: Smartphone,
        title: 'Multi-Device Support',
        description: '50+ Android 디바이스 동시 연결',
        details: [
          'ADB를 통한 자동 디바이스 탐지',
          '디바이스별 세션 관리 (SessionManager)',
          '실시간 상태 모니터링 (배터리, 메모리, 온도)',
          '영구 저장소로 오프라인 디바이스 추적',
        ],
      },
      {
        icon: Lock,
        title: 'Device Lock & Queue',
        description: '다중 사용자 환경의 리소스 관리',
        details: [
          '비관적 잠금으로 충돌 방지',
          '우선순위 기반 대기열 시스템',
          '자동 분할 실행 (일부 가용 디바이스 즉시 시작)',
          '실시간 대기열 상태 표시',
        ],
      },
    ],
  },
  {
    title: '이미지 인식',
    description: '화면 기반 UI 자동화',
    features: [
      {
        icon: Image,
        title: 'Template Matching',
        description: 'OpenCV + Sharp 기반 이미지 매칭',
        details: [
          '멀티스케일 매칭 (0.5x ~ 1.5x)',
          'ROI (관심 영역) 설정으로 속도 최적화',
          '신뢰도 임계값 조정 가능',
          '매칭 영역 하이라이트 시각화',
        ],
      },
      {
        icon: Search,
        title: 'OCR Text Recognition',
        description: 'Google Cloud Vision 기반 텍스트 인식',
        details: [
          '화면 내 텍스트 탐지 및 탭',
          '텍스트 존재/소멸 대기',
          '다중 토큰 결합 검색',
          '한글, 영어, 숫자 지원',
        ],
      },
    ],
  },
  {
    title: '테스트 실행',
    description: '효율적인 테스트 오케스트레이션',
    features: [
      {
        icon: Zap,
        title: 'Parallel Execution',
        description: 'Suite 기반 병렬 테스트 실행',
        details: [
          '디바이스별 독립 실행 (Promise.allSettled)',
          '실시간 진행 상황 WebSocket 전송',
          '디바이스별 성공/실패 독립 처리',
          '실행 중 개별 디바이스 중지 가능',
        ],
      },
      {
        icon: Clock,
        title: 'Scheduling',
        description: 'Cron 기반 예약 실행',
        details: [
          '프리셋 제공 (매일 10시, 매시간 등)',
          '요일별 선택 UI',
          '즉시 실행 버튼',
          '실행 이력 조회',
        ],
      },
    ],
  },
  {
    title: '리포트 & 모니터링',
    description: '테스트 결과 시각화 및 분석',
    features: [
      {
        icon: FileText,
        title: 'Rich Reports',
        description: '상세한 테스트 결과 리포트',
        details: [
          '디바이스별 탭 전환',
          '단계별 실행 결과 테이블',
          'PDF/HTML 내보내기 (Base64 이미지 임베딩)',
          'R2 클라우드 저장소 연동',
        ],
      },
      {
        icon: Video,
        title: 'Video Recording',
        description: '테스트 실행 비디오 녹화',
        details: [
          '디바이스별 자동 녹화',
          '스텝별 타임라인 마커',
          '마커 클릭으로 해당 시점 이동',
          '대기 액션 시작/완료 이원화 마커',
        ],
      },
      {
        icon: BarChart3,
        title: 'Metrics Dashboard',
        description: '테스트 통계 및 추이 분석',
        details: [
          '실행 통계 (성공/실패/총 실행)',
          '성공률 추이 차트',
          '기간별 필터링',
          '디바이스별 성능 비교',
        ],
      },
    ],
  },
  {
    title: '협업 & 알림',
    description: '팀 협업을 위한 기능',
    features: [
      {
        icon: Users,
        title: 'Multi-User Support',
        description: '다중 사용자 동시 접속',
        details: [
          'Slack OAuth 로그인',
          '사용자별 테스트 요청 추적',
          '실시간 상태 동기화 (Socket.IO)',
          '디바이스 사용 현황 투명성',
        ],
      },
      {
        icon: Bell,
        title: 'Slack Notification',
        description: '테스트 결과 Slack 알림',
        details: [
          '테스트 완료 시 자동 알림',
          '성공/실패 메시지 포맷',
          '채널 선택 UI',
          '리포트 링크 포함',
        ],
      },
      {
        icon: Cloud,
        title: 'Cloud Storage',
        description: 'Cloudflare R2 리포트 저장',
        details: [
          '리포트 클라우드 업로드',
          '공유 링크 생성',
          '외부 접근 지원 (Cloudflare Tunnel)',
        ],
      },
    ],
  },
]

export default function Features() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-text mb-4">Features</h1>
          <p className="text-xl text-subtext1 max-w-2xl mx-auto">
            엔터프라이즈급 QA 자동화를 위한 종합 기능 세트
          </p>
        </motion.div>

        {/* Feature Categories */}
        <div className="space-y-16">
          {featureCategories.map((category, categoryIndex) => (
            <motion.section
              key={category.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-text mb-2">{category.title}</h2>
                <p className="text-subtext0">{category.description}</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {category.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: featureIndex * 0.1 }}
                    className="p-6 bg-mantle rounded-xl border border-surface0"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-surface0 rounded-lg">
                        <feature.icon className="w-6 h-6 text-mauve" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-text mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-subtext0 text-sm mb-4">
                          {feature.description}
                        </p>
                        <ul className="space-y-2">
                          {feature.details.map((detail, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-subtext1"
                            >
                              <span className="text-green mt-1">•</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  )
}
