interface SmallImageMapProps {
  imageName: string;
}

const SmallImageMap: React.FC<SmallImageMapProps> = ({ imageName }) => {
  return (
    <div className="w-4/12 relative px-1 shadow-lg">
      <img
        className="object-cover rounded-box w-full h-full"
        src={imageName}
        alt={imageName.toLowerCase()}
      />
    </div>
  );
};

export default SmallImageMap;
