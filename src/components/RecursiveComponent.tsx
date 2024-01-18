import { useState } from "react";
import { IFile } from "../interfaces";
import RightArrowIcon from "./SVG/Right";
import BottomArrowIcon from "./SVG/Bottom";
import RenderFileIcon from "./RenderFileIcon";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({ fileTree }: IProps) => {
  const [isOpen, setisOpen] = useState<boolean>(true);

  const toggle = () => {
    setisOpen((prev) => !prev);
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
          <div className="mr-2 flex gap-1 items-center">
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
