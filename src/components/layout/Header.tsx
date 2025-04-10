
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../ui/Button'; // keeping this as is

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    const checkAuth = () => {
      setIsAuthenticated(localStorage.getItem('isAuthenticated') === 'true');
    };

    window.addEventListener('scroll', handleScroll);
    checkAuth(); // Check on component mount
    
    // Listen for storage events (when another tab changes localStorage)
    window.addEventListener('storage', checkAuth);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    navigate('/signin');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/80 backdrop-blur-xl shadow-sm' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight opacity-90 hover:opacity-100 transition-opacity">
          Knowledge<span className="text-highlight">Space</span>
        </Link>
        
        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-black/80 hover:text-black transition-colors">
              Home
            </Link>
            <Link to="/" className="text-sm font-medium text-black/80 hover:text-black transition-colors">
              Courses
            </Link>
            <Link to="/" className="text-sm font-medium text-black/80 hover:text-black transition-colors">
              Instructors
            </Link>
            <Link to="/" className="text-sm font-medium text-black/80 hover:text-black transition-colors">
              About
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <Button onClick={handleSignOut} variant="secondary" size="sm">
                Sign Out
              </Button>
            ) : (
              <>
                <Button onClick={() => navigate('/signin')} variant="secondary" size="sm">
                  Sign In
                </Button>
                <Button onClick={() => navigate('/register')} variant="primary" size="sm">
                  Join Now
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
