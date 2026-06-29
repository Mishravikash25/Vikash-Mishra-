import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import SEO from './components/SEO';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import AnimatedCursor from './components/AnimatedCursor';
import LoadingScreen from './components/LoadingScreen';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Resume = lazy(() => import('./components/Resume'));
const Achievements = lazy(() => import('./components/Achievements'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-950 antialiased dark:bg-[#050812] dark:text-slate-100">
      <SEO />
      <AnimatedCursor />
      <ScrollProgress />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.24),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_24%)] blur-2xl opacity-80" />
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <Navbar />
          <Suspense fallback={<LoadingScreen />}>
            <main className="mx-auto w-full max-w-[1600px] px-6 pb-20 pt-24 sm:px-8">
              <Hero />
              <Resume />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Achievements />
              <Contact />
            </main>
          </Suspense>
          <Footer />
        </AnimatePresence>
      </div>
      <BackToTop />
    </div>
  );
}

export default App;
