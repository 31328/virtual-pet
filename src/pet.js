
const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    }

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  };

  Pet.prototype.walk = function() {
    if ((this.fitness + 4) <= MAXIMUM_FITNESS ) {
      this.fitness += 4;
    } else {
      this.fitness = MAXIMUM_FITNESS;
    }
  }

  Pet.prototype.feed = function() {
    if ((this.hunger - 3) >= MINIMUM_HUNGER ) {
      this.hunger -= 3;
    } else {
      this.hunger = MINIMUM_HUNGER;
    }
  }  

    Pet.prototype.checkUp = function() {
        if (this.fitness <= 3 ) {
            console.log('I need a walk');
        }
            else if (this.hunger>= 5) {
            console.log('I am hungry');
        }
            else if (this.fitness <= 3 && this.hunger >= 5) {
            console.log('I am hungry and I also need a walk');
        }
            else { console.log('I feel doog!');
        }
     }
      
     Pet.prototype.isAlive = function() {
        if (this.age < 30 && this.hunger < 10 && this.fitness >= 0);
        else if (this.age < 30 || this.hunger < 10 || this.fitness >= 0); {
        throw new Error('Your kitty cat has popped its clongs big time! :(');
        }
        return true;
     }
module.exports = Pet;

