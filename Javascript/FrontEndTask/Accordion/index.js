import { contentArray } from "./data.js";

var activeIndex = -1;
var areAllAllowed = false;
const container = document.getElementById('container');
const inputCheckBox = document.getElementsByTagName('input')[0];

for (let i = 0; i < contentArray.length; i++) {
    const accordion = document.createElement('div');
    accordion.setAttribute('class', 'item');
    const accordionTitle = document.createElement('div');
    accordionTitle.setAttribute('class', 'title');
    const heading = document.createElement('h3');
    heading.innerText = contentArray[i].heading;
    const icon = document.createElement('span');
    accordionTitle.append(heading, icon);
    accordion.append(accordionTitle)
    const accordionContent = document.createElement('p');
    accordionContent.setAttribute('class', 'content');
    accordionContent.innerText = contentArray[i].text
    accordion.append(accordionContent);
    container.append(accordion);
}


const items = document.querySelectorAll('.item');


inputCheckBox.addEventListener('click', (e) => {
    areAllAllowed = e.target.checked;
    if (!areAllAllowed) {
        items.forEach((item) => {
            item.children[1].style.maxHeight = '0';
            item.children[0].children[1].classList.remove('rotate')
        })
    }
})


items.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (activeIndex === -1) {
            item.children[1].style.maxHeight = '200px';
            item.children[0].children[1].classList.toggle('rotate')
            activeIndex = index;
        }
        else if (activeIndex === index) {
            item.children[1].style.maxHeight = '0';
            item.children[0].children[1].classList.toggle('rotate')
            activeIndex = -1;
        }
        else {
            if (!areAllAllowed) {
                items[activeIndex].children[1].style.maxHeight = '0';
                items[activeIndex].children[0].children[1].classList.toggle('rotate');
            }
            item.children[1].style.maxHeight = '200px';
            item.children[0].children[1].classList.toggle('rotate')
            activeIndex = index;

        }
    })
})

