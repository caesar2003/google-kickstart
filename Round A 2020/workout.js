const fs = require('fs');
const input = fs.readFileSync("input-workout.txt", 'utf8').trim().split('\n');

let currentline = 0;
function readline(){
    return input[currentline++];
}

let T = readline();
for(let i = 1; i <= T; i++){
    let [N, K] = readline().split(' ');
    let arr = readline().split(' ');
    console.log(`Case #${i}: ${solve(K, arr)}`);
    
}


function solve(K, arr) {
    for (let p = 0; p < K; p++) {
    let differenz = arr[1]-arr[0];
    var auswertung = [0, differenz];
    for (let i = 1; i < arr.length; i++) {
        if (differenz < arr[i+1]-arr[i]) {
            differenz =  arr[i+1]-arr[i] 
            auswertung = [i, differenz]  
        }
        
      
    }
        
    
    arr.splice(auswertung[0]+1, 0, Math.round(auswertung[1]/2 + parseInt(arr[auswertung[0]])));
    }



  /*  differenz = arr[1]-arr[0];
    auswertung = [0, differenz];
    for (let i = 2; i < arr.length; i++) {
        if (differenz <= arr[i+1]-arr[i]) {
            differenz =  arr[i+1]-arr[i] 
            auswertung = [i, differenz]  
        }
        
      
    }*/
    let ergebnis = 0
    for (let i = 0; i < arr.length-2; i++) {
        if (arr[i+1]-arr[i] == arr[i+2]- arr[i+1]) {
            if (arr[i+1]-arr[i] > ergebnis) {
                ergebnis =  arr[i+1]-arr[i]  
            }
        }    
    }








    return ergebnis



    
}

