import React, { useEffect, useState } from 'react'
import './App.css'
import OtpInput from './components/OtpInput.jsx'
import { useCallback } from 'react';
import { checkInput } from './utils/utils';
import { NUM_OF_INPUT } from './Config/Config';
function App() {
    const [currentFocus, setCurrentFocus] = useState(Array.from({ length: NUM_OF_INPUT }, (_, index) => index === 0 ? true : false));
    const [userInput, setUserInput] = useState(Array.from({ length: NUM_OF_INPUT }, () => ''));
    const moveFocusLeft = useCallback((currentIndex) => {
        setCurrentFocus((prev) => {
            if (currentIndex === 0) return prev;
            const newFocusIndex = currentIndex - 1;
            return prev.map((_, index) => {
                return index === newFocusIndex ? true : false;
            })
        })
    }, [])
    const moveFocusRight = useCallback((currentIndex) => {
        setCurrentFocus((prev) => {
            if (currentIndex === NUM_OF_INPUT - 1) return prev;
            const newFocusIndex = currentIndex + 1;
            const newElements = prev.map((_, index) => {
                return index === newFocusIndex ? true : false;
            })
            return newElements;
        })
    }, [])
    const handleKeyDown = useCallback((e, currentIndex) => {
        if (e.key === 'ArrowLeft') {
            moveFocusLeft(currentIndex);
        } else if (e.key === 'ArrowRight') {
            moveFocusRight(currentIndex);
        } else if (e.key === 'Backspace') {
            if (userInput[currentIndex]) {
                setUserInput((prev) => {
                    const newElements = [...prev];
                    newElements[currentIndex] = '';
                    return newElements;
                })
            }
            moveFocusLeft(currentIndex)
        }
    }, [userInput])
    const handleChange = useCallback((value, index, e) => {
        const filterValue = checkInput(value);
        if (!filterValue) return;
        setUserInput((prev) => {
            const newElements = [...prev];
            newElements[index] = filterValue;
            return newElements;
        })
        moveFocusRight(index)
    }, [])
    return (
        <>
            <h2 className='main-heading'>OTP</h2>
            <div className='main-container'>
                {Array.from({ length: NUM_OF_INPUT }).map((_value, index) => {
                    return <OtpInput
                        key={index}
                        index={index}
                        value={userInput[index]}
                        handleChange={handleChange}
                        isFocused={currentFocus[index]}
                        handleKeyDown={handleKeyDown}
                    />
                })}
            </div>
        </>
    )
}

export default App