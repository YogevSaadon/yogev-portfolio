import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        "Python",
        "JavaScript (React)",
        "SQL",
        "Java",
        "GDScript"
      ]
    },
    {
      title: "AI & Agents",
      skills: [
        "LLM Integration (Ollama, Claude)",
        "Agent Architecture",
        "Prompt Engineering",
        "Fine-tuning (SFT / PEFT / QLoRA)"
      ]
    },
    {
      title: "Backend",
      skills: [
        "FastAPI",
        "WebSockets",
        "SQLite"
      ]
    },
    {
      title: "Dev & Deployment",
      skills: [
        "Git",
        "GitHub",
        "GitHub Actions (build/deploy automation)",
        "Docker"
      ]
    },
    {
      title: "Game & Performance",
      skills: [
        "Real-time Systems",
        "Performance Optimization",
        "Godot (GDExtension)"
      ]
    },
    {
      title: "Computer Science Fundamentals",
      skills: [
        "Data Structures",
        "Algorithms",
        "OOP",
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