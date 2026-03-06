export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Trusted By Global Clients</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="text-yellow-500 mb-2">★★★★★</div>
            <p className="italic mb-4">
              &ldquo;SHEE-MG Ltd handled our entire team’s relocation to Nairobi.
              The process was seamless, and their communication was excellent
              throughout.&rdquo;
            </p>
            <p className="font-semibold">James Wilson</p>
            <p className="text-sm text-gray-600">Director, TechSolutions Kenya</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="text-yellow-500 mb-2">★★★★★</div>
            <p className="italic mb-4">
              &ldquo;Securing my investor permit seemed daunting until I met the
              team at SHEE-MG. They guided me through every step with
              professionalism.&rdquo;
            </p>
            <p className="font-semibold">Sarah Jenkins</p>
            <p className="text-sm text-gray-600">Founder, EcoVentures</p>
          </div>
        </div>
      </div>
    </section>
  );
}
