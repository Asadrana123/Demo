import React, { useState } from 'react'
import Questions from './QuizData'
import Question from './Components/Question';
import './index.css'
import Result from './Components/Result';
function Index() {
    const [items, _setItems] = useState(Questions);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [submitted, setSubmitted] = useState(null);
    const [answers, setAnswers] = useState(Array.from({ length: 10 }, () => -1))
    const handleNextClick = (index) => {
        console.log(index);
        answers[currentIndex] = index;
        setAnswers([...answers]);
        if (currentIndex === 9) {
            calculateResult();
            return;
        }
        setCurrentIndex(currentIndex + 1);

    }
    const calculateResult = () => {
        let score = 0;
        let correct = 0;
        let wrong = 0;
        answers.forEach((option, index) => {
            if (Questions[index].options[option] === Questions[index].answer) {
                correct += 1
            }
            else wrong += 1;
        })
        score = correct * 5;
        setSubmitted({ score, correct, wrong });
        console.log({ score, correct, wrong });
    }
    return (
        <div className='main-container'>
            <Question handleClick={handleNextClick} question={items[currentIndex]} currentIndex={currentIndex} />
            {submitted &&
                <Result />
            }
        </div>
    )
}

export default Index