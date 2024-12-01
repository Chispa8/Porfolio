import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaExternalLinkAlt, FaQuestionCircle } from "react-icons/fa"
import {
  SiJavascript,
  SiHtml5,
  SiReact,
  SiFirebase,
  SiCss3,
  SiVercel,
  SiTailwindcss,
  /* SiJava,
  SiJunit,
  SiAgile,
  SiAmazonaws,
  SiPython,
  SiMysql,
  SiSqlite,
  SiGit,
  SiSpring,
  SiApachemaven,
  SiJira,
  SiJquery,
  SiDocker,
  SiPostman,
  SiHibernate,
  SiPowerbi, */
} from "react-icons/si"
import styles from "./Projects.module.css"

const projects = [
  {
    id: 1,
    title: "Breatho Website",
    description:
      "This website was built with React, Tailwind CSS, HTML and Vercel.",
    image: "/images/Breatho.PNG",
    github: "https://github.com/Chispa8/Shelter-project",
    summary:
      "Luís Brito, also known as Breatho, is a multidisciplinary artist based in Lisbon. My main challenge in this project was to create a website that reflected his desired style—combining elegance with abstract concepts—while ensuring it was fully responsive. It was a pleasure working with Luís, as the collaboration was seamless, with clear and effective communication throughout the process.",
    stack: [SiReact, SiTailwindcss, SiVercel, SiJavascript, SiHtml5, SiCss3],
  },
  {
    id: 2,
    title: "Shelter Project",
    description:
      "A platform where you can adopt animals from a shelter built with React, Node.js and Firebase.",
    image: "/images/ShelterProject.PNG",
    github: "https://github.com/Chispa8/Shelter-project",
    summary:
      "A comprehensive platform facilitating animal adoption from shelters. Built with React for a responsive frontend, Node.js for robust backend operations, and Firebase for real-time database management. Features include animal profiles, adoption request system, and shelter management tools.",
    stack: [SiReact, SiFirebase, SiVercel, SiJavascript, SiHtml5, SiCss3],
  },
  {
    id: 3,
    title: "Realm Game",
    description:
      "My first video game built from scratch. It was a real challenge to figure out how everything is managed on screen.",
    image: "/images/RealmGame.PNG",
    github: "https://github.com/Chispa8/Realm-Game",
    summary:
      "A version of the popular card/RPG game Reigns. I spent nearly two months tackling and enjoying the challenge of creating it. It was rewarding to figure out how to manage the game's logic, and to select the right styles, icons, and fonts.",
    stack: [SiReact, SiJavascript, SiVercel, SiHtml5, SiCss3],
  },
  {
    id: 4,
    title: "Portfolio website",
    description:
      "This is it! Hope you're enjoying the website, you are only halfway through the project!",
    image: "/images/Porfolio.PNG",
    github: "https://github.com/yourusername/weather-dashboard",
    summary:
      "After exploring thousands of portfolios for inspiration, I finally created mine! I am still learning React, experimenting with gradients, testing effects, and much more...",
    stack: [SiReact, SiJavascript, SiHtml5, SiCss3],
  },
  {
    id: 5,
    title: "Dungeon Arcade",
    description:
      "Where you can battle against various enemies, visit the town to buy new weapons or heal your health to get back into the fight. Beware of the final boss, the dragon!",
    image: "/images/DungeonArcade.PNG",
    github: "https://github.com/yourusername/portfolio",
    summary:
      "My first guided project using JavaScript (ES6), HTML, and CSS. FreeCodeCamp is a great place to learn at your own pace, testing your skills and progressing step-by-step to achieve the final outcome.",
    stack: [SiJavascript, SiHtml5, SiCss3],
  },
  {
    id: 6,
    title: "Comming soon...",
    description:
      "Always working on a next project to improve my skills wherever I am.",
    image: "/images/ComingSoon.PNG",
    github: "https://github.com/Chispa8",
    summary:
      "Now involved in two different projects. Working to learn and practise more the backend side, working with different tools (Figam, Norton, more AWS)",
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
