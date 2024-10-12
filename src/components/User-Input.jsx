
export default function UserInput({ onUserInputChange,userInputData }) {
  
    return <section id="user-input ">
        <div className="input-group">
            <p>
                <label> Initial Investment</label>
                <input type="number" required value={userInputData.initialInvestment} onChange={(event) => onUserInputChange("initialInvestment", event)} />
            </p>
            <p>
                <label> Annual Investment</label>
                <input type="number" required value={userInputData.annualInvestment} onChange={(event) => onUserInputChange("annualInvestment", event)} />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label> Expected Return</label>
                <input type="number" required value={userInputData.expectedReturn} onChange={(event) => onUserInputChange("expectedReturn", event)} />
            </p>
            <p>
                <label> Duration</label>
                <input type="number" required value={userInputData.duration} onChange={(event) => onUserInputChange("duration", event)} />
            </p>
        </div>
    </section >
}