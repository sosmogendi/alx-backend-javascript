export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const departments = Object.keys(allEmployees);
  let currentDeptIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      if (currentDeptIndex < departments.length) {
        const department = departments[currentDeptIndex];
        const employees = allEmployees[department];
        const employee = employees[currentEmployeeIndex];

        currentEmployeeIndex += 1;

        if (currentEmployeeIndex >= employees.length) {
          currentEmployeeIndex = 0;
          currentDeptIndex += 1;
        }

        return { value: employee, done: false };
      }

      return { done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
