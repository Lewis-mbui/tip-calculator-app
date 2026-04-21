import type { FormErrors, FormValues } from "../App";

interface Props {
  values: FormValues;
  errors: FormErrors;
}

const TipDisplay = ({ values, errors }: Props) => {
  const percentage = Number(values.percentage);
  const bill = Number(values.bill);
  const totalPeople = Number(values.totalPeople);
  const hasErrors = Object.values(errors).length ? true : false;

  let tipPerPerson = 0;
  let totalPerPerson = 0;

  if (percentage && bill && totalPeople && !hasErrors) {
    tipPerPerson = (percentage / 100) * bill;
    totalPerPerson = bill / totalPeople + tipPerPerson;
  }

  return (
    <div className="tip-display">
      <div className="tip-amount">
        <p className="text">
          Tip Amount <span className="per-person">/ person</span>
        </p>
        <p className="amount">${tipPerPerson.toFixed(2)}</p>
      </div>
      <div className="total">
        <p className="text">
          Tip Amount <span className="per-person">/ person</span>
        </p>
        <p className="amount">${totalPerPerson.toFixed(2)}</p>
      </div>
      <button disabled className="btn btn--block btn--reset">
        Reset
      </button>
    </div>
  );
};

export default TipDisplay;
