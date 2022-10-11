/*let a = prompt("nhập a");
if ( a % 4 ===0 && a % 100 != 0   ){
    alert('năm nhuận');
}
else if ( a % 100 === 0 && a % 400 != 0 ){
    alert('năm không nhuận');
}
else if ( a % 100 === 0 && a % 400 === 0 ){
    alert('năm nhuận')
}
/*

 */


/*let browser = prompt("Enter browser name!")
switch (browser){
    case 'Edge':
    alert("You've got the Edge!");
    break;
    case 'chrome':
    alert("Okay we support these browsers too");
    break;
    case ' Firefox':
    alert("Okay we support these browsers too");
    break;
    case 'Safari':
    alert("Okay we support these browsers too");
    break;
    case ' Opera':
    alert("Okay we support these browsers too");
    break;
    default:
        alert('We hope that this page looks ok!')

 //(browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
    //alert('Okay we support these browsers too');

}

 */


//let a = +prompt("a");
//let b = +prompt("b");
//let ok = (a + b < 4) ? 'Below' : 'Over';
//alert(ok);




/*let a = prompt("nhập a")

if (a <12){
    alert('chém gió')
}
else  if (a > 12){
    alert('ngu')
}
else {
    alert('đúng rồi')
}

 */


let result = '';

function xuLyDuLieu(input) {
    let a = document.getElementById(input).value;
    result += a;
    document.getElementById('result').innerHTML = result;
}


function xuLyKetQua() {
    let ketQua = eval(result);
    document.getElementById('result').innerHTML = ketQua;
    result = ketQua;
}


function xoa() {
    document.getElementById('result').innerHTML = '0';
    result = '';
}
