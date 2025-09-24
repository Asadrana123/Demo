import { debounce } from "./debounce.js";
const input = document.getElementsByTagName('input')[0]
const loader = document.getElementById('loader');
const resultContainer = document.getElementById('results-container');
const errorContainer = document.getElementById('error-container');
const closeButton = document.getElementById('close-button')
const noResult = document.getElementById('no-result')
const debounceInput = debounce(fetchSearchResult, 500);
var currentFocusIndex = -1;
var controller;
async function fetchSearchResult(text) {
    controller = new AbortController();
    try {
        const response = await fetch(`https://api.datamuse.com/sug?s=${text}`, { signal: controller.signal });
        controller = null;
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const searchResult = await response.json();
        console.log(searchResult);
        showResults(searchResult);
    } catch (err) {
        if (err.name !== 'AbortError') {
            showError(err)
        }
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
    loader.style.display = 'none'
    if (resultList.length === 0) {
        noResult.style.display = 'block'
        return;
    }
    const newNodes = resultList.slice(0, 5).map((result) => {
        const node = document.createElement('div');
        node.textContent = result.word;
        node.setAttribute('class', 'result');
        return node;
    })
    resultContainer.style.display = 'flex'
    resultContainer.replaceChildren(...newNodes);
}

const showLoading = () => {
    loader.style.display = 'block';
    resultContainer.style.display = 'none';
    noResult.style.display = 'none';
    closeButton.style.display = 'block';
}

const handleEmptyInput = () => {
    loader.style.display = 'none';
    resultContainer.style.display = 'none';
    errorContainer.style.display = 'none';
    closeButton.style.display = 'none';
}


const cancelOngoingRequest = () => {
    if (controller) {
        console.log('hi');
        controller.abort()
    }
}

const handleCloseButton = () => {
    input.value = '';
    input.focus();
    noResult.style.display = 'none';
    closeButton.style.display = 'none';
    resultContainer.style.display = 'none';
}

closeButton.addEventListener('click', () => handleCloseButton())

input.addEventListener('input', (e) => {
    showLoading();
    if (!e.target.value) {
        handleEmptyInput();
        cancelOngoingRequest();
        debounceInput.cancel();
        return;
    }
    debounceInput(e.target.value);
})


document.addEventListener('keydown', (e) => {
    
    if (e.key === 'ArrowDown') {
        currentFocusIndex = currentFocusIndex === -1 ? 0 : currentFocusIndex + 1;
    }
    if (e.key === 'ArrowUp') {
        currentFocusIndex = currentFocusIndex === -1 ? 0 : currentFocusIndex + 1;
    }
})