import React, { useState, useCallback, useEffect } from "react";
const cursors = [];
for (let i = 1; i <= 20; i++) {
    cursors.push({
        id: `user${i}`,
        name: `Tom ${i}`,
        x: Math.floor(Math.random() * 500), // random x between 0-499
        y: Math.floor(Math.random() * 300), // random y between 0-299
    });
}

const Child = React.memo(({ cursor, onHover,isSelected }) => {
    return (
        <div style={{ position: 'absolute', left: cursor.x, top: cursor.y, color:isSelected?'red':''}} onMouseOver={() => onHover(cursor.id)}>
            {cursor.id}
        </div>
    )
})

export default function Example4() {
    const [select, setSelect] = useState(null)
    const handleHover = useCallback((id) => {
        setSelect(id)
    }, [])
    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
            {cursors.map((item) => {
                return (
                    <Child
                        isSelected={select === item.id ? true : false}
                        key={item.id}
                        cursor={item}
                        onHover={handleHover} />
                )
            })}
        </div>
    );
}
