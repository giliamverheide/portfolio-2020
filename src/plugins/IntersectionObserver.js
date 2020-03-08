/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';

function handleIntersect(entries, observer) {
  entries.forEach(entry => {
    const el = entry.target;
    el.classList.add('is-outview');
    el.dataset.observed = true;
    if (entry.intersectionRatio > 0) {
      el.classList.add('is-inview');
      el.classList.remove('is-outview');
      observer.unobserve(el);
    }
  });
}

function createObserver(
  el,
  { root = null, rootMargin = '0px 0px -20px 0px', threshold = '0.3', debug = false } = {}
) {
  if (window.IntersectionObserver) {
    const element = el;
    const options = {
      root,
      rootMargin,
      threshold
    };
    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(element);

    if (debug) {
      console.log('Observing:', element);
    }
  } else {
    console.log('IntersectionObserver not supported.');
    el.classList.add('is-inview');
  }
}

Vue.prototype.$observe = (el, options) => createObserver(el, options);
