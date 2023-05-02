export const EmployeeDetails = ({ employees }) => {
  return (
    <div>
      <h1>Employee Details</h1>
      <ul>
        {employees.map(({ name, level, dept, designation, salary }) => (
          <li
            style={{
              backgroundColor: level === 2 ? "orange" : null,
              border: designation === "President" ? "3px solid green" : null
            }}
          >
            <h5>
              Name: {name}, Level: {level}, Dept: {dept}, Designation:{" "}
              {designation}, Salary: {salary}
            </h5>
          </li>
        ))}
        <h5>
          <span style={{ color: "tomato" }}>total salary expenses: </span>
          <b>{employees.reduce((acc, { salary }) => acc + salary, 0)}</b>
        </h5>
      </ul>
    </div>
  );
};
