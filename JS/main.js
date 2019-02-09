var btnPlus = document.getElementById("plus");
var btnMinus = document.getElementById("minus");

function myFunctionPlus() {
    let input = parseInt(document.getElementById("input").value);
    let num = parseInt(document.getElementById("num").innerHTML);
    var total = (input + num);
    document.getElementById("num").innerHTML = total;
    if (total < 0)
        document.getElementById("num").style.color = 'red'
    else 
        document.getElementById("num").style.color = 'black'
};

function myFunctionMinus() {
    let input = parseInt(document.getElementById("input").value);
    let num = parseInt(document.getElementById("num").innerHTML);
    var total = (num - input);
    document.getElementById("num").innerHTML = total;
    if (total < 0) {
        document.getElementById("num").style.color = 'red'
    } else 
        document.getElementById("num").style.color = 'black'
};
