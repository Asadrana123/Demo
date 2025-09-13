import React from 'react'
import './ShapeController.css'
function ShapeController({ handleRedo, handleUndo,handleClear }) {

    return (
        <div className='shape-controller'>
            <div onClick={handleClear}>Clear</div>
            <div onClick={handleUndo}>undo</div>
            <div onClick={handleRedo}>redo</div>
        </div>
    )
}

export default ShapeController