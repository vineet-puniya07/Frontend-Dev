let name = "Vinit";
let age = 20;
let isStudent = true;
let subjects = ["Math", "Science"];
let details = { city: "Delhi", id: 123 };
let noData = null;
let notAssigned;

let report = [
  { label: "Name", value: name, type: typeof name },
  { label: "Age", value: age, type: typeof age },
  { label: "isStudent", value: isStudent, type: typeof isStudent },
  { label: "Subjects", value: subjects, type: Array.isArray(subjects) ? "array" : typeof subjects },
  { label: "Details", value: details, type: typeof details },
  { label: "No Data", value: noData, type: typeof noData },
  { label: "Not Assigned", value: notAssigned, type: typeof notAssigned }
];

console.table(report);
