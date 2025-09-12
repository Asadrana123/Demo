import React, { useState } from 'react';
import './TelePhoneFormatter.css';

const TelePhoneFormatter = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const formatPhone = (value) => {
    const numbers = value.replace(/[^0-9]/g, '');
    
    const limited = numbers.substring(0, 10);
    
    if (limited.length <= 3) {
      return limited ? `+(${limited}` : '';
    } else if (limited.length <= 6) {
      return `+(${limited.substring(0, 3)}) ${limited.substring(3)}`;
    } else {
      return `+(${limited.substring(0, 3)}) ${limited.substring(3, 6)}-${limited.substring(6)}`;
    }
  };

  const handleChange = (e) => {
    const input = e.target.value;
    const formatted = formatPhone(input);
    setPhoneNumber(formatted);
  };

  const isValid = phoneNumber.replace(/[^\d]/g, '').length === 10;

  return (
    <div className="phone-formatter">
      <h1>Telephone formatter</h1>
      
      <div className="form-group">
        <label>Phone Number</label>
        <div className="input-container">
          <input
            type="text"
            value={phoneNumber}
            onChange={handleChange}
            placeholder="+(123) 456-7890"
            className={isValid ? 'valid' : ''}
          />
          <span className="phone-icon">📞</span>
        </div>
        <p className="hint">Enter a 10-digit phone number. Format: +(123) 456-7890</p>
        
        {isValid && (
          <div className="success">✅ Valid phone number format</div>
        )}
      </div>
    </div>
  );
};

export default TelePhoneFormatter;
