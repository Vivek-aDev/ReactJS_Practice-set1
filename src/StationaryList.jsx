export const StationaryList = ({ items, header }) => {
  return (
    <div>
      <h1>{header}</h1>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};
