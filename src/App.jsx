import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Navbar from './components/Navbar/Navbar'
import { useState } from 'react'

function App() {
  const [lan, setLan] = useState('port')

  return (
    <div className="overflow-x-hidden">
      <Navbar lan={lan} setLan={setLan} />
      <Hero lan={lan} />
      <About lan={lan} />
      <Projects lan={lan} />
      <Contact lan={lan} />
    </div>
  )
}

export default App
