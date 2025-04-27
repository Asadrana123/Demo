//remove duplicates
function removeDuplicates(arr){
     for(let i=0;i<arr.length;i++){
        if(arr.indexOf(arr[i])!==i){
           arr.splice(i,1)
        }
     }
     return arr;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
