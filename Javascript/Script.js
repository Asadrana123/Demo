const circlesList = document.querySelectorAll('.circle');
const resetButton=document.getElementById('reset-button');
const records=[]
circlesList.forEach((circle,index) => {
    circle.addEventListener('click', function () {
        circle.classList.toggle('red-background');
        circle.classList.toggle('green-background');
        records.push(index)
    })
})
resetButton.addEventListener('click',function(){
    let count=0;
    for(let i=records.length-1;i>=0;i--){
        console.log(i);
        setTimeout(()=>{
              circlesList[records[i]].classList.remove('green-background');
              circlesList[records[i]].classList.add('red-background')
        },count*1000)
        count++;
    }
})