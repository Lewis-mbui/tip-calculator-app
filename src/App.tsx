import logo from "../src/assets/images/logo.svg";

import TipDisplay from "./components/TipDisplay";
import TipForm from "./components/TipForm";

function App() {
  return (
    <div className="app">
      <div className="app__wrapper">
        <img className="logo" src={logo} alt="Splitter" />
        <main className="container">
          <TipForm />
          <TipDisplay />
        </main>
      </div>
    </div>
  );
}

export default App;
