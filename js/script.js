const balls = document.querySelectorAll(".ball");
let timer
balls.forEach((ball) => {
  ball.addEventListener("click", (e) => {
    e.stopPropagation();
    ball.classList.add("zoom");
    timer = setTimeout(() => {
      ball.classList.add("show");
    }, 2000);
  });
});

const closeBtns = document.querySelectorAll(".btn-close");
closeBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    btn.closest(".ball").classList.remove("show");
    btn.closest(".ball").classList.remove("zoom");
  });
});

const container = document.querySelector(".container");
container.addEventListener("click", () => {
    clearTimeout(timer);
    balls.forEach((ball) => {
    ball.classList.remove("show");
    ball.classList.remove("zoom");
  });
});
