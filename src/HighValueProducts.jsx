import { products } from "./App";

export const HighValueProducts = () => {
  return (
    <div>
      <h1>High Value Products</h1>
      <ul>
        {products.map(({ name, quantity, sales }) =>
          sales > quantity ? (
            <li>
              Name: {name}, Quantity: {quantity}, Sales: {sales}
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
};
