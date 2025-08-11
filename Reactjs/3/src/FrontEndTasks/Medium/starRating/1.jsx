import React, { useCallback, useState } from "react"
const MAX_STARS = 5;
const MIN_RATING = 0;
const STEP = 0.1;
import './1.css'
export default function Example1() {
  const [rangeValue, setRangeValue] = useState(0);
  const getStarWidths = () => {
    const integerPart = Math.floor(rangeValue);
    const decimalPart = rangeValue - integerPart;
    return Array.from({ length: MAX_STARS }, (_, index) => {
      if (index < integerPart) return 100;
      if (index === integerPart) return decimalPart * 100;
      return 0;
    });
  };
  const handleChange = useCallback((e) => {
    setRangeValue(Number(e.target.value));
  }, [])
  return (
    <div className="main-container">
      <div className="stars-container">
        {getStarWidths().map((_, index) => {
          return (
            <div key={index} className="star">
              ☆
              <div style={{ width: `${getStarWidths()[index]}%` }} className="filled-star">
                ★
              </div>
            </div>
          )
        })
        }
      </div>
      <div className="range-container">
        <input onChange={handleChange} type="range" min={MIN_RATING} max={MAX_STARS} step={STEP} value={rangeValue} />
        <h2>{rangeValue}</h2>
      </div>
    </div>
  )
}
