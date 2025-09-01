import React from 'react'
import './StarRating.css'
import { getStarWidths } from '../utils/productUtils'

function StarRating({ value }) {
    return (
        Array.from({ length: 5 }).map((_, index) => {
            return (
                <div key={index} className="star">
                    ☆
                    <div style={{ width: `${getStarWidths(index, value)}%` }} className="filled-star">
                        ★
                    </div>
                </div>
            )
        })
    )
}

export default StarRating