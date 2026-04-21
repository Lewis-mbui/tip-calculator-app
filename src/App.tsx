import { useState } from "react";
import logo from "../src/assets/images/logo.svg";

import TipDisplay from "./components/TipDisplay";
import TipForm from "./components/TipForm";

export interface FormValues {
  bill: string | null;
  percentage: string | null;
  totalPeople: string | null;
}

export type FormErrors = Partial<FormValues>;

function App() {
  const [values, setValues] = useState<FormValues>({
    bill: null,
    percentage: null,
    totalPeople: null,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  function validate(values: FormValues, prop: keyof FormValues) {
    const err: FormErrors = {};

    if (prop === "bill") {
      const bill = Number(values[prop]);

      if (Number.isNaN(bill) || bill === 0) {
        err[prop] = "Enter a valid number";
      } else if (bill > 10000) {
        err[prop] = "Should be <= 10,000";
      }
    }

    return err;
  }

  function handleChange(value: string, id: string) {
    setValues({
      ...values,
      [id]: value,
    });
  }

  function handleBlur(id: string) {
    if (id === "bill") {
      const err = validate(values, id);

      if (err[id] === "Enter a valid number") {
        setValues({ ...values, bill: null });
      } else if (err[id] === "Should be <= 10,000") {
        setErrors(err);
      } else {
        const bill = Number(values[id]).toString();
        setErrors({});
        setValues({ ...values, bill });
      }
    }
  }

  console.log(values);

  return (
    <div className="app">
      <div className="app__wrapper">
        <img className="logo" src={logo} alt="Splitter" />
        <main className="container">
          <TipForm
            onBlur={handleBlur}
            onChange={handleChange}
            values={values}
            errors={errors}
          />
          <TipDisplay />
        </main>
      </div>
    </div>
  );
}

export default App;
