import CompleteButton from "../../../components/Buttons/Complete";
import DeleteButton from "../../../components/Buttons/Delete";

const Subtask = ({ task, project, setProject }) => {
  const handleComplete = (taskId) => {
    const updatedTasks = project.tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setProject({ ...project, tasks: updatedTasks });
  };

  const handleRemove = (taskId) => {
    const updatedTasks = project.tasks.filter((task) => task.id !== taskId);
    setProject({ ...project, tasks: updatedTasks });
  };

  return (
    <li
      className="w-full md:w-80 p-2 space-x-4 flex items-center justify-between rounded-lg bg-slate-900 border border-slate-800"
      key={task.id}
    >
      <div className="flex items-center space-x-4">
        <CompleteButton
          completed={task.completed}
          onClick={() => handleComplete(task.id)}
        />
        <div>
          <h3 className="text-xl font-bold line-clamp-2">{task.name}</h3>
          <p className="text-neutral-300 text-sm line-clamp-3">
            {task.description}
          </p>
        </div>
      </div>
      <DeleteButton onClick={() => handleRemove(task.id)} />
    </li>
  );
};

export default Subtask;
