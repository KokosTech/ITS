import { FaPlus } from "react-icons/fa";

import Button from "../Button";

const BUTTON_CLASS = `h-10 w-10 flex items-center justify-center aspect-square rounded-full 
                    bg-slate-800 hover:bg-slate-700 focus:bg-slate-700
                    border border-slate-700 hover:border-slate-600 focus:border-slate-600 focues:outline-none focus:ring-none`;

const CreateButton = ({ onClick }) => (
  <Button text={<FaPlus />} onClick={onClick} className={BUTTON_CLASS} />
);

export default CreateButton;