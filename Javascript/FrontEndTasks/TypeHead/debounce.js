export const debounce = (fn, delay) => {
    let timeOutId = null;

    const debouncedFn = (text) => {
        // If input is empty, cancel the timeout
        if (!text) {
            clearTimeout(timeOutId);
            return;
        }

        clearTimeout(timeOutId);
        timeOutId = setTimeout(() => fn(text), delay);
    };

    // Optional: expose a cancel function
    debouncedFn.cancel = () => clearTimeout(timeOutId);

    return debouncedFn;
};
