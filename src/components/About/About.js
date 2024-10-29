import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import {
  SiJavascript,
  /* SiJava,
  SiJunit,
  SiAgile,
  SiAmazonaws, */
  SiPython,
  SiMysql,
  SiSqlite,
  SiHtml5,
  SiTailwindcss,
  SiReact,
  SiFirebase,
  SiGit,
  SiSpring,
  SiApachemaven,
  SiJira,
  SiJquery,
  SiDocker,
  SiPostman,
  SiHibernate,
  SiPowerbi,
} from "react-icons/si"
import styles from "./About.module.css"

const skills = [
  { name: "JavaScript", icon: SiJavascript },
  /* { name: "Java", icon: SiJava }, */
  { name: "Python", icon: SiPython },
  { name: "SQL", icon: SiSqlite },
  { name: "HTML", icon: SiHtml5 },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  /* { name: "AWS", icon: SiAmazonaws }, */
  { name: "React", icon: SiReact },
  { name: "Firebase", icon: SiFirebase },
  { name: "Git", icon: SiGit },
  { name: "Spring", icon: SiSpring },
  { name: "Maven", icon: SiApachemaven },
  { name: "Jira", icon: SiJira },
  { name: "JQuery", icon: SiJquery },
  { name: "Docker", icon: SiDocker },
  { name: "Postman", icon: SiPostman },
  { name: "Hibernate", icon: SiHibernate },
  { name: "Power BI", icon: SiPowerbi },
  { name: "MySQL", icon: SiMysql },
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
              src={`${process.env.PUBLIC_URL}/images/FotoVerde.PNG`}
              alt="Juan Carlos"
              className={styles.profileImage}
            />
          </motion.div>
          <div className={styles.bioWrapper}>
            <motion.div className={styles.bio} variants={itemVariants}>
              <p>
                Dedicated to analyzing problems and finding creative solutions,
                especially when things get a bit stressful. Known for staying
                calm under pressure, meeting tight deadlines, and delivering
                quality work on time. Always on the lookout for new knowledge
                and skills to stay sharp and up-to-date, because continuous
                learning is a priority.
              </p>
              <p>
                Adaptability is key, and there is a strong focus on staying
                flexible when facing change. Bringing empathy into work is
                important, too, as understanding different perspectives and
                collaborating with people from all walks of life creates a
                better work environment. It is all about teamwork and keeping an
                open mind to get the best results.
              </p>
              <p>
                Outside of work, life is full of activities that keep things
                interesting. From taking care of dogs and practicing Jiu-Jitsu
                to unwinding with movies, series, and video games. There is
                always something to dive into and enjoy.
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
