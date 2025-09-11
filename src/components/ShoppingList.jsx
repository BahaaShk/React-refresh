import React from "react";

const ShoppingList = () => {
  const [list, setList] = React.useState([]);
  const [name, setName] = React.useState("");
  const [quantity, setQuantity] = React.useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !quantity) return;
  const newItem = {
    name, 
    quantity: Number(quantity)
  }

  setList((prev) => [...prev, newItem])

    setName("");
    setQuantity("");
  };

  return (
    <>
      <h1>Your cart contains: </h1>
      <ul>
        {list.map((item, i) => (
          <li key={i}>
            {item.name} - quantity: {item.quantity}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          className="border p-1"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border p-1"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button
          disabled={!name || !quantity}
          type="submit"
          className="border p-1 cursor-pointer bg-gray-700"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ShoppingList;
