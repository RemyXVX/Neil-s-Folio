import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 rounded-b-md">
      <div className="max-w-6xl mx-auto px-4 md:px-0 flex flex-col md:flex-row justify-center items-center">
        <p className="text-sm mb-4 md:mb-0 md:mr-8">Connect with me:</p>
        <div>
          <a href="https://github.com/neilpreyes" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white mr-4 mb-2 md:mb-0 block md:inline-block transition duration-300 ease-in-out transform hover:scale-110">
            <FaGithub className="inline-block mr-2 text-xl" />GitHub
          </a>
          <a href="https://www.linkedin.com/in/neil-patrick-reyes/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white block md:inline-block transition duration-300 ease-in-out transform hover:scale-110">
            <FaLinkedin className="inline-block mr-2 text-xl" />LinkedIn
          </a>
        </div>
      </div>
      <div className="text-sm text-gray-300 text-center mt-4">
        &copy; {new Date().getFullYear()} Neil * All rights reserved *
      </div>
    </footer>
  );
};

export default Footer;
