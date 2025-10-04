import { Mail, SquareUser, Share2 } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <footer id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.info}>
            <h2 className={styles.title}>Get In Touch</h2>
            <p className={styles.description}>
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and development.
            </p>
            
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <span>Israel, Northern District</span>
              </div>
            </div>
          </div>

          <div className={styles.links}>
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Quick Links</h3>
              <ul className={styles.linkList}>
                <li><a href="#hero" className={styles.link}>About</a></li>
                <li><a href="#skills" className={styles.link}>Skills</a></li>
                <li><a href="#projects" className={styles.link}>Projects</a></li>
                <li><a href="#education" className={styles.link}>Education</a></li>
              </ul>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Connect</h3>
              <div className={styles.socialLinks}>
                <a 
                  href="https://github.com/yogevsaadon" 
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Share2 size={20} />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://linkedin.com/in/yogev-saadon" 
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <SquareUser size={20} />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="mailto:yogev1234@gmail.com" 
                  className={styles.socialLink}
                  aria-label="Send Email"
                >
                  <Mail size={20} />
                  <span>Email</span>
                </a>
              </div>
              <p className={styles.availability}>
                Available for new opportunities and exciting collaborations.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <p className={styles.copyright}>
            © 2025 Yogev Saddon. Built with Kombai and React.
          </p>
        </div>
      </div>
      
      <div className={styles.backgroundElements}>
        <div className={styles.bgShape1}></div>
        <div className={styles.bgShape2}></div>
      </div>
    </footer>
  );
};

export default Contact;