import React, { useState, useEffect } from "react"
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa"
import styles from "./Introduction.module.css"

const slides = [
  {
    gradientClass: styles.bgGradient1,
    title: "Juan Carlos Here!",
    subtitle: "Junior Full Stack Developer",
    description: "Learning every day is the way to build a brighter future.",
  },
  {
    gradientClass: styles.bgGradient2,
    title: "Create",
    subtitle: "Turning ideas into reality",
    description: "Passionate about developing elegant and efficient solutions.",
  },
  {
    gradientClass: styles.bgGradient3,
    title: "Inspire",
    subtitle: "Building a brighter future",
    description:
      "Committed to continuous learning and growth in the tech world.",
  },
  {
    gradientClass: styles.bgGradient4,
    title: "Evolve",
    subtitle: "Let's collaborate",
    description: "Let's create our next mind-blowing experience together!",
  },
]

function Introduction() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5) * 2
      const y = (clientY / innerHeight - 0.5) * 2
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className={styles.introduction} id="introduction">
      <div className={styles.slideContainer}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ""
            } ${slide.gradientClass}`}
          >
            <div className={styles.content}>
              <h1
                style={{
                  transform: `translate(${mousePosition.x * 20}px, ${
                    mousePosition.y * 20
                  }px)`,
                }}
              >
                {slide.title}
              </h1>
              <h2
                style={{
                  transform: `translate(${mousePosition.x * 15}px, ${
                    mousePosition.y * 15
                  }px)`,
                }}
              >
                {slide.subtitle}
              </h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className={`${styles.navButton} ${styles.prevButton}`}
        aria-label="Previous slide"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className={`${styles.navButton} ${styles.nextButton}`}
        aria-label="Next slide"
      >
        <FaChevronRight />
      </button>
      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`${styles.indicator} ${
              index === currentSlide ? styles.activeIndicator : ""
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <div className={styles.socialLinks}>
        <a href="mailto:caftpjuancarlos@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/upcjdev/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Chispa8"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
      <div className={styles.gradientOverlay}></div>
    </section>
  )
}

export default Introduction
