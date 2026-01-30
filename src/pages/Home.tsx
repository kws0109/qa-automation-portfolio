import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Smartphone,
  Image,
  Zap,
  FileText,
  Clock,
  Users,
  ArrowRight,
  Github,
  BookOpen
} from 'lucide-react'

const features = [
  {
    icon: Smartphone,
    title: 'Multi-Device',
    description: '50+ 디바이스 동시 연결 및 병렬 테스트 실행',
    color: 'text-blue',
  },
  {
    icon: Image,
    title: 'Image Recognition',
    description: 'Template Matching + OCR 기반 UI 인식',
    color: 'text-green',
  },
  {
    icon: Zap,
    title: 'Parallel Execution',
    description: 'Suite 기반 병렬 실행 및 디바이스 대기열',
    color: 'text-yellow',
  },
  {
    icon: FileText,
    title: 'Rich Reports',
    description: '비디오 타임라인, PDF/HTML 내보내기',
    color: 'text-peach',
  },
  {
    icon: Clock,
    title: 'Scheduling',
    description: 'Cron 기반 예약 실행 및 Slack 알림',
    color: 'text-mauve',
  },
  {
    icon: Users,
    title: 'Multi-User',
    description: '다중 사용자 동시 접속 및 리소스 관리',
    color: 'text-pink',
  },
]

const techStack = [
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express', category: 'Backend' },
  { name: 'Socket.IO', category: 'Realtime' },
  { name: 'Appium', category: 'Automation' },
  { name: 'Sharp', category: 'Image' },
  { name: 'OpenCV', category: 'Image' },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-mauve/10 via-transparent to-blue/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-text mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mauve to-blue">
                Game QA Automation Tool
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-subtext1 mb-4 max-w-3xl mx-auto">
              비개발자도 시각적 플로우차트로
            </p>
            <p className="text-xl md:text-2xl text-subtext1 mb-8 max-w-3xl mx-auto">
              모바일 게임 자동화 테스트를 만들 수 있는 도구
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 px-6 py-3 bg-mauve text-base font-semibold rounded-lg hover:bg-mauve/80 transition-colors"
              >
                View Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://github.com/kws0109/QA_Automation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-surface0 text-text font-semibold rounded-lg hover:bg-surface1 transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <Link
                to="/docs"
                className="inline-flex items-center gap-2 px-6 py-3 bg-surface0 text-text font-semibold rounded-lg hover:bg-surface1 transition-colors"
              >
                <BookOpen className="w-5 h-5" />
                Documentation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-mantle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-text mb-4">Key Features</h2>
            <p className="text-subtext1">엔터프라이즈급 QA 자동화를 위한 핵심 기능</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-base rounded-xl border border-surface0 hover:border-surface1 transition-colors"
              >
                <feature.icon className={`w-10 h-10 ${feature.color} mb-4`} />
                <h3 className="text-lg font-semibold text-text mb-2">{feature.title}</h3>
                <p className="text-subtext0">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-text mb-4">Tech Stack</h2>
            <p className="text-subtext1">모던 웹 기술과 자동화 프레임워크의 조합</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 bg-surface0 text-subtext1 rounded-full text-sm font-medium hover:bg-surface1 hover:text-text transition-colors cursor-default"
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-mauve/20 to-blue/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-text mb-4">
            Ready to explore?
          </h2>
          <p className="text-subtext1 mb-8">
            아키텍처 설계부터 구현 세부사항까지 자세히 살펴보세요
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/architecture"
              className="inline-flex items-center gap-2 px-6 py-3 bg-mauve text-base font-semibold rounded-lg hover:bg-mauve/80 transition-colors"
            >
              View Architecture
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/timeline"
              className="inline-flex items-center gap-2 px-6 py-3 bg-surface0 text-text font-semibold rounded-lg hover:bg-surface1 transition-colors"
            >
              Development Timeline
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
