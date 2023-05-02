export const EmployeeCard = ({ name, designation, workExperience }) => {
  return (
    <div>
      <h1>Employee Card</h1>
      <h2>{name}</h2>
      <h3>
        <span style={{ color: "green" }}>Designation: </span>
        {designation}
      </h3>
      <h3>
        <span style={{ color: "blue" }}>WorkExperience: </span>
        {workExperience}
      </h3>
    </div>
  );
};
