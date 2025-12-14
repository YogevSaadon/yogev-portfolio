// Image preloading utilities - staggered loading for better performance

// Project images
import projectOneImage from '../assets/projects/ProjectOne.jpg';
import projectTwoImage from '../assets/projects/ProjectTwo.webp';
import projectThreeImage from '../assets/projects/ProjectThree.webp';
import projectFourImage from '../assets/projects/ProjectFour.webp';

// About page images
import chessImage from '../assets/about/Chess_Image.webp';
import watchmakingImage from '../assets/about/Watchmaking_Image.jpg';
import sportsImage from '../assets/about/Sports_Image.png';
import gameDevImage from '../assets/about/Temo-image.webp';

const projectImages = [
  projectOneImage,
  projectTwoImage,
  projectThreeImage,
  projectFourImage,
];

const aboutImages = [
  chessImage,
  watchmakingImage,
  sportsImage,
  gameDevImage,
];

let projectsPreloaded = false;
let aboutPreloaded = false;

const preloadImageArray = (images) => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

// Preload project images (called ~1s after page load)
export const preloadProjectImages = () => {
  if (projectsPreloaded) return;
  preloadImageArray(projectImages);
  projectsPreloaded = true;
};

// Preload about images (called ~2s after page load)
export const preloadAboutImages = () => {
  if (aboutPreloaded) return;
  preloadImageArray(aboutImages);
  aboutPreloaded = true;
};

// Staggered preload - doesn't block initial render
export const preloadImagesOnIdle = () => {
  // Project images after 1 second
  setTimeout(preloadProjectImages, 1000);

  // About images after 2.5 seconds
  setTimeout(preloadAboutImages, 2500);
};
