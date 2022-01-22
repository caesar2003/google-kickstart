const fs = require('fs');
const input = fs.readFileSync("inputC.txt", 'utf8').trim().split('\n');


let currentline = 0;
function readline(){
    return input[currentline++];
}

let T = readline();
for(let i = 1; i <= T; i++){
    let order = readline()
    //console.log(`Case #${i}: ${solve(arr)}`);
}

let klammercount = 1

function solve(order) {
    let array = order.split('')
    for (let index = 0; index < array.length; index++) {
        if (isLetter(array[index]) == false) {
            console.log("Hello World")
            for (var klammer = index+2; klammercount > 0; klammer++) {
                if (array[klammer] == "(") {
                klammercount++    
                } else if(array[klammer] == ")") {
                klammercount-- 
                }   
            
            }
            let closingindex = klammer - 1
            next(array[index], closingindex, klammer)
        
        }    
        
    }
}
solve('2(N3(WE))')

function next(zahl, closingindex , klammer) {
    for (let r = klammer; r < closingindex - klammer; r++) {
        if (isLetter(array[r]) == false) {
          console.log("schiße")  
        }   
        
    }
}






function isLetter(char) {
    return (/[A-Z]/).test(char)
  }
