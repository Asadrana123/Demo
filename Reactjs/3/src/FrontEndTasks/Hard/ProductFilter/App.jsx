import React, { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import CardsContainer from './components/CardsContainer.jsx'
import { DataContext } from './context/dataContext.js'
import Filters from './components/Filters.jsx'
function App() {

    // useEffect(() => {
    //     window.addEventListener('mousemove', (e) => {
    //         console.log(e);
    //     })
    // })
    return (
        <DataContext>
            <Navbar />
            <Filters />
            <CardsContainer />
        </DataContext>
    )
}

export default App