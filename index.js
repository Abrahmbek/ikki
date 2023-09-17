// file modullar

const { log } = require('console');

// const calculate = require("./hisob.js");

// const natija = calculate.kopaytirish(20,15);
// console.log("natija:", natija);

// console.log("========================");

// const natija2 = calculate.ayrish(20,15);
// console.log("natija:", natija2);

// console.log("========================");

// const natija3 = calculate.ayrish(20,15);
// console.log("natija:", natija3);  
// console.log(require('module').wrapper);
 
const Account = require("./account");
Account.aboutClass();
Account.aboutTime();

console.log("==============================");

const myAccount = new Account("bek", 2000, 56876536568);
myAccount.Details();

myAccount.deposit(2500);
//ferrarri 210 
myAccount.withdrawl(9000);
