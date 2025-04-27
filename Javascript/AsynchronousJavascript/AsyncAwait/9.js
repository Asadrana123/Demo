async function foo() {
    console.log('foo start');
    await bar();
    console.log('foo end');
  }
  
  async function bar() {
    console.log('bar start');
    await baz();
    console.log('bar end');
  }
  
  async function baz() {
    console.log('baz start');
    setTimeout(() => {
      console.log('timeout in baz');
    }, 0);
    console.log('baz end');
  }
  
  console.log('script start');
  
  foo();
  
  console.log('script end');
  