function inArray(array1, array2) {
  return array1
    .filter(sub => array2.some(str => str.includes(sub))) // залишаємо тільки ті, що є підрядками
    .sort(); // сортуємо лексикографічно
}

module.exports = inArray;
