import React, { useEffect, useRef } from "react"
import styles from "./Experience.module.css"

const experiences = [
  {
    date: "October 2024 - Present",
    title: "Quality technician",
    company: "Neocom",
    description:
      "Lideré el desarrollo de aplicaciones web escalables utilizando React, Node.js y AWS. Implementé CI/CD y mejoré el rendimiento de las aplicaciones existentes.",
  },
  {
    date: "July 2023",
    title: "Technical staff",
    company: "Roboplan",
    description:
      "Desarrollé interfaces de usuario responsivas y accesibles utilizando React y Vue.js. Colaboré en la migración de una aplicación legacy a una arquitectura moderna de componentes.",
  },
  {
    date: "January 2018 - May 2023",
    title: "Team Lead",
    company: "Stats Perform",
    description:
      "Asistí en el desarrollo de características para una aplicación móvil utilizando React Native. Participé en code reviews y sesiones de pair programming.",
  },
  {
    date: "September 2014 - December 2017",
    title: "Data Analyst",
    company: "Stats Perform",
    description:
      "Asistí en el desarrollo de características para una aplicación móvil utilizando React Native. Participé en code reviews y sesiones de pair programming.",
  },
]

function Experience() {
  const timelineRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      { threshold: 0.1 }
    )

    const timelineItems = timelineRef.current.querySelectorAll(
      `.${styles.timelineItem}`
    )
    timelineItems.forEach((item) => observer.observe(item))

    return () => {
      timelineItems.forEach((item) => observer.unobserve(item))
    }
  }, [])

  return (
    <section className={styles.experience} id="experience">
      <h2 className={styles.sectionTitle}>Experience</h2>
      <div className={styles.timeline} ref={timelineRef}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <span className={styles.date}>{exp.date}</span>
              <h3 className={styles.title}>{exp.title}</h3>
              <h4 className={styles.company}>{exp.company}</h4>
              <p className={styles.description}>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
