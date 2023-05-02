import { DisplayButton } from "./DisplayButton";
import { EmployeeCard } from "./EmployeeCard";
import { EmployeeDetails } from "./EmployeeDetails";
import { HighValueProducts } from "./HighValueProducts";
import { ImageWithCaption } from "./ImageWithCaption";
import { ProductCard } from "./ProductCard";
import { StationaryList } from "./StationaryList";
import { StudentCard } from "./StudentCard";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1
        style={{
          color: "green",
          borderRadius: "2px",
          border: "gray solid",
          display: "inline-block"
        }}
      >
        Vivekananda Box
      </h1>
      <hr />
      <EmployeeCard
        name="Vivekananda Sahu"
        designation="Developer"
        workExperience="2"
      />
      <hr />
      <DisplayButton
        backgroundColor="lightgreen"
        color="darkgreen"
        borderRadius="5px"
        padding="10px"
      />
      <hr />
      <StationaryList items={items} header="Stationary Items" />
      <hr />
      <ImageWithCaption caption={caption} />
      <hr />
      <ProductCard />
      <hr />
      <HighValueProducts />
      <hr />
      <StudentCard student={student} />
      <hr />
      <EmployeeDetails employees={employees} />
    </div>
  );
}

const items = ["pen", "pencil", "ruler", "eraser"];

export const imageLink =
  "https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg";
const caption = "Spring Flowers";

export const products = [
  { name: "Perk", quantity: 10, sales: 7 },
  { name: "Pepsi", quantity: 10, sales: 20 },
  { name: "Coke", quantity: 18, sales: 50 },
  { name: "Maggi", quantity: 41, sales: 22 },
  { name: "5Star", quantity: 7, sales: 9 }
];

const student = {
  name: "Vivek Sony",
  english: 90,
  maths: 80,
  computers: 70
};

const employees = [
  {
    name: "Jack Smith",
    level: 2,
    dept: "Tech",
    designation: "Manager",
    salary: 24000
  },
  {
    name: "Mary Robbins",
    level: 3,
    dept: "Fin",
    designation: "Manager",
    salary: 28000
  },
  {
    name: "Steve Williams",
    level: 4,
    dept: "Ops",
    designation: "President",
    salary: 35000
  },
  {
    name: "Bob Andrews",
    level: 1,
    dept: "Fin",
    designation: "Trainee",
    salary: 16500
  },
  {
    name: "Dave Martin",
    level: 2,
    dept: "Fin",
    designation: "Manager",
    salary: 21700
  },
  {
    name: "Julia Clarke",
    level: 3,
    dept: "Ops",
    designation: "Manager",
    salary: 26900
  },
  {
    name: "Kathy Jones",
    level: 4,
    dept: "Tech",
    designation: "President",
    salary: 42500
  },
  {
    name: "Tom Bresnan",
    level: 2,
    dept: "Tech",
    designation: "Manager",
    salary: 22200
  }
];
