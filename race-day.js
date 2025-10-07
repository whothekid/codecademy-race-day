let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegister = false;

let runnerAge = 20;

if (earlyRegister && runnerAge > 18) {
  raceNumber += 1000;
} else {};

if (earlyRegister && runnerAge > 18) {
  console.log(`Runner #${raceNumber} will run at 9:30 am.`);
} else if(runnerAge > 18 && !earlyRegister) {
  console.log(`Runner #${raceNumber} will race at 11:00 am.`)
} else if(runnerAge < 18) {
  console.log(`Runner ${raceNumber} will run at 12:30 pm.`);
} else {
  console.log(`Runner #${raceNumber} please see the registration desk.`)
};