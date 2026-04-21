interface Props {
  value: string;
  isDisabled: boolean;
  id: string;
  onChange: (value: string, id: string) => void;
  percentageVal: string;
}

const TipButton = ({
  value,
  isDisabled,
  id,
  onChange,
  percentageVal,
}: Props) => {
  const isActive = value === percentageVal;

  return (
    <button
      onClick={() => onChange(value, id)}
      disabled={isDisabled || isActive}
      className={`btn btn--block btn--tip ${isActive ? "active" : ""}`}
    >
      {value}%
    </button>
  );
};

export default TipButton;
