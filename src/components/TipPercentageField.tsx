import type { FormValues, FormErrors } from "../App";
import TipButton from "./TipButton";

interface Props {
  values: FormValues;
  errors: FormErrors;
}

const TipPercentageField = ({ values, errors }: Props) => {
  const percentages = [5, 10, 15, 25, 50];
  const bill = values.bill;
  const billError = errors.bill;

  let isDisabled = billError || !bill ? true : false;

  console.log("Percentage disabled: ", isDisabled);

  return (
    <div className="form-group percentage">
      <label htmlFor="custom-val">Select Tip %</label>
      {percentages.map((val) => (
        <TipButton isDisabled={isDisabled} key={val} value={val} />
      ))}
      <input
        disabled={isDisabled}
        id="custom-val"
        placeholder="Custom"
        type="text"
        inputMode="decimal"
        className="custom-input"
      />
    </div>
  );
};

export default TipPercentageField;
