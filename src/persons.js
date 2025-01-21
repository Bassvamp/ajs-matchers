export default function sortByHealth(persons) {
    const sortedPersons = persons.sort(function(a, b) {
        return b.health - a.health;
      });
    return sortedPersons
}

