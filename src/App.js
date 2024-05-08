import React, { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import './App.css';
import { jsPDF } from 'jspdf';

const App = () => {
  const [formData, setFormData] = useState({});
  const [step, setStep] = useState(1);

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handleComplete = (data) => {
    setFormData({ ...formData, ...data });
    setStep(4); // Set to a step where download button is displayed
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Set font styles
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    
    // Add title
    doc.text('User Information', 20, 20);
    
    // Add form fields
    let yPos = 30;
    Object.entries(formData).forEach(([key, value]) => {
      doc.text(20, yPos, `${key}:`);
      doc.text(65, yPos, value);
      yPos += 10;
    });
    
    // Save PDF
    doc.save('user_information.pdf');
  };
  

  return (
    <div className="app-container">
      {step === 1 && <Step1 onNext={handleNext} />}
      {step === 2 && <Step2 formData={formData} onNext={handleNext} />}
      {step === 3 && <Step3 formData={formData} onComplete={handleComplete} />}
      {step === 4 && (
        <div className="user-info-container">
          <h2>User Information:</h2>
          {Object.entries(formData).map(([key, value]) => (
            <p key={key}><strong>{key}:</strong> {value}</p>
          ))}
          <button className="download-button" onClick={generatePDF}>Download PDF</button>
        </div>
      )}
    </div>
  );
};

export default App;
