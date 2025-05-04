
let activeIndex = 0;
let slider = document.querySelector('.slider')
let image = document.querySelector('img');
let nextButton = document.getElementById('next-button');
let previousButton = document.getElementById('previous-button');
let dotsContainer = document.querySelector('.dot-circle-container');
let step = 1;
let arrImg = ["https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1681422570054-9ae5b8b03e46?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5zcGxhc2glMjBhcHB8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1675198764382-94d5c093df30?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"]
image.setAttribute('src', arrImg[activeIndex]);
nextButton.addEventListener('click', function () {
    showNextImage(1);
})
previousButton.addEventListener('click', function () {
    showNextImage(-1);
})
for (let i = 0; i < arrImg.length; i++) {
    let newDot = document.createElement('span');
    newDot.classList.add('dot-circle');
    if (i === activeIndex) {
        newDot.classList.add('dark-background');
    } else {
        newDot.classList.add('light-background');
    }
    dotsContainer.append(newDot);
}
setInterval(() => {
    showNextImage(step);
}, 2000)

function showNextImage(step) {
    dotsContainer.children[activeIndex].classList.remove('dark-background');
    dotsContainer.children[activeIndex].classList.add('light-background');
    activeIndex = (activeIndex + step + arrImg.length) % arrImg.length;
    dotsContainer.children[activeIndex].classList.add('dark-background');
    image.setAttribute('src', arrImg[activeIndex]);
}

// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="./index.css">
// </head>

// <body>
//     <div class="slider">
//         <img />
//         <div class="button-container">
//             <button id="previous-button">Previous</button>
//             <button id="next-button">Next</button>
//         </div>
//         <div class="dot-circle-container">

//         </div>
//     </div>
//     <script src="./Script.js"></script>
// </body>

// </html>


// .slider{
//     position: relative;
//     width: 400px;
//     height: 500px;
//     margin: 0 auto;
//     border: 1px solid black;
// }
// .slider img{
//     object-fit:contain;
//     width: 100%;
//     height: 100%;
// }
// .button-container{
//     display: flex;
//     justify-content: center;
//     gap: 10px;
//     margin: 0 auto;
// }
// .dot-circle-container{
//     display: flex;
//     justify-content: center;
//     gap: 5px;
//     margin: 0 auto;
//     margin-top: 10px;
// }
// .dot-circle{
//     width: 10px;
//     height: 10px;
//     border-radius: 50%;
// }
// .light-background{
//     background-color: aqua;
// }
// .dark-background{
//     background-color:black;
// }