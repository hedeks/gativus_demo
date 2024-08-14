window.addEventListener("scroll", () => {
  let particles = document.querySelector("#particles-js");
  particles.style.transform = `translateY(-${String(
    (scrollY / 1000) * 30
  )}vh)`;
});

window.addEventListener('DOMContentLoaded', ()=>{
  let particles = document.querySelector("#particles-js");
  particles.style.opacity = 1;
  let app = document.querySelector("#app");
  app.style.opacity = 1;
})