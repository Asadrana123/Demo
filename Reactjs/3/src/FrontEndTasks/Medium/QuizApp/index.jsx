import React, { useState } from 'react'
import Question from './Components/Question';
import './index.css'
import Result from './Components/Result';
import useManageQuestions from './hooks/useQuestions';
function Index() {
    const {questionsList,currentIndex,handleNextClick,submitted}=useManageQuestions();
    return (
        <div className='main-container'>
            {!submitted &&
                <Question handleClick={handleNextClick} question={questionsList[currentIndex]} currentIndex={currentIndex} />
            }
            {submitted &&
                <Result  result={submitted} />
            }
        </div>
    )
}

export default Index