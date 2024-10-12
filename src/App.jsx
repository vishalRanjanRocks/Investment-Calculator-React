import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/User-Input";
import Results from "./components/Results";

function App() {
  const [userInputData, setUserInputData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid = userInputData.duration >= 1;
  function handleUserInputChange(inputType, event) {
    setUserInputData(prevUserInput => {
      return {
        ...prevUserInput,
        [inputType]: +event.target.value
      };
    });
  }
  return (
    <section>
      <Header />
      <UserInput onUserInputChange={handleUserInputChange} userInputData={userInputData} />
      {!inputIsValid && <p className="center">Please enter a duration greater than 0.</p>}
      {
        inputIsValid &&
        <Results input={userInputData} />
      }
    </section>
  )
}

export default App
