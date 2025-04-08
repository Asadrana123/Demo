foo(); // Line A

function foo() {
  console.log("Hello from foo!");
}

bar(); // Line B

var bar = function () {
  console.log("Hello from bar!");
};
