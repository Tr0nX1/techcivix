// Image utility functions for handling image paths in Vite/React

// Function to get image path - handles both imported images and public folder images
export const getImagePath = (imageName: string): string => {
  // If the image is in the public folder, use the public path
  if (imageName.startsWith('/')) {
    return imageName;
  }
  
  // For images in src/assets, we'll use a different approach
  // This will be handled by the component that uses the image
  return imageName;
};

// Function to get member image path
export const getMemberImagePath = (imageName: string): string => {
  // Remove the /src/assets/images/ prefix and just use the filename
  const filename = imageName.replace('/src/assets/images/', '');
  return `/src/assets/images/${filename}`;
};

// Function to get session image path
export const getSessionImagePath = (imageName: string): string => {
  // Remove the /src/assets/images/ prefix and just use the filename
  const filename = imageName.replace('/src/assets/images/', '');
  return `/src/assets/images/${filename}`;
}; 