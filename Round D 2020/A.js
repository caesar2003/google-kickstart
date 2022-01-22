const fs = require('fs');
const input = fs.readFileSync("inputA.txt", 'utf8').trim().split('\n');


let currentline = 0;
function readline(){
    return input[currentline++];
}


let T = readline();
for(let i = 1; i <= T; i++){
    let n = readline().split(' ');
    let v = readline().split(' ');
    console.log(`Case #${i}: ${solve(n, v)}`);
}

function solve(n, v) {
    let counter = 0
    let prev = 0
    for (let i = 0; i < v.length; i++) {
        if (v[i] > prev) {
            if (v[i] == v.length-1) {
                counter++
            }else{
                if (v[i] > v[i+1]) {
                    counter++
                }
            }
            prev = v[i]
        }
        
    }
    return counter
}

