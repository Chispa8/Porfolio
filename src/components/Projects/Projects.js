import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa"
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiNextdotjs,
  SiGraphql,
  SiTypescript,
} from "react-icons/si"
import styles from "./Projects.module.css"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Una plataforma de comercio electrónico completa construida con React, Node.js y MongoDB.",
    image: "/placeholder.svg?height=400&width=600",
    github: "https://github.com/yourusername/ecommerce-platform",
    live: "https://ecommerce-platform-demo.com",
    summary:
      "Plataforma de comercio electrónico escalable y de alto rendimiento con funciones avanzadas de carrito de compras, pasarela de pago segura y panel de administración.",
    stack: [SiReact, SiNodedotjs, SiMongodb, SiJavascript],
  },
  {
    id: 2,
    title: "Task Manager App",
    description:
      "Una aplicación de gestión de tareas con autenticación de usuarios y almacenamiento en tiempo real.",
    image: "/placeholder.svg?height=400&width=600",
    github: "https://github.com/yourusername/task-manager",
    live: "https://task-manager-demo.com",
    summary:
      "Aplicación de gestión de tareas con funciones de colaboración en tiempo real, recordatorios y etiquetas personalizables para una mejor organización.",
    stack: [SiReact, SiNodedotjs, SiMongodb, SiTypescript],
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Un dashboard del clima que muestra pronósticos en tiempo real utilizando una API de clima.",
    image: "/placeholder.svg?height=400&width=600",
    github: "https://github.com/yourusername/weather-dashboard",
    live: "https://weather-dashboard-demo.com",
    summary:
      "Dashboard de clima interactivo con visualizaciones de datos avanzadas, pronósticos a largo plazo y alertas meteorológicas personalizables.",
    stack: [SiReact, SiJavascript],
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "Un sitio web de portfolio personal construido con React y animaciones personalizadas.",
    image: "/placeholder.svg?height=400&width=600",
    github: "https://github.com/yourusername/portfolio",
    live: "https://yourportfolio.com",
    summary:
      "Sitio web de portfolio moderno y responsivo con secciones interactivas, animaciones fluidas y optimización para motores de búsqueda.",
    stack: [SiReact, SiJavascript],
  },
  {
    id: 5,
    title: "Blog Platform",
    description:
      "Una plataforma de blog con funcionalidades de CMS construida con Next.js y GraphQL.",
    image: "/placeholder.svg?height=400&width=600",
    github: "https://github.com/yourusername/blog-platform",
    live: "https://blog-platform-demo.com",
    summary:
      "Plataforma de blog escalable con editor de contenido rico, categorización avanzada y análisis de rendimiento integrado para optimizar el SEO.",
    stack: [SiNextdotjs, SiGraphql, SiTypescript],
  },
]

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const handleProjectClick = (project) => {
    setSelectedProject(project)
  }

  const handleCloseProject = () => {
    setSelectedProject(null)
  }

  return (
    <section className={styles.projects} id="projects">
      <h2>Proyectos</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={styles.projectCard}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleProjectClick(project)}
          >
            <div className={styles.projectImageContainer}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
            </div>
            <div className={styles.projectContent}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className={styles.projectOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.projectDetails}
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 15 }}
            >
              <button
                className={styles.closeButton}
                onClick={handleCloseProject}
              >
                <FaTimes />
              </button>
              <h3>{selectedProject.title}</h3>
              <div className={styles.projectImageContainer}>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className={styles.projectImage}
                />
              </div>
              <p>{selectedProject.summary}</p>
              <div className={styles.projectStack}>
                <h4>Tecnologías utilizadas:</h4>
                <div className={styles.stackIcons}>
                  {selectedProject.stack.map((Icon, index) => (
                    <Icon key={index} className={styles.stackIcon} />
                  ))}
                </div>
              </div>
              <div className={styles.projectLinks}>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt /> Demo en vivo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
