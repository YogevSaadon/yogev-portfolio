import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        "Python",
        "GDScript",
        "Java",
        "C#"
      ]
    },
    {
      title: "AI & Machine Learning",
      skills: [
        "LLMs (Large Language Models)",
        "RAG (Retrieval-Augmented Generation)",
        "Embeddings",
        "MCP (Model Context Protocol)",
        "Agent Architecture",
        "Graph Optimization",
        "Semantic Search"
      ]
    },
    {
      title: "Computer Science Fundamentals",
      skills: [
        "Data Structures",
        "Algorithms",
        "OOP (Object-Oriented Programming)",
        "Performance Optimization",
        "Memory Management",
        "Complexity Analysis"
      ]
    },
    {
      title: "Game Development & Systems",
      skills: [
        "Godot Engine",
        "Real-time Systems",
        "Component Architecture",
        "Signal-based Communication",
        "Math-driven AI",
        "Performance Profiling"
      ]
    },
    {
      title: "Development Tools & Practices",
      skills: [
        "Git",
        "GitHub",
        "GitHub Actions (CI/CD)",
        "JSON Data Design",
        "AST Analysis (LibCST)",
        "Code Architecture"
      ]
    },
    {
      title: "Soft Skills & Work Style",
      skills: [
        "Independent Work",
        "Team Collaboration",
        "Problem Solving",
        "Technical Documentation",
        "Self-Learning"
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