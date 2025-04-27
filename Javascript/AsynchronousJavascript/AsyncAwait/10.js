async function foo() {
    console.log('foo start');
    await bar();
    console.log('foo middle');
    await baz();
    console.log('foo end');
  }
  
  async function bar() {
    console.log('bar start');
    await setTimeoutPromise(0);
    console.log('bar end');
  }
  
  async function baz() {
    console.log('baz start');
    await setTimeoutPromise(0);
    console.log('baz end');
  }
  
  function setTimeoutPromise(ms) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('timeout inside Promise');
        resolve();
      }, ms);
    });
  }
  
  console.log('script start');
  foo();
  console.log('script end');
  