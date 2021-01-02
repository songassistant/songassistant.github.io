

var chordIndex = 0;
const synth = new Tone.PolySynth(Tone.FMSynth);//.connect(chorus);
//duoSynth.triggerAttackRelease("g4", 2);
 //synth.toDestination()



Tone.Transport.bpm.value = 80;
const seq = new Tone.Sequence((time, note) => {
  
 
	synth.triggerAttackRelease(note, '16n');
	// subdivisions are given as subarrays
},  [["c4", "c4"], "d4", "c4", "F4", "e4", ["c4", "c4"], 
"d4", "c4", "g4", "f4", ["c4", "c4"],
 "c4", "A4", ["f4", "f4"], "e4", "d4", ["b4", "b4"],
  "a4", "f4", "g4", "f4"])

seq.start()


const distortion = new Tone.Reverb(0.7).toDestination();
// // const player = new Tone.Player({
// // 	url: "https://tonejs.github.io/audio/berklee/gurgling_theremin_1.mp3",
// // 	loop: true,
// // 	autostart: true,
// // })
// //create a distortion effect
const filter = new Tone.Filter(40, 'highpass').toDestination();
const feedbackDelay = new Tone.FeedbackDelay(0.125, 0.5).toDestination();
// //connect a player to the distortion
//synth.connect(filter);
synth.connect(feedbackDelay);
//synth.connect(distortion);
//Tone.Transport.start();

const oscillator = new Tone.Oscillator();
const freqEnv = new Tone.FrequencyEnvelope({
	attack: 0.7,
	baseFrequency: "g3",
	octaves: 5
});
// 

"mute": false,
	"volume": -15.999999999999998,
	"detune": 0,
	"frequency": 440,
	"partialCount": 0,
	"partials": [],
	"phase": 0,
	"type": "square"

// multiply the output of the signal by 2 using the waveshaper's function
const timesTwo = new Tone.WaveShaper((val) => val * 1, 2048).connect(oscillator.frequency);
const signal = new Tone.Signal(.2).connect(timesTwo);
signal.connect(timesTwo)
signal.connect(freqEnv)

freqEnv.connect(oscillator.frequency);
freqEnv.triggerRelease();
//oscillator.toDestination().start()

function Effects

const env = new Tone.Envelope({
	attack: 0.1,
	decay: 0.2,
	sustain: 0.5,
	release: 0.8,
}).toDestination();


attack : Time
attackCurve : EnvelopeCurve
context : BaseContext
decay : Time
decayCurve : BasicEnvelopeCurve
release : Time
releaseCurve : EnvelopeCurve
sustain : NormalRange




// {
// 	"mute": false,
// 	"volume": -9.999999999999998,
// 	"fadeIn": 0,
// 	"fadeOut": 0,
// 	"playbackRate": 1,
// 	"type": "brown"
// }

const channel = new Tone.Channel(-0.25, -12);



const synth = new Tone.Synth({
	oscillator: {
		type: "amtriangle",
		harmonicity: 0.5,
		modulationType: "sine"
	},
	envelope: {
		attackCurve: "exponential",
		attack: 0.05,
		decay: 0.2,
		sustain: 0.2,
		release: 1.5,
	},
	portamento: 0.05
}).toDestination();

piano({
	tone: synth,
	parent: document.querySelector("#content"),
	noteon: (note) => synth.triggerAttack(note.name),
	noteoff: (note) => synth.triggerRelease()
});

ui({
	tone: synth,
	name: "Synth",
	parent: document.querySelector("#content"),
});
