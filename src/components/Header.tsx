import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-xl z-50 border-b border-gray-200/50">
      <nav className="max-w-[980px] mx-auto px-6">
        <div className="flex justify-between items-center h-14">
          <a href="#home" className="text-gray-900 tracking-tight">
            Amirah Azhari
          </a>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-10">
            <a href="#work" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              Work
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a
              href="#work"
              className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </a>
            <a
              href="#about"
              className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-gray-600 hover:text-gray-900 transition-colors text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}