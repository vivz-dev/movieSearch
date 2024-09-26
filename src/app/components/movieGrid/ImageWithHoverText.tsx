import { useState } from "react";

interface ImageHoverProps{
    imageUrl: string;
    altText: string;
    hoverText: string;
  };

const ImageWithHoverText: React.FC<ImageHoverProps> = ({
    imageUrl,
    altText,
    hoverText,
  }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    return (
      <div className="relative w-[350px] h-[169px]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-cover"
        />
  
        {isHovered && (
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white font-semibold">
            {hoverText}
          </div>
        )}
      </div>
    );
  };


  export default ImageWithHoverText;