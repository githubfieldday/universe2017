const map = document.querySelector('.map-container');

if (map) {
  let timer;
  map.addEventListener('mouseenter', () => {
    timer = setTimeout(() => {
      map.classList.add('is-clickable');
    }, 500);
  });

  map.addEventListener('mouseleave', () => {
    clearTimeout(timer);
    map.classList.remove('is-clickable');
  });
}