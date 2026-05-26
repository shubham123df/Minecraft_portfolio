import React, { useState, lazy, Suspense } from 'react';
import { useTheme } from './hooks/useTheme';
import { LoadingScreen } from './components/ui/LoadingScreen';
import { Navbar } from './components/ui/Navbar';
import { Footer } from './components/ui/Footer';
import { ErrorBoundary } from './components/ui/ErrorBoundary';

const Hero = lazy(() => import('./components/sections/Hero').then((m) => ({ default: m.Hero })));
const Projects = lazy(() => import('./components/sections/Projects').then((m) => ({ default: m.Projects })));
const Skills = lazy(() => import('./components/sections/Skills').then((m) => ({ default: m.Skills })));
const About = lazy(() => import('./components/sections/About').then((m) => ({ default: m.About })));
const Contact = lazy(() => import('./components/sections/Contact').then((m) => ({ default: m.Contact })));

function SectionFallback() {
  return (
    <div className="py-20 flex items-center justify-center" aria-busy="true" aria-label="Loading section">
      <div className="w-8 h-8 border-4 border-pixel-accent border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(
    () => !sessionStorage.getItem('hasSeenLoading')
  );
  const { theme, toggleTheme } = useTheme();

  const handleLoadingComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem('hasSeenLoading', 'true');
  };

  return (
    <div className="min-h-screen">
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {!isLoading && (
        <>
          <Navbar theme={theme} toggleTheme={toggleTheme} />

          <main id="main-content">
            <ErrorBoundary>
              <Suspense fallback={<SectionFallback />}>
                <Hero />
              </Suspense>
            </ErrorBoundary>

            <ErrorBoundary>
              <Suspense fallback={<SectionFallback />}>
                <Projects />
              </Suspense>
            </ErrorBoundary>

            <ErrorBoundary>
              <Suspense fallback={<SectionFallback />}>
                <Skills />
              </Suspense>
            </ErrorBoundary>

            <ErrorBoundary>
              <Suspense fallback={<SectionFallback />}>
                <About />
              </Suspense>
            </ErrorBoundary>

            <ErrorBoundary>
              <Suspense fallback={<SectionFallback />}>
                <Contact />
              </Suspense>
            </ErrorBoundary>
          </main>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
