const findTheOldest = function(people) {
    let oldestPerson;
    let highestAge = 0;

    people.forEach(person => {
        const currentYear = new Date().getFullYear();
        const yearOfDeath = person.yearOfDeath || currentYear;
        const age = yearOfDeath - person.yearOfBirth;
        if (age > highestAge) {
            oldestPerson = person;
            highestAge = age;
        }
    });
    return oldestPerson;
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
