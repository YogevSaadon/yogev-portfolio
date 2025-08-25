import { useState } from 'react';
import { ExternalLink, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Projects.module.css';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with modern technologies for optimal performance and user experience.",
      image: "https://images.unsplash.com/photo-1584713503693-bb386ec95cf2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwc2hvcHBpbmclMjBpbnRlcmZhY2V8ZW58MHwwfHxibHVlfDE3NTYwODMwODJ8MA&ixlib=rb-4.1.0&q=85",
      imageAlt: "Modern e-commerce website interface, shopping cart, product grid, clean design - Obi on Unsplash",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      githubUrl: "https://github.com/yogev-saadon/ecommerce-platform",
      demoUrl: "https://ecommerce-demo.yogevsaadon.com",
      learnings: [
        "Implemented secure payment processing with Stripe API",
        "Optimized database queries for better performance",
        "Built responsive design with mobile-first approach"
      ]
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Perfect for agile development teams.",
      image: "https://images.unsplash.com/photo-1599591520558-e36abcf58492?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw4fHxkYXNoYm9hcmQlMjB0YXNrJTIwbWFuYWdlbWVudCUyMGludGVyZmFjZXxlbnwwfDB8fGdyZWVufDE3NTYwODMwODJ8MA&ixlib=rb-4.1.0&q=85",
      imageAlt: "Task management dashboard interface, kanban board, productivity app design - THLT LCX on Unsplash",
      technologies: ["React", "TypeScript", "Socket.io", "MongoDB", "Express"],
      githubUrl: "https://github.com/yogev-saadon/task-manager",
      demoUrl: "https://tasks.yogevsaadon.com",
      learnings: [
        "Integrated real-time communication with WebSockets",
        "Implemented drag-and-drop with React DnD",
        "Designed scalable component architecture"
      ]
    },
    {
      title: "Analytics Dashboard",
      description: "A comprehensive analytics dashboard for business intelligence with interactive charts, data visualization, and customizable reports. Helps businesses make data-driven decisions.",
      image: "https://images.unsplash.com/photo-1486927181919-3ac1fc3a8082?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBjaGFydHMlMjBkYXRhfGVufDB8MHx8cHVycGxlfDE3NTYwODMwODF8MA&ixlib=rb-4.1.0&q=85",
      imageAlt: "Analytics dashboard with charts, graphs, data visualization, modern UI - Luca Bravo on Unsplash",
      technologies: ["React", "D3.js", "Python", "FastAPI", "Redis"],
      githubUrl: "https://github.com/yogev-saadon/analytics-dashboard",
      demoUrl: "https://analytics.yogevsaadon.com",
      learnings: [
        "Created interactive data visualizations with D3.js",
        "Implemented efficient data caching with Redis",
        "Built RESTful APIs with FastAPI and Python"
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

              <div className={styles.learnings}>
                <h4 className={styles.learningsTitle}>Key Learnings</h4>
                <ul className={styles.learningsList}>
                  {projects[currentProject].learnings.map((learning, index) => (
                    <li key={index} className={styles.learningItem}>
                      {learning}
                    </li>
                  ))}
                </ul>
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