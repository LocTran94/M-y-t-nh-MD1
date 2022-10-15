function bài1() {

   let a = +prompt('nhập nhiệt độ');
   while (a < 20){
      alert('tăng nhiệt độ');
      a = +prompt('tăng nhiệt độ')
   }
   while (a > 100){
      alert('giảm nhiệt độ');
      a = +prompt('giảm nhiệt độ')
   }

}









function bài2() {

let a = prompt("nhập a");
if ( a % 4 ===0 && a % 100 != 0   ){
    alert('năm nhuận');
}
else if ( a % 100 === 0 && a % 400 != 0 ){
    alert('năm không nhuận');
}
else if ( a % 100 === 0 && a % 400 === 0 ){
    alert('năm nhuận')
}

}











function bài3() {


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
}






function bài4() {

let b = document.getElementById('1');

    b.style.position = 'relative'
    b.style.left = '200px';
    b.style.top = '60px';

function dichuyenphai() {
    b.style.left = parseInt(b.style.left) + 10 + 'px';

}

function dichuyentrai() {
    b.style.left = parseInt(b.style.left) - 10 + 'px';

}

function dichuyenlen() {
    b.style.top = parseInt(b.style.top) - 10 + 'px'
}
function dichuyenxuong() {
    b.style.top = parseInt(b.style.top) + 10 + 'px'
}

}


// let tong = 0
// let a =  +prompt('nhập a')
// while( a != -1 ) {
//      a = prompt("Enter a number: ");
//     tong = tong + a.value;
//
// }
//
// console.log("ket qua :" + tong)
//
//
//
//
//

// let tong = 0;
// let a = 0;
// do{
//      a = +prompt('Nhap so bat ki')
//      tong += a
// }
// while (a!==-1)
// tong++
// console.log(tong)
//
// function timSoNguyenTo(N) {
//      for(let i = 2; i<=N ; i++){
//           if(checkSNT(i)){
//                document.write(i + " ");
//           }
//      }}






// function checkSNT(n) {
//      for(let j= 2; j<n; j++){
//           if (n%j==0){
//                return false;
//           }
//      }
//      return  true;
// }
// let input = prompt('Nhap so :')
// timSoNguyenTo(input);










function bài5() {


for (let a = 1; a <= 100; a++){
    if (a % 3 === 0 ){
        document.write('fizz' + '<br/>')
    }

    else if (a % 5 === 0){
        document.write('buss '+ '<br/>')
    }

    else if (a % 15 === 0){
        document.write('FizzBuzz' +' <br/>')
    }

    else {
        document.write(a +'<br/>');
    }


}
}










function bài6() {


           let t = +prompt('nhập độ dài khoảng');
           let  a = new Array();
           a.length = t;
           let c = Math.floor(Math.random()*t) ;
          console.log(c);



        for (let i = 0; i < 3; i++) {
        let b = +prompt("nhập số");
        if (c === b) {

            alert('hello kitty');
            break;
        } else {
            alert('nhập lại đi')
        }

    }

}






function bài7() {
   let tong = 0;
   let sochay = 0;
   for (let i = 1; i < 31; i++) {

      sochay = sochay + 7;
      tong = tong + sochay;

   }
   console.log(tong);


}




// let count = 0, tong =0
//     let dayso =""
//    for (let i=1; ; i++){
//       if(i%7==0){
//         dayso += i+" "
//          console.log(dayso)
//          tong += i
//          count++
//          if(count==30) break
//      }
//    }
//    document.write(dayso+"<br>")
//   document.write("Tổng bằng "+tong)



