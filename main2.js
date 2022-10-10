

function thuchien() {

    let a = +document.getElementById('s1').value;
    let b = +document.getElementById('s2').value;
    let c = document.getElementById('abc').value;
    let d ;

    if (c == "1"){
        d = a + b;
    }
    if ( c == "2"){
    d = a - b;
    }
if ( c == "3"){
    d = a * b;
}
    if ( c == "4"){
        d = a / b;
    }
document.getElementById('nhanketqua').innerHTML = d;
}

function myFunction() {
    document.getElementById('s1').value = '';
    document.getElementById('s2').value = '';
    document.getElementById('nhanketqua').innerHTML = '';
}