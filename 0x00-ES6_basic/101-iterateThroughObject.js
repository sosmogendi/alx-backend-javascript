export default function iterateThroughObject(reportWithIterator) {
  // Convert the iterator to an array and join its elements with ' | ' delimiter
  const employeeList = [...reportWithIterator].join(' | ');
  return employeeList;
}
