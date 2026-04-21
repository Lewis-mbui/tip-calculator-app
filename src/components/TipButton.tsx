interface Props {
  value: number;
  isDisabled: boolean;
}

const TipButton = ({ value, isDisabled }: Props) => {
  return (
    <button disabled={isDisabled} className="btn btn--block btn--tip">
      {value}%
    </button>
  );
};

export default TipButton;
