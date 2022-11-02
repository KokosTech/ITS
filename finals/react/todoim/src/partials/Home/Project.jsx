import { Link } from "react-router-dom";
import { useProject } from "../../context/projectContext";

import CompleteButton from "../../components/Buttons/Complete";
import DeleteButton from "../../components/Buttons/Delete";

const Project = ({ project }) => {
  const { updateProject, removeProject } = useProject();

  const handleComplete = () => {
    updateProject(project.id, { ...project, completed: !project.completed });
  };

  const handleRemove = () => {
    removeProject(project.id);
  };

  return (
    <li
      key={project.id}
      className="p-4 flex items-center justify-between space-x-4 rounded-xl
                bg-slate-900 hover:bg-slate-800 focus:bg-slate-800
                border border-slate-800 hover:border-slate-700 focus:border-slate-700
                focus:outline-none focus:ring-none focus:ring-offset-none"
    >
      <div className="flex items-center space-x-4 w-[calc(100%-112px)]">
        <CompleteButton
          completed={project.completed}
          onClick={handleComplete}
        />
        <Link to={`/projects/${project.id}`} className="w-full">
          <div className="w-full flex flex-col">
            <h3 className="text-xl font-bold line-clamp-2 ">{project.name}</h3>
            <p className="w-full text-neutral-300 text-sm line-clamp-3 text-ellipsis overflow-hidden">
              {project.description}
            </p>
          </div>
        </Link>
      </div>
      <DeleteButton onClick={handleRemove} />
    </li>
  );
};

export default Project;
