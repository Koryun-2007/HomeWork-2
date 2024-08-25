//Task 1
// const a = function(){
//     return() => {
//         return 6
//     }
// }
//
// const res = a()
// console.log(res())

//Task 2
// const arr1 = [1,2,3,4,]
// const arr2 = [5,6,7,8,9]
// function  arr(arr1,arr2){
//     return arr1.concat(arr2)
// }
// arr3 = arr(arr1,arr2)
// console.log(arr3)

//Task 3
// function sum() {
//     let args = Object.values(arguments)
//     return args.reduce((sum, item) =>{
//         return sum + item
//     })
// }
//
// console.log(sum(1, 2, 6 ,7 ,8));
// console.log(sum(5, 4));

//Task 4
// function sortBy(arr, str) {
//     if (str === "Asc") {
//         return arr.sort((a, b) => a - b);
//     } else if (str === "Desc") {
//         return arr.sort((a, b) => b - a);
//     } else  {
//         return arr.sort((a,b) => a - b)
//     }
// }
// console.log(sortBy([4, 3, 2, 1], "Asc"))
// console.log(sortBy([7, 8, 11, 66]))
// console.log(sortBy([7, 8, 11, 66], "Desc"))
//
// function sortBy(arr, str = "Asc") {
//     switch (str) {
//         case "Asc":
//             return arr.sort((a, b) => a - b);
//         case "Desc":
//             return arr.sort((a, b) => b - a);
//         default:
//             return ("error")
//     }
// }
//
// console.log(sortBy([4, 3, 2, 1], "Asc"));
// console.log(sortBy([7, 8, 11, 66]));
// console.log(sortBy([7, 8, 11, 66], "Desc"));

//Task 5
// const users = [
//     {
//         username: "Yuri Gagarin",
//         lang: "ru",
//     },
//     {
//         username: "Nil Armstrong",
//         lang: "ENG",
//     },
// ];
// let getUserNames = users.map(item => item.username)
// console.log(getUserNames)

//Task 6
// function getUsernameLengths(users) {
//     return users.map(user => user.username.length);
// }
// const users = [
//     {
//         username: 'Yuri Gagarin',
//         lang: 'eu'
//     },
//     {
//         username: 'Nil Armstrong',
//         lang: 'eng'
//     }
// ];
//
// console.log(getUsernameLengths(users));

//Task 7
// function parseInteger(strings) {
//     return strings.map(str => {
//         const parsed = parseInt(str, 10);
//         return isNaN(parsed) ? null : parsed;
//     });
// }
// console.log(parseInteger(["1", "2", "34"]));
// console.log(parseInteger(["1", "px", "2323"]));

//Task 8
// function filterNumbers(arr) {
//     return arr.filter(item => typeof item === 'number' && !isNaN(item));
// }
// const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];
// console.log(filterNumbers(arr));

//Task 9
// const users = [
//     {
//         username: "Yuri Gagarin",
//         lang: "ru",
//         isAstronaut: true,
//     },
//     {
//         username: "Nil Armstrong",
//         lang: "ENG",
//         isAstronaut: true,
//     },
//     {
//         username: "Elon Musk",
//         isAstronaut: false,
//     },
//
// ];
// let getIsAstronaut = users.filter(item => item.isAstronaut === true);
// console.log(getIsAstronaut);

//Task 10
// function sumOver18(arr) {
//     let sum = 0;
//     arr.forEach(num => {
//         if (num >= 18) {
//             sum += num;
//         }
//     });
//     return sum;
// }
// const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];
// console.log(sumOver18(arr));
//

//Task 11
// function getAverageAge(users) {
//     const totalAge = users.reduce((sum, user) => sum + user.age, 0);
//     return totalAge / users.length;
// }
//
// const users = [
//     {
//         username: "Yuri Gagarin",
//         lang: "ru",
//         age: 56,
//     },
//     {
//         username: "Nil Armstrong",
//         lang: "ENG",
//         age: 51,
//     },
// ];
//
// console.log(getAverageAge(users))
