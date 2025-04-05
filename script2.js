// const track = document.getElementById('carousel-track');
// let clone = track.innerHTML;
// track.innerHTML += clone; // Дублируем элементы
//
// let speed = 1; // Скорость движения
// function move() {
//   track.style.transform = `translateX(${-speed}px)`;
//   track.appendChild(track.firstElementChild);
//   requestAnimationFrame(move);
// }
// move();

const track = document.getElementById('carousel-track');
let clone = track.innerHTML;
track.innerHTML += clone; // Дублируем элементы

let position = 0;
let speed = 0.5; // Уменьшенная скорость движения

function move() {
  position -= speed;
  if (position <= -track.scrollWidth / 2) {
    position = 0;
  }
  track.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(move);
}
move();
