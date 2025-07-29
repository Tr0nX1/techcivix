import React, { useState } from 'react';
import { Users, Image as ImageIcon } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackIcon?: React.ReactNode;
  fallbackText?: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = "",
  fallbackIcon = <Users className="h-8 w-8 text-cyan-400" />,
  fallbackText = "Image"
}) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    console.log(`Image failed to load: ${src}`);
    setImageError(true);
  };

  const handleImageLoad = () => {
    console.log(`Image loaded successfully: ${src}`);
    setImageError(false);
  };

  // If there's an error, show fallback
  if (imageError) {
    return (
      <div className={`bg-gradient-to-br from-cyan-900/30 to-blue-900/30 flex items-center justify-center ${className}`}>
        <div className="text-center">
          {fallbackIcon}
          <p className="text-gray-300 text-sm mt-2">{fallbackText}</p>
          <p className="text-gray-400 text-xs mt-1">Image not found</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onLoad={handleImageLoad}
      onError={handleImageError}
    />
  );
};

export default ImageWithFallback; 