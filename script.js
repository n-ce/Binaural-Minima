var ctx = new AudioContext();
var osc = ctx.createOscillator();
var gain = ctx.createGain();
function start(){
osc.connect(gain);
gain.connect(ctx.destination);
gain.gain.value=0;
osc.start(0);
}
var f = document.querySelector("input");
f.addEventListener("input",(event)=>{
osc.frequency.value=event.target.value;
document.querySelector("h2").innerHTML = f.value + "hz"});
function play(){
  gain.gain.value = 1;
}
function stop(){
  gain.gain.value = 0;
}