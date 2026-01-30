import { motion } from 'framer-motion'
import { useState } from 'react'

type Layer = 'all' | 'frontend' | 'backend' | 'automation'

export default function Architecture() {
  const [activeLayer, setActiveLayer] = useState<Layer>('all')

  const layers: { id: Layer; label: string; color: string }[] = [
    { id: 'all', label: 'All Layers', color: 'bg-surface1' },
    { id: 'frontend', label: 'Frontend', color: 'bg-blue' },
    { id: 'backend', label: 'Backend', color: 'bg-green' },
    { id: 'automation', label: 'Automation', color: 'bg-peach' },
  ]

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-text mb-4">System Architecture</h1>
          <p className="text-xl text-subtext1 max-w-2xl mx-auto">
            3-Tier 아키텍처 기반의 확장 가능한 시스템 설계
          </p>
        </motion.div>

        {/* Layer Filter */}
        <div className="flex justify-center gap-2 mb-12">
          {layers.map((layer) => (
            <button
              key={layer.id}
              onClick={() => setActiveLayer(layer.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeLayer === layer.id
                  ? `${layer.color} text-base`
                  : 'bg-surface0 text-subtext1 hover:bg-surface1'
              }`}
            >
              {layer.label}
            </button>
          ))}
        </div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-mantle rounded-xl border border-surface0 p-8 mb-12 overflow-x-auto"
        >
          <pre className="font-mono text-sm text-subtext1 leading-relaxed">
{`
┌─────────────────────────────────────────────────────────────────────────────────┐
│                                   CLIENTS                                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │   Browser    │  │   Browser    │  │   Browser    │  │  Server Mgr  │         │
│  │   (User A)   │  │   (User B)   │  │   (User C)   │  │  (Electron)  │         │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘         │
└─────────┼──────────────────┼──────────────────┼──────────────────┼───────────────┘
          │                  │                  │                  │
          └──────────────────┴────────┬─────────┴──────────────────┘
                                      │
┌─────────────────────────────────────┴───────────────────────────────────────────┐
│                              FRONTEND (React)                                    │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌───────────┐  │
│  │ FlowEditor  │ │  Device     │ │ Execution   │ │  Report     │ │ Schedule  │  │
│  │  Context    │ │  Dashboard  │ │   Center    │ │   Viewer    │ │  Manager  │  │
│  └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘ └───────────┘  │
│                                      │                                           │
│  ┌───────────────────────────────────┴───────────────────────────────────────┐  │
│  │                    Socket.IO Client + REST API                             │  │
│  └───────────────────────────────────┬───────────────────────────────────────┘  │
└──────────────────────────────────────┼──────────────────────────────────────────┘
                                       │
          ┌────────────────────────────┴────────────────────────────┐
          │ HTTP :3001                              WebSocket :3001 │
          ▼                                                         ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              BACKEND (Node.js)                                   │
│                                                                                  │
│  ┌─────────────────────────────────────────────────────────────────────────┐    │
│  │                           Express Routes                                 │    │
│  │  /api/device  /api/session  /api/scenario  /api/schedule  /api/reports  │    │
│  └─────────────────────────────────┬───────────────────────────────────────┘    │
│                                    │                                             │
│  ┌─────────────────────────────────┴───────────────────────────────────────┐    │
│  │                              Services                                    │    │
│  │ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐     │    │
│  │ │ testExecutor │ │ suiteExecutor│ │testOrchestrator│deviceLockSvc │     │    │
│  │ └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘     │    │
│  │ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐     │    │
│  │ │sessionManager│ │ imageMatch   │ │  ocrService  │ │ scheduleManager   │    │
│  │ └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘     │    │
│  └─────────────────────────────────┬───────────────────────────────────────┘    │
│                                    │                                             │
│  ┌─────────────────────────────────┴───────────────────────────────────────┐    │
│  │                         Execution Module                                 │    │
│  │ ┌────────────────┐ ┌────────────────┐ ┌────────────────┐                │    │
│  │ │ExecutionState  │ │ ActionExecution│ │ NodeNavigation │                │    │
│  │ │   Manager      │ │    Service     │ │    Service     │                │    │
│  │ └────────────────┘ └────────────────┘ └────────────────┘                │    │
│  └─────────────────────────────────────────────────────────────────────────┘    │
└────────────────────────────────────┬────────────────────────────────────────────┘
                                     │
          ┌──────────────────────────┴──────────────────────────┐
          │ WebDriver Protocol :4900                             │
          ▼                                                      │
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              APPIUM SERVER                                       │
│  ┌─────────────────────────────────────────────────────────────────────────┐    │
│  │                         UiAutomator2 Driver                              │    │
│  └─────────────────────────────────────────────────────────────────────────┘    │
│                                     │                                            │
└─────────────────────────────────────┼────────────────────────────────────────────┘
                                      │
          ┌───────────────────────────┴───────────────────────────┐
          │ ADB (USB/Network)                                     │
          ▼                                                       ▼
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              ANDROID DEVICES                                     │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐        ┌──────────────┐     │
│  │  Device 1    │ │  Device 2    │ │  Device 3    │  ...   │  Device 50   │     │
│  │  (Galaxy)    │ │  (Pixel)     │ │  (Xiaomi)    │        │  (OnePlus)   │     │
│  └──────────────┘ └──────────────┘ └──────────────┘        └──────────────┘     │
└─────────────────────────────────────────────────────────────────────────────────┘
`}
          </pre>
        </motion.div>

        {/* Component Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`p-6 rounded-xl border transition-opacity ${
              activeLayer === 'all' || activeLayer === 'frontend'
                ? 'bg-blue/10 border-blue/30 opacity-100'
                : 'bg-mantle border-surface0 opacity-50'
            }`}
          >
            <h3 className="text-lg font-semibold text-blue mb-4">Frontend</h3>
            <ul className="space-y-2 text-sm text-subtext1">
              <li>• React 18 + TypeScript</li>
              <li>• Context API (7개 분리)</li>
              <li>• React Flow (노드 에디터)</li>
              <li>• Socket.IO Client (실시간)</li>
              <li>• Vite (빌드 도구)</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`p-6 rounded-xl border transition-opacity ${
              activeLayer === 'all' || activeLayer === 'backend'
                ? 'bg-green/10 border-green/30 opacity-100'
                : 'bg-mantle border-surface0 opacity-50'
            }`}
          >
            <h3 className="text-lg font-semibold text-green mb-4">Backend</h3>
            <ul className="space-y-2 text-sm text-subtext1">
              <li>• Node.js + Express</li>
              <li>• TypeScript 전면 적용</li>
              <li>• Socket.IO (WebSocket)</li>
              <li>• Zod (스키마 검증)</li>
              <li>• node-cron (스케줄링)</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`p-6 rounded-xl border transition-opacity ${
              activeLayer === 'all' || activeLayer === 'automation'
                ? 'bg-peach/10 border-peach/30 opacity-100'
                : 'bg-mantle border-surface0 opacity-50'
            }`}
          >
            <h3 className="text-lg font-semibold text-peach mb-4">Automation</h3>
            <ul className="space-y-2 text-sm text-subtext1">
              <li>• Appium + WebdriverIO</li>
              <li>• UiAutomator2 Driver</li>
              <li>• Sharp + OpenCV (이미지)</li>
              <li>• Google Cloud Vision (OCR)</li>
              <li>• MJPEG Streaming</li>
            </ul>
          </motion.div>
        </div>

        {/* Data Flow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-mantle rounded-xl border border-surface0"
        >
          <h3 className="text-xl font-semibold text-text mb-6">Data Flow</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: 1, title: 'User Action', desc: '사용자가 시나리오 실행 요청' },
              { step: 2, title: 'Queue & Lock', desc: '디바이스 가용성 확인 및 잠금' },
              { step: 3, title: 'Execute', desc: 'Appium을 통해 디바이스 제어' },
              { step: 4, title: 'Report', desc: '결과 수집 및 리포트 생성' },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                <div className="p-4 bg-surface0 rounded-lg">
                  <div className="w-8 h-8 bg-mauve text-base rounded-full flex items-center justify-center font-bold mb-2">
                    {item.step}
                  </div>
                  <h4 className="font-semibold text-text mb-1">{item.title}</h4>
                  <p className="text-sm text-subtext0">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-mauve">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
