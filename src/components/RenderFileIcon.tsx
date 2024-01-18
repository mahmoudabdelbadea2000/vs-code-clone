import ImageFileIcon from "./ImageFileIcon";
import FileIcon from "./SVG/File";

interface IProp {
  filename: string;
  isFolder?: boolean;
  isOpen?: boolean;
}

const RenderFileIcon = ({ filename, isFolder, isOpen }: IProp) => {
  const extension = filename.split(".").pop();

  // ** Files
  if (extension === "tsx")
    return <ImageFileIcon src="/icons/react_ts.svg" alt={extension} />;

  if (extension === "jsx")
    return <ImageFileIcon src="/icons/react.svg" alt={extension} />;

  if (extension === "jsx")
    return <ImageFileIcon src="/icons/javascript.svg" alt={extension} />;

  if (extension === "svg")
    return <ImageFileIcon src="/icons/svg.svg" alt={extension} />;

  if (extension === "ts")
    return <ImageFileIcon src="/icons/typescript.svg" alt={extension} />;

  if (extension === "html")
    return <ImageFileIcon src="/icons/html.svg" alt={extension} />;

  if (extension === "css")
    return <ImageFileIcon src="/icons/css.svg" alt={extension} />;

  // ** Folders
  if (extension === "node_modules")
    return isFolder && isOpen ? (
      <ImageFileIcon src="/icons/folder-node-open.svg" alt={extension} />
    ) : (
      <ImageFileIcon src="/icons/folder-node.svg" alt={extension} />
    );
  if (extension === "src")
    return isFolder && isOpen ? (
      <ImageFileIcon src="/icons/folder-src-open.svg" alt={extension} />
    ) : (
      <ImageFileIcon src="/icons/folder-src.svg" alt={extension} />
    );
  if (extension === "public")
    return isFolder && isOpen ? (
      <ImageFileIcon src="/icons/folder-public-open.svg" alt={extension} />
    ) : (
      <ImageFileIcon src="/icons/folder-public.svg" alt={extension} />
    );
  if (extension === "components")
    return isFolder && isOpen ? (
      <ImageFileIcon src="/icons/folder-components-open.svg" alt={extension} />
    ) : (
      <ImageFileIcon src="/icons/folder-components.svg" alt={extension} />
    );
  if (isFolder && isOpen)
    return (
      <ImageFileIcon src="/icons/folder-default-open.svg" alt={extension} />
    );
  if (isFolder && !isOpen)
    return <ImageFileIcon src="/icons/folder-default.svg" alt={extension} />;

  return <FileIcon />;
};

export default RenderFileIcon;
