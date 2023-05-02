export const StudentCard = ({ student }) => {
  const { name, english, maths, computers } = student;
  const totalMarks = english + maths + computers;
  const grade =
    totalMarks >= 225
      ? "A"
      : totalMarks >= 180
      ? "B"
      : totalMarks >= 150
      ? "C"
      : "D";
  return (
    <div>
      <h1>Student Details</h1>
      <h3>{name}</h3>
      <p>English: {english}</p>
      <p>Math: {maths}</p>
      <p>Computers: {computers}</p>
      <h4>
        Total Marks: <span style={{ color: "green" }}>{totalMarks}</span>
      </h4>
      <h4>
        Grade: <span style={{ color: "green" }}>{grade}</span>
      </h4>
    </div>
  );
};
