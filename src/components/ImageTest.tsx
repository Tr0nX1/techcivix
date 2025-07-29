import React from 'react';

const ImageTest: React.FC = () => {
  const images = [
    '/images/kartik-bhattacharya.jpg',
    '/images/saras-mishra.png',
    '/images/dhruv-saini.png',
    '/images/mahir_sharma.jpg'
  ];

  return (
    <div className="p-8 bg-gray-900 text-white">
      <h2 className="text-2xl font-bold mb-4">Image Test</h2>
      <div className="grid grid-cols-2 gap-4">
        {images.map((src, index) => (
          <div key={index} className="border border-gray-700 p-4 rounded">
            <p className="text-sm text-gray-400 mb-2">{src}</p>
            <img 
              src={src} 
              alt={`Test ${index}`}
              className="w-32 h-32 object-cover rounded"
              onLoad={() => console.log(`✅ Image loaded: ${src}`)}
              onError={(e) => console.log(`❌ Image failed: ${src}`, e)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageTest; 