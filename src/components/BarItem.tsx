import { useDispatch, useSelector } from "react-redux";
import { IFile } from "../interfaces";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import {
  setActiveTabAction,
  setClickedFileAction,
} from "../app/features/fileTreeSLice";
import { RootState } from "../app/store";

interface IProps {
  file: IFile;
}

const BarItem = ({ file }: IProps) => {
  const dispatch = useDispatch();
  const { activeTab } = useSelector((state: RootState) => state.tree);

  const clickFile = () => {
    dispatch(
      setClickedFileAction({ fileName: file.name, fileContent: file.content })
    );
    dispatch(setActiveTabAction(file.id));
  };
  return (
    <li
      className="max-w-screen-md flex items-center p-2 border-t-2 select-none"
      style={{
        borderTop:
          activeTab === file.id ? "2px solid #cf6ccf" : "2px solid transparent",
      }}
      onClick={clickFile}
    >
      <RenderFileIcon filename={file.name} />
      <span className="cursor-pointer duration-300 flex justify-center items-center w-fit mx-2 p-1 rounded-md">
        {file.name}
      </span>
      <span className="cursor-pointer hover:bg-[#64646473] duration-300 flex justify-center items-center w-fit mr-2 p-1 rounded-md">
        <CloseIcon />
      </span>
    </li>
  );
};

export default BarItem;
