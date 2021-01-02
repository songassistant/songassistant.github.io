import setSynthProps from "./setsynth.js";
//import SetSynthType from "./setsynth.js";
const vol = new Tone.Volume(30).toDestination();
const osc = new Tone.Oscillator().connect(vol);
var oscillatorFrequency = document.getElementById("osc-freq");
var oscType = document.getElementById("osc-types");
var attackcurves = document.getElementById("attack-curve");
var modType = document.getElementById("mod-type");
var harmonicity = document.getElementById("harmonicity");
var oscToggle = document.getElementById("osc-toggle");
var graph = document.getElementById("graph");
var attack = document.getElementById("attack");
var decay = document.getElementById("decay");
var sustain = document.getElementById("sustain");
var release = document.getElementById("release");
var release = document.getElementById("release");
var seqToggle = document.getElementById("seq-toggle");
var detune = document.getElementById("detune-osc");
var tempo = document.getElementById("tempo");
var volKnob = document.getElementById("vol-knob");
var phaseChange = document.getElementById("phase");
var synthType = document.getElementById("synth-type");

var synthProps = {
  oscillator: {
    type: "sine",
    modulationType: "square",
  },
  envelope: {
    attackCurve: "exponential",
    attack: 0.3,
    decay: 0.2,
    sustain: 0.2,
    release: 1.5,
  },

  portamento: 0.39,
};

oscillatorFrequency.addEventListener("input", (value) => {
  osc.set({
    frequency: oscillatorFrequency.value,
    type: "sine",
  });
});
phaseChange.addEventListener("input", (value) => {
  osc.set({
    phase: phaseChange.value,
  });
});

oscToggle.addEventListener("input", (value) => {
  if (oscToggle.checked == true) {
    osc.start();
  } else {
    osc.stop();
  }
});
function SetSynthType(input) {
  if (input === "Synth") {
    var snth = new Tone.Synth();
    return snth;
  }
  if (input === "PolySynth") {
    var snth = new Tone.PolySynth();
    return snth;
  }
  if (input === "AMSynth") {
    var snth = new Tone.AMSynth();
    return snth;
  }
  if (input === "DuoSynth") {
    var snth = new Tone.DuoSynth();
    return snth;
  }
  if (input === "FMSynth") {
    var snth = new Tone.FMSynth();
    return snth;
  }
  if (input === "MembraneSynth") {
    var snth = new Tone.MembraneSynth();
    return snth;
  }
  if (input === "NoiseSynth") {
    var snth = new Tone.NoiseSynth();
    return snth;
  }
  if (input === "PluckSynth") {
    var snth = new Tone.PluckSynth();

    return snth;
  }
  if (input === "Sampler") {
    var snth = new Tone.Sampler();
    return snth;
  }
}

var snthtype = synthType.value;

var synth7 = SetSynthType(snthtype);
synthType.addEventListener("input", (value) => {
  var snthtype2 = synthType.value;
  console.log(snthtype2);
  synth7 = SetSynthType(snthtype2);
  playSynth();
});

function playSynth() {
  Tone.Transport.bpm.value = tempo.value;

  tempo.addEventListener("input", (value) => {
    Tone.Transport.bpm.value = tempo.value;
  });
  const vol2 = new Tone.Volume(-4).toDestination();
  synth7.connect(vol2);
  setSynthProps(synth7);
  volKnob.addEventListener("input", (value) => {
    vol2.volume.value = volKnob.value / 20;
  });
  const seq6 = new Tone.Sequence(
    (time, note) => {
      synth7.triggerAttackRelease(note, 0.1);
      // subdivisions are given as subarrays
    },
    ["C3", "G3", "a3"]
  ).start(0.1);

  seqToggle.addEventListener("input", (value) => {
    if (seqToggle.checked == true) {
      Tone.Transport.start();
      console.log("started");
    } else {
      Tone.Transport.stop();
    }
  });
}
const synth6 = new Tone.PolySynth(Tone.FMSynth);
var trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  mode: "markers",
  marker: {
    color: "rgb(219, 64, 82)",
    size: 12,
  },
};

var data = [trace1];

var layout = {
  title: "Waveform",
};
window.addEventListener("load", () => {
  playSynth();
});
//Plotly.newPlot(graph, data, layout);
// const seq1 = new Tone.Sequence(
//   (time, note) => {
//     synth6.triggerAttackRelease(note, "16n");
//     // subdivisions are given as subarrays
//   },
//   ["c4", "g3"]
// );
// return Tone.Offline(
//   () => {
//     const pulse = new Tone.PulseOscillator(50, 0.4).toDestination().start();
//   },
//   0.1,
//   1
// );
// oscType.addEventListener("input", (value) => {
//   osc.set({
//     type: oscType.value,
//   });
// });
