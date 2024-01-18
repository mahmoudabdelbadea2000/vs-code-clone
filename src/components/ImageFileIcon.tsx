interface IProps {
  src: string;
  alt?: string;
}

const ImageFileIcon = ({ src, alt }: IProps) => {
  return <img src={src} className="w-5 h-5" alt={alt} />;
};

export default ImageFileIcon;
