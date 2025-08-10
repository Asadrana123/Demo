import React, { useState } from 'react'
import './Question.css'
function Question({ question, currentIndex, handleClick }) {
    const [selectedOption, setSelectedOption] = useState(null);
    const handleNextClick = () => {
        handleClick(selectedOption);
        setSelectedOption(null);
    }
    return (
        <div className='question-container'>
            <div className='question-header'>
                <div>Topic:React</div>
                <div>{currentIndex + 1}/10</div>
            </div>
            <div className='question-title'>
                {question.question}
            </div>
            <div className='options-container'>
                {question?.options?.map((option, index) => {
                    return <div onClick={() => setSelectedOption(index)} style={{ backgroundColor: selectedOption === index ? '#4669a4' : '' }} key={index} className='options'>{option}</div>
                })}
            </div>
            <div className='next-button-container'>
                <div onClick={selectedOption === null ? undefined : () => handleNextClick()} style={{ cursor: selectedOption === null ? 'not-allowed' : 'pointer' }} className='next-button'>Next</div>
            </div>
        </div>
    )
}

export default Question