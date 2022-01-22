const fs = require('fs');
const input = fs.readFileSync("input-plates.txt", 'utf8').trim().split('\n');


let currentline = 0;
function readline(){
    return input[currentline++];
}


let arr = [];
let T = readline();
let p = 0;
for(let i = 1; i <= T; i++){
    let [N, K, P] = readline().split(' ');
    while (p < N) {
        arr[p] = readline().split(' ').map(i=>Number(i))
        p++
    }
    p=0;
    
    console.log(`Case #${i}: ${solution(N, K, P, arr)}`);
    
   

}




function solution(N, K, P, arr) {
    let returns = N*K - P
    for (let i = 0; i < returns; i++) {
        for (let i = 0; i < N-1; i++) {
            
            if (arr[i][arr[i].length -1] < arr[i+1][arr[i+1].length -1]) {
                arr[i].pop()        
            } else {
                arr[i+1].pop()
                
            }
            
        }
        
    }
    let sum = 0
    for (let index = 0; index < arr.length; index++) {
        for (let l = 0; l < arr[index].length; l++) {
            sum = sum + arr[index][l]
            
        }
        
    }
    return sum
    
    
}
