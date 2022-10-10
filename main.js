//var a = prompt("NHAP SO A");
//var b = prompt("NHAP SO B");
//var c = a % b
//if (c == 0) {
//   alert("a la boi so cua b")
//}

function tinh() {
    var c = +document.getElementById("tien").value;
    var a = document.getElementById("x").value;
    var b = document.getElementById("y").value;
    var d ;

    if (a === "USD" && b === "VIET") {
        d = c * 23000;
    }

    if (a === "VIET" && b === "USD") {
        d = c / 23000;

    }
    document.getElementById("nhanketqua").innerHTML = d;
}




