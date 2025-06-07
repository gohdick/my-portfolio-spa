// Animation utility functions using the motion library
import { animate, inView } from 'motion';

// Fade in animation  
export const fadeIn = (element, delay = 0, duration = 0.5) => {
  animate(
    element,
    { opacity: [0, 1] },
    { delay, duration, easing: 'ease-out' }
  );
};

// Slide in from direction
export const slideIn = (element, direction = 'up', delay = 0, duration = 0.5) => {
  const directions = {
    up: { y: [20, 0] },
    down: { y: [-20, 0] },
    left: { x: [20, 0] },
    right: { x: [-20, 0] }
  };
  
  animate(
    element,
    { ...directions[direction], opacity: [0, 1] },
    { delay, duration, easing: 'ease-out' }
  );
};

// Staggered animation for multiple elements
export const staggerItems = (elements, animation, staggerDelay = 0.1, initialDelay = 0) => {
  // Apply staggered animations to each element
  elements.forEach((element, index) => {
    animation(element, initialDelay + index * staggerDelay);
  });
};

// Animate on scroll into view
export const animateOnScroll = (element, animation, options = {}) => {
  inView(element, () => {
    animation(element, options.delay || 0, options.duration || 0.5);
    return false; // Run only once
  }, { margin: options.margin || '-10%' });
};

// Scale animation
export const scaleAnimation = (element, delay = 0, duration = 0.5) => {
  animate(
    element,
    { scale: [0.9, 1] },
    { delay, duration, easing: 'ease-out' }
  );
};

// Combined animations
export const fadeInSlideUp = (element, delay = 0, duration = 0.5) => {
  animate(
    element,
    { opacity: [0, 1], y: [20, 0] },
    { delay, duration, easing: 'ease-out' }
  );
};

// Hover animation setup
export const setupHoverAnimation = (element, scale = 1.05) => {
  element.addEventListener('mouseenter', () => {
    animate(element, { scale }, { duration: 0.2 });
  });
  
  element.addEventListener('mouseleave', () => {
    animate(element, { scale: 1 }, { duration: 0.2 });
  });
};
