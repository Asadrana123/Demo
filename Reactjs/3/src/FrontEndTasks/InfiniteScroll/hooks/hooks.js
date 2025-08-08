// hooks/useInfiniteScroll.js
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/photos'
// ✅ HOOK 1: Single Responsibility - Scroll Detection Only
export const useScrollDetection = () => {
    const [isNearBottom, setIsNearBottom] = useState(false);
    const timeOutId = useRef(null)
    useEffect(() => {
        const handleScroll = () => {
            console.log('scrollY+innerHeight', window.scrollY + window.innerHeight);
            console.log('scrollHeight', document.documentElement.scrollHeight);
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
                setIsNearBottom(true)
            }
            else setIsNearBottom(false)
        }
        const throttleHandleScroll = () => {
            clearTimeout(timeOutId.current);
            timeOutId.current = setTimeout(handleScroll, 100);
        }
        console.log('attached');
        window.addEventListener('scroll', throttleHandleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', throttleHandleScroll);
            clearTimeout(timeOutId.current);
        }
    }, [])
    return isNearBottom;
}


export const useApiPagination = (props) => {
    const limit = props.limit
    const isNearBottom  = useScrollDetection();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const controller = useRef(null);
    const fetchData = async () => {
        try {
            if (controller.current) {
                console.log(controller.current)
                controller.current.abort();
            }
            setLoading(true)
            controller.current = new AbortController();
            const pageNumber = (items.length / limit) + 1;
            console.log(pageNumber);
            const response = await axios.get('', {
                params: {
                    _limit: limit, _page: pageNumber
                },
                signal: controller.current.signal
            }
            )
            console.log(response);
            if (response.data.length === 0) {
                setHasMore(false);
            }
            else {
                setItems((items) => [...items, ...response.data]);
            }
        } catch (err) {
            console.log(err);
            setError('Some error occurred Please Try Again');
        } finally {
            setLoading(false);
            controller.current=null;
        }
    }
    useEffect(() => {
        console.log('yes');
        if (isNearBottom && !loading && hasMore) {
            fetchData()
        }
    }, [isNearBottom])
    useEffect(() => {
        fetchData()
    }, [])
    return {
        items,
        loading,
        error,
        hasMore
    }
}
