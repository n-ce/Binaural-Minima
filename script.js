var ctx = new AudioContext();
var osc = ctx.createOscillator();
var gain = ctx.createGain();

gain.gain.value=0;

osc.connect(gain);
gain.connect(ctx.destination);

osc.start(0);

function play() {
  gain.gain.value = 1;
  var f = document.querySelector("input");
  f.addEventListener("input", (event) => { osc.frequency.value = event.target.value; });
  document.getElementById("fr").innerHTML = f.value + "hz";
}
function stop(){
  gain.gain.value = 0;
}