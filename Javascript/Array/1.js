const items = [
    { type: 'fruit', name: 'apple' },
    { type: 'fruit', name: 'banana' },
    { type: 'veggie', name: 'carrot' },
  ];
const results=items.reduce((acc,value)=>{
         if(acc[value.type]===undefined) acc[value.type]=[value.name]
         else acc[value.type].push(value.name)
         return acc;
},{})
console.log(results);