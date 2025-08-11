import React, { useRef } from 'react'
import { useState } from 'react'
function useOperations(setTanksData, tanksData, timeTracker) {
    const changeRange = (value) => {
        timeTracker.current = .5;
        setTanksData(Array.from({ length: Number(value) + 4 }, () => 0))
    }
    const changeHeight = (event, index) => {
        if (event == 'add') {
            setTanksData((prev) => {
                const newElements = [...prev];
                newElements[index] = newElements[index] + 1;
                return newElements;
            })
        }
        if (event == 'empty') {
            setTanksData((prev) => {
                const newElements = [...prev];
                newElements[index] = 0;
                return newElements;
            })
        }
        timeTracker.current = 1;
        setTimeout(() => {
            let totalLitre = 0;
            tanksData.forEach((value, currentIndex) => {
                if (currentIndex === index && event == 'add') {
                    totalLitre += value + 1;
                }
                else if (currentIndex === index && event == 'empty') {
                    totalLitre += 0;
                }
                else totalLitre += value;
            })
            const avgLitre = totalLitre / tanksData.length;
            setTanksData(Array.from({ length: tanksData.length }, () => avgLitre));
            timeTracker.current = 5;
        }, 1000)
    }
    return { changeHeight, changeRange };
}
export default function useManageTank() {
    const [tanksData, setTanksData] = useState(Array.from({ length: 4 }, () => 0));
    const timeTracker = useRef(1);
    const { changeHeight, changeRange } = useOperations(setTanksData, tanksData, timeTracker);
    return { changeHeight, tanksData, changeRange, timeTracker };
}

