// Image preloading utilities - preload ALL site images at startup

// About page images
import chessImage from '../assets/about/Chess_Image.png';
import watchmakingImage from '../assets/about/Watchmaking_Image.jpg';
import sportsImage from '../assets/about/Sports_Image.png';
import gameDevImage from '../assets/about/Temo-image.png';

// Project images
import projectOneImage from '../assets/projects/projectOne.png';
import projectTwoImage from '../assets/projects/ProjectTwo.png';
import projectThreeImage from '../assets/projects/ProjectThree.png';
import projectFourImage from '../assets/projects/ProjectFour.png';

// Hero image
import profileImage from '../assets/profile.jpg';

const allImages = [
  // About
  chessImage,
  watchmakingImage,
  sportsImage,
  gameDevImage,
  // Projects
  projectOneImage,
  projectTwoImage,
  projectThreeImage,
  projectFourImage,
  // Hero
  profileImage,
];

let imagesPreloaded = false;

export const preloadAllImages = () => {
  if (imagesPreloaded) return;

  allImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });

  imagesPreloaded = true;
};

// Preload on idle (after initial render)
export const preloadImagesOnIdle = () => {
  if (imagesPreloaded) return;

  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => preloadAllImages(), { timeout: 2000 });
  } else {
    // Fallback for Safari
    setTimeout(preloadAllImages, 1000);
  }
};

// Legacy export for backwards compatibility
export const preloadAboutImages = preloadAllImages;
