import React, { useState } from "react";
import "./Matter.css";

export default function Matter(props) {
  const [count, setCount] = useState(1);

  const handlePlus = () => {
    setCount((prev) => prev + 1);
  };

  const handleMinus = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    } else {
      setCount(1);
    }
  };

  return (
    <section className="matterMain">
      <h2>LEAGUE OF LEGENDS</h2>
      <p>5 cards in pack</p>
      <h3>$&ensp;49.00</h3>
      <br />
      <div className="quantity">
        <button type="button" onClick={handleMinus}>
          -
        </button>
        <div style={{ color: "#fff", display: "inline-block" }}>{count}</div>
        <button type="button" onClick={handlePlus}>
          +
        </button>
      </div>
      <button className="btnBuy">BUY PACKS</button>

      <p className="total">35 563 Total</p>
      <br />
      <hr></hr>
      <p className="pack">PACK DETAILS</p>
      <p className="data">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <p className="data">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source.
      </p>
    </section>
  );
}
