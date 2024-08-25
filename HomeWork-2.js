//console.log(Number('0x77') === 0x77); // true
//console.log(Number('077') === 077); // False
//console.log(Number(' 12'))//12
//console.log(isNaN(' '))//false
//console.log(1 + 2 == 3)//true
//console.log(9007199254740992 + 1 == 9007199254740992)//true
//console.log( 0 === +0)//true
//console.log(+0 === -0)//true
//console.log(1 / '2' )//0.5
//console.log(1 / -0)//-infinty
//console.log(Infinity / 6)//infinty
//console.log(+true)//1
//console.log(+false)//0
//console.log(+null)//0
//console.log(+undefined)//NaN
//console.log(parseInt('.2'))//NaN
//console.log(parseInt('077a'))//77
//console.log(parseInt('0x77a'))//1914
//console.log(parseInt('I’m the best value - said Infinity.'))//NaN
//console.log(parseFloat('I’m the best value - said Infinity.'))//NaN
//console.log(parseFloat('12.78ff'))//12.78
//console.log( "" + 1 + 0)//outout 10 because we have tex + number to connect together for that
//console.log("" - 1 + 0)//output -1 because we have a tex - number, so it won't connect to each other
//console.log(true + false)//output 1 because false === 0 true === 1 1+ 0 === 1
//console.log(6 / "3")//output 2 because 6 / 3 === 2
//console.log("2" * "3") // output 6 because 2 * 3 === 6
//console.log( 4 + 5 + "px")//output 9px because  4 + 5 === 9 9 + px === 9px
//console.log("$" + 4 + 5)//output $45 because $ === string string + number === concat
//console.log("4" - 2)//output 2 because 4 - 2 === 2
//console.log("4px" - 2)//output NaN
//console.log(7 / 0)//output infinty
//console.log("-9 " + 5)// outout -95
//console.log(" -9 " - 5)//output -14
//console.log(null + 1)// output 1 because null === 0
//console.log( undefined + 1)//output NaN because undefined not a number

// let person = {
//     firsName:"John",
//     lastName:"Doe",
//     age: 32,
//     toString: function (){
//         return `Name: ${this.firsName} LastName: ${this.lastName} Age : ${this.age}`
//     }
// }
// console.log(person.toString())

// let product = {
// //     apple : 1500,
// //     valueOf:function (){
// //         return this.apple;
// //     }
// // }
// // console.log(product.valueOf() + 500)

// let date = {
//     day: 18,
//     month:10,
//     year:2024,
//     valueOf: function (){
//         return `<<${this.day},${this.month},${this.year}>>`
//     }
// }
// alert(date.valueOf())

// function ArrayLikeObject(...items) {
//     this.items = items;
// }
// ArrayLikeObject.prototype.toString = function() {
//     return this.items.join(',');
// };
// const myArrayLikeObject = new ArrayLikeObject('item1', 'item2', 'item3');
//
// console.log(myArrayLikeObject.toString());

// let bank = {
//     balance: 1000,
//     interestRate: 5,
//     percent:function (){
//         return this.balance += this.balance * this.interestRate / 100
//     }
// }
// console.log(bank.percent())

// function customParseInt(str) {
//     str = str.trim();
//     if (str.length === 0) return NaN;
//     let isNegative = false;
//     let startIndex = 0;
//     let result = 0;
//     if (str[0] === '-') {
//         isNegative = true;
//         startIndex = 1;
//     } else if (str[0] === '+') {
//         startIndex = 1;
//     }
//
//     for (let i = startIndex; i < str.length; i++) {
//         const charCode = str.charCodeAt(i);
//
//         if (charCode >= 48 && charCode <= 57) {
//             result = result * 10 + (charCode - 48);
//         } else {
//             break;
//         }
//     }
//     return isNegative ? -result : result;
// }
//
// console.log(customParseInt("123"));

// function customParseFloat(str) {
//     str = str.trim();
//
//     if (str.length === 0) return NaN;
//     let isNegative = false;
//     let startIndex = 0;
//     let result = 0;
//     let decimalFound = false;
//     let decimalMultiplier = 0.1;
//
//     if (str[0] === '-') {
//         isNegative = true;
//         startIndex = 1;
//     } else if (str[0] === '+') {
//         startIndex = 1;
//     }
//
//     for (let i = startIndex; i < str.length; i++) {
//         const charCode = str.charCodeAt(i);
//
//         if (charCode >= 48 && charCode <= 57) {
//             if (decimalFound) {
//                 result += (charCode - 48) * decimalMultiplier;
//                 decimalMultiplier /= 10;
//             } else {
//                 result = result * 10 + (charCode - 48);
//             }
//         } else if (str[i] === '.' && !decimalFound) {
//             decimalFound = true;
//         } else {
//             break;
//         }
//     }
//
//     return isNegative ? -result : result;
// }
//
// // Example usage
// console.log(customParseFloat("123.45"));
