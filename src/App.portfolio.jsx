import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App" data-theme="light">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Education />
      </main>
      <Contact />
    </div>
  );
}

export default App;