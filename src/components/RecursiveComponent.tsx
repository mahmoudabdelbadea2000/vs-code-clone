import { useState } from "react";
import { IFile } from "../interfaces";
import RightArrowIcon from "./SVG/Right";
import BottomArrowIcon from "./SVG/Bottom";
import RenderFileIcon from "./RenderFileIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveTabAction,
  setOpenFileAction,
} from "../app/features/fileTreeSLice";
import { RootState } from "../app/store";
import { doesFileExist } from "../utils/functions";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({ fileTree }: IProps) => {
  const dispatch = useDispatch();
  const { openFile } = useSelector((state: RootState) => state.tree);
  const [isOpen, setisOpen] = useState<boolean>(true);

  const toggle = () => {
    setisOpen((prev) => !prev);
  };

  const onFileCLicked = () => {
    const exist = doesFileExist(openFile, fileTree.id);
    if (exist) return;
    dispatch(setOpenFileAction([...openFile, fileTree]));
    dispatch(setActiveTabAction(fileTree.id));
  };

  return (
    <div className="mb-2 ml-2 cursor-pointer select-none">
      <div className="flex items-center mb-1">
        {fileTree.isFolder ? (
          <div className="flex items-center" onClick={toggle}>
            {isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}

            <RenderFileIcon
              filename={fileTree.name}
              isFolder={true}
              isOpen={isOpen}
            />
            <span>{fileTree.name}</span>
          </div>
        ) : (
          <div
            className="mr-2 flex gap-1 items-center"
            onClick={() => onFileCLicked()}
          >
            <RenderFileIcon filename={fileTree.name} />
            <span>{fileTree.name}</span>
          </div>
        )}
      </div>
      {isOpen &&
        fileTree.children?.map((file, idx) => (
          <RecursiveComponent fileTree={file} key={idx} />
        ))}
    </div>
  );
};

export default RecursiveComponent;
