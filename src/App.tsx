import dollarIcon from "../src/assets/images/icon-dollar.svg";
import personIcon from "../src/assets/images/icon-person.svg";

function App() {
  return (
    <>
      <div className="form-group">
        <label htmlFor="">Bill</label>
        <div className="input-group">
          <img src={dollarIcon} alt="" />
          <input
            placeholder="0"
            type="number"
            name=""
            id=""
            className="primary-input"
          />
        </div>
      </div>

      <div className="form-group person">
        <label htmlFor="">Number of people</label>
        <p className="error">Can't be zero</p>
        <div className="input-group">
          <img src={personIcon} alt="" />
          <input
            placeholder="0"
            type="number"
            name=""
            id=""
            className="primary-input"
          />
        </div>
      </div>
      {/* <input
        disabled
        placeholder="Custom"
        className="custom-input"
        type="number"
        name=""
        id=""
      />
      <div className="input-group">
        <img src={dollarIcon} alt="" />
        <input
          placeholder="0"
          type="number"
          name=""
          id=""
          className="primary-input"
        />
      </div>
      <div className="input-group">
        <img src={personIcon} alt="" />
        <input
          placeholder="0"
          type="number"
          name=""
          id=""
          className="primary-input"
        />
      </div> */}
    </>
  );
}

export default App;
