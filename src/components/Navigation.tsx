import { Link, useLocation } from 'react-router-dom';
import { Home, User, FileText, FolderOpen } from 'lucide-react';

export const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, path: '/', label: 'Home' },
    { icon: User, path: '/experience', label: 'Experience' },
    { icon: FolderOpen, path: '/projects', label: 'Projects' },
    { icon: FileText, path: '/writings', label: 'Writings' },
  ];

  return (
    <nav className="fixed top-4 md:top-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-card/90 backdrop-blur-md rounded-full px-1 md:px-2 py-1 md:py-2 flex space-x-0.5 md:space-x-1">
        {navItems.map(({ icon: Icon, path, label }) => (
          <Link
            key={path}
            to={path}
            className={`p-2 md:p-3 rounded-full transition-all duration-200 ${
              location.pathname === path
                ? 'bg-portfolio-orange text-background'
                : 'text-portfolio-text-muted hover:text-foreground hover:bg-muted'
            }`}
            title={label}
          >
            <Icon size={16} className="md:w-5 md:h-5" />
          </Link>
        ))}
      </div>
    </nav>
  );
};