let marks = [90, 85, 80, 75, 95];
let total = 0;
let detained = false;

for (let m of marks) {
  if (m < 35) {
    detained = true;
  }
  total += m;
}

let percent = total / marks.length;

if (detained) {
  console.log("Detained");
} else if (percent >= 85) {
  console.log("Promoted with Distinction");
} else if (percent >= 50) {
  console.log("Promoted");
} else {
  console.log("Detained");
}
