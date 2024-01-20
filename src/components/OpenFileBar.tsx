import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import BarItem from "./BarItem";

const OpenFileBar = () => {
  const { openFile } = useSelector((state: RootState) => state.tree);
  return (
    <ul className="flex justify-between items-center ">
      {openFile.map((file) => (
        <BarItem key={file.id} file={file} />
      ))}
    </ul>
  );
};

export default OpenFileBar;
