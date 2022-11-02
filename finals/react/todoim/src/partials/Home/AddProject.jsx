import { useState } from "react";

import AddProjectModal from "./AddProjectModal";
import Button from "../../components/Button";


// button to open modal
const AddProject = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Button text="Add Project" onClick={handleOpen} />
      <AddProjectModal isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default AddProject;
