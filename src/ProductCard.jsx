import { products } from "./App";

export const ProductCard = () => {
  return (
    <div>
      <h1>Product Names</h1>
      <ul>
        {products.map(({ name }) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
};
