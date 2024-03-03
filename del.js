/**
 * Sorts the specified array by country name first and city name
 * (if countries are equal) in ascending order.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Saint Petersburg' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Belarus', city: 'Brest' }
 *    ]
 *                      =>
 *    [
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Russia',  city: 'Saint Petersburg' }
 *    ]
 */
function sortCitiesArray(arr) {
  console.log(arr);
  const newArr = arr;
  newArr.sort((a, b) => {
    if (a.country[0] < b.country[0]) return -1;
    if ((a.country[0] = b.country[0])) return 0;
    if (a.country[0] > b.country[0]) return 1;
  });
  newArr.forEach((arrEl, index) => {
    if (newArr[index + 1]) {
      if (newArr[index].country === newArr[index + 1].country) {
        if (newArr[index].city[0] !== newArr[index + 1].city[0]) {
          if (newArr[index].city[0] > newArr[index + 1].city[0]) {
            const temp = { ...newArr[index] };
            newArr[index] = newArr[index + 1];
            newArr[index + 1] = temp;
          }
        }
      }
    }
  });
  console.log(newArr);
  return;
}

const arr = [
  { country: 'Russia', city: 'Moscow' },
  { country: 'Belarus', city: 'Minsk' },
  { country: 'Poland', city: 'Warsaw' },
  { country: 'Russia', city: 'Saint Petersburg' },
  { country: 'Poland', city: 'Krakow' },
  { country: 'Belarus', city: 'Brest' },
];

sortCitiesArray(arr);
