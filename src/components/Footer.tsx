import { Github, Mail, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-mantle border-t border-surface0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-subtext0 text-sm">
            © 2026 QA Automation Tool. Built with React, TypeScript, and passion.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/kws0109/QA_Automation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-subtext0 hover:text-lavender transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:kws0553@gmail.com"
              className="text-subtext0 hover:text-lavender transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-subtext0 hover:text-lavender transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
