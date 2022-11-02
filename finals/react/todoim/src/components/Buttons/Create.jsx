import { FaPlus } from "react-icons/fa";

import Button from "../Button";

const BUTTON_CLASS = ``;

const CreateButton = ({ onClick }) => (
  <Button text={<FaPlus />} onClick={onClick} className={BUTTON_CLASS} />
);

export default CreateButton;