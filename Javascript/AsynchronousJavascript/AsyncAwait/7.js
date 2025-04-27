async function foo() {
    console.log('foo start');
    await new Promise((resolve) => {
      console.log('promise inside foo');
      setTimeout(() => {
        console.log('timeout inside promise');
        resolve();
      }, 0);
    });
    console.log('foo end');
  }
  
  console.log('script start');
  
  foo();
  
  console.log('script end');
  