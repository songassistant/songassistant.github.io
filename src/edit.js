const main = "loreis";
let synth;

function setSynthType() {
  if (main === "loreis") {
    var synth3 = new Tone.Synth();
    return synth3;
  }
  if (main === "loris") {
    var synth3 = new Tone.PolySynth(Tone.FMSynth);
    return synth3;
  }
}
synth = setSynthType();
synth.toDestination();
synth.triggerAttackRelease("C6", "16n");
