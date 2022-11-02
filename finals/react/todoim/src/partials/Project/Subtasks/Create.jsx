import { FaCheck, FaPlus } from "react-icons/fa";

import Input from "../../../components/Input";
import Button from "../../../components/Button";
import CompleteButton from "../../../components/Buttons/Complete";
import CreateButton from "../../../components/Buttons/Create";

const INPUT_CLASS = `
bg-transparent text-xl font-bold line-clamp-2 appearance-none w-full focus:outline-none focus:ring-none`;

const BUTTON_CLASS = `h-10 w-10 flex items-center justify-center aspect-square rounded-full 
                    bg-slate-800 hover:bg-slate-700 focus:bg-slate-700
                    border border-slate-700 hover:border-slate-600 focus:border-slate-600 focues:outline-none focus:ring-none`;

const CreateSubtask = ({ task, setTask }) => {
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.name === "") return;
    if (task.description === "") return;

    setTask({ ...task, id: Date.now() });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="md:w-80 p-2 space-x-4 flex items-center justify-between rounded-lg bg-slate-900 border border-slate-800"
    >
      <div className="flex items-center space-x-4">
        <CompleteButton />
        <div className="w-full max-w-fit">
          <Input
            type="text"
            name="name"
            id="name"
            value={task.name}
            onChange={handleChanges}
            placeholder="New subtask"
            required={true}
            className={INPUT_CLASS}
          />
          <Input
            type="textarea"
            name="description"
            id="description"
            value={task.description}
            onChange={handleChanges}
            text="description"
            placeholder="description"
            rows={2}
            required={true}
            className="w-full bg-transparent text-neutral-300 text-sm line-clamp-3 appearance-none focus:outline-none focus:ring-none resize-none scroll-auto"
          />
        </div>
      </div>
      <CreateButton onClick={handleSubmit} />
    </form>
  );
};

export default CreateSubtask;
