var Mouse =require('./Mouse');
function Cat(){
this.stomach = [];
}
Cat.prototype.eat = function(animals) {
	// body...
  	this.stomach.push(animals);
};
module.exports = Cat;