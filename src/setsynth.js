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
var detunesyn = document.getElementById("detune-osc");
var tempo = document.getElementById("tempo");
var phaseChange = document.getElementById("phase");
var seqToggle = document.getElementById("seq-toggle");
var volKnob = document.getElementById("vol-knob");
var synthType = document.getElementById("synth-type");
var portamentoctrl = document.getElementById("portamentoctrl");
export default function setSynthProps(tsynth) {
  harmonicity.addEventListener("input", (value) => {
    tsynth.set({
      oscillator: {
        harmonicity: harmonicity.value / 10,
      },
    });
    decay.addEventListener("input", (value) => {
      tsynth.set({
        envelope: {
          decay: decay.value / 10,
        },
      });
    });
    attack.addEventListener("input", (value) => {
      tsynth.set({
        envelope: {
          attack: attack.value / 10,
        },
      });
    });
  });
  oscType.addEventListener("input", (value) => {
    tsynth.set({
      oscillator: {
        type: oscType.value,
      },
    });
    sustain.addEventListener("input", (value) => {
      tsynth.set({
        envelope: {
          sustain: sustain.value / 10,
        },
      });
    });
  });
  modType.addEventListener("input", (value) => {
    tsynth.set({
      oscillator: {
        modulationType: modType.value,
      },
    });
  });
  portamentoctrl.addEventListener("input", (value) => {
    console.log(portamentoctrl.value);
    tsynth.set({
      portamento: portamentoctrl.value / 100,
    });
  });
  release.addEventListener("input", (value) => {
    tsynth.set({
      envelope: {
        release: release.value,
      },
    });
  });
  detunesyn.addEventListener("input", (value) => {
    tsynth.set({
      detune: detunesyn.value,
    });
  });
  attackcurves.addEventListener("input", (value) => {
    tsynth.set({
      envelope: {
        attackCurve: attackcurves.value,
      },
    });
  });
}
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

export function SetSynthType(input) {
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
