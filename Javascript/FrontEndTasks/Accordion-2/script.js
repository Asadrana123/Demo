const faqs = [
    {
        question: "What is your return policy?",
        answer: "You can return any item within 30 days of purchase. The item must be in its original condition."
    },
    {
        question: "How long does shipping take?",
        answer: "Shipping typically takes 3-7 business days, depending on your location."
    },
    {
        question: "Do you offer international shipping?",
        answer: "Yes, we ship internationally. Delivery times and costs may vary based on the destination."
    },
    {
        question: "How can I track my order?",
        answer: "Once your order ships, you’ll receive an email with a tracking number and a link to track it."
    },
    {
        question: "Can I change or cancel my order?",
        answer: "If your order hasn’t shipped yet, you can contact support to change or cancel it."
    }
];
let previousOpened = null;
const questionList = document.querySelector('.question-list');
const searchBar = document.getElementById('search-bar');
let filteredFaqs = faqs;
let intervalId=null;
searchBar.addEventListener('input', function (event) {
    let searchTerm = event.target.value.trim();
    if (searchTerm.length < 3 && searchTerm.length >= 1) return;
    clearTimeout(intervalId);
    intervalId = setTimeout(() => {
        filteredFaqs = faqs.filter((value) => {
            return value.question.toLowerCase().includes(searchTerm.toLowerCase());

        })
       fillListWithQuestion();
    }, 500);
})
function fillListWithQuestion() {
    const fragment = document.createDocumentFragment();
    questionList.innerHTML = "";
    filteredFaqs.forEach((questionData) => {
        const questionContainer = document.createElement('div');
        questionContainer.classList.add('question-container');
        const question = document.createElement('div');
        question.textContent = questionData.question;
        question.classList.add('question');
        const ans = document.createElement('div');
        ans.textContent = questionData.answer;
        ans.classList.add('ans', 'hide');
        questionContainer.append(question, ans);
        fragment.appendChild(questionContainer)
    })
    questionList.append(fragment);
}
questionList.addEventListener('click', function (event) {
    const target = event.target;
    if (!target.classList.contains('question')) return;
    target.nextElementSibling.classList.remove('hide');
    target.nextElementSibling.classList.add('show');
    if (previousOpened && previousOpened !== target.nextElementSibling) {
        previousOpened.classList.add('hide')
        previousOpened.classList.remove('show')
    }
    previousOpened = previousOpened === target.nextElementSibling ? null : target.nextElementSibling;
})
fillListWithQuestion();