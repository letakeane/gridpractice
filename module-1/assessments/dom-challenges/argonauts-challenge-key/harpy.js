function Harpy(name) {
  this.name = name;
  this.bag = [];
  this.hungry = true;
  this.alive = true;
}

Harpy.prototype.stealFood = function(hero) {
  if(this.bag.length < 3) {
    this.bag.push(hero.rations.shift());
  }
}

module.exports = Harpy;