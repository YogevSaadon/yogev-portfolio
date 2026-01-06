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
      id: 2,
      title: "AI Job Roles: Making Sense of the Mess",
      date: "2025-01-04",
      summary: "Breaking down the confusing landscape of AI job titles and what they actually mean.",
      content: `
        <p>Job titles in the AI industry are a mess. We have the same name for different jobs, and different names for jobs that are almost the same. I wanted to make some order for myself, and I'm sharing it here.</p>
        <p>If anyone has corrections, I'd be happy to hear them.</p>

        <h3>How I Think About AI: With Data vs Without Data</h3>
        <p>I like to split AI into two different worlds:</p>
        <p><strong>Without Data (Deterministic):</strong> Belongs to the programming world. If/else type thinking. Iterative development: write code, test, fix, repeat.</p>
        <p><strong>With Data (Probabilistic):</strong> Belongs to the data world. Week of cleaning data, run experiment, get conclusions, clean again, repeat until something works.</p>
        <p>This is a fundamental difference in how you work, not just what you know.</p>

        <h3>First: Regular Tech Roles</h3>
        <p>Before talking about new AI roles, let's define the regular roles they're related to:</p>
        <p><strong>Software Developer:</strong> Writes code. Builds applications. If it works, it works. If it doesn't, you debug until it does.</p>
        <p><strong>DevOps Engineer:</strong> Manages infrastructure, deployment, CI/CD pipelines. Makes sure the code runs in production.</p>
        <p><strong>Data Scientist:</strong> Analyzes data, finds insights, makes predictions. Can use classical statistics or Machine Learning.</p>
        <p><strong>Symbolic AI Engineer:</strong> Works on rule-based AI systems: game AI, behavior trees, FSMs, simulations. Mathematical but not ML. This is what I do for my games, and this role has been doing the "real" AI in defense companies, autonomous vehicles, medical devices, etc. These people are often called "Gameplay Programmers" or "Algorithm Developers".</p>
        <p><strong>Note:</strong> Symbolic AI Engineer and Data Scientist have been doing AI related work long before the current AI hype. They dominated the field until recently.</p>

        <h3>AI Roles With Data (The Data Science Side)</h3>
        <p><strong>ML Engineer:</strong> The big AI role. When people say "AI Engineer" they often mean this, though technically "AI Engineer" today means something else (part of the mess). Trains, optimizes, and deploys machine learning models. Half data, half programming, with a touch of ops. Needs strong math and data intuition. Works with large amounts of data, tweaking both the data and how the code uses it. Need to know: Python (mostly), libraries specific to their sub-field like PyTorch or TensorFlow (this is the core), and data skills related to model training.</p>
        <p><strong>NLP Engineer:</strong> ML Engineer specialized in language. Should probably be called "Transformers Engineer". Fine-tuning language models, working with large models.</p>
        <p><strong>Computer Vision Engineer:</strong> ML Engineer specialized in images and video. CNNs, object detection, image processing.</p>
        <p><strong>Data Scientist (ML-focused):</strong> When they use ML, they're essentially doing what ML Engineers do but often with more focus on insights than production systems.</p>

        <h3>AI Roles Without Data (The Programming Side)</h3>
        <p>These roles are closer to traditional programming. Less experimentation with datasets, more building systems.</p>
        <p><strong>AI Engineer:</strong> Mainly a software developer. Builds applications using pre-trained models (LLMs). API integration, RAG pipelines, prompt engineering. It requires mostly software engineering skills. I would call this "LLM Integration Engineer". The current name is misleading because "AI" is so broad. Doesn't require deep understanding of how models work internally. Can also build agents, autonomous systems that plan, use tools, and take actions. Common tools: LangChain, LangGraph, vector databases.</p>
        <p><strong>MLOps Engineer:</strong> DevOps for ML. Deployment, monitoring, versioning of models. From what I understand, it's similar to DevOps, but I'm not a DevOps person, so I might be wrong here. An ML Engineer needs to know MLOps at the same level a Software Developer needs to know DevOps.</p>
        <p><strong>AI Infra Engineer:</strong> Bigger scope than MLOps. Infrastructure for AI systems: GPU clusters, HPC (High Performance Computing), model serving, scaling. Similar to DevOps/SRE but for AI workloads.</p>
        <p><strong>AI Solutions Engineer:</strong> Works with clients to implement AI solutions. Needs to understand both the limitations of AI (especially LLMs) and the business needs, in order to connect them.</p>

        <h3>AI Researcher</h3>
        <p>From what I understand, AI Researchers know everything and do what they want, more or less. They're not in a specific category, they're inventing new AI systems or improving existing ones. More systemic work rather than experiments on a specific model. Depends on the company they're in. Usually the cutting edge.</p>
        <p>The key distinction: Engineers output code and products. Researchers output papers and new architectures.</p>
        <p>Might include security/adversarial research as a sub-category, but I don't know enough about that area to say more.</p>

        <h3>RL Engineer / Researcher</h3>
        <p>Rare. Specializes in Reinforcement Learning. Works with simulations. Heavy math. Mostly in robotics, games, and research.</p>

        <h3>Summary Table</h3>
        <table>
          <thead>
            <tr><th>Role</th><th>Programming</th><th>Math</th><th>Data</th></tr>
          </thead>
          <tbody>
            <tr><td colspan="4"><strong>AI With Data</strong></td></tr>
            <tr><td>ML Engineer</td><td>High</td><td>High</td><td>High</td></tr>
            <tr><td>NLP Engineer</td><td>High</td><td>High</td><td>High</td></tr>
            <tr><td>Computer Vision Engineer</td><td>High</td><td>High</td><td>High</td></tr>
            <tr><td>Data Scientist (ML-focused)</td><td>Medium</td><td>High</td><td>High</td></tr>
            <tr><td colspan="4"><strong>AI Without Data</strong></td></tr>
            <tr><td>AI Engineer</td><td>High</td><td>Low</td><td>Low</td></tr>
            <tr><td>AI Infra Engineer</td><td>High</td><td>Low</td><td>Medium</td></tr>
            <tr><td>AI Solutions Engineer</td><td>Medium</td><td>Low</td><td>Low</td></tr>
            <tr><td>MLOps Engineer</td><td>High</td><td>Low</td><td>Medium</td></tr>
          </tbody>
        </table>
      `
    },
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
