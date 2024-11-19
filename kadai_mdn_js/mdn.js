const today =  new Date();

const Year = today.getFullYear();
const Month = today.getMonth()+1;
const Day = today.getDate();

console.log(Year+'年', Month+'月', Day+'日');
