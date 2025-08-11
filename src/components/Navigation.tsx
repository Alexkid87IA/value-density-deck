import { useState, useEffect } from "react";

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  const sections = ['Vision', 'Écosystème', 'Business Model', 'Roadmap', 'Métriques'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gold/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="font-display text-2xl font-bold cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className={isScrolled ? 'text-primary' : 'text-white'}>High</span>
            <span className="text-gold">Value</span>
          </div>
          
          {/* Navigation Menu */}
          <div className="hidden md:flex items-center gap-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => onNavigate(section)}
                className={`relative font-medium transition-colors duration-300 underline-hover ${
                  activeSection === section
                    ? 'text-gold'
                    : isScrolled 
                    ? 'text-primary hover:text-gold' 
                    : 'text-white hover:text-gold'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden">
            <div className={`space-y-1 ${isScrolled ? 'text-primary' : 'text-white'}`}>
              <div className="w-6 h-0.5 bg-current"></div>
              <div className="w-6 h-0.5 bg-current"></div>
              <div className="w-6 h-0.5 bg-current"></div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;