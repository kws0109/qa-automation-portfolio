import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Features from './pages/Features'
import Architecture from './pages/Architecture'
import Demo from './pages/Demo'
import Timeline from './pages/Timeline'
import Docs from './pages/Docs'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-base">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
