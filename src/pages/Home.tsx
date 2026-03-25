import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Home() {
  const targetSegments = [
    "Independent Physician Groups",
    "Ambulatory Surgery Centers (ASC)",
    "Behavioral Health & Addiction Treatment",
    "Urgent Care Clinics",
    "Specialty Practices",
    "Clinical Laboratories",
  ];

  const services = [
    {
      title: "Payor Contracting & Renegotiation",
      description: "Strategic rate benchmarking and negotiation to align contract terms with market value.",
    },
    {
      title: "Credentialing Services",
      description: "Structured enrollment management for commercial and government payors.",
    },
    {
      title: "Strategic Advisory",
      description: "Executive-level market positioning and revenue optimization strategy.",
    },
  ];

  const processSteps = [
    { name: "Discovery", desc: "Initial assessment of current positioning and contract status." },
    { name: "Analysis", desc: "Data-driven benchmarking against regional and national standards." },
    { name: "Strategy", desc: "Development of a structured alignment and negotiation roadmap." },
    { name: "Execution", desc: "Direct engagement with payors to secure optimized terms." },
    { name: "Optimization", desc: "Ongoing monitoring and adjustment to maintain strategic advantage." },
  ];

  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative py-32 md:py-48 bg-navy text-white overflow-hidden">
        {/* Background Image & Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        ></div>
        <div className="absolute inset-0 z-0 bg-navy/85 mix-blend-multiply"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-navy/95 via-navy/80 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 text-white">
              <span className="text-white">Strategic Payor Alignment for High-Performance Healthcare.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed font-light">
              ForgePoint Healthcare Consulting provides structured, data-driven advisory for physician groups and surgery centers seeking measurable contract optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/about-contact#direct-scheduling"
                className="bg-white text-navy px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-all text-center"
              >
                Book an Intro Call
              </Link>
              <Link
                to="/about-contact#connect"
                className="border border-white/30 text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all text-center"
              >
                Request a Contract Review
              </Link>
            </div>
          </motion.div>
        </div>
        {/* Subtle background pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none z-0">
          <div className="w-full h-full border-l border-b border-white/20 transform skew-x-12"></div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-4 block">Target Segments</span>
              <h2 className="text-4xl font-bold mb-8">Specialized expertise for complex healthcare organizations.</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                We partner with independent organizations that require a disciplined approach to payor strategy. Our methodology is built for scale and long-term sustainability.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {targetSegments.map((segment) => (
                <div key={segment} className="border border-gray-100 p-6 hover:border-navy transition-colors group">
                  <p className="text-sm font-bold uppercase tracking-wider text-navy group-hover:text-charcoal">{segment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-4 block">Our Services</span>
            <h2 className="text-4xl font-bold">Structured Strategic Advisory</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-12 border border-gray-200 hover:shadow-xl transition-all flex flex-col">
                <h3 className="text-xl font-bold mb-6 h-14 flex items-center">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <Link to="/services" className="text-xs font-bold uppercase tracking-widest text-navy hover:text-charcoal flex items-center gap-2 group">
                  Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-4 block">Our Methodology</span>
            <h2 className="text-4xl font-bold !text-white">A Disciplined Approach to Results</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {processSteps.map((step) => (
              <div key={step.name} className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-all flex flex-col items-center text-center h-full justify-start">
                <h4 className="text-lg mb-4 !text-white text-center font-semibold">{step.name}</h4>
                <p className="text-xs text-gray-400 leading-relaxed uppercase tracking-wider">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTHORITY SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 italic font-serif">"ForgePoint is not an administrative service. We are a strategic partner focused on the long-term positioning and financial health of your organization."</h2>
          <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Strategic Positioning Statement</p>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-32 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to optimize your payor strategy?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Book a structured introductory call to discuss your organization's current positioning and growth objectives.
          </p>
          <Link
            to="/about-contact#direct-scheduling"
            className="inline-block bg-navy text-white px-12 py-6 text-sm font-bold uppercase tracking-widest hover:bg-charcoal transition-all"
          >
            Book an Intro Call
          </Link>
        </div>
      </section>
    </div>
  );
}
