import Navigation from './components/navigation/Navigation.component'
import Hero from './components/hero/Hero.component'
import Projects from './components/projects/Projects.component'
import About from './components/about/About.component'

import { ParticlesContainer } from './components/Particles'

import './App.css'

function App() {
  return (
    <div className='bg-white text-blue'>
      <ParticlesContainer />
      <Navigation />
      <Hero />
      <Projects />
      <About />
    </div>
  )
}

export default App
