import PageLayout from '@/components/PageLayout'
import Hero from '@/components/ui/Hero'
import About from '@/components/ui/About'
import Experience from '@/components/ui/Experience'
import Skills from '@/components/ui/Skills'
import Projects from '@/components/ui/Projects'
import Contact from '@/components/ui/Contact'
import Certifications from '@/components/ui/Certifications'

export default function HomePage() {
  return (
    <PageLayout>
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="certifications">
        <Certifications />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </PageLayout>
  )
}
