let num = "";
let a = null;
let sign = null;

function clearfun(){
    num = "";
    a = null;
    sign = null;
    document.getElementById('num').value = "";
    document.getElementById('ans').value = "";
}

function deletefun(){
    num = num.slice(0, -1);
    document.getElementById('num').value = num;
}

function operationfun(op){
    a = parseFloat(num);
    sign = op;
    num = "";
    document.getElementById('num').value = num;
}

function operendfun(n){
    num += n;
    document.getElementById('num').value = num;
}

function calculate(){
    let b = parseFloat(num);
    let result;

    switch(sign){
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        case '%':
            result = a % b;
            break;
    }

    document.getElementById('ans').value = result;
    num = result.toString();
    a = null;
    sign = null;
}