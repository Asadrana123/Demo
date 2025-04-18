function outer(){
    let counter=0;
    function increment(){
             counter++;
    }
    function getValue(){
        console.log(counter);
    }
    return {increment,getValue}
}

const {getValue,increment}=outer();
increment();
increment();
getValue();