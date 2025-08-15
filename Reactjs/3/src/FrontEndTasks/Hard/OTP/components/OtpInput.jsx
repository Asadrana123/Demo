import React, { useEffect } from 'react';
import { useRef } from 'react';
import './OtpInput.css';
const OtpInput = React.memo(({ isFocused, index, value, handleChange, handleKeyDown }) => {
    const focusInput = useRef(null);
    useEffect(() => {
        console.log(isFocused)
        if (isFocused) focusInput.current.focus();
        else focusInput.current.blur();
    }, [isFocused])
    return (
        <div className='otp-input-container'>
            <input
                type='text'
                value={value}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={focusInput}
            />
        </div>
    )
})

export default OtpInput