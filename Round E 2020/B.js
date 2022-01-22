const fs = require('fs');
const input = fs.readFileSync("../Round E 2020/testdataB/test_set_1/ts1_input.txt", 'utf8').trim().split('\n');


let currentline = 0;
function readline(){
    return input[currentline++];
}


let T = readline();
for(let i = 1; i <= T; i++){
    let array = readline().split(' ');
    console.log(`Case #${i}: ${solve(array)}`);
}

function solve(array) {
    let height = []
    //Die größten Gebäude erhalten beide die Höhe des Betrages der Anzahl der Häuser
    for (let i = 0; i < array[3]; i++) {
       height.push(array[0])   
    }
    // Gebäude links werden hinzugefügt
    if (array[1]>array[3]) {
        for (let i = 0; i < array[1]-array[3]; i++) {
            height.unshift(array[0]-i-1)
        }
    }
    //Gebäude rechts werden hinzugefügt
    if (array[2]>array[3]) {
        for (let i = 0; i < array[2]-array[3]; i++) {
            height.push(array[0]-i-1)
        }
    }
    let anzahlhaus = height.length
    if (array[1]<array[3]) {
        for (let i = 0; i < array[0]-anzahlhaus; i++) {
            height.splice(1, 0, 1);
        }
    }
    if(array[2]<array[3]){
        for (let i = 0; i < array[0]-anzahlhaus; i++) {
            height.splice(height.length-1, 0, 1);
        }
    }
    if (array[1]== array[2] ==array[3]) {
        for (let i = 0; i < array[0]-anzahlhaus; i++) {
            height.splice(height.length-1, 0, 1);
        }
    }
    if (height.length> array[0]) {
        return "IMPOSSIBLE"
    }else{
        return height.join(' ')
    }
}