import { FaRegTrashAlt } from "react-icons/fa";

import Button from "../Button";

const BUTTON_CLASS = `h-10 w-10 flex items-center justify-center aspect-square rounded-full 
                    bg-slate-800 hover:bg-slate-700 focus:bg-slate-700
                    border border-slate-700 hover:border-slate-600 focus:border-slate-600 focues:outline-none focus:ring-none`;

const DeleteButton = ({ onClick }) => (
  <Button
    text={<FaRegTrashAlt />}
    onClick={onClick}
    className={
      BUTTON_CLASS +
      " text-red-800 hover:text-red-700 opacity-70 hover:opacity-100"
    }
  />
);

export default DeleteButton;
