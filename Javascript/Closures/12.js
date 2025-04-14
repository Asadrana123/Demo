function a() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function () {
              function print(i){
                   console.log(i);
              }
              print(i)
        },i*1000)
    }
}
a();
// it will print 3 3 3 because print will be call after the excuting of 
// loop and it will pass value three to all print function
function a() {
    for (var i = 0; i < 3; i++) {
        function inner(i){
                setTimeout(()=>{
                   console.log(i)
                },1000)
        }
        inner(i);
    }
}
a();

// it will print 0 1 2