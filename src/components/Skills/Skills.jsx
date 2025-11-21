import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        "Python",
        "GDScript",
        "Java",
        "C#",
        "SQL",
        "JavaScript/React"
      ]
    },
    {
      title: "AI & Agents",
      skills: [
        "LLM Integration (Ollama, Claude)",
        "Agent Architecture",
        "Prompt Engineering"
      ]
    },
    {
      title: "Backend/DevOps",
      skills: [
        "FastAPI",
        "WebSockets",
        "Docker",
        "SQLite",
        "Git",
        "GitHub"
      ]
    },
    {
      title: "Game & Performance",
      skills: [
        "Real-time Systems",
        "Performance Optimization",
        "Math-based Algorithms"
      ]
    },
    {
      title: "AI Workflow",
      skills: [
        "Expert in Accelerated Development using Claude Code"
      ]
    },
    {
      title: "Computer Science Fundamentals",
      skills: [
        "Data Structures",
        "Algorithms",
        "OOP (Object-Oriented Programming)",
        "Memory Management",
        "Complexity Analysis"
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