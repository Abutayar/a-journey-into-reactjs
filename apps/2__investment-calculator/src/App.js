import InputField from "./components/InputField";
import InputGroup from "./components/InputGroup";
import Result from "./components/Result";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

const INITIAL_VALUE = {
  initialInvestment: 2000,
  annualInvestment: 30000,
  expectedReturn: 2,
  duration: 10
}
function isFormValidation(formData) {
  if (!formData) return false;
  if (formData.initialInvestment && formData.annualInvestment && formData.expectedReturn && formData.duration >= 1) {
    return true;
  }
}

function App() {
  const [formData, setFormData] = useState(INITIAL_VALUE);
  function updateFormData(key, value) {
    setFormData((data) => {
      return {
        ...data,
        [key]: value ? Number(value) : '',
      }
    });
  }

  const result = calculateInvestmentResults(formData);

  return (
    <main>
      <div id="user-input">
        <InputGroup>
          <InputField
            label="Initial Investment"
            value={formData["initialInvestment"]}
            onChange={({ target }) => updateFormData('initialInvestment', target.value)}
          />
          <InputField
            label="Annual Investment"
            value={formData["annualInvestment"]}
            onChange={({ target }) => updateFormData('annualInvestment', target.value)} />
        </InputGroup>

        <br />
        <InputGroup>
          <InputField
            label="Expeted Return"
            value={formData["expectedReturn"]}
            onChange={({ target }) => updateFormData('expectedReturn', target.value)} />
          <InputField
            label="Duration"
            value={formData["duration"]}
            onChange={({ target }) => updateFormData('duration', target.value)} />
        </InputGroup>
      </div>

      {isFormValidation(formData)
        ? <Result result={result} />
        : <p className="center">
          ERROR: Invalid Data <br />
          <small> Please check input value provide</small><br />
          {formData.duration < 1 && <small> Duration should be greater then zero (Duration  &gt; 0)</small>}
        </p>}
    </main>

  )
}

export default App
