import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Development",
      skills: [
        "Python",
        "GDScript",
        "Node.js",
        "React"
      ]
    },
    {
      title: "Cloud, DevOps & Infrastructure",
      skills: [
        "GitHub Actions"
      ]
    },
    {
      title: "Databases, Tools & Monitoring",
      skills: [
        "Git",
        "GitHub", 
        "VS Code"
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