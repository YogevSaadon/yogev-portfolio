import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Technical Skills",
      skills: [
        "JavaScript (ES6+)",
        "TypeScript",
        "React.js",
        "Node.js",
        "Python",
        "Java",
        "HTML5 & CSS3",
        "SQL & NoSQL Databases"
      ]
    },
    {
      title: "DevOps & Infrastructure",
      skills: [
        "AWS Cloud Services",
        "Docker & Containerization",
        "CI/CD Pipelines",
        "Git Version Control",
        "Linux/Unix Systems",
        "Nginx & Apache",
        "Database Management",
        "API Design & Development"
      ]
    },
    {
      title: "Development Tools",
      skills: [
        "VS Code",
        "IntelliJ IDEA",
        "Postman",
        "MongoDB Compass",
        "GitHub/GitLab",
        "Figma",
        "Slack & Teams",
        "Agile Methodologies"
      ]
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Technical Expertise</h2>
          <p className={styles.subtitle}>
            A comprehensive skill set built through hands-on experience and continuous learning
          </p>
        </div>
        
        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.skillCategory}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <ul className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className={styles.skillItem}>
                    <span className={styles.skillBullet}></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;