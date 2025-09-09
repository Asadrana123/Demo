import React, { useMemo } from 'react'
import './StarRating.css'
import { getStarWidths } from '../utils/productUtils'

const STAR_INDICES = Array.from({ length: 5 }, (_, index) => index);

function StarRating({ value }) {
    return (
        STAR_INDICES.map((index) => {
            return (
                <div key={index} className="star">
                    ☆
                    <div  className={`filled-star width-${getStarWidths(index, value)}`}>
                        ★
                    </div>
                </div>
            )
        })
    )
}

export default StarRating;
