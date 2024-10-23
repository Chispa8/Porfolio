import React, { useState } from "react"
import Header from "./components/Header/Header"
import Introduction from "./components/Introduction/Introduction"
import Experience from "./components/Experience/Experience"
import Projects from "./components/Projects/Projects"
import About from "./components/About/About"
import styles from "./App.module.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "keen-slider/keen-slider.min.css"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`${styles.app} ${darkMode ? styles.darkMode : ""}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className={styles.main}>
        <section id="introduction">
          <Introduction />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="about">
          <About />
        </section>
      </main>
    </div>
  )
}

export default App
