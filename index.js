function print_scrambles(){
    let cubeType = document.getElementById("cubetypes").value;
    let n = document.getElementById("numscrambles").value;
    let scrambles = generateScrambles(cubeType, n);
    (document.getElementById('scrambles')).innerHTML = scrambles.join('\n');
}
function scr_2x2(n, moveSet, attrSet){
    let indexMove = Math.floor(Math.random() * moveSet.length);
    let indexAttr;
    let scrambles = [];
    let previousMove = moveSet.splice(indexMove, 1)[0];
    for (let i = 0; i < n; i++){
        length = Math.floor(Math.random() * 2) + 9;
        scrambles[i] = `${i+1}. `;
        for (let j = 0; j < length; j++){
            indexMove = Math.floor(Math.random() * moveSet.length);
            indexAttr = Math.floor(Math.random() * attrSet.length);
            move = moveSet[indexMove];
            let attr = attrSet[indexAttr];
            scrambles[i] += move + attr;
            p = previousMove;
            previousMove = move;
            moveSet[indexMove] = p;
        }
    }
    return scrambles;
}

function scr_3x3(n, moveSet, attrSet){
    let indexMove = Math.floor(Math.random() * moveSet.length);
    let indexAttr;
    let scrambles = [];
    let previousMoves = moveSet.splice(indexMove, 1);
    for (let i = 0; i < n; i++){
        length = Math.floor(Math.random() * 6) + 18;
        scrambles[i] = `${i+1}. `;
        for (let j = 0; j < length; j++){
            indexMove = Math.floor(Math.random() * moveSet.length);
            indexAttr = Math.floor(Math.random() * attrSet.length);
            move = moveSet[indexMove];
            scrambles[i] += move + attrSet[indexAttr];
            cond1 = (move == "U" && previousMoves[0] == "D") || (move == "D" && previousMoves[0] == "U");
            cond2 = (move == "R" && previousMoves[0] == "L") || (move == "L" && previousMoves[0] == "R");
            cond3 = (move == "F" && previousMoves[0] == "B") || (move == "B" && previousMoves[0] == "F");
            l = previousMoves.length;
            if (l != 1){
                for (let _ = 0; _ < l; _++){
                    moveSet.push(previousMoves.splice(0, 1)[0]);
                }
            }
            else if (!(cond1 || cond2 || cond3)){
                moveSet.push(previousMoves.splice(0, 1)[0]);
            }
            previousMoves.push(moveSet.splice(indexMove, 1)[0]);
        }
    }
    return scrambles;
}

function scr_skewb(n, moveSet, attrSet){
    let indexMove = Math.floor(Math.random() * moveSet.length);
    let indexAttr;
    let scrambles = [];
    let previousMove = moveSet.splice(indexMove, 1)[0];
    for (let i = 0; i < n; i++){
        length = Math.floor(Math.random() * 2) + 8;
        scrambles[i] = `${i+1}. `;
        for (let j = 0; j < length; j++){
            indexMove = Math.floor(Math.random() * moveSet.length);
            indexAttr = Math.floor(Math.random() * attrSet.length);
            move = moveSet[indexMove];
            let attr = attrSet[indexAttr];
            scrambles[i] += move + attr;
            p = previousMove;
            previousMove = move;
            moveSet[indexMove] = p;
        }
    }
    return scrambles;
}

function scr_minx(n){
    let scrambles = [];
    let attr1 = ["-- ", "++ "];
    let attr2 = ["' ", " "];
    for (let i = 0; i < n; i++){
        length = Math.floor(Math.random() * 2) + 9;
        scrambles[i] = `${i+1}. `;
        for (let j = 0; j < length; j++){
            for (let k = 0; k < 5; k++){
                sign = Math.floor(Math.random() * 2);
                scrambles[i] += k;
            }
        }
    }
    return scrambles;
}

function generateScrambles(cubeType, n){
    let length, moveSet, attrSet;
    if (n > 100){
        n = 100;
    }
    switch(cubeType){
        case "2x2":
            moveSet = ["U", "R", "F"];
            attrSet = ["' ", " ", "2 "];
            scrambles = scr_2x2(n, moveSet, attrSet);
            break;
        case "3x3":
            length = 21;
            moveSet = ["U", "R", "F", "D", "L", "B"];
            attrSet = ["' ", " ", "2 "];
            scrambles = scr_3x3(n, moveSet, attrSet);
            break;
        case "skewb":
            length = 10;
            moveSet = ["U", "R", "L", "B"];
            attrSet = ["' ", " "];
            scrambles = scr_skewb(n, moveSet, attrSet);
            break;            
    }
    /*
    let indexMove = Math.floor(Math.random() * moveSet.length);
    let indexAttr;
    let scrambles = [];
    let previousMove = moveSet.splice(indexMove, 1)[0];
    for (let i = 0; i < n; i++){
        scrambles[i] = `${i+1}. `;
        for (let j = 0; j < length; j++){
            indexMove = Math.floor(Math.random() * moveSet.length);
            indexAttr = Math.floor(Math.random() * attrSet.length);
            move = moveSet[indexMove];
            let attr = attrSet[indexAttr];
            scrambles[i] += move + attr;
            p = previousMove;
            previousMove = move;
            moveSet[indexMove] = p;
        }
    }*/
    return scrambles;
}