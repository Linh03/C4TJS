// function hello(m) {
// 	alert(m);
// }
// hello("Hello Jack");

// function Im(m) {
// 	alert("Hello" + m);
// }
// let m = 0;
// let n = 0;
// function somot() {
// 	m = Number(prompt("Nhập số thứ nhất"));
// }

// function sohai() {
// 	n = Number(prompt("Nhập số thứ hai"));
// }

// function tong() {
// 	alert(m + n);
// }

// function calc() {
// 	a = Number(prompt("num1"));
// 	b = prompt("operator");
// 	c = Number(prompt("num2"));
// 	if (b === "+") {
// 		console.log(a + c);
// 	}
// 	if (b === "-") {
// 		console.log(a - c);
// 	}
// 	if (b === "*") {
// 		console.log(a * c);
// 	}
// 	if (b === "/") {
// 		console.log(a / c);
// 	}
// }
// calc();
// let menu = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function array(m) {
// 	for (let i = 0; i < m.length; i++) {
// 		if (m[i] % 2 == 0) {
// 			console.log(m[i]);
// 		}
// 	}
// }
// array([123, 234, 345]);

// function email() {
// 	let i = document.getElementById("input");

// 	let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// 	if (!filter.test(i.value)) {
// 		alert("Hay nhap email hop le");
// 	} else {
// 		alert("OK roi day");
// 	}
// }

// function complicated() {
// 	x1 = Number(prompt("x cua m1"));
// 	y1 = Number(prompt("y cua m1"));
// 	x2 = Number(prompt("x cua m2"));
// 	y2 = Number(prompt("y cua m2"));
// 	w1 = Number(prompt("width cua m1"));
// 	w2 = Number(prompt("width cua m2"));
// 	h1 = Number(prompt("height cua m1"));
// 	h2 = Number(prompt("height cua m2"));
// 	if (
// 		(Math.abs(x1 + w1 / 2) - Math.abs(x2 + w2 / 2) <=
// 			Math.abs((w1 + w2) / 2)) &
// 		(Math.abs(y1 + h1 / 2) - Math.abs(y2 + h2 / 2) <=
// 			Math.abs((h1 + h2) / 2))
// 	) {
// 		console.log(true);
// 	} else {
// 		console.log(false);
// 	}
// }

//    let r= Math.floor(Math.random()*255)
//    let g= Math.floor(Math.random()*255)
//    let b=Math.floor(Math.random()*255)
   
   
//    let a=Math.floor(Math.random()*2)
//    let n=0
  
// //    console.log(r)
  
// let heading=document.getElementById("rgb")
//   heading.textContent=`rgb(${r},${g},${b})`
//   let dung=document.getElementById("mot")
// //   dung.style.backgroundColor= `rgb(${r},${g},${b})`
//   let sai1=document.getElementById("hai")
// //   sai1.style.backgroundColor= `rgb(${r1},${g1},${b1})`
//   let sai2=document.getElementById("ba")
// // sai2.style.backgroundColor= `rgb(${r2},${g2},${b2})`
//   dung.addEventListener("click", function(){
//       n++
//       console.log(n)

  // })
  // sai1.addEventListener("click", function(){console.log(n)})
  //   sai2.addEventListener("click", function(){console.log(n)})
// let button=document.getElementsByTagName("button")
// console.log(button)
//  function generatecolor(){ for (let i=0; i<3; i++){if (i=a){button[i].style.backgroundColor=`rgb(${r},${g},${b})`} 
// else {   let r1=Math.floor(Math.random()*255)
//   let g1=Math.floor(Math.random()*255)
//   let b1=Math.floor(Math.random()*255)
// button[i].style.backgroundColor =`rgb(${r1},${g1},${b1})` }}}
// generatecolor ()
// for (let i=0; i<3; i++) {
//   button[i].addEventListener("click", function(e){
//     let klq=e.target; 
//     let index= button.getAttribute("index")
//     if (index==a){n++} else {n=0}
//     let diem=getElementById("thuongdang")
//     diem.textContent=`SCORE: ${n}`
//   }
//   )
//   generatecolor()
// }
let n=0
let left= document.getElementById("left")
let right=document.getElementById("right")
left.addEventListener("click",function(){n--;
  let number=document.getElementById("number")
  number.textContent=`${n}`})
right.addEventListener("click",function(){n++;
  let number=document.getElementById("number")
  number.textContent=`${n}`})


