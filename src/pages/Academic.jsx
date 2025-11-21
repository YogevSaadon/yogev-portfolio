import { useEffect } from 'react';
import SEOHead from '../components/common/SEOHead';
import styles from './Academic.module.css';

const Academic = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const academicProgress = {
    degree: "Bachelor of Science in Computer Science",
    institution: "The Open University of Israel",
    startYear: 2021,
    expectedGraduation: 2026,
    totalCredits: 108,
    completedCredits: 55,
    currentGPA: 81,
    recognizedCredits: 24,
    courses: [
      { name: "Data Structures and Introduction to Algorithms", grade: 93 },
      { name: "Discrete Mathematics", grade: 91 },
      { name: "Introduction to Computer Science and Java", grade: 85 },
      { name: "Probability for Computer Science", grade: 80 },
      { name: "Algorithms", grade: 77 },
      { name: "Introduction to Computer Networks", grade: 70 },
    ]
  };

  const progressPercentage = (academicProgress.completedCredits / academicProgress.totalCredits) * 100;

  return (
    <>
      <SEOHead
        title="Academic Progress - Yogev Saadon"
        description="View my academic progress, course grades, and Computer Science degree completion status."
        keywords="Academic Progress, Computer Science Degree, Course Grades, Education"
      />

      <div className={styles.academicPage}>
        <div className={styles.container}>
          <section className={styles.hero}>
            <h1 className={styles.title}>Academic Progress</h1>
            <p className={styles.subtitle}>
              {academicProgress.degree}
            </p>
            <p className={styles.institution}>{academicProgress.institution}</p>
          </section>

          <section className={styles.progressOverview}>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>{academicProgress.currentGPA}</div>
                <div className={styles.statLabel}>Current GPA</div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statValue}>{academicProgress.completedCredits} / {academicProgress.totalCredits}</div>
                <div className={styles.statLabel}>Credits Completed</div>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <div className={styles.progressText}>{progressPercentage.toFixed(0)}% Complete</div>
              </div>
            </div>
          </section>

          <section className={styles.coursesSection}>
            <h2 className={styles.sectionTitle}>Course Grades</h2>
            <div className={styles.coursesGrid}>
              {academicProgress.courses.map((course, index) => (
                <div key={index} className={styles.courseCard}>
                  <div className={styles.courseHeader}>
                    <h3 className={styles.courseName}>{course.name}</h3>
                    <div className={styles.courseGrade}>{course.grade}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.recognitionSection}>
            <div className={styles.recognitionCard}>
              <h2 className={styles.recognitionTitle}>Academic Recognition</h2>
              <p className={styles.recognitionText}>
                <strong>{academicProgress.recognizedCredits} Credits</strong> recognized from prior studies (B.Sc. Mechanical Engineering)
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Academic;
