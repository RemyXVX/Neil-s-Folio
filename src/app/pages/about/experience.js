import React from 'react';
import { experienceData } from './folioData';

const Experience = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      <div className="space-y-4">
        {experienceData.map((experience, index) => (
          <div key={index} className="border p-4 rounded-md shadow">
            <h3 className="text-lg font-semibold">{experience.role}</h3>
            <p className="text-sm text-gray-500">{experience.company} ({experience.duration})</p>
            <p className="text-sm">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
