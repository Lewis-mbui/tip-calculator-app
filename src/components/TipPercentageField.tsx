import type { FormValues, FormErrors } from "../App";
import TipButton from "./TipButton";

interface Props {
  values: FormValues;
  errors: FormErrors;
  id: string;
  onChange: (value: string, id: string) => void;
  onBlur: (id: string) => void;
}

const TipPercentageField = ({
  values,
  errors,
  id,
  onChange,
  onBlur,
}: Props) => {
  const percentages = ["5", "10", "15", "25", "50"];
  const percentageVal = values.percentage || "";
  const bill = values.bill;
  const billError = errors.bill;

  let isDisabled = billError || !bill ? true : false;

  console.log("Percentage disabled: ", isDisabled);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, id } = e.target;

    if (value === "") onChange("", id);

    const regex = /^[0-9]*\.?[0-9]*$/;

    if (regex.test(value)) {
      onChange(value, id);
    }
  }

  return (
    <div className="form-group percentage">
      <label htmlFor={id}>Select Tip %</label>
      {percentages.map((val) => (
        <TipButton
          onChange={onChange}
          isDisabled={isDisabled}
          key={val}
          value={val}
          id={id}
          percentageVal={percentageVal}
        />
      ))}
      <input
        onBlur={() => onBlur(id)}
        onChange={handleChange}
        disabled={isDisabled}
        id={id}
        value={percentageVal}
        placeholder="Custom"
        type="text"
        inputMode="decimal"
        className="custom-input"
      />
    </div>
  );
};

export default TipPercentageField;
