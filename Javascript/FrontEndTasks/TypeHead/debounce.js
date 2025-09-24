export const debounce = (fn, delay) => {
    let timeOutId = null;
    const debouncedFn = (text) => {
        if (!text) {
            clearTimeout(timeOutId);
            return;
        }
        clearTimeout(timeOutId);
        timeOutId = setTimeout(() => fn(text), delay);
    };
    debouncedFn.cancel = () => clearTimeout(timeOutId);
    return debouncedFn;
};
