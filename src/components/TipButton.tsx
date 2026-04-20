interface Props {
  value: number;
}

const TipButton = ({ value }: Props) => {
  return <button className="btn btn--block btn--tip">{value}%</button>;
};

export default TipButton;
