import React, { useEffect, useRef } from "react"
import styles from "./Experience.module.css"

const experiences = [
  {
    date: "October 2024 - Present",
    title: "Quality technician",
    company: "Neocom",
    description:
      "Manage product returns from clients, thoroughly inspecting items to ensure they meet specified quality parameters. This role involves close monitoring of stock levels to maintain adequate inventory, ensuring efficient operations and preventing potential shortages. Additionally, I maintain regular communication with clients, addressing their concerns and providing timely updates on product quality, returns, and stock availability.",
  },
  {
    date: "July 2023",
    title: "Technical staff",
    company: "Roboplan",
    description:
      "Swiftly adapt to meet deadlines, effectively communicate to optimize work processes, and ensure a safe working environment by comprehending robot functionalities as a Robotics Technician.",
  },
  {
    date: "January 2018 - May 2023",
    title: "Team Lead",
    company: "Stats Perform",
    description:
      "In high-pressure environments with tight deadlines, I have effectively led direct reports, elevating team performance and initiating improvement strategies.\n Working alongside experienced peers and serving demanding clients, extensive research and coordination have been essential to meeting rigorous expectations. By guiding teams through challenging situations and sharing tools to enhance efficiency, I fostered growth and ensured consistent delivery excellence. Balancing multiple responsibilities, I managed team KPIs and developed strategic approaches to optimize overall performance and maintain client satisfaction.",
  },
  {
    date: "September 2014 - December 2017",
    title: "Data Analyst",
    company: "Stats Perform",
    description:
      "Excel in meeting strict deadlines, adapting quickly to changes, and continuously expanding my skill set to improve tools and processes. Proactive in suggesting enhancements, bringing strong analytical skills and meticulous attention to detail. Working efficiently in fast-paced environments, focus on delivering actionable insights from complex datasets, consistently enabling informed decision-making under tight timeframes. My ability to quickly adapt to evolving requirements has been key to driving improvements and maintaining high standards in data analysis.",
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
