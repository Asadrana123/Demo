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
    const newNodes = resultList.slice(0,5).map((result) => {
        const node = document.createElement('div');
        node.textContent = result.word;
        node.setAttribute('class', 'result');
        return node;
    })
    loader.style.display = 'none'
    resultContainer.style.display='flex'
    resultContainer.replaceChildren(...newNodes);
}

const showLoading = () =>{
    loader.style.display = 'block';
    resultContainer.style.display='none'
}

const handleEmptyInput=()=>{
    loader.style.display='none';
    resultContainer.style.display='none';
}


input.addEventListener('input',(e) => {
    if (e.target.value.length === 0) {
        handleEmptyInput();
        return;
    }
    showLoading();
    clearTimeout(timeOutId)
    timeOutId = setTimeout(() => {
        fetchSearchResult(e.target.value)
    }, 200)
})