function fizzBuzz(s) {
    const result = []; 

    for (let i = 0; i <=s; i++) {
        let output = '' ; 

        if(i % 3 === 0 ) {
            output += 'Fizz'
        }

        if(i % 5 === 0 ) {
            output += 'Buzz'
        }

        if(output === '') {
            output = i.toString();
        }

        result.push(output)
    }

    return result;
}

console.log(fizzBuzz(15));

function fizzBuzz2(n) {
    for(let i = 0; i<=n; i++) {


        if(i % 3 === 0) {
            console.log("Fizz")
        } else if(i % 5 === 0) {
            console.log("Buzz")
        }  else {
            console.log(i)
        }


    }
}
fizzBuzz2(15);