import React, { useState } from 'react'
import './App.css'
import ShapeContainer from './components/ShapeContainer'
import ShapeController from './components/ShapeController'
import useShapeDrawer from './hooks/useShapeDrawer'
function App() {
    const {shapes,handleClick,handleRedo,handleUndo,handleClear}=useShapeDrawer();
    return (
        <div>
            <ShapeController handleClear={handleClear} handleUndo={handleUndo} handleRedo={handleRedo} />
            <ShapeContainer handleClick={handleClick} shapes={shapes} />
        </div>
    )
}

export default App