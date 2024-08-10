import Header from "./components/header/Header";
import InputGroup from "./components/header/input-group/InputGroup";
import { useState } from "react";
import Results from "./components/results/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isInputValid = userInput.duration >= 1;

  function handleInputChange(inputTye, newValue){
    setUserInput((prevValue) => {
      const updatedValue = {...prevValue,
        [inputTye]: +newValue,};
      return updatedValue;
    });

  }

  return (
    <>
      <Header />
      <InputGroup userInput={userInput} onInpuChange={handleInputChange}/>
      {!isInputValid && <p className="center">Please enter a duration greater than zero.</p>}
      {isInputValid && <Results userInput={userInput}/>}
    </>
  );
}

export default App;
