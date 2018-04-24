function Hero(obj) {
  this.name = obj.name;
  this.rations = obj.rations || ['turkey leg', 'sandwich', 'ambrosia'];
  this.fleece = false;
}

Hero.prototype.slay = function(harpy) {
  harpy.alive = false;
};

Hero.prototype.charm = function() {
  this.fleece = true;
}

Hero.prototype.organize = function() {
  return this.rations.sort();
}

Hero.prototype.discardRations = function() {
  return this.rations.filter(function(ration) {
    return typeof ration === 'string'
  });
}

Hero.prototype.buildSong = function() {
  var song = this.rations.reduce(function(acc, el) {
    acc += 'I love ' + el + ',';
    return acc
  },'')
  return song.slice(0, -1)
}

module.exports = Hero;