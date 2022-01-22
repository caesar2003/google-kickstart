const fs = require('fs');
const input = fs.readFileSync("inputA.txt", 'utf8').trim().split('\n');


let currentline = 0;
function readline(){
    return input[currentline++];
}

let x = 1
let p = 0
let loop = true
let cd = 0
let T = readline();
for(let i = 1; i <= T; i++){
    let [N,K] = readline().split(' ');
    let arr = readline().split(' ');
    console.log(`Case #${i}: ${solve(N, K, arr)}`);
    cd = 0
    x = 1
    p = 0
    loop = true
}

function solve(N, K, arr) {
    for (let i = 1; i < arr.length ; i++) {
        if (arr[i] == 1) {
            let z = arr[i]
            for (let p = i-1; loop == true; p--) {
                if (arr[p] == z +1) {
                    z++    
                }else{
                    loop = false
                }  
            }
            if (i - p > 1 && i - p >= x) {
                cd++
                x = i- p    
            }
               
        }    
        
    }
    return cd
    
}