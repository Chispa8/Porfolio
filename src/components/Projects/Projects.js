import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaExternalLinkAlt, FaQuestionCircle } from "react-icons/fa"
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiHtml5,
  SiCss3,
} from "react-icons/si"
import styles from "./Projects.module.css"

const projects = [
  {
    id: 1,
    title: "Shelter Project",
    description:
      "A platform where you can adopt animals from a shelter built with React, Node.js and Firebase.",
    image: "/images/ShelterProject.PNG",
    github: "https://github.com/Chispa8/Shelter-project",
    summary:
      "A comprehensive platform facilitating animal adoption from shelters. Built with React for a responsive frontend, Node.js for robust backend operations, and Firebase for real-time database management. Features include animal profiles, adoption request system, and shelter management tools.",
    stack: [SiReact, SiNodedotjs, SiMongodb, SiJavascript],
  },
  {
    id: 2,
    title: "Realm Game",
    description:
      "Una aplicación de gestión de tareas con autenticación de usuarios y almacenamiento en tiempo real.",
    image: "/images/RealmGame.PNG",
    github: "https://github.com/Chispa8/Realm-Game",
    summary:
      "Aplicación de gestión de tareas avanzada con funciones de colaboración en tiempo real. Incluye autenticación de usuarios, recordatorios personalizables, etiquetas para organización, y sincronización en múltiples dispositivos. Utiliza React para la interfaz de usuario, Node.js para la lógica del servidor, MongoDB para almacenamiento persistente, y TypeScript para un código más robusto y mantenible.",
    stack: [SiReact, SiNodedotjs, SiMongodb, SiTypescript],
  },
  {
    id: 3,
    title: "Portfolio website",
    description:
      "Un dashboard del clima que muestra pronósticos en tiempo real utilizando una API de clima.",
    image: "/images/Porfolio.PNG",
    github: "https://github.com/yourusername/weather-dashboard",
    summary:
      "Dashboard de clima interactivo y completo. Ofrece visualizaciones de datos avanzadas para temperaturas, precipitaciones, y patrones climáticos. Incluye pronósticos a largo plazo, alertas meteorológicas personalizables, y mapas interactivos. Desarrollado con React para una interfaz de usuario dinámica y JavaScript para la lógica de la aplicación, integrando APIs de clima en tiempo real para datos precisos y actualizados.",
    stack: [SiReact, SiJavascript],
  },
  {
    id: 4,
    title: "Dungeon Arcade",
    description:
      "Un sitio web de portfolio personal construido con React y animaciones personalizadas.",
    image: "/images/DungeonArcade.PNG",
    github: "https://github.com/yourusername/portfolio",
    summary:
      "where you can battle against various enemies, visit the town to buy new weapons or heal your health to get back into the fight. Beware of the final boss, the dragon!",
    stack: [SiJavascript, SiHtml5, SiCss3],
  },
  {
    id: 5,
    title: "Comming soon...",
    description:
      "Always working on a next project to improve my skils wherever I am.",
    image: "/images/ComingSoon.PNG",
    github: "https://github.com/Chispa8",
    summary:
      "Plataforma de blog escalable y potente con funcionalidades avanzadas de CMS. Incluye un editor de contenido rico para una creación de posts intuitiva, sistema de categorización y etiquetado avanzado para una mejor organización del contenido, y análisis de rendimiento integrado para optimizar el SEO. Desarrollada con Next.js para un rendimiento óptimo y SEO mejorado, GraphQL para consultas de datos eficientes, y TypeScript para un desarrollo más seguro y mantenible. La plataforma también ofrece autenticación de usuarios, comentarios en tiempo real, y un panel de administración completo.",
    stack: [FaQuestionCircle, FaQuestionCircle, FaQuestionCircle],
  },
]

function Projects() {
  const [expandedProject, setExpandedProject] = useState(null)

  return (
    <section className={styles.projects} id="projects">
      <h2>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className={`${styles.projectCard} ${
              expandedProject === project.id ? styles.expanded : ""
            }`}
            layout
            onClick={() =>
              setExpandedProject(
                expandedProject === project.id ? null : project.id
              )
            }
          >
            <motion.div className={styles.projectImageContainer} layout>
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
            </motion.div>
            <motion.div className={styles.projectContent} layout>
              <motion.h3 layout>{project.title}</motion.h3>
              <AnimatePresence>
                {expandedProject === project.id ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <p className={styles.projectSummary}>{project.summary}</p>
                  </motion.div>
                ) : (
                  <motion.p
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={styles.projectDescription}
                  >
                    {project.description}
                  </motion.p>
                )}
              </AnimatePresence>
              <motion.div className={styles.projectMeta} layout>
                <div className={styles.projectStack}>
                  {project.stack.map((Icon, index) => (
                    <Icon key={index} className={styles.stackIcon} />
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubLink}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.liveLink}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
