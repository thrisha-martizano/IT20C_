function sum(num1,num2){
    sum = num1 + num2;
    console.log(sum);
}

sum(2,3);

function diff(num1,num2){
    diff = num1 - num2;
    console.log(diff);
}

diff(2,3);

function prod(num1,num2){
    prod = num1 * num2;
    console.log(prod);
}

prod(2,3);

function quo(num1,num2){
    if(num2 === 0){
        console.log("Cannot divide by zero");
    } else {
        quo = num1 / num2;
        console.log(quo);
    }
}

quo(2,0);