import { useEffect, useRef, useState,useLayoutEffect } from 'react';
import React from 'react';
export default function Example1() {
    const sidebarRef = useRef();
    const [panelLeft, setPanelLeft] = useState(0);

    //   useEffect(() => {
    //     setPanelLeft(sidebarRef.current.offsetWidth);
    //   }, []);

    useLayoutEffect(() => {
        setPanelLeft(sidebarRef.current.offsetWidth);
    }, []);

    return (
        <div>
            <div ref={sidebarRef} style={{ width: '40vw' }}>Sidebar</div>
            <div style={{ position: 'absolute', left: panelLeft }}>Panel</div>
        </div>
    );
}
