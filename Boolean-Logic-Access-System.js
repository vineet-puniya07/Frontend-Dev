let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

function checkAccess() {
    if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
        console.log("Secure");
    } else {
        console.log("Unsafe");
    }
}

console.log("Test 1: All true");
checkAccess();

isAlarmOn = false;
console.log("Test 2: Alarm off");
checkAccess();

isAlarmOn = true;
isDoorLocked = false;
console.log("Test 3: Door unlocked");
checkAccess(); 

isDoorLocked = true;
isWindowClosed = false;
console.log("Test 4: Window open");
checkAccess();

isWindowClosed = true;
isOwnerInside = false;
console.log("Test 5: Owner not inside");
checkAccess(); 