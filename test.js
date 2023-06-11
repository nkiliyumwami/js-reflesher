const newData = [
  {
    id: 1,
    name: "Peter",
    checking: 500,
  },
  {
    id: 2,
    name: "John",
    checking: 100,
    savings: 900,
  },
];

function getPersons() {
  return newData;
}

function getPerson(id) {
  return newData.find((d) => d.id === id);
}

const persons = getPersons();
const person = getPerson(1);

console.log(person);

function getTotalBalance(person) {
  const saving = person?.savings;
  const checking = person.checking;
  console.log(saving);
  console.log(checking);
  return saving + checking;
}

console.log(getTotalBalance(person));
