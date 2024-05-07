import React from 'react';
import { experienceData } from './folioData';

const Experience = () => {
  return (
    <div 
      className="w-full md:w-auto"
      id="experience"
      >
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      <div className="space-y-8">
        {experienceData.map((experience, index) => (
          <div key={index} className="bg-white border border-gray-200 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">{experience.role}</h3>
            <p className="text-sm text-gray-500 mb-2">{experience.company} ({experience.duration})</p>
            <p className="text-sm">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
