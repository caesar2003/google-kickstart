const fs = require('fs');
const input = fs.readFileSync("input-allocation.txt", 'utf8').trim().split('\n');
console.log(input)

let currentline = 0;
function readline(){
    return input[currentline++];
}

let T = readline();
for(let i = 1; i <= T; i++){
    let [N, B] = readline().split(' ');
    let arr = readline().split(' ');
    console.log(`Case #${i}: ${solve(B, arr)}`);
}

function solve(B, arr){
    let count = 0;
    let sum = 0;
    
    arr.sort((a,b)=> a-b);

    for(let k = 0; k < arr.length; k++){
        sum+= +arr[k];
        if(sum <= B){
            count++;
        } else {
            return count;
        }
    }
    return count;
}