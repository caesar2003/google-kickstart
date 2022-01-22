const fs = require('fs');
const input = fs.readFileSync("inputA.txt", 'utf8').trim().split('\n');
const output = fs.readFileSync("ts1_output.txt", 'utf8').trim().split('\n');

var line = 0;
function readlines(){
    return output[line++];
}






let currentline = 0;
function readline(){
    return input[currentline++];
}


let T = readline();
for(let i = 1; i <= T; i++){
    let arraylength = readline().split(' ');
    let integers = readline().split(' ');
    lösung = `Case #${i}: ${solve(arraylength,integers)}`
    //console.log(lösung);
    var solution = readlines().trim();
    //console.log(solution)
    if (solution ==lösung){
        console.log("True")
    }else{
        console.log("FAlse")
    }
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



