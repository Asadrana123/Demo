import React, { useRef } from 'react'
import { NUMBER_OF_TANKS } from '../config/config';
import { useState } from 'react'
function useOperations(setTanksData, tanksData, timeTracker, timeOutId) {
    const changeRange = (value) => {
        timeTracker.current = .5;
        setTanksData((_prev) => {
            return Array.from({ length: Number(value) + 4 }, () => 0)
        })
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
        clearTimeout(timeOutId.current);
        timeOutId.current = setTimeout(() => {
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
            setTanksData((prev) => {
                return Array.from({ length: prev.length }, () => avgLitre)
            });
            timeTracker.current = 5;
        }, 1000)
    }
    return { changeHeight, changeRange };
}
export default function useManageTank() {
    const [tanksData, setTanksData] = useState(Array.from({ length: NUMBER_OF_TANKS }, () => 0));
    const timeTracker = useRef(1);
    const timeOutId = useRef(null)
    const { changeHeight, changeRange } = useOperations(setTanksData, tanksData, timeTracker, timeOutId);
    return { changeHeight, tanksData, changeRange, timeTracker };
}

