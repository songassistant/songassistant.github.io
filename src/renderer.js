let sounds;
let keys;
var toggler = document.getElementById("toggler");
var ranger = document.getElementById("ranger");
var detuner = document.getElementById("detune");
var frequencyChange = document.getElementById("freq");
var distortionfilter = document.getElementById("other");
var wetness = document.getElementById("wet");
var oversampleValue = document.getElementById("oversample");
toggler.defaultValue = true;
ranger.defaultValue = 5;
detuner.defaultValue = 0;
frequencyChange.defaultValue = 0;
distortionfilter.defaultValue = 0;
wetness.defaultValue = 0;
// window.addEventListener('load', ()=>{

// })

window.addEventListener("load", () => {
  sounds = document.querySelectorAll(".sound");
  keys = document.querySelectorAll(".audio");

  keys.forEach((key, index) => {
    key.addEventListener("click", () => {
      sounds[index].currentTime = 0;
      sounds[index].play();
    });
  });
});
var Cm = ["C", "E", "G"];
var cm = "c4";
var Fm = ["f", "a", "c"];
var Gm = ["g", "b", "d"];
var Dm = ["d", "f#", "a"];
var Am = ["A", "C#", "E"];
var Em = ["e", "g#", "b"];

setOctave("4", Cm);
setOctave("4", Fm);
setOctave("4", Gm);
setOctave("4", Am);
setOctave("4", Em);

var chords3 = [
  {
    cnote: "4n",
    cvalue: cm,
  },
  { cnote: "16n", cvalue: cm },

  { cnote: "4n", cvalue: "d4" },

  { cnote: "4n", cvalue: cm },

  { cnote: "4n", cvalue: "F4" },

  { cnote: "4n", cvalue: "e4" },

  { cnote: "8n", cvalue: cm },

  { cnote: "8n", cvalue: cm },

  { cnote: "4n", cvalue: "d4" },

  { cnote: "4n", cvalue: cm },

  { cnote: "4n", cvalue: "g4" },

  { cnote: "4n", cvalue: "f4" },
  { cnote: "8n", cvalue: cm },

  { cnote: "8n", cvalue: cm },

  { cnote: "4n", cvalue: cm },

  { cnote: "4n", cvalue: "A4" },

  { cnote: "8n", cvalue: "f4" },

  { cnote: "8n", cvalue: "f4" },

  { cnote: "4n", cvalue: "e4" },

  { cnote: "4n", cvalue: "d4" },

  { cnote: "8n", cvalue: "b4" },

  { cnote: "8n", cvalue: "b4" },

  { cnote: "4n", cvalue: "a4" },

  { cnote: "4n", cvalue: "f4" },

  { cnote: "4n", cvalue: "g4" },
  { cnote: "4n", cvalue: "f4" },
];

var playArr = [];

chords3.forEach((value) => {
  playArr.push(value.cvalue);
});

var noteArr = [];

chords3.forEach((value) => {
  noteArr.push(value.cnote);
});
//c major ceg, f major fac , g major gbd

var values = [];
for (i = 0; i < chords3.length; i++) {
  values.push(i);
}

function setOctave(octave, arr) {
  arr.forEach((key) => {
    arr[arr.indexOf(key)] = key + octave;
  });
}

var chordIndex = 0;
const chorus = new Tone.Chorus(6, 10, 30);
//const synth = new Tone.PolySynth().connect(chorus);
//const psynth = new Tone.FMSynth();
const synth = new Tone.PolySynth(Tone.FMSynth); //.connect(chorus);
//duoSynth.triggerAttackRelease("g4", 2);

//synth.triggerAttackRelease(Cm,'4n');
let tsign;

// Tone.Transport.bpm.value = 55;
// var seq = new Tone.Sequence((time, note)=>{
//   chordIndex =note;
//   tsign = chords3[chordIndex].cnote;

//    if (chordIndex >= 0){
//     console.log(tsign)
//    synth.triggerAttackRelease(chords3[chordIndex].cvalue,
//      tsign
//      );

// //    console.log(chords3[chordIndex].cvalue)

//     // psynth.triggerAttackRelease(chords2[chordIndex][3], '4n' );
//    }

// }, values, tsign  )
// seq.start()
// Tone.Transport.start();
// Tone.Transport.bpm.value = ranger.value;
// ranger.addEventListener("input", (value) => {
//   Tone.Transport.bpm.value = ranger.value;
// });
let filter = new Tone.Distortion(distortionfilter.value).toDestination();
distortionfilter.addEventListener("input", (value) => {
  filter.set({
    //  context : BaseContext,
    distortion: distortionfilter.value,
  });
});
oversampleValue.addEventListener("input", (value) => {
  filter.set({
    oversample: oversampleValue.value,
  });
});
wetness.addEventListener("input", (value) => {
  filter.set({
    wet: wetness.value / 10,
  });
});

synth.connect(filter).toDestination();
const seq = new Tone.Sequence(
  (time, note) => {
    if (chordIndex < noteArr.length) {
      chordIndex = chordIndex + 1;
    }
    if ((chordIndex = noteArr.length)) {
      chordIndex = 0;
    }

    synth.triggerAttackRelease(note, "16n");
    // subdivisions are given as subarrays
  },
  [
    ["c4", "c4"],
    "d4",
    "c4",
    "F4",
    "e4",
    ["c4", "c4"],
    "d4",
    "c4",
    "g4",
    "f4",
    ["c4", "c4"],
    "c4",
    "A4",
    ["f4", "f4"],
    "e4",
    "d4",
    ["b4", "b4"],
    "a4",
    "f4",
    "g4",
    "f4",
  ]
);

detuner.addEventListener("input", (value) => {
  synth.set({
    detune: detuner.value,
  });
});

frequencyChange.addEventListener("input", (value) => {
  filter.set({
    frequency: frequencyChange.value,
    type: "lowpass",
  });
});
detuner.addEventListener("input", (value) => {
  //   synth.set({
  //
  //      detune: detuner.value
  //   });
});

seq.start();
toggler.addEventListener("input", (value) => {
  if (toggler.checked == true) {
    Tone.Transport.start();
  } else {
    Tone.Transport.stop();
  }
});
