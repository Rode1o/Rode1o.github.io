import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoHeight: true,
    initialSlide: 1,
  });

  const thumbs = document.querySelectorAll<HTMLButtonElement>('.thumb');

  function updateActiveThumb() {
    thumbs.forEach((thumb, index) => {
      const isActive = index === swiper.activeIndex;
      thumb.classList.toggle('is-active', isActive);
      thumb.setAttribute('aria-current', String(isActive));
    });
  }

  thumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      swiper.slideTo(Number(thumb.dataset.index));
    });
  });

  swiper.on('slideChange', updateActiveThumb);
  updateActiveThumb();

  let currentVideo: HTMLElement | null = null;

  function pauseVideo(videoElement: HTMLElement | null) {
    if (!videoElement) return;

    const iframe = videoElement.querySelector('iframe');

    videoElement.classList.remove('lyt-activated');

    const videoId = videoElement.getAttribute('videoid');
    if (videoId) {
      if (iframe) iframe.remove();
    }
  }

  function playVideo(slide: HTMLElement) {
    const videoElement = slide.querySelector('lite-youtube');
    if (videoElement) {
      if (currentVideo && currentVideo !== videoElement) {
        pauseVideo(currentVideo);
      }

      const playBtn = videoElement.querySelector('.lty-playbtn');
      if (playBtn && !videoElement.classList.contains('lyt-activated')) {
        (playBtn as HTMLElement).click();
      }
      currentVideo = videoElement as HTMLElement;
    }
  }

  swiper.on('slideChangeTransitionStart', () => {
    if (currentVideo) {
      pauseVideo(currentVideo);
    }
  });

  swiper.on('slideChangeTransitionEnd', () => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    playVideo(activeSlide);
  });
});
