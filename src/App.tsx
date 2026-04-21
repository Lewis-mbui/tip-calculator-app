import { useState } from "react";
import logo from "../src/assets/images/logo.svg";

import TipDisplay from "./components/TipDisplay";
import TipForm from "./components/TipForm";

export interface FormValues {
  bill: string | null;
  percentage: string | null;
  totalPeople: string | null;
}

function App() {
  const [values, setValues] = useState<FormValues>({
    bill: null,
    percentage: null,
    totalPeople: null,
  });

  console.log(values);

  function handleChange(value: string, id: string) {
    setValues({
      ...values,
      [id]: value,
    });
  }

  // console.log(values);

  return (
    <div className="app">
      <div className="app__wrapper">
        <img className="logo" src={logo} alt="Splitter" />
        <main className="container">
          <TipForm onChange={handleChange} values={values} />
          <TipDisplay />
        </main>
      </div>
    </div>
  );
}

export default App;
