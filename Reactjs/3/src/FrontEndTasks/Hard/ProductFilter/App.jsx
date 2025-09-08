import React, { useState } from 'react'
import './App.css'
import { DataContext } from './context/dataContext.js'
import Filters from './components/Filters.jsx'
import Navbar from './components/Navbar'
import CardsContainer from './components/CardsContainer.jsx'
function App() {
    const [smallFiltersVisible, setSmallFiltersVisible] = useState(false);
    return (
        <DataContext>
            <Navbar smallFiltersVisible={smallFiltersVisible} setSmallFiltersVisible={setSmallFiltersVisible} />
            <Filters smallFiltersVisible={smallFiltersVisible} />
            <CardsContainer />
        </DataContext>
    )
}

export default App