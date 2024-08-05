window.addEventListener("scroll", () => {
  console.log(scrollY);
  let particles = document.querySelector("#particles-js");
  particles.style.transform = `translateY(-${String(
    (scrollY / 1000) * 30
  )}vh)`;
});
