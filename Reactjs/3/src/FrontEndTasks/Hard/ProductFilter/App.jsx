import React, { useState,lazy,Suspense } from 'react'
import './App.css'
import { ProductProvider } from './context/dataContext.jsx'
import Filters from   './components/Filters.jsx'
import Navbar from './components/Navbar'

import CardsContainer from './components/CardsContainer.jsx'
function App() {
    const [smallFiltersVisible, setSmallFiltersVisible] = useState(false);
    return (
        <ProductProvider>
            <Navbar smallFiltersVisible={smallFiltersVisible} setSmallFiltersVisible={setSmallFiltersVisible} />
            <Filters smallFiltersVisible={smallFiltersVisible} />
            <CardsContainer />
        </ProductProvider>
    )
}

export default App