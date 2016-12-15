const out = document.getElementById('out');
function render() {
  requestAnimationFrame(render);

  var rnd = Math.random().toString(36).slice(-5);
  out.textContent = rnd;
}
render();
