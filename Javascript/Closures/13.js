function counter(){
    let _counter=0;
    function getValue(){
        console.log(_counter);
    }
    function increment(){
        _counter++;
    }
    function decrement(){
        _counter--;
    }
    return {getValue,increment,decrement};
}
const {getValue,increment,decrement}=counter();
 getValue();
 increment();
 getValue();