const sqlQuery = `
    SELECT a.name, b.salary
    FROM employees a
    JOIN salaries b ON a.id = b.employee_id
    WHERE a.age > 30
`;
const sqlQuery1 = `
    SELECT e.name, e.department_id, (SELECT d.department_name FROM departments d WHERE d.id = e.department_id) AS department_name
FROM employees e
WHERE e.salary > (SELECT AVG(salary) FROM employees);
`;

function extractTableNames(sqlQuery) {
  const regex = /\bFROM\s+([\w.]+)|\bJOIN\s+([\w.]+)/gi;
  const tables = new Set();
  let match;

  while ((match = regex.exec(sqlQuery)) !== null) {
      tables.add(match[1] || match[2]);
  }

  return Array.from(tables);
}

console.log(extractTableNames(sqlQuery));