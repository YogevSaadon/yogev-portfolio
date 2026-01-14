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
      id: 4,
      title: "Is University Still Relevant in the Age of AI?",
      date: "2025-01-08",
      summary: "Why university might matter more now than ever, as a gym for the brain.",
      content: `
        <p>Should people go to university?</p>
        <p>I used to be split on this. Before AI, I had arguments for both sides. Today, I'm more decisive. Let me explain.</p>

        <h3>Before AI: The Case For and Against</h3>
        <p>This isn't the main point of my post, but briefly:</p>
        <p><strong>For:</strong></p>
        <p>Knowledge and skills. A mechanical engineer learns physics. A computer scientist learns code. When they face problems in the future, they'll remember which tools to reach for.</p>
        <p>Employers view university favorably. Proof of hard work and consistency.</p>
        <p>Friends and connections. I still have close, successful friends from university, over a decade later. I still benefit from those relationships.</p>
        <p><strong>Against:</strong></p>
        <p>Time and money. In that time you could learn industry-relevant skills, work, save, invest, start a business. And it costs money.</p>
        <p><strong>Neutral:</strong></p>
        <p>Fun. Some people love it, some suffer. Depends on the person.</p>

        <h3>The Obvious Reaction to AI</h3>
        <p>The immediate thought should be: now there's even more against university.</p>
        <p>All the knowledge is in AI. No need to learn it. AI agents can even act on it. While AI moves at light speed, university programs change slowly.</p>
        <p>I see posts about university becoming obsolete. From multiple people.</p>
        <p>But there's one advantage that isn't talked about enough. Until now, it was less important. Now it's much more important.</p>
        <p>I argue that university makes a person smarter.</p>

        <h3>How University Makes Us Smarter</h3>
        <p><strong>1. Knowledge as a foundation for creativity</strong></p>
        <p>It's hard to invent a new algorithm if you don't know what an algorithm is. Creativity comes from knowing the field.</p>
        <p>Teresa Amabile's Componential Theory of Creativity (Harvard, 1983) identifies domain knowledge as one of the essential components for creative work. She calls it "the basic raw materials for any creative performance."</p>
        <p>A 2023 study on mathematicians found that experts were more creative in their domain than novices, but not more creative in general. Domain-specific knowledge was the foundation.</p>
        <p>If we want to create something AI has never seen, we need to understand the foundations ourselves. Only then can we have the breakthrough.</p>
        <p><strong>2. Skills that transfer to similar domains</strong></p>
        <p>Analytical thinking from STEM degrees. Structured thinking from writing papers. These transfer to related fields and problems.</p>
        <p>Vasiliy Lomachenko, one of the greatest boxers of all time, was sent by his father to learn traditional Ukrainian Hopak dancing for 4 years. Dance and boxing share similar physical foundations: footwork, balance, rhythm.</p>
        <p>Miyamoto Musashi said: "Once you find the way, you will see it in all things."</p>
        <p>There are studies showing that writing about how we see our future has a direct relationship to success. That reading and writing affect brain structure.</p>
        <p>University trains thinking.</p>

        <h3>Why This Matters More Now</h3>
        <p>In my previous post, I talked about how AI is making us dumber.</p>
        <p>If AI is weakening our cognitive abilities, we need places to strengthen them. University is one of the last places left where we're forced to think without AI assistance.</p>
        <p>Humans build skills gradually. Without solving simple things, we never develop the ability to solve complex ones.</p>
        <p>When AI does most of the work, the direction you give it becomes more important. AI works hard. What matters now is having the knowledge to point it in the right direction.</p>

        <h3>Should AI Be Adapted into University?</h3>
        <p>Some people say university should adapt to AI. To get people ready for real life.</p>
        <p>I think that's like saying gyms should adapt to cars. The opposite needs to happen. We need places without AI.</p>
        <p>Using AI in university is like sending a robot to the gym for you.</p>
        <p>Depends on how you see it. A place to develop thinking? Or a place to get you a job?</p>
        <p>I always thought university should give you the tools to adapt. Analytical thinking, complex problem-solving. Technologies change.</p>
        <p>I think AI should stay out. Like the internet stays out of exams.</p>
        <p>University is one of the last places where we can prove and improve abilities without AI.</p>

        <h3>The Bottom Line</h3>
        <p>Of course, university isn't perfect. And it's not for everyone.</p>
        <p>But it remains important as a gym for the brain.</p>
        <p>And in my opinion, we need that now more than ever.</p>

        <h3>Research That Supports This</h3>
        <p><strong>1. Componential Theory of Creativity:</strong> Domain knowledge is essential for creative work. It's "the basic raw materials for any creative performance."</p>
        <p><strong>2. Mathematical Expertise Study:</strong> Experts in mathematics were more creative in their domain than novices, but not more creative in general. Domain-specific knowledge was the foundation.</p>
        <p><strong>3. Education and IQ:</strong> Each year of education raises IQ by 1-5 points. This is a causal effect, not just correlation.</p>
        <p><strong>4. Future Authoring:</strong> Students who wrote about their goals had dropout rates cut in half. At McGill, grades improved 25% and dropout went from 30% to 0%.</p>
        <p><strong>5. Literacy and Brain Structure:</strong> Learning to read creates new brain regions like the Visual Word Form Area that don't exist in illiterate adults. Reading physically reshapes the brain.</p>
        <p><strong>6. Cognitive Reserve Research:</strong> People with more education develop Alzheimer's symptoms 5-7 years later than those with less education.</p>
        <p><strong>7. Near Transfer:</strong> Skills transfer to similar domains is well-documented. Far transfer to unrelated domains shows minimal effects.</p>

        <h3>References</h3>
        <p>1. Amabile, T. M. (1983). "Componential Theory of Creativity." Harvard Business School.</p>
        <p>2. Schindler, I. et al. (2023). "Mathematical expertise: the role of domain-specific knowledge." <em>Scientific Reports</em>.</p>
        <p>3. Ritchie, S. J., & Tucker-Drob, E. M. (2018). "How Much Does Education Improve Intelligence?" <em>Psychological Science</em>.</p>
        <p>4. Schippers, M. C. et al. (2015). Future Authoring and student outcomes. Erasmus University.</p>
        <p>5. Dehaene, S. et al. (2015). "Illiterate to literate: behavioural and cerebral changes." <em>Nature Reviews Neuroscience</em>.</p>
        <p>6. Stern, Y. (2012). "Cognitive reserve in ageing and Alzheimer's disease." <em>Lancet Neurology</em>.</p>
        <p>7. Sala, G., & Gobet, F. (2019). "Cognitive Training Does Not Enhance General Cognition." <em>Trends in Cognitive Sciences</em>.</p>
      `
    },
    {
      id: 3,
      title: "AI Is Making Us Dumber (And We Don't Even Notice)",
      date: "2025-01-06",
      summary: "How AI tools might be weakening our cognitive abilities, and what we can do about it.",
      content: `
        <h3>The Fitness Analogy</h3>
        <p>Humans used to run for days chasing prey. Now we struggle to walk 40 minutes to the grocery store.</p>
        <p>We don't need to run anymore. We have cars. But we still go to the gym, because without physical exercise, we get sick. Our bodies weren't designed for sitting all day.</p>
        <p>I think the same thing is happening to our brains with AI.</p>

        <h3>The Problem</h3>
        <p>AI is making our results better, but not us.</p>
        <p>A truck driver moves more cargo than a porter ever could. But the porter is physically stronger.</p>
        <p>We're becoming the truck drivers of thinking. Great output, weak muscles.</p>

        <h3>Why I Think This Happens</h3>
        <p>The brain hates hard work. Humans are efficiency machines, we avoid any effort we don't absolutely need to do.</p>
        <p>Small things add up. You get a new washing machine. Instead of spending 30 seconds figuring out the buttons, you take a photo and ask ChatGPT. Skipped half a minute of thinking.</p>
        <p>And here's the trap: for small problems, AI is almost always right. So why bother checking? Why think at all? Ship it.</p>
        <p>Do this hundreds of times a day, and your brain stops expecting to work.</p>

        <h3>A "Smart" Workaround That Isn't</h3>
        <p>Here is a clever trick: "I'll use big context smart creative hallucinating Gemini for creativity, then have Claude that is skeptical and practical check it."</p>
        <p>Congratulations: you've become a copy-paste machine. Your brain never engaged at all.</p>

        <h3>The Epidemic of Stupidity</h3>
        <p>People think: "Now I can rest. When I really need to think hard, I will."</p>
        <p>This is like saying: "I can drive everywhere now. When I need to run a marathon, I'll just do it."</p>
        <p>That's not how it works. You can't skip the easy problems and expect to solve the hard ones. Humans learn gradually. Without solving simple things, we never develop the ability to solve complex things.</p>

        <h3>What To Do</h3>
        <p>I think anyone who uses AI heavily needs dedicated time each day for thinking, writing, and acting without it.</p>
        <p>Not for "brain health" as some abstract concept. For actual performance.</p>
        <p>Humans are gradual creatures. In fields that demand real thinking, you cannot skip the easy work because that is how you build the intuition for the hard stuff.</p>
        <p>Try living your whole life without sports, then apply to special forces. Good luck.</p>

        <h3>But What If AI Replaces Us?</h3>
        <p>Two scenarios:</p>
        <p><strong>If AI becomes better than humans at absolutely everything:</strong> Then yes, maybe cognitive skills don't matter for work anymore. But brain health still matters. People who regularly challenge their brains develop Alzheimer's symptoms 5 years later than those who don't. You still need to face cognitive challenge.</p>
        <p><strong>If AI replaces almost everything, but not quite:</strong> Then the small part that humans still do becomes incredibly important. If AI handles 99% of the work and humans handle 1%, that 1% better be perfect. Critical thinking doesn't become less important. It becomes more important.</p>

        <h3>The Bottom Line</h3>
        <p>We don't need to run to survive anymore. But if your job is special forces, you better keep running.</p>
        <p>We won't need to think for most tasks anymore. But if your job requires actual thinking, you better keep thinking.</p>
        <p>You might think: people won't stop thinking because of AI, they will just think of other things. The calculator and Google didn't make us stop. But AI touches everything. Research shows brain changes from much smaller things, like GPS use affecting brain structure.</p>

        <h3>Research That Supports This</h3>
        <p><strong>1. MIT Media Lab 2025:</strong> 83% of ChatGPT users showed weaker neural connectivity in EEG after 4 months of AI use.</p>
        <p><strong>2. Harvard/BCG 2023:</strong> AI improved output quality by 40%. But on tasks where AI made errors, AI users were 19% less likely to catch them than those working without AI.</p>
        <p><strong>3. Gerlich 2025:</strong> Correlation between AI tool use and critical thinking abilities. Younger users (17-25) showed the highest AI dependence and lowest critical thinking scores.</p>
        <p><strong>4. Google Effect:</strong> When we know information is accessible, we remember less of it. We remember where to find it instead of what it is.</p>
        <p><strong>5. GPS and the Hippocampus:</strong> GPS users showed spatial memory decline over 3 years. The opposite: London taxi drivers who memorized 26,000+ streets showed hippocampal growth visible on MRI.</p>
        <p><strong>6. Calculator Effect:</strong> Only 21% of university students noticed when calculators gave wrong answers by 15%. Even at 120% error, many didn't notice.</p>
        <p><strong>7. Desirable Difficulties:</strong> Students who took practice tests remembered 50% more than those who re-read the material. Interleaved practice: 63% success vs 20% for blocked practice. 80% of participants believed the less effective method worked better.</p>
        <p><strong>8. Neurogenesis:</strong> The hippocampus produces ~10,000 new neurons daily. More than half die within weeks unless engaged by difficult learning. Easy tasks don't save them.</p>
        <p><strong>9. Fan et al. 2024:</strong> ChatGPT users had better essay scores but no difference in knowledge retention or transfer. They engaged less in self-reflection and monitoring.</p>
        <p><strong>10. Illusion of Competence Study:</strong> AI users believed they answered ~17/20 questions correctly. Actual score: ~13/20. AI creates false sense of mastery.</p>
        <p><strong>11. Cognitive Reserve Research:</strong> People who regularly challenge their brains develop Alzheimer's symptoms 5 years later than those who don't.</p>

        <h3>References</h3>
        <p>1. Kosmyna, N. et al. (2025). MIT Media Lab study on ChatGPT and neural engagement.</p>
        <p>2. Dell'Acqua, F. et al. (2023). Harvard/BCG study on AI and consultant performance.</p>
        <p>3. Gerlich, M. (2025). "The Impact of AI on Critical Thinking." <em>Societies</em>.</p>
        <p>4. Sparrow, B. et al. (2011). "Google Effects on Memory." <em>Science</em>.</p>
        <p>5. Bohbot, V. & Dahmani, L. (McGill University). GPS navigation and hippocampal function.</p>
        <p>6. LaCour et al. (2019). Calculator dependence and mathematical reasoning.</p>
        <p>7. Bjork, R. "Desirable Difficulties" framework.</p>
        <p>8. Shors, T. (Rutgers). Neurogenesis and effortful learning.</p>
        <p>9. Fan et al. (2024). "Metacognitive laziness in AI-assisted learning." <em>British Journal of Educational Technology</em>.</p>
        <p>10. "Illusion of Competence" study. <em>Computers in Human Behavior</em>.</p>
        <p>11. Cognitive Reserve Research. <em>Nature Communications</em> (2024).</p>
      `
    },
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
        <p><strong>DL Engineer:</strong> ML Engineer specializing in deep learning, works over neural networks with architectures like CNNs, RNNs, transformers.</p>
        <p><strong>NLP Engineer:</strong> ML Engineer specialized in language. Transformers dominate the industry today. Working with language models.</p>
        <p><strong>Computer Vision Engineer:</strong> ML Engineer specialized in images and video. Not long ago was mostly CNNs, but now mostly transformers (vision transformers). Object detection, image processing.</p>
        <p><strong>Data Scientist (ML-focused):</strong> When they use ML, they're essentially doing what ML Engineers do but often with more focus on insights than production systems.</p>

        <h3>AI Roles Without Data (The Programming Side)</h3>
        <p>These roles are closer to traditional programming. Less experimentation with datasets, more building systems.</p>
        <p><strong>AI Engineer:</strong> Mainly a software developer. Builds applications using pre-trained models (LLMs). API integration, RAG pipelines, prompt engineering. It requires mostly software engineering skills. I would call this "LLM Integration Engineer". The current name is misleading because "AI" is so broad. Doesn't require deep understanding of how models work internally. Can also build agents, autonomous systems that plan, use tools, and take actions. Common tools: LangChain, LangGraph, vector databases, RAG.</p>
        <p><strong>MLOps Engineer:</strong> DevOps for ML. Focuses on monitoring and versioning models (like DevOps for code). An ML Engineer needs to know MLOps at the same level a Software Developer needs to know DevOps.</p>
        <p><strong>AI Infra Engineer:</strong> Bigger scope than MLOps. Focuses on hardware/scale issues like splitting compute power and handling GPU failures during massive cloud training sessions. Infrastructure for AI systems: GPU clusters, HPC (High Performance Computing), model serving, scaling.</p>
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
        <p>Under that sits Deep Learning: Machine Learning systems that use neural networks with many layers. Large Language Models like GPT are inside this category.</p>

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
