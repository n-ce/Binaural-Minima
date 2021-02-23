function play() {
  const ctx = new(window.AudioContext);
  const osc = ctx.createOscillator();
  osc.connect(ctx.destination);
  osc.start(0);
  var f = document.querySelector("input");
  f.addEventListener("input", (event) => { osc.frequency.value = event.target.value; })
  document.getElementById("fr").innerHTML = f.value + "hz";
}