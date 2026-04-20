import dollarIcon from "../src/assets/images/icon-dollar.svg";
import personIcon from "../src/assets/images/icon-person.svg";
import logo from "../src/assets/images/logo.svg";

import TipDisplay from "./components/TipDisplay";
import TipForm from "./components/TipForm";

function App() {
  return (
    <div className="app">
      <img className="logo" src={logo} alt="Splitter" />
      <main className="container">
        <TipForm />
        <TipDisplay />
      </main>
      {/* <div className="form-group">
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

      <div className="form-group percentage">
        <label htmlFor="">Select Tip %</label>
        <button className="btn btn--block btn--tip">5%</button>
        <button className="btn btn--block btn--tip">10%</button>
        <button className="btn btn--block btn--tip">15%</button>
        <button className="btn btn--block btn--tip">25%</button>
        <button className="btn btn--block btn--tip">50%</button>
        <input placeholder="Custom" type="number" className="custom-input" />
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
      </div> */}
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
    </div>
  );
}

export default App;
