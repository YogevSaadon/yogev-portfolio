import { useState, useEffect } from 'react';
import SEOHead from '../components/common/SEOHead';
import styles from './Blog.module.css';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Blog posts data - add new posts here
  const blogPosts = [
    {
      id: 1,
      title: "What is AI?",
      date: "2025-01-02",
      summary: "A simple explanation of what AI actually is, covering the different types, categories, and how they work.",
      content: `
        <p>The goal here is to present a simple explanation to what AI actually is.</p>

        <h3>What even is AI?</h3>
        <p>"AI" is not a single technology. It's many different approaches, techniques, and systems. When someone says "AI," they might be talking about a chess engine, a chatbot, a self-driving car, or the enemies in a video game. These are all called AI, but they work in completely different ways.</p>
        <p>Artificial Intelligence is any system that performs tasks that would typically require human intelligence. That's it.</p>

        <h3>Two Categories of AI</h3>
        <p><strong>Symbolic AI:</strong> A human expert writes down all the knowledge the system needs: "If the enemy sees the player, start shooting. If player comes near, run away." I use this method to make AI for my games.</p>
        <p><strong>Statistical AI (Machine Learning):</strong> Instead of programming rules, you feed the system massive amounts of data and let it discover patterns on its own. When people say "AI" in the tech industry, they usually mean this.</p>

        <h3>The AI Hierarchy</h3>
        <p>Artificial Intelligence contains everything, any system that simulates intelligent behavior.</p>
        <p>Under it sits Machine Learning: systems that learn from data.</p>
        <p>Under that sits Deep Learning: ML systems that use neural networks with many layers. LLMs like GPT are inside this category.</p>

        <h3>Types of Machine Learning</h3>
        <p><strong>Learning from Examples:</strong> Someone gives the system examples to learn from. It uses either labeled data (someone marks what's a cat, what's a dog) or unlabeled data (the system finds patterns on its own). Can learn almost anything if there's enough data, but can't function without it.</p>
        <p><strong>Reinforcement Learning:</strong> Learning by doing. The system takes actions, receives rewards or punishments, and generates its own data through experience. Doesn't need pre-existing data, but requires a closed system with clear rules (a game, a simulation), hard to use in the real world. That's why AlphaZero works for chess (clear rules, millions of games at no cost). This is how AlphaZero learned to beat the world's best chess players.</p>

        <h3>Deep Learning Architectures</h3>
        <p>These are the main structures neural networks can have. Each architecture can be trained with either Learning from Examples or Reinforcement Learning, the architecture is how it's built, not how it learns.</p>
        <p><strong>CNN (Convolutional Neural Networks)</strong>, specializes in images. Detects local patterns (edges, shapes) and builds up to recognize full objects.</p>
        <p><strong>RNN (Recurrent Neural Networks)</strong>, specializes in sequences (text, audio). Remembers what came before.</p>
        <p><strong>Transformers</strong>, the architecture behind GPT. Can look at all input at once and decide what to pay attention to. Replaced RNN for most language tasks.</p>

        <h3>Important Terms</h3>
        <p><strong>Neural Network:</strong> A computing system inspired by biological brains, made of layers of connected nodes that process information. The foundation of Deep Learning.</p>
        <p><strong>Generative AI:</strong> AI that creates new data. LLMs, image generators, etc.</p>
        <p><strong>NLP (Natural Language Processing):</strong> The field of dealing with language. Can be done with various approaches with or without AI (regex, Google Translate). When people say NLP they usually mean Transformers.</p>
        <p><strong>Computer Vision:</strong> The field of AI dealing with images and video. This is not a type of AI, it's a field (like NLP). You can do Computer Vision with Symbolic AI or CNN (most common today).</p>
        <p><strong>Diffusion Models:</strong> A Deep Learning technique for generating images, video, and audio.</p>

        <h3>Examples of AI Systems</h3>
        <p><strong>ChatGPT:</strong> Chatbot that generates text, Transformer + Learning from Examples (internet and textbook data) + Reinforcement Learning (human reviewers during training).</p>
        <p><strong>Midjourney:</strong> Generates images from text, Diffusion model + Learning from Examples.</p>
        <p><strong>AlphaFold:</strong> Predicts protein structures, Evoformer (Transformer variant) + Learning from Examples.</p>
        <p><strong>AlphaZero:</strong> Plays chess at superhuman level, Neural network + pure Reinforcement Learning.</p>
      `
    }
  ];

  const [selectedPost, setSelectedPost] = useState(blogPosts[0]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <SEOHead
        title="About AI - Yogev Saadon"
        description="Thoughts on AI development, systems programming, game development, and software engineering."
        keywords="About AI, Software Engineering, Game Development, Systems Programming, Tech Blog"
      />

      <div className={styles.blogPage}>
        <div className={styles.container}>
          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <h2 className={styles.sidebarTitle}>Posts</h2>
            <nav className={styles.postList}>
              {blogPosts.map((post) => (
                <button
                  key={post.id}
                  className={`${styles.postItem} ${selectedPost.id === post.id ? styles.active : ''}`}
                  onClick={() => setSelectedPost(post)}
                >
                  <span className={styles.postItemTitle}>{post.title}</span>
                  <span className={styles.postItemDate}>{formatDate(post.date)}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className={styles.mainContent}>
            <article className={styles.article}>
              <header className={styles.articleHeader}>
                <h1 className={styles.articleTitle}>{selectedPost.title}</h1>
                <time className={styles.articleDate}>{formatDate(selectedPost.date)}</time>
              </header>
              <div
                className={styles.articleBody}
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />
            </article>
          </main>
        </div>
      </div>
    </>
  );
};

export default Blog;
