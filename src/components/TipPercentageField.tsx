import TipButton from "./TipButton";

interface Props {
  isDisabled: boolean;
}

const TipPercentageField = ({ isDisabled }: Props) => {
  const percentages = [5, 10, 15, 25, 50];

  return (
    <div className="form-group percentage">
      <label htmlFor="custom-val">Select Tip %</label>
      {percentages.map((val) => (
        <TipButton key={val} value={val} />
      ))}
      <input
        disabled={isDisabled}
        id="custom-val"
        placeholder="Custom"
        type="number"
        className="custom-input"
      />
    </div>
  );
};

export default TipPercentageField;
