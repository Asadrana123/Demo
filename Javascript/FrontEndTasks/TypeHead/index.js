import { debounce } from "./debounce.js";
const input = document.getElementsByTagName('input')[0]
const loader = document.getElementById('loader');
const resultContainer = document.getElementById('results-container');
const resultNodes = resultContainer.children;
const errorContainer = document.getElementById('error-container');
const closeButton = document.getElementById('close-button')
const noResult = document.getElementById('no-result')
const debounceInput = debounce(fetchSearchResult, 500);
var currentFocusIndex = -1;
var previousFocusIndex = -1;
var controller;
async function fetchSearchResult(text) {
    controller = new AbortController();
    try {
        const response = await fetch(`https://api.datamuse.com/sug?s=${text}`, { signal: controller.signal });
        controller = null;
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const searchResult = await response.json();
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
    loader.classList.replace('show', 'remove')
    resultContainer.classList.replace('show-flex', 'remove')
    errorContainer.textContent = userMessage;
    errorContainer.classList.replace('remove', 'show')
    console.error("Technical error:", err); // for debugging
}

const showResults = (resultList) => {
    loader.classList.replace('show', 'remove')
    if (resultList.length === 0) {
        noResult.classList.replace('remove', 'show')
        return;
    }
    const newNodes = resultList.slice(0, 5).map((result) => {
        const node = document.createElement('div');
        node.textContent = result.word;
        node.setAttribute('class', 'result');
        return node;
    })
    resultContainer.classList.replace('remove', 'show-flex')
    resultContainer.replaceChildren(...newNodes);
}

const showLoading = () => {
    loader.classList.replace('remove', 'show')
    resultContainer.style.display = 'none'
    noResult.classList.replace('show', 'remove')
    closeButton.classList.replace('remove', 'show')
}

const handleEmptyInput = () => {
    loader.classList.replace('show', 'remove')
    resultContainer.classList.replace('show', 'remove')
    errorContainer.classList.replace('show', 'remove')
    closeButton.classList.replace('show', 'remove')
}


const cancelOngoingRequest = () => {
    if (controller) {
        controller.abort()
    }
}

const handleCloseButton = () => {
    input.value = '';
    input.focus();
    noResult.classList.replace('show', 'remove')
    closeButton.classList.replace('show', 'remove')
    resultContainer.classList.replace('show-flex', 'remove')
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
    if (resultNodes.length == 0 || (e.key !== 'ArrowDown' && e.key != 'ArrowUp')) return;
    if (e.key === 'ArrowDown') {
        currentFocusIndex = currentFocusIndex === -1 ? 0 : currentFocusIndex + 1;
        currentFocusIndex = currentFocusIndex % resultNodes.length;
    }
    else if (e.key === 'ArrowUp') {
        currentFocusIndex = currentFocusIndex === -1 ? resultNodes.length - 1 : currentFocusIndex - 1;
        currentFocusIndex = currentFocusIndex < 0 ? currentFocusIndex + resultNodes.length : currentFocusIndex
    }
    resultNodes[currentFocusIndex].classList.toggle('highlight');
    if (previousFocusIndex != -1) resultNodes[previousFocusIndex].classList.toggle('highlight');
    previousFocusIndex = currentFocusIndex;
})