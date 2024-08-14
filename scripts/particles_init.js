particlesJS.load("particles-js", "./scripts/particles.json", function () {
  console.log("callback - particles.js config loaded");
});

window.addEventListener('resize', () => {
  document.querySelector('#particles-js').style.width = `${window.innerWidth}px`;
});