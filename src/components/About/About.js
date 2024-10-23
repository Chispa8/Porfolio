import React, { useEffect, useRef } from "react"
import styles from "./About.module.css"

function About() {
  const aboutRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible)
        }
      },
      { threshold: 0.1 }
    )

    const currentRef = aboutRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <section ref={aboutRef} className={styles.about}>
      <h2>Sobre Mí</h2>
      <div className={styles.content}>
        <img
          src="/placeholder.svg?height=300&width=300"
          alt="Tu Nombre"
          className={styles.profileImage}
        />
        <div className={styles.bio}>
          <p>
            Soy un desarrollador de software apasionado con experiencia en la
            creación de aplicaciones web modernas y escalables. Mi objetivo es
            combinar mi conocimiento técnico con mi creatividad para desarrollar
            soluciones innovadoras que mejoren la vida de las personas.
          </p>
          <p>
            Fuera del mundo del código, disfruto de la fotografía, el senderismo
            y la lectura de ciencia ficción. Siempre estoy buscando nuevos
            desafíos y oportunidades para aprender y crecer tanto personal como
            profesionalmente.
          </p>
          <p>
            Estoy buscando oportunidades para colaborar en proyectos
            emocionantes con equipos dinámicos. Si estás interesado en trabajar
            juntos o simplemente quieres charlar sobre tecnología, ¡no dudes en
            contactarme!
          </p>
          <a
            href="mailto:tu.email@ejemplo.com"
            className={styles.contactButton}
          >
            Contáctame
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
