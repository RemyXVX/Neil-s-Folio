import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <p className="text-sm">Connect with me:</p>
        <div>
          <a href="https://github.com/neilpreyes" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white mr-4">
            <FaGithub className="inline-block mr-2" />GitHub
          </a>
          <a href="https://www.linkedin.com/in/neil-patrick-reyes/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
            <FaLinkedin className="inline-block mr-2" />LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
