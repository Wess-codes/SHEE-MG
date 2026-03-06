export default function CompanyAbout() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-4xl font-bold text-primary mb-4">
            15+ Years of Excellence
          </h2>
          <h3 className="text-2xl font-semibold mb-6">
            Simplifying Immigration for Businesses & Individuals
          </h3>
          <p className="text-gray-700 mb-6">
            SHEE-MG Ltd is a premier consultancy firm dedicated to navigating
            Kenyan immigration laws with precision and trust. We empower
            multinational corporations, NGOs, and investors to thrive globally.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li>✔ Timely & Compliant Solutions</li>
            <li>✔ Transparent Pricing</li>
            <li>✔ Reliable & Experienced Team</li>
            <li>✔ Personalized Client Support</li>
          </ul>
          <div className="mt-6">
            <a
              href="/contact"
              className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-500 transition"
            >
              Get a Quote
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <img
            src="/about1.jfif"
            alt="Business meeting"
            className="w-1000 h-120 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
