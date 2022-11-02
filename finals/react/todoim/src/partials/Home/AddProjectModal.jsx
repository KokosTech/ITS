import { useState, useEffect } from "react";
import { useProject } from "../../context/projectContext";

import { PROJECT_TEMPLATE } from "../../constants/dataTemplates";
import getDate from "../../utils/getDate";

import Input from "../../components/Input";
import Button from "../../components/Button";

const AddProjectModal = ({ isOpen, onClose }) => {
  const [project, setProject] = useState(PROJECT_TEMPLATE);
  const { addProject } = useProject();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (project.name === "") return;
    if (project.description === "") return;
    if (project.priority === "") return;
    if (project.dueDate === "") return;

    setProject({ ...project, id: Date.now(), created: getDate() });
  };

  useEffect(() => {
    if (project.id !== 0) {
      addProject(project);
      setProject(PROJECT_TEMPLATE);
    }
  }, [project]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-slate-900 border border-slate-800 bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg px-8 py-6 z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-2xl font-bold mb-4">Add Project</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            type="text"
            name="name"
            id="name"
            value={project.name}
            onChange={handleChange}
            placeholder="Project Name"
            required
            className={`w-full bg-slate-800 hover:bg-slate-700 focus:bg-slate-700 rounded-xl p-2
                        border border-slate-700 hover:border-slate-600 focus:border-slate-600 
                       text-neutral-300 line-clamp-5 appearance-none focus:outline-none focus:ring-none resize-none scroll-auto `}
          />
          <Input
            type="textarea"
            name="description"
            id="description"
            value={project.description}
            onChange={handleChange}
            placeholder={"Description"}
            rows={6}
            requreed={true}
            className={`w-full bg-slate-800 hover:bg-slate-700 focus:bg-slate-700 rounded-xl p-2
                        border border-slate-700 hover:border-slate-600 focus:border-slate-600 
                       text-neutral-300 line-clamp-5 appearance-none focus:outline-none focus:ring-none resize-none scroll-auto`}
          />
          <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Input
              type="radio"
              name="priority"
              id="priority"
              value={project.priority}
              onChange={handleChange}
              placeholder="Priority"
              requreed={true}
            />
            <Input
              type="radio"
              name="priority"
              id="priority"
              value={project.priority}
              onChange={handleChange}
              placeholder="Priority"
              requreed={true}
            />
            <Input
              type="radio"
              name="priority"
              id="priority"
              value={project.priority}
              onChange={handleChange}
              placeholder="Priority"
              requreed={true}
            />
          </div>
          <Input
            type="date"
            name="dueDate"
            id="dueDate"
            value={project.dueDate}
            onChange={handleChange}
            text="Due Date"
            placeholder="Due Date"
            requreed={true}
          />
          </div>

          <div className="flex justify-end space-x-4">
            <Button
              text="Add project"
              onClick={handleSubmit}
              className="px-4 py-2 rounded-full
                        bg-slate-800 hover:bg-slate-700 focus:bg-slate-700
                        border border-slate-600 hover:border-slate-600 focus:border-slate-600 focues:outline-none focus:ring-none"
            />
            <Button
              text="Close"
              onClick={onClose}
              className="px-4 py-2 rounded-full
                    bg-red-900 hover:opacity-90 focus:opacity-90
                      border border-slate-900 focues:outline-none focus:ring-none"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProjectModal;
