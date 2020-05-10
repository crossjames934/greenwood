const moment = require('moment');

const birth = new moment("11/05/1991", "DD/MM/YYYY");

birth.hours('14');

console.log(birth.format("DD/MM/YYYY HH:mm"));