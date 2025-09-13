import React, { useState } from 'react'
import './App.css'
import ShapeContainer from './components/ShapeContainer'
import ShapeController from './components/ShapeController'
function App() {
    const [shapes, setShapes] = useState([]);
    const [isRedoActive, setIsRedoActive] = useState(false);
    const [latestUndoIndex, setlatestUndoIndex] = useState(-1);
    const handleClear = () => {
        setShapes([]);
        setIsRedoActive(false);
        setlatestUndoIndex(-1);
    }
    const handleClick = (e) => {
        if (isRedoActive) {
            let newShapes = shapes.slice(0, latestUndoIndex);
            newShapes = [...newShapes, { id: newShapes.length, position: { left: e.nativeEvent.offsetX, top: e.nativeEvent.offsetY }, visibility: 'visible' }]
            setShapes(newShapes);
            setIsRedoActive(false);
            setlatestUndoIndex(-1);
        } else {
            console.log(e.nativeEvent.offsetX);
            setShapes([...shapes, { id: shapes.length, position: { left: e.nativeEvent.offsetX, top: e.nativeEvent.offsetY }, visibility: 'visible' }])
        }
    }
    const handleUndo = () => {
        if (shapes.length === 0) return;
        if (latestUndoIndex === -1) {
            setShapes((prev) => {
                return prev.map((shape, index) => {
                    if (index === shapes.length - 1) return { ...shape, visibility: 'hidden' }
                    return shape;
                })
            })
            setlatestUndoIndex(shapes.length - 1);
            setIsRedoActive(true);
        }
        else if (latestUndoIndex > 0) {
            setShapes((prev) => {
                return prev.map((shape, index) => {
                    if (index === latestUndoIndex - 1) return { ...shape, visibility: 'hidden' }
                    return shape;
                })
            })
            setlatestUndoIndex(prev => prev - 1);
            setIsRedoActive(true);
        }
    }
    const handleRedo = () => {
        if (latestUndoIndex === -1) return;
        const lastIndex = shapes.length - 1;
        if (latestUndoIndex != lastIndex) {
            let newShapes = shapes.map((shape, index) => {
                if (index === latestUndoIndex) return { ...shape, visibility: 'visible' }
                return shape;
            })
            setShapes(newShapes);
            setlatestUndoIndex(prev => prev + 1);
        }
        else {
            let newShapes = shapes.map((shape, index) => {
                if (index === latestUndoIndex) return { ...shape, visibility: 'visible' }
                return shape;
            })
            setShapes(newShapes);
            setlatestUndoIndex(-1);
        }
    }
    return (
        <div>
            <ShapeController handleClear={handleClear} handleUndo={handleUndo} handleRedo={handleRedo} />
            <ShapeContainer handleClick={handleClick} shapes={shapes} />
        </div>
    )
}

export default App