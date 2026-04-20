const TipDisplay = () => {
  return (
    <div className="tip-display">
      <div className="tip-amount">
        <p className="text">
          Tip Amount <span className="per-person">/ person</span>
        </p>
        <p className="amount">$4.27</p>
      </div>
      <div className="total">
        <p className="text">
          Tip Amount <span className="per-person">/ person</span>
        </p>
        <p className="amount">$32.79</p>
      </div>
      <button disabled className="btn btn--block btn--reset">
        Reset
      </button>
    </div>
  );
};

export default TipDisplay;
