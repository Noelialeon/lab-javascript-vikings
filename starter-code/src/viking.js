/* jshint ignore:start
*/
// Soldier
// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage
  }
}

//Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage";
    } else {
      return this.name + " has died in act of combat";
    }
  }

  battleCry() {
    return ("Odin Owns You All!");
  }
}


//Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health >= 1) {
      return "A Saxon has received " + damage + " points of damage";
    } else {
      return "A Saxon has died in combat";
    }
  }
}
//---------------------------------------

class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  };

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  };

  vikingAttack() {
    var indexViking = Math.floor(Math.random() * this.vikingArmy.length);
    var indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var isSaxonDead = this.saxonArmy[indexSaxon].receiveDamage(this.vikingArmy[indexViking].strength);
    if (isSaxonDead === "A Saxon has died in combat") {
      this.saxonArmy.splice(indexSaxon, 1);
    }
    return isSaxonDead;
  }

  saxonAttack() {
    var indexViking = Math.floor(Math.random() * this.vikingArmy.length);
    var indexSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    var isVikingDead = this.vikingArmy[indexViking].receiveDamage(this.saxonArmy[indexSaxon].strength);
    if (isVikingDead === this.vikingArmy[indexViking].name + " has died in act of combat") {
      this.vikingArmy.splice(indexViking, 1);
    }
    return isVikingDead;
  }

  showStatus() {
    if (this.vikingArmy.length >= 1 && this.saxonArmy.length <= 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length <= 0 && this.saxonArmy.length >= 1) {
      return "Saxons have fought for their lives and survive another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
