let power = document.getElementById("powerimg");
let calculator = document.getElementById("maindiv");
let end = document.getElementById("endbutton");
let back = document.getElementById("backbutton");
let screen = document.getElementById("input");

end.onclick = function () {
    screen.value = "";
}
back.onclick = function () {
    screen.value = screen.value.slice(0, -1);
}

function f(val) {
    let a = screen.value.slice(-1);
    if ((a == "+" || a == "-" || a == "*" || a == "/" || a == '.') && (val == "+" || val == "-" || val == "*" || val == "/" || val == '.')) {
        screen.value = screen.value.slice(0, -1);
        screen.value += val
    }
    else {
        screen.value += val;
    }
}
function s() {
    screen.value = eval(screen.value)
}