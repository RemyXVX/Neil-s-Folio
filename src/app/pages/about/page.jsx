import Experience from "./experience";
import TechStack from "./techStack";

const About = () => {
  return (
    <>
      <div 
        className="p-8 shadow-lg text-gray-800"
        id="about"
      >
        <h1 className="text-4xl font-bold mb-4">Hey there, Data Dreamer!</h1>
        <p className="text-lg mb-4">
          👋 I'm Neil, a passionate Data Engineer on a mission to turn data into insights that drive innovation. With a knack for coding and a love for problem-solving, I've been diving deep into the world of data science, crafting solutions that make an impact.
        </p>
        <p className="text-lg">
          🚀 From tutoring students in complex subjects like math, physics, and engineering to interning at Thaddeus Resource Center, where I contributed to full-stack app development, I've honed my skills in Python, React Native, and more. Let's connect and build something amazing together!
        </p>
      </div>
      <div className="mt-8">
        <Experience />
      </div>
      <div className="mt-8">
        <TechStack />
      </div>
    </>
  );
};

export default About;
