function debounce(fn, delay) {
    let timeOutId = null;
    return function () {
        clearTimeout(timeOutId)
        timeOutId = setTimeout(() => fn(), delay)
    }
}