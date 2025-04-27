async function foo() {
    console.log('foo start');
    await bar();
    console.log('foo end');
}
async function bar() {
    console.log('bar');
}
console.log('script start');
foo();
console.log('script end');
//script start
//foo start
//bar
//script end 
//foo end