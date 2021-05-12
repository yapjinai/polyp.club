const ARROW_LEFT = 'ArrowLeft';
const ARROW_RIGHT = 'ArrowRight';

document.addEventListener('DOMContentLoaded', () => checkAspectRatio());
window.addEventListener('resize', () => checkAspectRatio());
document.addEventListener('keydown', (e) => navigatePrevAndNext(e));

const checkAspectRatio = () => {
  const painting = document.querySelector('.painting');
  if (painting) {
    const windowAspectRatio = window.innerWidth / window.innerHeight;
    const imageAspectRatio = painting.width / painting.height;
    const isWideScreen = windowAspectRatio > imageAspectRatio;
    if (isWideScreen) {
      painting.classList.remove('narrow-screen');
      painting.classList.add('wide-screen');
    }
    else {
      painting.classList.remove('wide-screen');
      painting.classList.add('narrow-screen');
    }
  }
};

const navigatePrevAndNext = (e) => {
  switch (e.code) {
    case ARROW_LEFT:
      window.location.assign(previous);
      break;
    case ARROW_RIGHT:
      window.location.assign(next);
      break;
    default:
      break;
  }
};
