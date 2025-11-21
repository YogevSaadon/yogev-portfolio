import { useEffect } from 'react';
import SEOHead from '../components/common/SEOHead';
import styles from './About.module.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="About Yogev - Software Engineer"
        description="Learn more about Yogev Saadon, a software engineer passionate about AI, machine learning, and creative problem-solving."
        keywords="About Yogev, Software Engineer, AI Developer, Personal Story, Background"
      />

      <div className={styles.aboutPage}>
        <div className={styles.container}>
          {/* Opening Paragraph */}
          <section className={styles.opening}>
            <p className={styles.openingText}>
              As the son of a programmer and a mother with a Ph.D. in mathematics, I was always surrounded by analytical thinking and problem-solving. But my path into development wasn't a straight line.
            </p>
            <p className={styles.openingText}>
              It started in mechanical engineering and included several sharp turns that required me to re-evaluate and build myself from scratch. It was there, outside the defined path, that I discovered my true passion when I tried to build a game from the ground up. I realized that the technical challenge, the creativity, and the ability to turn a complex idea into something that works—that's what drives me.
            </p>
            <p className={styles.openingText}>
              This journey taught me the importance of grit, patience, and, most importantly, how to learn from mistakes. Today, I bring all of that experience into my computer science studies and the AI projects I'm building.
            </p>
          </section>

          {/* Hobbies Section - Zig-Zag Layout */}
          <section className={styles.hobbies}>
            {/* Chess - Image Left, Text Right */}
            <div className={`${styles.hobbyRow} ${styles.imageLeft}`}>
              <div className={styles.hobbyImage}>
                <div className={styles.imagePlaceholder}>
                  <span>Chess Image</span>
                </div>
              </div>
              <div className={styles.hobbyContent}>
                <h2 className={styles.hobbyTitle}>Chess: The Art of Foresight</h2>
                <p className={styles.hobbyText}>
                  Chess has been a part of my life since I was young. It's more than a game; it's a training ground for strategic thinking, planning several moves ahead, and pattern recognition. I find a direct parallel between breaking down a complex problem on the board and tackling algorithmic challenges in code. In both fields, every move must be precise and intentional.
                </p>
              </div>
            </div>

            {/* Watchmaking - Text Left, Image Right */}
            <div className={`${styles.hobbyRow} ${styles.imageRight}`}>
              <div className={styles.hobbyContent}>
                <h2 className={styles.hobbyTitle}>Watchmaking: Patience in Practice</h2>
                <p className={styles.hobbyText}>
                  One of my more surprising hobbies is watchmaking. What began as a frustrating challenge evolved into a profound lesson in patience, grit, and precision. It feels remarkably similar to programming: you can spend an entire day on a single problem, making zero progress and feeling completely stuck. Then, you'll watch one video or read one line of documentation, something clicks, and the entire mechanism suddenly works. That same cycle of intense frustration followed by the rewarding 'click' of a working system is something I find in both worlds.
                </p>
              </div>
              <div className={styles.hobbyImage}>
                <div className={styles.imagePlaceholder}>
                  <span>Watchmaking Image</span>
                </div>
              </div>
            </div>

            {/* Sports - Image Left, Text Right */}
            <div className={`${styles.hobbyRow} ${styles.imageLeft}`}>
              <div className={styles.hobbyImage}>
                <div className={styles.imagePlaceholder}>
                  <span>Sports Image</span>
                </div>
              </div>
              <div className={styles.hobbyContent}>
                <h2 className={styles.hobbyTitle}>An Athlete's Mentality</h2>
                <p className={styles.hobbyText}>
                  As someone who has competed in Judo, trained in MMA, and played rugby, contact sports have profoundly shaped my mentality. I believe in hard, continuous work, daily self-improvement, and embracing the challenge. The discipline of training, proper nutrition, and good sleep isn't just for a healthy lifestyle; it's my foundation for meeting complex goals, both in my projects and in my studies.
                </p>
              </div>
            </div>

            {/* Game Dev - Text Left, Image Right */}
            <div className={`${styles.hobbyRow} ${styles.imageRight}`}>
              <div className={styles.hobbyContent}>
                <h2 className={styles.hobbyTitle}>Fantasy and World-Building</h2>
                <p className={styles.hobbyText}>
                  I've always had a love for games and fantasy worlds. In recent years, rather than just consuming them, I've focused on building them. For me, game development is the perfect intersection of the technical (code, logic) and the creative (story, design). The demo I recently completed is a constant reminder that the tools we have today allow us to build any world we can imagine.
                </p>
              </div>
              <div className={styles.hobbyImage}>
                <div className={styles.imagePlaceholder}>
                  <span>Game Dev Image</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
