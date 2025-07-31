import React, { useState } from "react";
import { useEffect } from "react";
function Example3() {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        let id;
        if (query) {
            id = setTimeout(() => {
                const fetchQuery = async () => {
                    setLoading(true);
                    try {
                        const result = await fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`);
                    } catch (err) {
                        console.log(err);
                    }finally{
                        setLoading(false);
                    }
                }
                fetchQuery();
            }, 1000)
        }
        return ()=>clearTimeout(id);
    }, [query])
    return (
        <div>
            <input value={query} onChange={(e) => setQuery(e.target.value)} />
            {loading && <div>Lodaing....</div>}
        </div>
    )
}

export default Example3;