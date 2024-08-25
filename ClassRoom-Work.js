//Task 1
// /*
//
// Number
// String
// Boolean
// undefined
// null
//
// object
//
// BigInt
// Symbol
//
// */
//
// // var, let, const
// // global scope
// // block scope - if, switch, for, while
// // functional scope - function
//
// // let a = 6
//
// // if(true) {
// //   console.log(a)
// // }
//
// // console.log(a)
//
// // console.log(a)
//
// // var a = 5
//
// // falsy
// // 0
// // false
// // ''
// // NaN
// // null
// // undefined
//
// // Number -> 0, NaN
// // String -> ''
// // Boolean -> false
// // null -> null
// // undefined - > undefined
//
// // object
//
// // %
//
// // console.log(4 % 3)
//
// // &&
// // ||
// // !
// // ??
//
// // &&
//
// // console.log('false' && 0)
//
// // console.log(!!6)
//
// // let a = NaN
//
// // console.log(a || 6)
//
// // case sensitive

//Task 2
// ==
// ===
// console.log('0' == false)
// 5 === 5
//
// object
// object, array, function
//
// const fullnames = ['Hovhannes Kocharyan', 'Hakob Hakobyan', 'Ani Voskanyan', 'John Snow']
//
// const obj = {} // { item: 9 }
//
// for(let i = 0; i < fullnames.length; i++) {
//   const item2 = fullnames[i] // 'Hakob Hakobyan'
//
//   obj.item = item2.length
// }
//
// console.log(obj) // { item: 9 }
//
// const obj = {}
//
// console.log(obj.hasOwnProperty('hasOwnProperty')) // undefined
// console.log('hasOwnProperty' in obj)
//
// const obj = {
//   name: 'Hovhannes',
//   age: 28,
// }
//
// const name = 'age'
//
// console.log(obj.name)
//
// const key = 1
//
// const obj = {
//   name: 'Hovhannes' // property
// }
//
// obj['age'] = 23
//
// const array = [1, 2, 3, 4]
//
// array[12] = 'hello'
//
// console.log(obj) // { name: '' }
// console.log(array) // undefined
//
// const obj = {
//   0: 'a',
//   1: 'b'
// }
//
// obj[12] = 'c'
//
// console.log(obj) // { 0: 'a', 1: 'b', 12: 'c' }
//
// const array = [1, 2, 3, 4]
//
// console.log(array.length) // ?? 4
//
// array['hello'] = 5
//
// console.log(array.length) // ??? 4
// console.log(array) // ??? [1, 2, 3, 4, 'hello': 5]
//
// primtive
//
// let a = 5
// let b = a
//
// a = 6
//
// console.log(a)
// console.log(b)
//
// // complex | reference
//
// const array = [1, 2, 3]
// const array2 = [1, 2, 3]
//
// array.push(4)
//
// console.log(array) // [1, 2, 3, 4]
// console.log(array2) // [1, 2, 3, 4]
//
// const obj = {
//   name: 'Hovhannes'
// }
//
// const obj2 = obj

//Task 3
// Function Declaration
// function name() {
//   return 'hello'
// }
//
// var name = function() {
//   return 4
// }
//
// console.log(name())
//
// Function Expression
// const res = function() {
//   return 'res'
// }
//
// console.log(res())
//
// let a = 5
//
// function name() {
//   console.log(a + 5)
//   let a = 7
// }
//
// name()
//
// console.log(a)
//
// console.log(a)
//
// let a = 6
//
// function foo(a = 9) {
//   let b = 4
//   console.log(a)
// }
//
// foo()
//
// Execution Context
//
// Creation phase
// <GlobalScopeRef>: {
//   a: <uninitialized>,
//   outer: null
// }
//
// <fooScopeRef>: {
//   outer: <GlobalScopeRef>
// }
//
// Execution phase
// <GlobalScopeRef>: {
//   a: 6
//   outer: null
// }
//
// <fooScopeRef>: {
//    EnvironmentRecord: {
//      arguments: { a: 9 },
//      b: 4
//   }
//   outer: <GlobalScopeRef>
// }
//
// function foo(a) {
//   return function name(b) {
//     return a + b
//   }
// }
//
// const res = foo(5)
// const res2 = foo(10)
//
// console.log(res === res2)
//
// console.log(res(6)) // ??
// console.log(res(10)) // ??
//
// Creation phase
//
// <nameRef>: {
//   arguments: { b: undefined }
//    outer: <fooRef>
// }
//
// <fooRef>: {
//   arguments: { a: undefined }
//   outer: <globalRef>
// }
//
// <globalRef>: {
//   res: <uninitialized>
//   res2: <uninitialized>
// }
//
// Execution phase
// <nameRef - #1>: {
//   arguments: { b: 6 },
//   outer: <fooRef - #1>
// }
//
// <nameRef - #2>: {
//   arguments: { b: 10 },
//   outer: <fooRef - #1>
// }
//
// <fooRef - #1>: {
//   arguments: { a: 5 },
//   outer: <globalRef>
// }
//
// <fooRef - #2>: {
//   arguments: { a: 10 }
//   outer: <globalRef>
// }
//
// <globalRef>: {
//   res: <nameRef - #1>
//   res2: <nameRef - #2>
//   outer: null
// }
//
//
// console.log(foo)
//
// function foo() {
//   return 5
// }
//
// var foo2 = function a() {
//
// }
//
// console.log(foo2)
//
// Creation phase
// <aRef>: {
//   EnvRecord: {
//
//   }
//   outer: <globalRef>
// }
//
// <fooRef>: {
//   EnvRecord: {
//
//   }
//   outer: <globalRef>
// }
//
// <globalRef>: {
//   EnvRecord: {
//     foo2: undefined,
//   }
//   outer: null
// }
//
//
// Execution phase
//
// <globalRef>: {
//   EnvRecord: {
//     foo2: <aRef>,
//   }
//   outer: null
// }
//
// IIFE -> Immedietly Invoked Function Expression
//
// (function() {
//   // code
//   var a = 5
//   var b = 7
//
//   return {
//     concat: function() {
//
//     },
//
//   }
// })()
//
// (() => {
//   // code
//   var a = 5
//   var b = 7
//
//   return {
//     concat: function() {
//
//     },
//
//   }
// })()
//
// const res = function(a, b) {
//   return a + b

//Task 4
// // const a = (a, b) => a + b
//
// // console.log(a(4, 5))
//
// // const a = function() {
// //   return () => {
//
// //   }
// // }
//
//
// // const res = a()
// // const res2 = res()
//
// // console.log(res2()) // 7
//
// // function foo(foo) {
// //   return () => {
//
// //   }
// // }
//
// // foo(() => {})
//
// // function a(foo) {
// //   foo()
// // }
//
// // a()
//
// // [1, 2, 3].map((i) => {
// //   return i + 4
// // })
//
// // function vs method
// // function foo() {
// //   // code
// // }
//
// // 'hello'.toLocaleLowerCase()
//
// // function foo() {
// //   console.log('hello')
// // }
//
// // foo()
//
// // const foo = function() {
// //   return `Hello, ${obj.name}`
// // }
//
// // const obj = {
// //   name: 'Hovhannes',
// //   ownMap: () => `Hello, ${obj.name}`
// // }
//
// // Object.prototype.foo = function() {
// //     return `Hello, ${obj.name}`
// // }
//
// // const obj2 = {}
//
// // console.log(obj.foo())
// // console.log(obj2.foo())
//
// // const array = [1, 2, 3]
//
// // array.push(4)
//
// // console.log(array) // ?? [1, 2, 3, 4]
//
// // const newArray = array.map((item) => item * 2)
//
// // console.log(newArray)
// // console.log(array)
//
// // const array = [1, 2, 3]
//
// // array[2] = 4
//
// // console.log(array)
//
// // const res = array.reverse()
//
// // console.log(array, res)
//
// // const res = array.push(4, 5, 6)
// // const res = array.pop()
//
// // const res = array.unshift(4, 5, 6)
// // const res = array.shift()
//
//
// // console.log(array, res)
//
// const array = ['a', 'b', 'c']
//
// const newArray = array.map((item, idx, array) => {
//     return item + idx
// })
//
// console.log(newArray)
//
// function fakeMap(array, cb) {
//     // code
// }
//
// // function fakeForEach(array, cb) {
// //   for(let idx = 0; idx < array.length; idx++) {
// //     cb(array[idx], idx, array)
// //   }
// // }
//
// // array.forEach((item) => console.log(item))
// // fakeForEach(array, (item) => console.log(item))

//Task 1
//Task 1

//Task 1
//Task 1
//Task 1
//Task 1
//Task 1
//Task 1
//Task 1
//Task 1
//Task 1
//Task 1
//Task 1
//Task 1
//Task 1
//Task 1
//Task 1
//Task 1
//Task 1
//Task 1
//Task 1
//Task 1
//Task 1
//Task 1
//Task 1


















