import React, { useState } from "react";
import data from "./data";
function App() {
  const [number, setNumber] = useState(0);
  const [paras, setParas] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setParas(data.slice(0, number));
  };
  return (
    <section className="section-center">
      <h3>TIRED OF BORING LOREM IPSUM ?</h3>
      <form action="" className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="number">Paragraph:</label>
        <input
          placeholder={0}
          value={number}
          type="number"
          name="number"
          id="number"
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <div className="lorem-text">
        {paras.map((para, i) => {
          return (
            <p key={i} className="result">
              {para}
            </p>
          );
        })}
      </div>
    </section>
  );
}

export default App;
