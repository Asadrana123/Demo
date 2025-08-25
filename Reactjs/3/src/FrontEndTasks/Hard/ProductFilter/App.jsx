import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import CardsContainer from './components/CardsContainer.jsx'
import { DataContext } from './context/dataContext.js'
import Filters from './components/Filters.jsx'
function App() {
    return (
        <DataContext>
            <Navbar />
            <Filters/>
            <CardsContainer />
        </DataContext>
    )
}

export default App