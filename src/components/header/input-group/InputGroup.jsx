export default function InputGroup({onInpuChange, userInput}) {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label>Initial Investment</label>
          <input type="number" required value={userInput.initialInvestment} onChange={(event) => onInpuChange("initialInvestment", event.target.value)}></input>
        </div>
        <div>
          <label>Annual Investment</label>
          <input type="number" required value={userInput.annualInvestment} onChange={(event) => onInpuChange("annualInvestment", event.target.value)}></input>
        </div>
      </div>
      <p></p>
      <div className="input-group">
        <div>
          <label>Expected Return</label>
          <input type="number" required value={userInput.expectedReturn} onChange={(event) => onInpuChange("expectedReturn", event.target.value)} ></input>
        </div>
        <div>
          <label>Annual Investment</label>
          <input type="number" required value={userInput.duration} onChange={(event) => onInpuChange("duration", event.target.value)}></input>
        </div>
      </div>
    </div>
  );
}
