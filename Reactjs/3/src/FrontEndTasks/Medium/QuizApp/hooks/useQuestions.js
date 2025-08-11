import { useCallback,useState } from 'react';
import questionsList from '../QuizData';

function useOperation({ setAnswers, setSubmitted, setCurrentIndex, currentIndex, answers }) {
    const calculateResult = useCallback(() => {
        let score = 0;
        let correct = 0;
        let wrong = 0;

        answers.forEach((option, index) => {
            if (questionsList[index].options[option] === questionsList[index].answer) {
                correct += 1;
            } else {
                wrong += 1;
            }
        });

        score = correct * 5;
        setSubmitted({ score, correct, wrong });
    }, [answers, setSubmitted]);

    const handleNextClick = (index) => {
        setAnswers((prev) => {
            const newElements = [...prev];
            newElements[currentIndex] = index;
            return newElements;
        });

        if (currentIndex === questionsList.length - 1) {
            calculateResult();
            return;
        }

        setCurrentIndex((prev) => prev + 1);
    };

    return handleNextClick;
}

export default function useManageQuestions() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [submitted, setSubmitted] = useState(null);
    const [answers, setAnswers] = useState(Array.from({ length: questionsList.length }, () => -1));

    const handleNextClick = useOperation({
        setAnswers,
        setSubmitted,
        setCurrentIndex,
        currentIndex,
        answers,
    });

    return {
        questionsList,
        currentIndex,
        submitted,
        answers,
        handleNextClick,
    };
}
