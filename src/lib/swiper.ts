import Swiper from 'swiper';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { profileInfo } from './data';

document.addEventListener('DOMContentLoaded', function () {
  const thumbs = new Swiper('.thumbs', {
    slidesPerView: profileInfo.length,
    width: 250,
    spaceBetween: 10,
    breakpoints: {
      340: {
        width: 400,
      },
      540: {
        width: 450,
        spaceBetween: 20,
      },
      1024: {
        width: 700,
        spaceBetween: 30,
      },
      1500: {
        width: 800,
        spaceBetween: 30,
      },
    },
  });

  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Thumbs],
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: thumbs,
    },
    autoHeight: true,
    initialSlide: 1,
  });

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
