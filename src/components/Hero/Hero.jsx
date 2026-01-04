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
              Software Engineer | Systems & AI Projects
            </p>
            <p className={styles.description}>
              I build software systems with an emphasis on performance and reliability. I've worked on real time simulations, AI powered tools, and backend infrastructure. I like digging into how systems behave under pressure, finding where they break, and making them predictable and easy to operate. I focus on system design, performance tuning, and applied AI through hands on projects.
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

        <div className={styles.blogButtonWrapper}>
          <button
            className={styles.blogButton}
            onClick={() => navigate('/blog')}
            aria-label="Visit Blog - About AI"
          >
            Blog - About AI
          </button>
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