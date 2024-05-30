import { useState } from "react"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"

const Dropdown = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isValid, setIsValid] = useState(true);
  
    const handleChange = (value) => {
      setPhoneNumber(value);
      setIsValid(validatePhoneNumber(value));
    };
  
    const validatePhoneNumber = (phoneNumber) => {
      const phoneNumberPattern = /^\d{12}$/;
      return phoneNumberPattern.test(phoneNumber);
    };
  
    return (
      <div>
        <label>
          Phone-Number:
          <PhoneInput 
            country={"sa"}
            value={phoneNumber}
            onChange={handleChange}
          />
        </label>
        {!isValid && <p>Please enter a valid number</p>}
      </div>
    );
  };

export default Dropdown
