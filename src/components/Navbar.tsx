import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Gamepad2 } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/features', label: 'Features' },
  { path: '/architecture', label: 'Architecture' },
  { path: '/demo', label: 'Demo' },
  { path: '/timeline', label: 'Timeline' },
  { path: '/docs', label: 'Docs' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="sticky top-0 z-50 bg-mantle/80 backdrop-blur-lg border-b border-surface0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-text hover:text-lavender transition-colors">
            <Gamepad2 className="w-8 h-8 text-mauve" />
            <span className="font-semibold text-lg hidden sm:block">QA Automation Tool</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'bg-surface0 text-lavender'
                    : 'text-subtext1 hover:text-text hover:bg-surface0/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/kws0109/QA_Automation"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 p-2 rounded-lg text-subtext1 hover:text-text hover:bg-surface0/50 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-subtext1 hover:text-text hover:bg-surface0/50 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-mantle border-b border-surface0"
          >
            <div className="px-4 py-2 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-surface0 text-lavender'
                      : 'text-subtext1 hover:text-text hover:bg-surface0/50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://github.com/kws0109/QA_Automation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-subtext1 hover:text-text hover:bg-surface0/50 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
