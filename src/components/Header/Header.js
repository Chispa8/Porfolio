import React, { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { FaSun, FaMoon } from "react-icons/fa"
import styles from "./Header.module.css"

function Header({ darkMode, toggleDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }

      const sections = ["introduction", "experience", "projects", "about"]
      let current = ""

      for (let section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section
            break
          }
        }
      }

      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  useEffect(() => {
    document.body.setAttribute("data-theme", darkMode ? "dark" : "light")
  }, [darkMode])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.headerContent}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {["introduction", "experience", "projects", "about"].map(
              (section) => (
                <li key={section}>
                  <Link
                    to={section}
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass={styles.active}
                    className={activeSection === section ? styles.active : ""}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
        <button
          onClick={toggleDarkMode}
          className={styles.darkModeToggle}
          aria-label={
            darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
          }
        >
          {darkMode ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </header>
  )
}

export default Header
