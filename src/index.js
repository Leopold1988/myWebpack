require("./a");
require("./c.less");
require("./a.css");
// require("@babel/polyfill")
import $ from 'jquery';

if (DEV === "development") {
    console.log('开发环境');
} else {
    console.log('生产环境');
}

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
console.log("热更新11223344");
