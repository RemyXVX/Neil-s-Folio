import React from 'react';
import { techStackData } from './folioData';

const TechStack = () => {
  return (
    <div 
      className="w-full md:w-auto"
      id="techStack"
    >
      <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
      <div className="flex flex-wrap">
        {techStackData.map((tech, index) => (
          <div key={index} className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md mb-2 mr-2">{tech}</div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
