import React from 'react';

const About: React.FC = () => {
  return (
    <div className="w-full">
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow mt-8 text-center">
        <nav className="mb-4">
          <a href="/" className="text-2xl text-blue-600 hover:underline font-semibold">Home</a>
        </nav>
        <p className="text-black-700 text-lg leading-relaxed">
          Hot Wheels is an exclusive family owned business. We are a friendly car dealership that sells the best quality car parts at the best prices. With over 20 years in business, we know what you and your car need. We have 100% satisfaction and very high reviews posted by real customers. We promise you won't find better deals anywhere; if you do, we’ll match it. We offer only USA made car parts, so don’t wait, come purchase the car of your dreams today. You’ve earned it.
        </p>
      </div>
    </div>
  );
}

export default About;