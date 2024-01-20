import { extensionPathIcon } from "../constants/insex";
import ImageFileIcon from "./ImageFileIcon";
import FileIcon from "./SVG/File";

interface IProp {
  filename: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

const RenderFileIcon = ({ filename, isFolder, isOpen }: IProp) => {
  const extension = filename.split(".").pop();

  if (
    extension &&
    Object.prototype.hasOwnProperty.call(extensionPathIcon, extension)
  ) {
    const iconPath = isFolder
      ? isOpen
        ? `${extensionPathIcon[extension]}-open.svg`
        : `${extensionPathIcon[extension]}.svg`
      : `${extensionPathIcon[extension]}.svg`;

    return <ImageFileIcon src={iconPath} alt={extension} />;
  }

  if (isFolder && isOpen)
    return (
      <ImageFileIcon src="/icons/folder-default-open.svg" alt={extension} />
    );
  if (isFolder && !isOpen)
    return <ImageFileIcon src="/icons/folder-default.svg" alt={extension} />;

  return <FileIcon />;
};

export default RenderFileIcon;
