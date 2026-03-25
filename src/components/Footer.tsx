import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center mb-6">
            <img 
              src="/forgepoint-logo-light-transparent.png" 
              alt="ForgePoint Healthcare Consulting" 
              className="h-10 w-auto object-contain"
              loading="lazy"
            />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Forging stronger futures in healthcare through strategic advisory and payor alignment.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-gray-400">Navigation</h4>
          <ul className="space-y-4">
            <li><Link to="/" className="text-sm hover:text-gray-300 transition-colors">Home</Link></li>
            <li><Link to="/services" className="text-sm hover:text-gray-300 transition-colors">Services</Link></li>
            <li><Link to="/about-contact" className="text-sm hover:text-gray-300 transition-colors">About + Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-gray-400">Contact</h4>
          <ul className="space-y-4">
            <li className="text-sm text-gray-300">1-844-336-7434</li>
            <li className="text-sm text-gray-300">info@forgepointhealthcare.com</li>
            <li className="text-sm text-gray-300">
              2102 Business Center Drive<br />
              Irvine, CA 92612
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-500 uppercase tracking-widest">
          © {new Date().getFullYear()} ForgePoint Healthcare Consulting. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 uppercase tracking-widest">
          Professional. Strategic. Structured.
        </p>
      </div>
    </footer>
  );
}
