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
      if (bill > 10000) {
        err[prop] = "Should be <= 10,000";
      } else if (bill < 0.01) {
        err[prop] = "Should be >= 0.01";
      }
    }

    return err;
  }

  function handleChange(value: string, id: string) {
    const newVals = {
      ...values,
      [id]: value,
    };
    const err = validate(newVals, id as keyof FormValues);
    setValues(newVals);
    setErrors(err);
  }

  function handleBlur(id: string) {
    if (id === "bill") {
      const err = validate(values, id);
      const bill = Number(values[id]);

      if (!bill || bill === 0) {
        setValues({ ...values, [id]: null });
        setErrors({});
      } else {
        setValues({ ...values, [id]: bill.toString() });
        setErrors(err);
      }
    }
  }

  console.log("values: ", values);
  console.log("errors: ", errors);

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
