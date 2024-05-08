import React, { useState } from 'react';
import './Step3.css'; // Import the CSS file

const Step3 = ({ formData, onComplete }) => {
  const [additionalData, setAdditionalData] = useState({
    gender: '',
    location: '',
    age: '',
    roleDescription: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdditionalData({ ...additionalData, [name]: value });
  };

  const handleComplete = () => {
    onComplete(additionalData);
  };

  return (
    <div className="step3-form"> {/* Apply the CSS class to the container */}
      <h2>Step 3: Additional Information</h2>
      <div>
        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" value={additionalData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location" value={additionalData.location} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" value={additionalData.age} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="roleDescription">Description for the Role:</label>
        <textarea id="roleDescription" name="roleDescription" value={additionalData.roleDescription} onChange={handleChange} />
      </div>
      <button onClick={handleComplete}>Complete</button>
    </div>
  );
};

export default Step3;
