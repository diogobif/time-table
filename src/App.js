import { useState } from "react";
import "./App.css";

function App() {
  const valorPorHora = 15;
  const handleSubmit = (e) => {
    e.preventDefault();
    const startList = [];
    const endList = [];
    let total = 0;

    for (let i = 1; i <= counter; i++) {
      if (
        document.getElementById(["start", i].join("_")).value &&
        document.getElementById(["end", i].join("_")).value
      ) {
        startList.push(
          new Date(document.getElementById(["start", i].join("_")).value)
        );
        endList.push(
          new Date(document.getElementById(["end", i].join("_")).value)
        );
      }
    }

    startList.forEach((el, index) => {
      const diffInMs = Math.abs(
        endList[index].getTime() - startList[index].getTime()
      );
      const minutes = Math.floor(diffInMs / (1000 * 60));
      total += minutes;
      document.getElementById(["totalMinutos", index + 1].join("_")).innerHTML =
        minutes / 60;
    });
    setTotalMinutos(total);
  };

  const [counter, setCounter] = useState(1);
  const [totalMinutos, setTotalMinutos] = useState(0);

  const handleAddItem = () => {
    setCounter((counter) => counter + 1);
  };

  const showElements = () => {
    const elements = [];
    for (let i = 1; i <= counter; i++) {
      elements.push(
        <li>
          <input
            type="datetime-local"
            id={["start", i].join("_")}
            placeholder="DE"
          />
          <input
            type="datetime-local"
            id={["end", i].join("_")}
            placeholder="ATÉ"
          />
          <span id={["totalMinutos", i].join("_")}></span>
        </li>
      );
    }

    return elements;
  };

  return (
    <div>
      <h1 data-test="home-header">Home</h1>
      <form onSubmit={handleSubmit}>
        <ul data-test="time-table-list">{showElements()}</ul>
        <button type="button" data-test="add-button" onClick={handleAddItem}>
          ADD
        </button>
        <button type="submit">CALCULAR</button>
      </form>
      <div>
        <span>Total minutos: {totalMinutos}</span>
        <br />
        <span>Total Horas: {totalMinutos / 60}</span>
        <br />
        <span>Valor por hora: {valorPorHora}</span>
        <br />
        <span>Total (euros): {(valorPorHora / 60) * totalMinutos}</span>
      </div>
    </div>
  );
}

export default App;
