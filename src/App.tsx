import { CalcProvider } from "./store/CalcProvider";
import TipCalculator from "./layout/TipCalc";

function App() {
  return (
    <CalcProvider>
      <TipCalculator />
    </CalcProvider>
  );
}

export default App;
