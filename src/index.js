require("./a");
require("./c.less");
require("./a.css");
// require("@babel/polyfill")
import $ from 'jquery';

let a = () => 1+2;
console.log(a());

class A{
    a=1;
}

console.log($("body"));


const classA = new A();
console.log(classA.a);

// function * gen(){
//     yield 1;
// }
// console.log(gen().next());

console.log('111'.includes(1));