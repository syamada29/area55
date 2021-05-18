let correct_answer;

function randomExe(){
    let value1 = Math.round(Math.random() * 99 + 1);
    let value2 = Math.round(Math.random() * 99 + 1);
    let choice = Math.round(Math.random()*3);
    let operator = ["-", "+", "x", "÷"];
    let ans;

    switch(choice){
        case 0:
            ans = value1 - value2;
            break;
        case 1:
            ans = value1 + value2;
            break;
        case 2:
            ans = value1 * value2;
            break;
        case 3:
            ans = Math.round((value1 / value2)*10) / 10;
            break;
        default:
            break;
    }
    return [value1,value2,operator[choice],ans];
}

function onClickCalcTest(){
    let calcexe = document.getElementById("calcexe");
    let calcprogram = randomExe();
    calcexe.textContent = calcprogram[0] + " " + calcprogram[2] + " " + calcprogram[1] + " ="
    correct_answer = calcprogram[3];
}

function checkResult(){
    let answer = document.getElementById("answer");
    let answervalue = parseFloat(answer.value);

    let result = document.getElementById("result");

    if(answervalue === correct_answer){
        result.textContent = answervalue + "は正解です。";
    }else{
        result.textContent = "不正解です。正解は" + correct_answer + "です。";
    }
}