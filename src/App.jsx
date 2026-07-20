import FlowLine from './components/FlowLine'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Research from './components/Research'
import Certifications from './components/Certifications'
import ProcessWheel from './components/ProcessWheel'
import Vision from './components/Vision'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div
      id="top"
      className="relative mx-auto min-h-screen max-w-[1440px] border-x border-muted/10"
    >
      <FlowLine />
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Research />
        <ProcessWheel />
        <Certifications />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
