function addAllEvenNumbers(n) {
    let stack = []
    for(let i = 0; i <n.length; i++) {

        if(n[i] % 2 == 0) {
            stack.push(n[i]);
           
        }
    }
    return stack;
}
const stackOne = [0, 2, 3, 4, 5, 6];

console.log(addAllEvenNumbers(stackOne));