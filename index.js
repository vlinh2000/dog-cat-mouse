var Cat =require('./cat');
var Mouse=require('./mouse');
var mouse = new Mouse('micky');
var cat = new Cat();

cat.eat(mouse);
console.log(cat);
