const createPerson = (name, age) => {
  const person = { name, age };
  return person;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  const agesArray = []
  for (let i = 0; i < people.length; i++) {
    agesArray[i] = people[i].age
  }
  return agesArray;
};

const findByName = (name, people) => {
  function findObjectByKey(array, key, value) {
    for (let i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        return array[i];
      }
    }
    return null;
}
  return findObjectByKey(people, "name", name);
};

const findHondas = cars => {
  const newArr = [];
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].manufacturer === "Honda") {
      newArr.push(cars[i]);
    }
  }
  return newArr;
};

const averageAge = people => {
  const average = people.reduce((total, next) => total + next.age, 0) / people.length;

  return average;
};

const createTalkingPerson = (name, age) => {
  const personDialogue = {
    name,
    age,
    introduce: function intro(friend) {
      return `Hi ${friend}, my name is ${name} and I am ${age}!`;
    }
  };
  return personDialogue;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
