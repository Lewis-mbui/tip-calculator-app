interface Props {
  isDisabled: boolean;
}

const TipPercentageField = ({ isDisabled }: Props) => {
  return (
    <div className="form-group percentage">
      <label htmlFor="custom-val">Select Tip %</label>
      <button className="btn btn--block btn--tip">5%</button>
      <button className="btn btn--block btn--tip">10%</button>
      <button className="btn btn--block btn--tip">15%</button>
      <button className="btn btn--block btn--tip">25%</button>
      <button className="btn btn--block btn--tip">50%</button>
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
