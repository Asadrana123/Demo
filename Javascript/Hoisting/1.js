foo(); // Line A

function foo() {
  console.log("Hello from foo!");
}

bar(); // Line B

var bar = function () {
  console.log("Hello from bar!");
};
///Hoisting is a JavaScript behavior where variable and function declarations are moved 
// to the top of their scope during the compilation phase — before the code is executed.