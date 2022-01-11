// 値のクリア
function clearScreen() {
    document.getElementById("result").value = "";
}

// 値を評価して表示表示
function display(value) {
    document.getElementById("result").value += value;
    let p = document.getElementById("result").value;
    let q = eval(p);
    document.getElementById("result").value = q;
    document.getElementById
}

// 式の評価
function calculate() {
    let p = document.getElementById("result").value;
    let q = eval(p);
    document.getElementById("result").value = q;
}

//最後に入力された値をクリア
function clear() {
    let p = document.getElementById("result").value;
    let result = p.split('+', -1);
    console.log(result);
}