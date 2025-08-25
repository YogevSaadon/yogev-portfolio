import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="about" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              <span className={styles.greeting}>Hello, I'm</span>
              <span className={styles.name}>Yogev Saadon</span>
            </h1>
            <p className={styles.subtitle}>
              Computer Science Student | Full Stack Developer
            </p>
            <p className={styles.description}>
              Passionate about creating innovative solutions through code. I 
              specialize in building modern web applications using React, 
              Node.js, and cloud technologies. Currently pursuing my 
              Computer Science degree while working on exciting projects 
              that solve real-world problems.
            </p>
          </div>
          
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://i.pravatar.cc/400?img=12" 
                alt="Yogev Saadon - Full Stack Developer"
                className={styles.profileImage}
                width="400"
                height="400"
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