function outestsum(a) {
    function outersum(b) {
        function innersum(c) {
            return a + b + c;
        }
        return innersum;
    }
    return outersum;
}
const temp = outestsum(1)(2);
console.log(temp(3));