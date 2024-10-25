import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiNextdotjs,
  SiGraphql,
  SiDocker,
  SiGit,
} from "react-icons/si"
import styles from "./About.module.css"

const skills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "GraphQL", icon: SiGraphql },
  { name: "Docker", icon: SiDocker },
  { name: "Git", icon: SiGit },
]

function About() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section ref={ref} className={styles.about} id="about">
      <motion.div
        className={styles.container}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.div className={styles.skillsSection} variants={itemVariants}>
          <h3>Skills</h3>
          <div className={styles.skills}>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className={styles.skill}
                variants={itemVariants}
              >
                <skill.icon className={styles.skillIcon} />
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.h2 variants={itemVariants}>About Me</motion.h2>
        <div className={styles.content}>
          <motion.div className={styles.imageWrapper} variants={itemVariants}>
            <img
              src="/images/FotoVerde.PNG"
              alt="Juan Carlos"
              className={styles.profileImage}
            />
          </motion.div>
          <div className={styles.bioWrapper}>
            <motion.div className={styles.bio} variants={itemVariants}>
              <p>
                Hello! I'm Juan Carlos, a passionate Full Stack Developer with a
                knack for creating modern and scalable web applications. My
                journey in the world of coding began with a curiosity to
                understand how things work, and it has evolved into a fulfilling
                career where I combine technical expertise with creativity to
                build innovative solutions.
              </p>
              <p>
                With experience in technologies like React, Node.js, and
                MongoDB, I enjoy tackling complex problems and turning ideas
                into reality. I'm always eager to learn new technologies and
                stay up-to-date with the latest industry trends.
              </p>
              <p>
                When I'm not coding, you can find me exploring nature trails,
                experimenting with photography, or diving into a good sci-fi
                novel. I believe in the power of continuous learning and
                personal growth, both in my professional and personal life.
              </p>
            </motion.div>
            <motion.div className={styles.cta} variants={itemVariants}>
              <a
                href="mailto:caftpjuancarlos@gmail.com"
                className={styles.contactButton}
              >
                Get in Touch
              </a>
              <div className={styles.socialLinks}>
                <a
                  href="https://github.com/Chispa8"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/upcjdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a href="mailto:caftpjuancarlos@gmail.com" aria-label="Email">
                  <FaEnvelope />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
