const input = document.getElementsByTagName('input')[0]
const loader = document.getElementById('loader');
const resultContainer = document.getElementById('results-container');
var timeOutId = null;

const fetchSearchResult = async (text) => {
    try {
        const response = await fetch(`https://api.datamuse.com/sug?s=${text}`);
        const searchResult = await response.json();
        showResults(searchResult);
    } catch (err) {
        console.log(err);
    }
}

const showResults = (resultList) => {
    const newNodes = resultList.map((result) => {
        const node = document.createElement('div');
        node.textContent = result.word;
        node.setAttribute('class', 'result');
        return node;
    })
    loader.style.display = 'none'
    resultContainer.replaceChildren(...newNodes);
}

const showLoading = () =>{
    loader.style.display = 'block';
    resultContainer.style.display='none'
}


input.addEventListener('change', async (e) => {
    if (e.target.value.length === 0) return;
    showLoading();
    clearTimeout(timeOutId)
    timeOutId = setTimeout(() => {
        fetchSearchResult(e.target.value)
    }, 150)
})