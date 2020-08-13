let people = [
  {
    name: 'george',
    location: {latitude: 30.1746, longitude: -97.8203}
  },
  {
    name: 'phil',
    location: {latitude: 40.1746, longitude: -91.8203} 
  },
  {
    name: 'anna',
    location: {latitude: 29.7604, longitude: -95.3698} 
  }
]

let person1 = {
  name: 'amy',
  location: {latitude: 29.4241, longitude: -98.4936} 
}

const closestPerson = mainPerson => {
  let closestNum = 360;

  // Find proximity of each person and return the smallest one
  return people.reduce((accum, person) => {
    latDiff = Math.abs(mainPerson.location.latitude - person.location.latitude);
    longDiff = Math.abs(mainPerson.location.longitude - person.location.longitude);
    let prox  = Math.round((Math.abs(latDiff - longDiff)) * 10000) / 10000;
    if(prox < closestNum) {
      closestNum = prox
      accum = person
    }
    return accum
  }, {});
}

console.log('Result of closestPerson:',closestPerson(person1))