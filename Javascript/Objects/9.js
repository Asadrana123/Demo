const a={value:"Hey"};
const b=a;
b.value="Hi";
console.log(a);

//here b is taking the refrence not value

console.log({a:1}=={a:1});
//because both are refering to different memory space