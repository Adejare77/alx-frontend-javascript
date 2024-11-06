export default function appendToEachArrayValue(array, appendString) {
  // return array.map((value) => appendString + value);
  for (const idx in array) {
    const value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
