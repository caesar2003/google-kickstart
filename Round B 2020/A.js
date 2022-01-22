const fs = require('fs');
const input = fs.readFileSync("inputA.txt", 'utf8').trim().split('\n');


let currentline = 0;
function readline(){
    return input[currentline++];
}

let T = readline();
for(let i = 1; i <= T; i++){
    let N = readline().split(' ');
    let arr = readline().split(' ');
    console.log(`Case #${i}: ${solve(N, arr)}`);
}

function solve(N, arr) {
    let peaks = 0
    for (let i = 1; i < arr.length; i++) {
        if (parseInt(arr[i]) > parseInt(arr[i-1]) && parseInt(arr[i]) > parseInt(arr[i+1])) {
            peaks++   
        }
        
    } 
    return peaks   
}