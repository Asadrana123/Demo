import { contentArray } from "./data";

const container = document.getElementById('container');

for (let i = 0; i < contentArray.length; i++) {
    const accordion = document.createElement('div');
    accordion.setAttribute('class', 'item');
    const accordionTitle = document.createElement('div');
    accordionTitle.setAttribute('class', 'title');
    const heading = document.createElement('h3');
    heading.innerText=contentArray[i].heading;
    const icon = document.createElement('span');
    accordionTitle.append(heading,icon);
    accordion.append(accordionTitle)
    const accordionContent=document.createElement('p');
    accordionContent.setAttribute('class','content');
    accordion.append(accordionContent);
    contentArray.append(accordion);
}