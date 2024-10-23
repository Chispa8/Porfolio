import React, { useEffect, useRef } from "react"
import styles from "./Experience.module.css"

const experiences = [
  {
    date: "Abril 2021 - Presente",
    title: "Desarrollador Full Stack Senior",
    company: "Tech Innovators Inc.",
    description:
      "Lideré el desarrollo de aplicaciones web escalables utilizando React, Node.js y AWS. Implementé CI/CD y mejoré el rendimiento de las aplicaciones existentes.",
  },
  {
    date: "Enero 2019 - Marzo 2021",
    title: "Desarrollador Front-end",
    company: "Web Solutions Co.",
    description:
      "Desarrollé interfaces de usuario responsivas y accesibles utilizando React y Vue.js. Colaboré en la migración de una aplicación legacy a una arquitectura moderna de componentes.",
  },
  {
    date: "Junio 2018 - Diciembre 2018",
    title: "Pasante de Desarrollo",
    company: "StartUp Dynamics",
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
      <h2 className={styles.sectionTitle}>Experiencia Laboral</h2>
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
