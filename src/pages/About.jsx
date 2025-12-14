import { useEffect } from 'react';
import SEOHead from '../components/common/SEOHead';
import styles from './About.module.css';
import chessImage from '../assets/about/Chess_Image.webp';
import watchmakingImage from '../assets/about/Watchmaking_Image.jpg';
import sportsImage from '../assets/about/Sports_Image.png';
import gameDevImage from '../assets/about/Temo-image.webp';

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
              I enjoy building software systems and understanding how they behave as complexity increases. My background includes formal study in computer science and independent work in game development, AI agents, and backend systems. I tend to learn by building, testing, and refining things until they break less.
            </p>
          </section>

          {/* Hobbies Section - Zig-Zag Layout */}
          <section className={styles.hobbies}>
            {/* Chess - Image Left, Text Right */}
            <div className={`${styles.hobbyRow} ${styles.imageLeft}`}>
              <div className={styles.hobbyImage}>
                <img
                  src={chessImage}
                  alt="Chess board and pieces"
                  className={styles.hobbyImageImg}
                />
              </div>
              <div className={styles.hobbyContent}>
                <h2 className={styles.hobbyTitle}>Chess</h2>
                <p className={styles.hobbyText}>
                  Chess has been part of my life since I was young. What I enjoy most is the mental clarity it gives me, holding a few ideas in my head at once, looking at different possibilities, and keeping track of several things without losing the thread. It's simple, but it stayed with me over the years.
                </p>
              </div>
            </div>

            {/* Watchmaking - Text Left, Image Right */}
            <div className={`${styles.hobbyRow} ${styles.imageRight}`}>
              <div className={styles.hobbyContent}>
                <h2 className={styles.hobbyTitle}>Watchmaking</h2>
                <p className={styles.hobbyText}>
                  Watchmaking started as a random challenge and quickly became a hobby I enjoy. A lot of it is spending hours trying to fix something that refuses to work, and then suddenly one small detail clicks, usually after a short video or a diagram, and the whole thing makes sense. That mix of frustration, patience, and the little "now it works" moment is something I really like about it.
                </p>
              </div>
              <div className={styles.hobbyImage}>
                <img
                  src={watchmakingImage}
                  alt="Watch mechanism and tools"
                  className={styles.hobbyImageImg}
                />
              </div>
            </div>

            {/* Sports - Image Left, Text Right */}
            <div className={`${styles.hobbyRow} ${styles.imageLeft}`}>
              <div className={styles.hobbyImage}>
                <img
                  src={sportsImage}
                  alt="Sports training equipment"
                  className={styles.hobbyImageImg}
                />
              </div>
              <div className={styles.hobbyContent}>
                <h2 className={styles.hobbyTitle}>Training & Sports</h2>
                <p className={styles.hobbyText}>
                  Sports have always been a steady part of my life. I trained in judo, spent time in MMA, and later played rugby. What I take from it isn't competition as much as the routine itself, showing up, staying disciplined, and trying to improve a little bit every day. It's something that stayed with me and shapes how I approach challenges in general.
                </p>
              </div>
            </div>

            {/* Game Dev - Text Left, Image Right */}
            <div className={`${styles.hobbyRow} ${styles.imageRight}`}>
              <div className={styles.hobbyContent}>
                <h2 className={styles.hobbyTitle}>Game Development</h2>
                <p className={styles.hobbyText}>
                  I've always enjoyed games and the imagination behind them, and over time I moved from just playing to actually trying to build my own ideas. Game development sits in a place I like, combining technical work with a bit of creativity. I recently finished a small demo, and it reminded me how much I enjoy creating something from scratch and watching it take shape.
                </p>
              </div>
              <div className={styles.hobbyImage}>
                <img
                  src={gameDevImage}
                  alt="Game development workspace"
                  className={styles.hobbyImageImg}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
