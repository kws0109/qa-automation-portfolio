import { motion } from 'framer-motion'

interface BoxProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

const Box = ({ children, className = '', delay = 0 }: BoxProps) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className={`px-3 py-2 rounded-lg text-center text-sm font-medium ${className}`}
  >
    {children}
  </motion.div>
)

const Arrow = ({ direction = 'down' }: { direction?: 'down' | 'right' | 'both' }) => (
  <div className="flex items-center justify-center text-overlay0">
    {direction === 'down' && <span className="text-xl">↓</span>}
    {direction === 'right' && <span className="text-xl">→</span>}
    {direction === 'both' && <span className="text-xl">↔</span>}
  </div>
)

const LayerLabel = ({ children, color }: { children: React.ReactNode; color: string }) => (
  <div className={`absolute -left-2 top-1/2 -translate-y-1/2 -translate-x-full px-3 py-1 rounded text-xs font-bold ${color} hidden xl:block`}>
    {children}
  </div>
)

export default function ArchitectureDiagram() {
  return (
    <div className="relative bg-mantle rounded-xl border border-surface0 p-4 md:p-6 overflow-visible">
      <div className="space-y-4">

        {/* Clients Layer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative bg-surface0/30 rounded-xl p-4"
        >
          <LayerLabel color="bg-pink text-crust">CLIENTS</LayerLabel>
          <div className="text-xs text-subtext0 mb-3 font-semibold">👥 Clients</div>
          <div className="flex flex-wrap justify-center gap-3">
            <Box className="bg-pink/20 border border-pink/30 text-pink" delay={0.1}>
              🌐 Browser (User A)
            </Box>
            <Box className="bg-pink/20 border border-pink/30 text-pink" delay={0.15}>
              🌐 Browser (User B)
            </Box>
            <Box className="bg-pink/20 border border-pink/30 text-pink" delay={0.2}>
              🌐 Browser (User C)
            </Box>
            <Box className="bg-mauve/20 border border-mauve/30 text-mauve" delay={0.25}>
              🖥️ Server Manager
            </Box>
          </div>
        </motion.div>

        <Arrow direction="down" />

        {/* Frontend Layer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative bg-blue/10 rounded-xl p-4 border border-blue/20"
        >
          <LayerLabel color="bg-blue text-crust">FRONTEND</LayerLabel>
          <div className="text-xs text-blue mb-3 font-semibold">⚛️ Frontend (React 18 + TypeScript)</div>
          <div className="flex flex-wrap justify-center gap-2 mb-3">
            <Box className="bg-blue/20 border border-blue/30 text-blue" delay={0.3}>
              FlowEditor
            </Box>
            <Box className="bg-blue/20 border border-blue/30 text-blue" delay={0.35}>
              DeviceDashboard
            </Box>
            <Box className="bg-blue/20 border border-blue/30 text-blue" delay={0.4}>
              ExecutionCenter
            </Box>
            <Box className="bg-blue/20 border border-blue/30 text-blue" delay={0.45}>
              ReportViewer
            </Box>
            <Box className="bg-blue/20 border border-blue/30 text-blue" delay={0.5}>
              ScheduleManager
            </Box>
          </div>
          <div className="flex justify-center">
            <Box className="bg-sapphire/20 border border-sapphire/30 text-sapphire" delay={0.55}>
              Socket.IO Client + REST API
            </Box>
          </div>
        </motion.div>

        <div className="flex justify-center gap-8 text-xs text-subtext0">
          <span>HTTP :3001</span>
          <Arrow direction="both" />
          <span>WebSocket :3001</span>
        </div>

        {/* Backend Layer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative bg-green/10 rounded-xl p-4 border border-green/20"
        >
          <LayerLabel color="bg-green text-crust">BACKEND</LayerLabel>
          <div className="text-xs text-green mb-3 font-semibold">🟢 Backend (Node.js + Express)</div>

          {/* Routes */}
          <div className="mb-3">
            <div className="text-xs text-subtext0 mb-2">Express Routes</div>
            <div className="flex flex-wrap justify-center gap-2">
              {['/device', '/session', '/scenario', '/schedule', '/reports'].map((route, i) => (
                <Box key={route} className="bg-green/20 border border-green/30 text-green text-xs" delay={0.5 + i * 0.05}>
                  {route}
                </Box>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="mb-3">
            <div className="text-xs text-subtext0 mb-2">Services</div>
            <div className="flex flex-wrap justify-center gap-2">
              {['testExecutor', 'suiteExecutor', 'sessionManager', 'imageMatch', 'deviceLock'].map((svc, i) => (
                <Box key={svc} className="bg-teal/20 border border-teal/30 text-teal text-xs" delay={0.6 + i * 0.05}>
                  {svc}
                </Box>
              ))}
            </div>
          </div>

          {/* Execution Module */}
          <div>
            <div className="text-xs text-subtext0 mb-2">Execution Module</div>
            <div className="flex flex-wrap justify-center gap-2">
              {['ExecutionStateManager', 'ActionExecutionService', 'NodeNavigationService'].map((mod, i) => (
                <Box key={mod} className="bg-green/30 border border-green/40 text-green text-xs" delay={0.7 + i * 0.05}>
                  {mod}
                </Box>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center text-xs text-subtext0">
          <span>WebDriver Protocol :4900</span>
        </div>
        <Arrow direction="down" />

        {/* Appium Layer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="relative bg-peach/10 rounded-xl p-4 border border-peach/20"
        >
          <LayerLabel color="bg-peach text-crust">APPIUM</LayerLabel>
          <div className="text-xs text-peach mb-3 font-semibold">🤖 Appium Server</div>
          <div className="flex justify-center">
            <Box className="bg-peach/20 border border-peach/30 text-peach" delay={0.7}>
              UiAutomator2 Driver
            </Box>
          </div>
        </motion.div>

        <div className="flex justify-center text-xs text-subtext0">
          <span>ADB (USB / Network)</span>
        </div>
        <Arrow direction="down" />

        {/* Devices Layer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="relative bg-yellow/10 rounded-xl p-4 border border-yellow/20"
        >
          <LayerLabel color="bg-yellow text-crust">DEVICES</LayerLabel>
          <div className="text-xs text-yellow mb-3 font-semibold">📱 Android Devices</div>
          <div className="flex flex-wrap justify-center gap-2">
            <Box className="bg-yellow/20 border border-yellow/30 text-yellow" delay={0.85}>
              📱 Galaxy
            </Box>
            <Box className="bg-yellow/20 border border-yellow/30 text-yellow" delay={0.9}>
              📱 Pixel
            </Box>
            <Box className="bg-yellow/20 border border-yellow/30 text-yellow" delay={0.95}>
              📱 Xiaomi
            </Box>
            <Box className="bg-surface0 border border-surface1 text-subtext0" delay={1.0}>
              ... 10 devices
            </Box>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
