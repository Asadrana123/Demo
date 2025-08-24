import React, { useEffect, useState } from 'react'
import { data } from '../data/data'
function useFilter() {
    const [products, setProducts] = useState(data);
    return { products };
}

export default useFilter