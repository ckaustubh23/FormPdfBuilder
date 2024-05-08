import React, { useState } from 'react';
import './Step2.css'; // Import the CSS file

const Step2 = ({ formData, onNext }) => {
  const [qualificationData, setQualificationData] = useState({
    highestQualification: '',
    currentQualification: '',
    collegeName: '',
    universityName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQualificationData({ ...qualificationData, [name]: value });
  };

  const handleNext = () => {
    onNext(qualificationData);
  };

  return (
    <div className="step2-form"> {/* Apply the CSS class to the container */}
      <h2>Step 2: Qualifications</h2>
      <div>
        <label htmlFor="highestQualification">Highest Qualification:</label>
        <input type="text" id="highestQualification" name="highestQualification" value={qualificationData.highestQualification} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="currentQualification">Current Qualification:</label>
        <input type="text" id="currentQualification" name="currentQualification" value={qualificationData.currentQualification} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="collegeName">College Name:</label>
        <input type="text" id="collegeName" name="collegeName" value={qualificationData.collegeName} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="universityName">University Name:</label>
        <input type="text" id="universityName" name="universityName" value={qualificationData.universityName} onChange={handleChange} />
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step2;
