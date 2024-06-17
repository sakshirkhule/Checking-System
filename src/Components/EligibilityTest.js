
import React, { useState } from 'react';


function EligibilityTest() {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [eligibilityMessage, setEligibilityMessage] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault(); 

    const userAge = parseInt(age);
    const userWeight = parseInt(weight);
    const userHeight = parseInt(height);

    const minAge = 18;
    const minWeight = 45;
    const minHeight = 120;

    if ( userAge >= minAge && userWeight >= minWeight && userHeight >= minHeight) {
      setEligibilityMessage('Congratulations! You are eligible for bungee jumping.');
    } else {
      setEligibilityMessage('Sorry, you are not eligible for bungee jumping.');
    }
  };

  return (
    <div className="App">
      <h1>Welcome to BanjeeJumping Eligibility Test</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your age (in years):
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Enter your weight (in kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Enter your Height (in cm):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Check Eligibility</button>
      </form>
      <p>{eligibilityMessage}</p>
    </div>
  );
}

export default EligibilityTest;
