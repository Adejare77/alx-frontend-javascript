export default function cleanSet(set, startString) {
  const setToArray = [...set]
  return setToArray
  .filter((value) => value.startsWith(startString))
  .map((value) => value.slice(startString.length))
  .join("-")
}
