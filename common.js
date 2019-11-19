function Hello() {
  console.log("say hello!");
}
function sayHi() {
  console.log('hi ,i am luo , how are you!');
}
function sayHello(name) {
  console.log('hello'+name + '!');
}  
module.exports.sayHello1 = sayHello;
module.exports.sayHi1 = sayHi;
exports.Hello1 = Hello; 
//也可以
//module.exports = {
//  sayHello1: sayHello,
//  sayHi1: sayHi,
//  Hello1: Hello
//}

