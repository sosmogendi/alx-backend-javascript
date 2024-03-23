export default function appendToEachArrayValue(array, appendString) {
  const modifiedArray = [];

  for (const item of array) {
    modifiedArray.push(appendString + item);
  }

  return modifiedArray;
}
