export default function PrincipalMessage() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Principal's Photo */}
          <div className="mb-8 lg:mb-0">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Dr. Sunita Verma, Principal of DV Public School"
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-4 shadow-lg">
                <p className="text-white font-semibold text-lg">Dr. Sunita Verma</p>
                <p className="text-white/90 text-sm">Principal</p>
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Principal's Message
            </h2>
            
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p className="text-lg leading-relaxed">
                Dear Students, Parents, and Well-wishers,
              </p>
              
              <p className="leading-relaxed">
                Welcome to DV Public School, where we believe that every child is unique and has the potential 
                to achieve greatness. Our commitment goes beyond traditional teaching to nurture critical thinking, 
                creativity, and character development.
              </p>
              
              <p className="leading-relaxed">
                We strive to create an environment where students feel safe, supported, and inspired to reach 
                their full potential. Our dedicated faculty, modern facilities, and innovative teaching methods 
                ensure that each student receives the best possible education.
              </p>
              
              <p className="leading-relaxed">
                At DV Public School, we prepare students not just for examinations, but for life itself. 
                We encourage them to be compassionate, responsible, and confident individuals who will 
                contribute positively to society.
              </p>
              
              <p className="text-lg font-medium text-gray-900 mt-6">
                Together, let's build a brighter future.
              </p>
              
              <div className="mt-8">
                <div className="text-lg font-semibold text-orange-600">Dr. Sunita Verma</div>
                <div className="text-gray-600">Principal, DV Public School</div>
                <div className="text-sm text-gray-500 mt-1">M.Ed., Ph.D. in Education</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}