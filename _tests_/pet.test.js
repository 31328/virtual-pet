const Pet = require('../src/pet');

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('Fido')).toBeInstanceOf(Object);
  });
});

describe('constructor', () => {
  
  it('sets the name property', () => {
    const pet = new Pet('Fido');
    expect(pet.name).toEqual('Fido');
  });
});

describe('constructor', () => {
  
  it('has a initial age of 0', () => {
    const pet = new Pet('Fido');
    expect(pet.age).toEqual(0);
  });
});

describe('growUp', () => {
  it('increments the age by 1', () => {
    const pet = new Pet('noemi');
    pet.growUp();
    expect(pet.age).toEqual(1);
  });
});

describe('hunger', () => {
  it('increases the hunger of pet by 5', () => {
    const pet = new Pet('noemi');
    pet.growUp();
    expect(pet.hunger).toEqual(5);
  });
});

describe('fitness', () => {
  it('decreases the fitness of pet by 3', () => {
    const pet = new Pet('noemi');
    pet.growUp();
    expect(pet.fitness).toEqual(7);
  });
});