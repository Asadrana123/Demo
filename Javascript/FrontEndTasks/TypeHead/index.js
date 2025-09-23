const input = document.getElementsByTagName('input')[0]
const loader = document.getElementById('loader');
const resultContainer = document.getElementById('results-container');
const errorContainer = document.getElementById('error-container');
var timeOutId = null;

const fetchSearchResult = async (text) => {
    const controller = new AbortController();
    const { signal } = controller;
    setTimeout(() => controller.abort(), 20000)
    try {
        const response = await fetch(`https://api.datamuse.com/sug?s=${text}`, { signal });
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)
        const searchResult = await response.json();
        showResults(searchResult);
    } catch (err) {
        showError(err)
    }
}



const showError = (err) => {
    let userMessage = "Something went wrong. Please try again.";
    if (err instanceof TypeError) {
        userMessage = "Unable to connect. Please check your internet connection.";
    } else if (err.message.includes("404")) {
        userMessage = "The resource you requested was not found.";
    } else if (err.message.includes("500")) {
        userMessage = "Something went wrong on our server. Please try again later.";
    }
    loader.style.display = 'none'
    resultContainer.style.display = 'none'
    errorContainer.textContent = userMessage;
    errorContainer.style.display = 'block'
    console.error("Technical error:", err); // for debugging
}

const showResults = (resultList) => {
    const newNodes = resultList.slice(0, 5).map((result) => {
        const node = document.createElement('div');
        node.textContent = result.word;
        node.setAttribute('class', 'result');
        return node;
    })
    loader.style.display = 'none'
    resultContainer.style.display = 'flex'
    resultContainer.replaceChildren(...newNodes);
}

const showLoading = () => {
    loader.style.display = 'block';
    resultContainer.style.display = 'none'
}

const handleEmptyInput = () => {
    loader.style.display = 'none';
    resultContainer.style.display = 'none';
    errorContainer.style.display = 'none'
}


input.addEventListener('input', (e) => {
    showLoading();
    clearTimeout(timeOutId)
    if (e.target.value.length === 0) {
        handleEmptyInput();
        return;
    }
    timeOutId = setTimeout(() => {
        fetchSearchResult(e.target.value)
    }, 200)
})