import React from 'react'
import './Result.css'
export default function Result({ result }) {
  if (!result) {
    return (
      <div className='result-container'>
        <div className='result-header'>
          No result yet
        </div>
      </div>
    )
  }
  const { wrong, score, correct } = result;
  return (
    <div className='result-container'>
      <div className='result-header'>
        Result
      </div>
      <div className='result-grid'>
        <div>Total Questions</div>
        <div>10</div>
        <div>Total Score</div>
        <div>{score}</div>
        <div>Correct</div>
        <div>{correct}</div>
        <div>Wrong</div>
        <div>{wrong}</div>
      </div>
    </div>
  )
}
