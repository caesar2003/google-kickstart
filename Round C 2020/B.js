const fs = require('fs');
const input = fs.readFileSync("inputA.txt", 'utf8').trim().split('\n');


let currentline = 0;
function readline(){
    return input[currentline++];
}


let T = readline();
for(let i = 1; i <= T; i++){
        N = readline().split(' ');
    let arr = readline().split(' ');
    //console.log(`Case #${i}: ${solve(N, arr)}`);
}

function solve(arr) {
    for (let i = 0; i < arr; i++) {
        loops(i,arr)
    }      
}
function loops(i,arr) {
    for (let p = i+1; p < arr+1; p++) {
        arrayloop(i,p,arr)
    }
}
function arrayloop(i,p,arr) {
    for (let x = p+1; x < arr+2; x++) {
        console.log(i,p,x)  
    }
}  

//solve(2)

for (let l = 0; l < 3; l++) {
    for (let q = l+1; q < 4; q++) {
        
        console.log(l,q)    
    }
    
    
}
