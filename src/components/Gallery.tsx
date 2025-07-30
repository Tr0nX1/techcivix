import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // All images from the public/images folder
  const galleryImages: GalleryImage[] = [
    { id: 1, src: '/images/balaji2.jpeg', alt: 'Balaji School Session', category: 'Outreach Sessions' },
    { id: 2, src: '/images/iti3-session.jpeg', alt: 'ITI Session ', category: 'Outreach Sessions' },
    { id: 3, src: '/images/iti2.jpeg', alt: 'ITI Session', category: 'Outreach Sessions' },
    { id: 4, src: '/images/balaji-school.jpeg', alt: 'Balaji School Session', category: 'Outreach Sessions' },
    { id: 5, src: '/images/iti.jpeg', alt: 'ITI Session', category: 'Outreach Sessions' },
    { id: 6, src: '/images/mahir-achievement.jpeg', alt: 'Mahir got Acknowledged by ACP Prayanshu Deewan Sir and Rakshit Tandon Sir', category: 'Achievements' },
    { id: 7, src: '/images/saras-acchievement.jpg', alt: 'Saras got GPCSII Certificate by ACP Prayanshu Deewan Sir ', category: 'Achievements' },
    { id: 8, src: '/images/saras-mishra.png', alt: 'Saras Mishra Profile', category: 'Team Members' },
    { id: 9, src: '/images/dhruv-saini.png', alt: 'Dhruv Saini Profile', category: 'Team Members' },
    { id: 10, src: '/images/mahir_sharma.jpg', alt: 'Mahir Sharma Profile', category: 'Team Members' },
    { id: 11, src: '/images/kartik-bhattacharya.jpg', alt: 'Kartik Bhattacharya Profile', category: 'Team Members' },
    { id: 12, src: '/images/dhruv-got-achieve.jpeg', alt: 'Dhruv got Acknowledged by ACP Prayanshu Deewan Sir and Rakshit Tandon Sir', category: 'Achievements' },
    { id: 13, src: '/images/yashika.jpeg', alt: 'Yashika Sharma Profile', category: 'Team Members' },
  ];

  const categories = ['All', 'Outreach Sessions', 'Achievements', 'Team Members'];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    setCurrentImageIndex(galleryImages.findIndex(img => img.id === image.id));
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % galleryImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <section id="gallery" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Our Gallery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our journey through images - from outreach sessions to team achievements
          </p>
          <div className="mt-4">
            <span className="bg-cyan-900/30 text-cyan-300 px-3 py-1 rounded-full text-sm border border-cyan-700/50">
              {galleryImages.length} Images
            </span>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-cyan-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer transform transition-all hover:scale-105"
              onClick={() => openModal(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
                onError={(e) => {
                  console.log(`Failed to load image: ${image.src}`);
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-3 text-white">
                  <p className="text-sm font-medium">{image.alt}</p>
                  <p className="text-xs text-gray-300">{image.category}</p>
                </div>
              </div>
              {/* Fallback for failed images */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 flex items-center justify-center hidden">
                <div className="text-center">
                  <ImageIcon className="h-8 w-8 text-cyan-400" />
                  <p className="text-gray-300 text-sm mt-2">Image</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Counter */}
        <div className="text-center mt-8">
          <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-4 rounded-xl border border-cyan-700/50 inline-block">
            <p className="text-gray-300 text-sm">
              Showing <span className="text-cyan-400 font-semibold">{filteredImages.length}</span> of {galleryImages.length} images
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors z-10"
            >
              <X className="h-8 w-8" />
            </button>
            
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                onError={(e) => {
                  console.log(`Failed to load modal image: ${selectedImage.src}`);
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              {/* Fallback for modal */}
              <div className="max-w-full max-h-[80vh] bg-gradient-to-br from-cyan-900/30 to-blue-900/30 flex items-center justify-center rounded-lg hidden">
                <div className="text-center text-white">
                  <ImageIcon className="h-16 w-16 text-cyan-400 mx-auto mb-4" />
                  <p className="text-lg">Image not available</p>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
              <button
                onClick={prevImage}
                className="pointer-events-auto bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="pointer-events-auto bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-lg">
              <p className="text-sm font-medium">{selectedImage.alt}</p>
              <p className="text-xs text-gray-300">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery; 