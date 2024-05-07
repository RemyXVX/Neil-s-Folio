const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <a href={link} className="text-blue-500 hover:underline mt-4 block">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
