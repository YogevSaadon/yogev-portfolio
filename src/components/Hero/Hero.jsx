import { useNavigate } from 'react-router-dom';
import styles from './Hero.module.css';
import profileImage from '../../assets/profile.jpg';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              <span className={styles.greeting}>Hello, I'm</span>
              <span className={styles.name}>Yogev Saadon</span>
            </h1>
            <p className={styles.subtitle}>
              Software Engineer | Computer Science
            </p>
            <p className={styles.description}>
              I work on projects in development and AI, with a focus on understanding how systems behave and how to build things that actually work. I enjoy writing code, solving problems, and learning through hands-on experimentation. These days I'm mainly involved in computer science studies and building practical AI-driven projects.
            </p>
          </div>
          
          <div className={styles.imageContainer}>
            <div
              className={styles.imageWrapper}
              onClick={() => navigate('/about')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  navigate('/about');
                }
              }}
              aria-label="Click to learn more about me"
            >
              <img
                src={profileImage}
                alt="Yogev Saadon - Software Engineer"
                className={styles.profileImage}
                width="400"
                height="400"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                draggable={false}
              />
              <div className={styles.imageOverlay}></div>
            </div>
            <div className={styles.floatingElement1}></div>
            <div className={styles.floatingElement2}></div>
          </div>
        </div>
      </div>
      
      <div className={styles.backgroundElements}>
        <div className={styles.bgShape1}></div>
        <div className={styles.bgShape2}></div>
        <div className={styles.bgShape3}></div>
      </div>
    </section>
  );
};

export default Hero;