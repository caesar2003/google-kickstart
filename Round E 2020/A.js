const fs = require('fs');
const input = fs.readFileSync("../Round E 2020/testdataA/test_set_2/ts2_input.txt", 'utf8').trim().split('\n');


let currentline = 0;
function readline(){
    return input[currentline++];
}


let T = readline();
for(let i = 1; i <= T; i++){
    let arraylength = readline().split(' ');
    let integers = readline().split(' ');
    console.log(`Case #${i}: ${solve(arraylength,integers)}`);
}

function solve(arraylength, integers) {
    let difference; 
    let counter = 2
    let maxcon=2;
    for (let i = 0; i < arraylength; i++) {
        if (integers[i+1] - integers[i] == difference) {
            counter +=1
            if (counter > maxcon) {
                maxcon = counter
            }
        } else {
            counter = 2
        }
        difference = integers[i+1] - integers[i]
    }
    return maxcon
}

