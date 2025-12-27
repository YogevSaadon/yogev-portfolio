import { useState } from 'react';
import { ExternalLink, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Projects.module.css';
import projectOneImage from '../../assets/projects/ProjectOne.jpg';
import projectTwoImage from '../../assets/projects/ProjectTwo.webp';
import projectThreeImage from '../../assets/projects/ProjectThree.webp';
import projectFourImage from '../../assets/projects/ProjectFour.webp';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(false);

  const projects = [
    {
      title: "Void Gambit",
      description: "Real-time bullet-heaven focused on clean architecture and practical performance engineering: math-driven targeting (no physics), staggered updates, cached queries, and zone-based AI with hysteresis.",
      image: projectOneImage,
      imageAlt: "Void Gambit game screenshot showing bullet-hell gameplay",
      technologies: ["Godot", "GDScript", "Mathematical Optimization", "Algorithmic Performance", "System Design"],
      githubUrl: "https://github.com/YogevSaadon/void-gambit",
      demoUrl: "https://yogevsaadon.github.io/void-gambit-demo/",
      learnings: [
        "Implemented math-driven targeting systems without physics",
        "Optimized performance with staggered updates and cached queries",
        "Designed zone-based AI with hysteresis for smooth gameplay"
      ]
    },
    {
      title: "Shadow AI",
      description: "An experimental project exploring architectures for AI coding agents in multi-file codebases. Focused on reliability, context selection, and safer automated edits using local models.",
      image: projectTwoImage,
      imageAlt: "Shadow AI - AI coding agent research project",
      technologies: ["Python", "Ollama (local LLMs)", "Claude Code", "Cursor", "AI coding agents", "Git", "GitHub"],
      githubUrl: "https://github.com/YogevSaadon/Shadow-Public-R-D/blob/main/Theory.md",
      demoUrl: "https://github.com/YogevSaadon/Shadow-Public-R-D/blob/main/MVPs.md",
      linkLabels: { code: "Theory", demo: "MVP" },
      learnings: [
        "Researched AI agent architectures for multi-file codebases",
        "Developed smarter context selection mechanisms",
        "Implemented safer automated code editing with local models"
      ]
    },
    {
      title: "Qude",
      description: "A real-time queue system enabling instant QR-code onboarding. Provides live position updates directly to mobile browsers; no app required. Built on modern architecture optimized for a seamless user experience.",
      image: projectThreeImage,
      imageAlt: "Qude queue management system interface",
      technologies: ["Python", "Docker", "Flask", "SQL", "REST API", "Full Stack", "React"],
      githubUrl: "https://github.com/YogevSaadon/Qode",
      demoUrl: "https://github.com/YogevSaadon/Qode",
      learnings: [
        "Built real-time queue management with live updates",
        "Implemented QR code scanning for instant onboarding",
        "Designed Full Stack architecture for seamless UX"
      ]
    },
    {
      title: "Portfolio Website",
      description: "This portfolio, built with AI tools and GitHub Actions for automated deployment. Features modern React development.",
      image: projectFourImage,
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
    setIsImageLoading(true);
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setIsImageLoading(true);
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setIsImageLoading(true);
    setCurrentProject(index);
  };

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.subtitle}>
            Here are some recent projects focused on systems design, AI-driven software, and performance-critical applications.
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
            <div className={styles.projectTop}>
              <div className={styles.projectImage}>
                {isImageLoading && (
                  <div className={styles.imageLoader}>
                    <div className={styles.spinner}></div>
                  </div>
                )}
                <img
                  src={projects[currentProject].image}
                  alt={projects[currentProject].imageAlt}
                  width="600"
                  height="400"
                  onLoad={handleImageLoad}
                  style={{ opacity: isImageLoading ? 0 : 1 }}
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
                      <span>{projects[currentProject].linkLabels?.code || "Code"}</span>
                    </a>
                    <a
                      href={projects[currentProject].demoUrl}
                      className={styles.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={20} />
                      <span>{projects[currentProject].linkLabels?.demo || "Demo"}</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.projectContent}>
                <div className={styles.textSection}>
                  <h3 className={styles.projectTitle}>
                    {projects[currentProject].title}
                  </h3>
                  
                  <p className={styles.projectDescription}>
                    {projects[currentProject].description}
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.technologies}>
              {projects[currentProject].technologies.map((tech, index) => (
                <span key={index} className={styles.techTag}>
                  {tech}
                </span>
              ))}
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