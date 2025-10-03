const mainContainer = document.getElementById('main');
const loadingContainer = document.getElementById('loading');
const intersectionContainer = document.getElementById('intersection-container');
const errorContainer = document.getElementById('error-container');
var isLoading = false;
var start = 0;
var end = 10;

const debounce = (fn) => {
    let timeOutId = null;
    return function () {
        if (timeOutId) clearTimeout(timeOutId);
        timeOutId = setTimeout(() => fn(), 500);
    }
};


const showResult = (data) => {
    loadingContainer.classList.replace('show', 'hide');
    errorContainer.classList.replace('show', 'hide');
    isLoading = false;
    for (let i = 0; i < data.length; i++) {
        const result = document.createElement('div');
        result.setAttribute('class', 'result');
        const title = document.createElement('h3');
        title.textContent = data[i].title
        const index = document.createElement('div');
        index.textContent = data[i].id
        result.append(index, title);
        mainContainer.append(result);
    }
    start += 10;
    end += 10;
};

const showError = (text) => {
    errorContainer.textContent = text;
    errorContainer.classList.replace('hide', 'show');
    loadingContainer.classList.replace('show', 'hide');
}

const fetchResult = () => {
    fetch(`https://jsonplaceholder.typicode.com/psts?_start=${start}&_end=${end}`)
        .then((response) => {
            if (!response.ok) {
                console.log(response);
                throw new Error(`Error HTTP Status ${response.status}`)
            }
            return response.json()
        })
        .then((data) => showResult(data))
        .catch((err) => {
            showError('Error Occurred Please Try Again')
        })
};

const debounceFunction = debounce(fetchResult);

const startFetching = () => {
    loadingContainer.classList.replace('hide', 'show');
    errorContainer.classList.replace('show', 'hide');
    isLoading = true;
    debounceFunction()
};


const observer = new IntersectionObserver((entries) => {
    entries.map((entry) => {
        if (entry.isIntersecting) {
            if (!isLoading) startFetching();
        }
    })
}, { threshold: 0 });

observer.observe(intersectionContainer);

