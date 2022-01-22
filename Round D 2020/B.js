const fs = require('fs');
const input = fs.readFileSync("inputB.txt", 'utf8').trim().split('\n');


let currentline = 0;
function readline(){
    return input[currentline++];
}


let T = readline();
for(let i = 1; i <= T; i++){
    let arraylength = readline().split(' ');
    let keys = readline().split(' ');
    console.log(`Case #${i}: ${solve(arraylength, keys)}`);
    //solve(arraylength, keys);
}

function solve(arraylength, keys) {
    let broken = 0
    let counter = 0
    for (let i = 0; i < arraylength; i++) {
        if (keys[i] > keys[i+1]) {
            counter++
        }else if(keys[i] < keys[i+1]){
            counter--
        }
        if (Math.abs(counter)> 3) {
            broken++
            counter = 0
        }
        
    }
    return broken
}

