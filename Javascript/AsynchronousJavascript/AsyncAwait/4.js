async function foo() {
    console.log('foo start');
    return 'foo result';
  }
  
  console.log('script start');
  
  foo().then(result => console.log(result));
  
  console.log('script end');
  