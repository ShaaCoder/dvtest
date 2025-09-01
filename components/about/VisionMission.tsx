import { Eye, Target, Lightbulb } from 'lucide-react';

export default function VisionMission() {
  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About DV Public School
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Committed to nurturing tomorrow's leaders through excellence in education
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mb-6 mx-auto">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed text-center">
              To be a leading educational institution that empowers students with knowledge, 
              skills, and values to become responsible global citizens and future leaders.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full mb-6 mx-auto">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed text-center">
              To provide quality education in a nurturing environment that promotes academic excellence, 
              character development, and holistic growth of every student.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6 mx-auto">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Values</h3>
            <p className="text-gray-600 leading-relaxed text-center">
              Excellence, Integrity, Innovation, Compassion, and Respect form the foundation 
              of our educational philosophy and guide everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}