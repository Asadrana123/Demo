import React, { useState } from "react";
import { useEffect } from "react";
function Example4() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let id = setInterval(() => {
            setCount((prev) => {
                if (prev === 5) {
                    clearInterval(id);
                    return prev;
                }
                return prev + 1;
            })
        }, 1000)
        return () => {
            clearInterval(id);
        }
    }, [])
    return (
        <div>
            {count}
        </div>
    )
}

export default Example4;