import { useState } from "react";
import "./StageOne.css";

const StageOne = () => {
  const [numberQuantity, setNumberQuantity] = useState(0);
  const surpresa = "Sua surpresa -> Hello World";
  const handleClick = () => {
    setNumberQuantity(numberQuantity + 1);
  };
  return (
    <section className="container">
      <div>{numberQuantity > 10 && surpresa}</div>
      <button onClick={handleClick}>Clique aqui até surpresa</button>
    </section>
  );
};

export default StageOne;
