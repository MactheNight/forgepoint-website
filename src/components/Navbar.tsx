import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About + Contact", path: "/about-contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <Link to="/" className="flex items-center group" onClick={() => setIsMobileMenuOpen(false)}>
          <img 
            src="/forgepoint-logo-light.svg" 
            alt="ForgePoint Healthcare Consulting" 
            className="h-12 md:h-14 w-auto object-contain"
            fetchPriority="high"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-navy py-2 border-b-2 ${
                location.pathname === item.path ? "text-navy border-navy" : "text-gray-500 border-transparent"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/about-contact#direct-scheduling"
            className="bg-navy text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-charcoal transition-all ml-2"
          >
            Book Intro Call
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors py-2 ${
                    location.pathname === item.path ? "text-navy font-bold" : "text-gray-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/about-contact#direct-scheduling"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-navy text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-charcoal transition-all text-center mt-2"
              >
                Book Intro Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
