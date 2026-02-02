import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, Play } from 'lucide-react'

interface Screenshot {
  id: number
  title: string
  description: string
  image: string
}

const screenshots: Screenshot[] = [
  {
    id: 1,
    title: 'Flow Editor',
    description: '드래그 앤 드롭으로 테스트 시나리오 작성',
    image: '/screenshots/Node_Editor.png',
  },
  {
    id: 2,
    title: 'Device Dashboard',
    description: '연결된 디바이스 실시간 모니터링',
    image: '/screenshots/Device Dashborad.png',
  },
  {
    id: 3,
    title: 'Execution Center',
    description: '테스트 실행 및 진행 상황 확인',
    image: '/screenshots/Execution.png',
  },
  {
    id: 4,
    title: 'Report Viewer',
    description: '비디오 타임라인과 스크린샷 갤러리',
    image: '/screenshots/report_1.png',
  },
  {
    id: 5,
    title: 'Report Details',
    description: '상세 테스트 결과 및 로그 분석',
    image: '/screenshots/report_2.png',
  },
  {
    id: 6,
    title: 'Schedule Manager',
    description: 'Cron 기반 예약 실행 관리',
    image: '/screenshots/Schedule.png',
  },
]

export default function Demo() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)
  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % screenshots.length)
    }
  }
  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + screenshots.length) % screenshots.length)
    }
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-text mb-4">Demo & Screenshots</h1>
          <p className="text-xl text-subtext1 max-w-2xl mx-auto">
            실제 동작하는 화면을 확인하세요
          </p>
        </motion.div>

        {/* Video Demo Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-text mb-6">Video Demo</h2>
          <div className="aspect-video bg-mantle rounded-xl border border-surface0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-surface0 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-surface1 transition-colors">
                <Play className="w-10 h-10 text-mauve ml-1" />
              </div>
              <p className="text-subtext0">
                데모 비디오 준비 중...
              </p>
              <p className="text-sm text-subtext0 mt-2">
                스크린샷을 먼저 확인해 보세요 👇
              </p>
            </div>
          </div>
        </motion.div>

        {/* Screenshots Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-text mb-6">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={screenshot.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => openLightbox(index)}
                className="group cursor-pointer"
              >
                <div className="aspect-video bg-mantle rounded-xl border border-surface0 overflow-hidden mb-3 group-hover:border-mauve/50 transition-colors">
                  <img
                    src={screenshot.image}
                    alt={screenshot.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-text group-hover:text-mauve transition-colors">
                  {screenshot.title}
                </h3>
                <p className="text-sm text-subtext0">{screenshot.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How to Add Screenshots Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-surface0/50 rounded-xl border border-surface0"
        >
          <h3 className="font-semibold text-text mb-2">📸 스크린샷 추가 방법</h3>
          <ol className="list-decimal list-inside text-sm text-subtext1 space-y-1">
            <li>프로젝트 실행 후 각 화면 스크린샷 촬영</li>
            <li><code className="bg-surface0 px-1 rounded">public/screenshots/</code> 폴더에 저장</li>
            <li><code className="bg-surface0 px-1 rounded">Demo.tsx</code>에서 이미지 경로 업데이트</li>
            <li>라이브 데모 GIF 추가 시 <code className="bg-surface0 px-1 rounded">ScreenToGif</code> 추천</li>
          </ol>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-crust/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={(e) => { e.stopPropagation(); goPrev() }}
              className="absolute left-4 p-2 bg-surface0 rounded-full hover:bg-surface1 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-text" />
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full mx-4"
            >
              <div className="bg-mantle rounded-xl border border-surface0 overflow-hidden">
                <img
                  src={screenshots[selectedIndex].image}
                  alt={screenshots[selectedIndex].title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-text">
                  {screenshots[selectedIndex].title}
                </h3>
                <p className="text-subtext0">
                  {screenshots[selectedIndex].description}
                </p>
                <p className="text-sm text-subtext0 mt-2">
                  {selectedIndex + 1} / {screenshots.length}
                </p>
              </div>
            </div>

            <button
              onClick={(e) => { e.stopPropagation(); goNext() }}
              className="absolute right-4 p-2 bg-surface0 rounded-full hover:bg-surface1 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-text" />
            </button>

            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2 bg-surface0 rounded-full hover:bg-surface1 transition-colors"
            >
              <X className="w-6 h-6 text-text" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
