import { useState } from 'react';
import { ExternalLink, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Projects.module.css';
import p1pic from '../../assets/p1pic.png';
import logoImage from '../../assets/logo.png';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "Void Gambit",
      description: "Real-time bullet-heaven focused on clean architecture and practical performance.",
      image: p1pic,
      imageAlt: "Void Gambit game screenshot showing bullet-hell gameplay",
      technologies: ["Godot", "GDScript", "Mathematical Optimization", "Algorithmic Performance", "System Design", "Performance Under Constraints"],
      githubUrl: "https://github.com/YogevSaadon/void-gambit",
      demoUrl: "https://yogevsaadon.github.io/void-gambit/",
      learnings: [
        "Implemented math-driven targeting systems without physics",
        "Optimized performance with staggered updates and cached queries",
        "Designed zone-based AI with hysteresis for smooth gameplay"
      ]
    },
    {
      title: "Portfolio Website",
      description: "This portfolio, built with AI tools and GitHub Actions for automated deployment. Features modern React development.",
      image: logoImage,
      imageAlt: "Yogev Saadon portfolio website logo",
      technologies: ["Generative AI", "React", "Node.js", "GitHub Actions", "CI/CD"],
      githubUrl: "https://github.com/YogevSaadon/yogev-portfolio",
      demoUrl: "https://yogevsaadon.github.io/yogev-portfolio/",
      learnings: [
        "Leveraged AI tools for rapid development",
        "Implemented automated deployment with GitHub Actions",
        "Built responsive design with modern React patterns"
      ]
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setCurrentProject(index);
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.subtitle}>
            Here are some of my recent projects that showcase my skills in full-stack 
            development, mobile applications, and data visualization.
          </p>
        </div>

        <div className={styles.carousel}>
          <button 
            className={styles.navButton} 
            onClick={prevProject}
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>

          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <img 
                src={projects[currentProject].image}
                alt={projects[currentProject].imageAlt}
                width="600"
                height="400"
              />
              <div className={styles.imageOverlay}>
                <div className={styles.projectLinks}>
                  <a 
                    href={projects[currentProject].githubUrl}
                    className={styles.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View GitHub repository"
                  >
                    <Share2 size={20} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={projects[currentProject].demoUrl}
                    className={styles.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View live demo"
                  >
                    <ExternalLink size={20} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>
                {projects[currentProject].title}
              </h3>
              
              <p className={styles.projectDescription}>
                {projects[currentProject].description}
              </p>

              <div className={styles.technologies}>
                {projects[currentProject].technologies.map((tech, index) => (
                  <span key={index} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </div>

          <button 
            className={styles.navButton} 
            onClick={nextProject}
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className={styles.indicators}>
          {projects.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentProject ? styles.active : ''}`}
              onClick={() => goToProject(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;