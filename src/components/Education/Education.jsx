import styles from './Education.module.css';

const Education = () => {
  const educationData = [
    {
      period: "2022 - 2026",
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      description: "Pursuing a comprehensive degree in Computer Science with focus on software engineering, algorithms, and data structures. Maintaining a 3.8 GPA while actively participating in coding competitions and hackathons.",
      skills: ["Data Structures & Algorithms", "Software Engineering", "Database Systems", "Machine Learning"]
    },
    {
      period: "2023",
      degree: "Full Stack Web Development Bootcamp",
      institution: "TechAcademy Online",
      description: "Intensive 6-month program covering modern web development technologies. Completed multiple real-world projects and collaborated with industry professionals on live projects.",
      skills: ["React", "Node.js", "MongoDB", "Git/GitHub", "Agile Methodology"]
    },
    {
      period: "2024",
      degree: "AWS Cloud Practitioner Certification",
      institution: "Amazon Web Services",
      description: "Earned AWS Cloud Practitioner certification demonstrating foundational knowledge of cloud computing concepts, AWS services, and best practices for cloud architecture.",
      skills: ["Cloud Computing", "AWS Services", "Security", "Pricing Models"]
    }
  ];

  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Education & Learning</h2>
          <p className={styles.subtitle}>
            My educational journey and continuous learning experiences that have shaped my 
            expertise in computer science and software development.
          </p>
        </div>

        <div className={styles.timeline}>
          {educationData.map((item, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.educationCard}>
                <div className={styles.period}>{item.period}</div>
                <h3 className={styles.degree}>{item.degree}</h3>
                <h4 className={styles.institution}>{item.institution}</h4>
                <p className={styles.description}>{item.description}</p>
                <div className={styles.skills}>
                  {item.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;