export default function hasValuesFromArray(set, array) {
  const isSubset = array.every((element) => set.has(element))
  return isSubset;
}
