let a = 10;

(function () {
  console.log(a); // Line A
  let a = 20;
  console.log(a); // Line B
})();
