import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About + Contact", path: "/about-contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <img 
            src="/forgepoint-logo-light.svg" 
            alt="ForgePoint Healthcare Consulting" 
            className="h-10 md:h-12 w-auto object-contain"
            fetchPriority="high"
          />
        </Link>

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
      </div>
    </nav>
  );
}
