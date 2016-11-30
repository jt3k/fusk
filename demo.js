function render() {
  requestAnimationFrame(render);

  var rnd = Math.random().toString(36).slice(-5);
  document.body.textContent = rnd;
}
render();