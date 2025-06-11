import Home from '../components/Home'
import Projects from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Toolsandskills from '../components/Toolsandskills'

export const metadata = {
  title: 'My Portfolio',
  description: 'My personal developer portfolio',
}

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen scroll-smooth">
        <Home />
        <Toolsandskills />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  )
}