import { Link } from "react-router-dom";

export default function Services() {
  const serviceSections = [
    {
      id: "contracting",
      title: "Payor Contracting & Renegotiation",
      items: [
        "Contract review and gap analysis",
        "Rate benchmarking (Regional & National)",
        "Negotiation strategy development",
        "Network positioning and alignment",
        "Ongoing contract optimization",
      ],
      cta: "Request a Contract Review",
    },
    {
      id: "credentialing",
      title: "Credentialing Services",
      items: [
        "Commercial payor enrollment",
        "Medicare and Medicaid enrollment",
        "CAQH profile management",
        "Application tracking and status reporting",
        "Re-credentialing management",
      ],
      cta: "Inquire About Credentialing",
    },
    {
      id: "advisory",
      title: "Strategic Advisory",
      items: [
        "Market positioning analysis",
        "Revenue cycle optimization strategy",
        "Payor alignment and growth strategy",
        "Executive-level strategic planning",
      ],
      cta: "Schedule Strategic Advisory",
    },
  ];

  return (
    <div className="flex flex-col pt-20">
      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-4 block">Our Expertise</span>
          <h1 className="text-5xl md:text-6xl font-bold !text-white mb-8">Structured Services.</h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            We provide high-level, data-driven consulting services designed to optimize payor relationships and organizational positioning.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-32">
            {serviceSections.map((section, idx) => (
              <div key={section.id} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">0{idx + 1}</span>
                  <h2 className="text-4xl font-bold mb-8 text-navy">{section.title}</h2>
                  <ul className="space-y-6 mb-12">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-4 border-b border-gray-100 pb-4">
                        <span className="w-1.5 h-1.5 bg-navy mt-2 shrink-0"></span>
                        <span className="text-lg text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/about-contact#connect"
                    className="inline-block bg-navy text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-charcoal transition-all"
                  >
                    {section.cta}
                  </Link>
                </div>
                <div className={idx % 2 !== 0 ? 'lg:order-1' : ''}>
                  <img 
                    src={
                      idx === 0 
                        ? "/payor_contracting_renegotiation.jpg" 
                        : idx === 1 
                        ? "/credentialing_services.jpg"
                        : "/strategic_advisory.jpg"
                    }
                    alt={section.title}
                    className="w-full h-[420px] object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 text-navy">Need a customized strategic roadmap?</h2>
          <p className="text-lg text-gray-600 mb-10">
            Our advisory services are tailored to the specific needs and growth objectives of your healthcare organization.
          </p>
          <Link
            to="/about-contact#connect"
            className="inline-block border-2 border-navy text-navy px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-navy hover:text-white transition-all"
          >
            Contact an Advisor
          </Link>
        </div>
      </section>
    </div>
  );
}
