function initializeNames(name){
  const parts = name.split(' ');
  if (parts.length <= 2) return name; // тільки ім'я або ім'я+прізвище

  // перше слово + ініціали середніх + останнє слово
  return [
    parts[0],
    ...parts.slice(1, -1).map(n => n[0] + '.'),
    parts[parts.length - 1],
  ].join(' ');
}

module.exports = initializeNames;