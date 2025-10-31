import styles from './Education.module.css';

const Education = () => {
  const educationData = [
    {
      period: "2021 - 2025",
      degree: "Bachelor of Science in Computer Science",
      institution: "The Open University of Israel",
      description: "Pursuing a comprehensive degree in Computer Science with focus on software engineering, algorithms, and data structures.",
      skills: ["Data Structures & Algorithms", "Software Engineering"]
    },
    {
      period: "2014 - 2018",
      degree: "Bachelor of Science in Mechanical Engineering",
      institution: "Tel Aviv University",
      description: "Solid foundation in advanced mathematics, systematic problem-solving and complex systems.",
      skills: ["Python", "Linear Algebra", "Calculus", "Numerical Analysis"]
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