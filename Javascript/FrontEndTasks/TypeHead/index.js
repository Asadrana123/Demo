const suggestionLength = 5;

const input = document.getElementsByTagName('input')[0]
var timeOutId = null;

const fetchSearchResult = async (text) => {
    if(text.length===0) return;
    try {
        const response = await fetch(`https://api.datamuse.com/sug?s=${text}`);
        console.log(response);
        const searchResult = await response.json();
        console.log(searchResult);
    } catch (err) {
        console.log(err);
    }
}

input.addEventListener('change', async (e) => {
    clearTimeout(timeOutId)
    timeOutId = setTimeout(() => {
        fetchSearchResult(e.target.value)
    }, 150)
})