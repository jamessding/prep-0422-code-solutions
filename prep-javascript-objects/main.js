var person = {
  firstName: 'James',
  lastName: 'Ding',
  hobby: 'Tennis'
};
console.log(person);
console.log("The person's name is: " + person.firstName + ' ' + person.lastName + '.');
person.job = 'Athlete';
console.log("The person's current job is: " + person.job + '.');
person.previousJob = 'Student';
console.log("The person's previous job is: " + person.previousJob + '.');
console.log('The complete person object: ', person);
