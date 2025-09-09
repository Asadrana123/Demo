import React, { useState } from 'react'
import './App.css'
import { ProductProivder } from './context/dataContext.js'
import Filters from './components/Filters.jsx'
import Navbar from './components/Navbar'
import CardsContainer from './components/CardsContainer.jsx'
function App() {
    const [smallFiltersVisible, setSmallFiltersVisible] = useState(false);
    return (
        <ProductProivder>
            <Navbar smallFiltersVisible={smallFiltersVisible} setSmallFiltersVisible={setSmallFiltersVisible} />
            <Filters smallFiltersVisible={smallFiltersVisible} />
            <CardsContainer />
        </ProductProivder>
    )
}

export default App