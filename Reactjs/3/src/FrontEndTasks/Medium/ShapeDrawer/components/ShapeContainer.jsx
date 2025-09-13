import React from 'react'
import './ShapeContainer.css'
function ShapeContainer({ shapes, handleClick }) {
    return (
        <div onClick={handleClick} className='shape-container'>
            {shapes.map((shape) => {
                return <div key={shape.id}
                    style={{
                        left: shape.position.left,
                        top: shape.position.top,
                        visibility: shape.visibility
                    }} >
                </div>
            })}
        </div>
    )
}

export default ShapeContainer