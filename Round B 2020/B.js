const fs = require('fs');
const input = fs.readFileSync("inputB.txt", 'utf8').trim().split('\n');


let currentline = 0;
function readline(){
    return input[currentline++];
}

let T = readline();
for(let i = 1; i <= T; i++){
    let [N,B] = readline().split(' ');
    let arr = readline().split(' ');
    console.log(`Case #${i}: ${solve(N,B, arr)}`);
}

function solve(N,B, arr) {
    let days = B
    for (let i = N-1; i >= 0; i--) {
        let division = Math.floor(days/arr[i])
        days = days-(days-arr[i]*division)
    }
    return days
}