const btn = document.querySelector('.btn');

function returnSize() {
  let width1 = window.innerWidth;
  let height1 = window.innerHeight;
  let width2 = document.documentElement.clientWidth;
  let height2 = document.documentElement.clientHeight;
  alert(`Размер экрана с учётом полосы прокрутки: ${width1}x${height1}
  Размер экрана без учёта полосы прокрутки: ${width2}x${height2}`);
};

btn.addEventListener("click", returnSize);