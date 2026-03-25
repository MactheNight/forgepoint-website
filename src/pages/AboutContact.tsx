import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function AboutContact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="flex flex-col pt-20">
      {/* 1. HERO / INTRO SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-6 block">About ForgePoint</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-navy leading-tight">Forging stronger futures in healthcare.</h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              ForgePoint Healthcare Consulting is a strategic advisory firm founded to strengthen the financial and strategic positioning of healthcare organizations in a complex payor environment.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              We believe that healthcare reimbursement is a strategic imperative, not merely a transactional administrative function. Our approach elevates payor relationships to drive enterprise value.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MISSION SECTION */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-bold text-navy">Our Mission</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-2xl text-gray-800 leading-relaxed mb-10 font-medium">
                Our mission is to empower healthcare providers by transforming their payor relationships, ensuring long-term financial stability and sustainable growth.
              </p>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Provider Types We Serve</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Independent Physician Groups",
                    "Ambulatory Surgery Centers",
                    "Behavioral Health Providers",
                    "Urgent Care Clinics",
                    "Specialty Practices",
                    "Primary Care",
                    "Laboratories"
                  ].map((type) => (
                    <div key={type} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-navy rounded-full"></div>
                      <span className="text-gray-700 font-medium">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT SETS US APART SECTION */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-navy">What Sets Us Apart</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Card A */}
            <div className="bg-gray-50 p-12 lg:px-14 lg:py-16 border border-gray-100 flex flex-col h-full">
              <h3 className="text-xl font-bold text-navy mb-6">Strategic Over Administrative</h3>
              <p className="text-gray-600 leading-loose">
                We elevate payor contracting and credentialing from back-office tasks to boardroom strategies, focusing on long-term value creation and market positioning.
              </p>
            </div>
            
            {/* Card B */}
            <div className="bg-navy p-12 lg:px-14 lg:py-16 text-white shadow-xl flex flex-col h-full">
              <h3 className="text-xl font-bold text-white mb-6" style={{ color: "#ffffff", background: "transparent" }}>Structured & Data-Driven</h3>
              <p className="text-gray-300 leading-loose mb-10">
                Our methodology is rigorous, analytical, and designed for measurable execution:
              </p>
              <ul className="space-y-5">
                {[
                  "Discovery and diagnostic review",
                  "Contract and reimbursement analysis",
                  "Strategic development",
                  "Execution and negotiation support",
                  "Reporting and ongoing optimization"
                ].map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-white/40 font-bold mt-1">-</span>
                    <span className="text-base text-gray-100 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Card C */}
            <div className="bg-gray-50 p-12 lg:px-14 lg:py-16 border border-gray-100 flex flex-col h-full">
              <h3 className="text-xl font-bold text-navy mb-6">Executive-Level Perspective</h3>
              <p className="text-gray-600 leading-loose">
                We bring C-suite experience to every engagement, aligning our strategies with your organization's broader financial and operational goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHO WE SERVE SECTION */}
      <section className="py-24 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Serve</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                We partner with forward-thinking healthcare organizations that recognize the critical importance of their payor strategy.
              </p>
            </div>
            <div>
              <ul className="space-y-6">
                {[
                  "Are growing and need stronger payor positioning",
                  "Believe reimbursement strategy impacts enterprise value",
                  "Want professional structure around credentialing and contracting",
                  "Prefer long-term advisory relationships over transactional support"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4 border-b border-white/10 pb-6 last:border-0 last:pb-0">
                    <div className="w-2 h-2 bg-white mt-2.5"></div>
                    <span className="text-lg font-medium tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-navy">Leadership</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-navy mb-2">Courtney Pollock</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Founder & Chief Executive Officer</p>
              <p className="text-gray-600 leading-relaxed">
                With a career dedicated to navigating the complexities of healthcare reimbursement, Courtney founded ForgePoint to bridge the gap between clinical excellence and financial sustainability. Her expertise in payor strategy and contract negotiation has empowered numerous organizations to optimize their revenue and secure their market position.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-navy mb-2">McClay Robinson</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Co-Founder & President</p>
              <p className="text-gray-600 leading-relaxed">
                McClay brings a wealth of experience in strategic planning, financial analysis, and operational leadership. He is committed to building structured, data-driven frameworks that allow healthcare providers to scale efficiently and maximize their enterprise value in an ever-evolving industry landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR COMMITMENT SECTION */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-navy mb-16">Our Commitment</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              "Professional discipline",
              "Structured execution",
              "Transparent communication",
              "Long-term strategic alignment"
            ].map((commitment, index) => (
              <div key={index} className="bg-white p-8 border border-gray-100 shadow-sm flex items-center justify-center min-h-[120px]">
                <span className="text-sm font-bold uppercase tracking-widest text-navy">{commitment}</span>
              </div>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              Healthcare organizations deserve more than administrative processing. You deserve a partner committed to strengthening your financial foundation.
            </p>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA SECTION */}
      <section className="py-32 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold !text-white mb-8">Let’s Build From Strength</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            We are ready to partner with you to elevate your payor strategy and secure your organization's future.
          </p>
          
          <div className="mb-12 space-y-4">
            <p className="text-2xl font-serif italic text-white/90">“When positioning matters, structure matters.”</p>
            <p className="text-2xl font-serif italic text-white/90">“Let’s forge the path forward.”</p>
          </div>
          
          <Link 
            to="#direct-scheduling" 
            className="inline-block bg-white text-navy px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-100 transition-all"
          >
            Book an Intro Call
          </Link>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="connect" className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-navy">Connect with an Advisor.</h2>
              <p className="text-lg text-gray-600 mb-12">
                Begin the process of optimizing your payor strategy. Complete the form below to schedule a structured introductory call.
              </p>
              <div className="space-y-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Direct Line</p>
                  <p className="text-2xl font-bold text-navy">1-844-336-7434</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Office</p>
                  <p className="text-lg text-navy">
                    2102 Business Center Drive<br />
                    Irvine, CA 92612
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-10 border border-gray-200 shadow-sm">
              <form 
                action="https://formspree.io/f/maqlwgae"
                method="POST"
                className="space-y-6" 
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Name</label>
                    <input type="text" name="name" required className="w-full border-b border-gray-300 py-3 focus:border-navy outline-none transition-colors bg-transparent" placeholder="Full Name" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Organization</label>
                    <input type="text" name="organization" className="w-full border-b border-gray-300 py-3 focus:border-navy outline-none transition-colors bg-transparent" placeholder="Company Name" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email</label>
                    <input type="email" name="email" required className="w-full border-b border-gray-300 py-3 focus:border-navy outline-none transition-colors bg-transparent" placeholder="email@organization.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Phone</label>
                    <input type="tel" name="phone" className="w-full border-b border-gray-300 py-3 focus:border-navy outline-none transition-colors bg-transparent" placeholder="(555) 000-0000" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Services Needed</label>
                  <select name="service" className="w-full border-b border-gray-300 py-3 focus:border-navy outline-none transition-colors bg-transparent">
                    <option>Payor Contracting & Renegotiation</option>
                    <option>Credentialing Services</option>
                    <option>Strategic Advisory</option>
                    <option>Other / Comprehensive</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Message</label>
                  <textarea name="message" required className="w-full border-b border-gray-300 py-3 focus:border-navy outline-none transition-colors bg-transparent resize-none h-32" placeholder="Tell us about your organization's objectives."></textarea>
                </div>

                {formStatus === 'success' && (
                  <div className="p-4 bg-green-50 text-green-800 border border-green-200 text-sm">
                    Thank you. Your inquiry has been submitted. We will be in touch shortly.
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div className="p-4 bg-red-50 text-red-800 border border-red-200 text-sm">
                    There was an issue submitting your inquiry. Please try again.
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-navy text-white py-5 text-sm font-bold uppercase tracking-widest hover:bg-charcoal transition-all disabled:opacity-70"
                >
                  {formStatus === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CALENDAR SECTION */}
      <section id="direct-scheduling" className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4 text-navy">Direct Scheduling</h2>
          <p className="text-gray-600 mb-12">
            Schedule a 15–30 minute introductory call to discuss your organization and strategic opportunities.
          </p>
          <div className="bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden">
            <iframe
              src="https://calendly.com/forgepointhc-info/30min?hide_event_type_details=1&hide_gdpr_banner=1"
              width="100%"
              height="750"
              frameBorder="0"
              className="rounded-sm"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
