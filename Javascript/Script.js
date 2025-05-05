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
let previousOpened;
const questionList = document.querySelector('.question-list');
let fragment=document.createDocumentFragment();
faqs.forEach((questionData, index) => {
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
questionList.addEventListener('click', function (event) {
    const target = event.target;
    if (!target.classList.contains('question')) return;
    target.nextElementSibling.classList.toggle('hide');
    target.nextElementSibling.classList.toggle('show');
    if (previousOpened && previousOpened !== target.nextElementSibling) {
        console.log('hi');
        previousOpened.classList.toggle('hide')
        previousOpened.classList.toggle('show')
    }
    previousOpened = previousOpened===target.nextElementSibling?undefined:target.nextElementSibling;
})
// function attachListener(question,index) {
//     question.addEventListener('click', function () {
//         if (activeIndex === undefined) {
//              answers[index].classList.remove('hide')
//              answers[index].classList.add('show')
//             activeIndex = index;
//             return;
//         }
//         if (activeIndex === index) {
//             answers[activeIndex].classList.add('hide');
//             answers[activeIndex].classList.remove('show');
//             activeIndex=undefined;
//             return;
//         }
//         answers[activeIndex].classList.add('hide');
//         answers[activeIndex].classList.remove('show');
//         answers[index].classList.remove('hide')
//         answers[index].classList.add('show');
//         activeIndex = index;
//     })
// }
