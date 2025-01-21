import sortByHealth from "../persons";

test("test sort by health", () => {
  const persons = [
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
  ];

  const sortedPersons = [
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 },
  ];

  expect(sortByHealth(persons)).toEqual(sortedPersons);
});
