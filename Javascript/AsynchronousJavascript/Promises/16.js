console.log('First');

setTimeout(function() {
  console.log('Second');
}, 0);

for (let i = 0; i < 1000000000; i++) {}

console.log('Third');
