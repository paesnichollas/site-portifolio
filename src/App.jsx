import { useState, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Aplicar tema escuro por padrão
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleSectionChange = (sectionId) => {
    setCurrentSection(sectionId);
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'home':
        return <Home onSectionChange={handleSectionChange} />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onSectionChange={handleSectionChange} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation 
          currentSection={currentSection} 
          onSectionChange={handleSectionChange}
        />
        
        <main className="pt-16">
          {renderCurrentSection()}
        </main>

        {/* Theme Toggle Button (opcional) */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="fixed bottom-6 right-6 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-40"
          aria-label="Toggle theme"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </LanguageProvider>
  );
}

export default App;

