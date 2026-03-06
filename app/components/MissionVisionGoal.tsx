import { Target, Eye, Flag } from "lucide-react"; 
// You can swap these for Heroicons or FontAwesome if you prefer

export default function MissionVisionGoal() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">
          Our Main Goal: Satisfied Local & Global Clients
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-gray-700">
          {/* Mission Card */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 text-left">
            <div className="flex items-center mb-3">
              <Target className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-xl font-semibold text-primary">Our Mission</h3>
            </div>
            <p>
              To provide seamless, compliant, and efficient immigration
              solutions that empower businesses to thrive globally.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 text-left">
            <div className="flex items-center mb-3">
              <Eye className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-xl font-semibold text-primary">Our Vision</h3>
            </div>
            <p>
              To be the most trusted and preferred immigration consultancy
              partner in East Africa.
            </p>
          </div>

          {/* Goal Card */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 text-left">
            <div className="flex items-center mb-3">
              <Flag className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-xl font-semibold text-primary">Our Goal</h3>
            </div>
            <p>
              To deliver personalized, transparent, and reliable services that
              ensure client satisfaction every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
