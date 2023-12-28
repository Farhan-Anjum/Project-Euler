const sumOfMultiples  = function (limit){
    let sum = 0;
    for (i = 1; i<=limit; i++){
        if(i % 3 == 0 || i % 5==0){
            sum += i; 
        }
    }
return sum;
}

const a = sumOfMultiples (1000)
console.log(a);