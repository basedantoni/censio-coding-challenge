// Write a function that takes a person and returns the person in the array that is physically closest
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