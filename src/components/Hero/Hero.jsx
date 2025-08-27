import styles from './Hero.module.css';
import profileImage from '../../assets/profile.jpg';

const Hero = () => {
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
              Developer and creator with a strong foundation in data structures, algorithms, and problem-solving. Skilled in Python and scripting languages, I enjoy designing and building projects that combine analytical thinking with creativity. Passionate about generative AI and deep learning, I'm motivated by the challenge of transforming complex ideas into impactful, real-world solutions.
            </p>
          </div>
          
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <img 
                src={profileImage} 
                alt="Yogev Saadon - Full Stack Developer"
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