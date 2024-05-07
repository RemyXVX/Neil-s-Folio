import Link from 'next/link';

const NavigationBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div>
          <Link href="/">
            <span className="text-white font-bold text-lg">Home</span>
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="#about">
            <span className="text-white hover:text-gray-300">About</span>
          </Link>
          <Link href="#experience">
            <span className="text-white hover:text-gray-300">Experience</span>
          </Link>
          <Link href="#projects">
            <span className="text-white hover:text-gray-300">Projects</span>
          </Link>
          <Link href="#tech-stack">
            <span className="text-white hover:text-gray-300">Tech Stack</span>
          </Link>
          <Link href="#contact">
            <span className="text-white hover:text-gray-300">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
