//สรุปส่วนที่1
//ตัวดำเนินการแบบตรรกะ OR
// || หรือ ถ้าเป็นจริงจะทำให้ทั้งหมดเป็นจริง มีตัวใดตัวหนึ่งเป็นจริง ก็จะจริงทั้งหมด
// alert( true || true );   // true
// alert( false || true );  // true
// alert( true || false );  // true
// alert( false || false ); // false

// if (1 || 0) { // works just like if( true || false )
//     alert( 'truthy!' );
//   }


// let hour = 10;
// if (hour < 10 || hour > 18) {
//   alert( 'The office is closed.' );
// }

//การเปรียบเทียบ
// console.log(1>2||3>2)
// console.log( 1>3 || 5<4)


// let age = prompt('Enter age')
// if (age<18 || age >60){
//     console.log('Not Qualify')
// }else{
//     console.log('Qualify')
// }


// console.log( 1>2|| 2>3 || 6<9)
// console.log( 1>2 || 2>3 || 6<6)
// console.log( 1>2 || 2>3 || "H")
// console.log(2>5 || 5>2 || null) //เจอค่าถูกแค่ตัวเดียว มันก็จะเป็น ture 
// console.log(2>5 || 5<3 || console.log('End'))
// console.log(1==2 || "Haha" || 6>3) //boolean  ของ สตริงใดๆจะเป็นture เสมอ
// console.log(Boolean("Haha"))
// // console.log(1==2 || "Haha" || 6>3 || console.log('it TRUE after Eval...'))
// // if (1==2 || "Haha" || 6>3 {console.log ('it TRUE after Eval...')})
// console.log(true || 'not matter')
// console.log("not matter" || ture)
// console.log(Boolean("not matter"))
// console.log(null || 1)
// console.log(Boolean(  null || 1))
// console.log(null || 0 || "") // มันจะแสดงค่าสุดท้ายออกมา
// console.log("" || null || 0) // มันจะแสดงค่าสุดท้ายออกมา
// console.log("" || null || "ok" || 0) //ok

// alert(null||1);
// alert(null || 0 || 1);
// alert(undefined || null || 0)  

//////////////////////////////////////////////////////////////////////////////////////////////
//การประยุกใช้
// let currentUser = prompt("Current User")
// let defaultUser = prompt("Default User")
// let userName = currentUser || defaultUser || "Unknown User"
// console.log(userName)

////////////////////////////////////////////////////////////////////////////////////////////////////
//short circuit 
// let x;
// true || (x=1);
// alert(x); //un

// let x 
// true || (x=1)
// console.log(x);


// let x 
// false || (x=1)
// console.log(x);

// let x
// undefined

// true || (x=1)
// true

// x
// undefined

// false || (x=1)
// 1

// x
// 1

// Boolean(x=1)
// true

// let y 
// undefined

// Boolean(y=5)
// true

// Boolean(y=0)
// false

// Boolean(y=-10)
// true

// Boolean("")
// false

// Boolean(y="")
// false 

////////////////////////////////////////////////////////////////////////////////////////////
//AND && เจอเท็จตัวเดียวทั้งประโยคเป็นเท็จเลย เจอเท็จ ตัดจบเลย
// // if (5>3 && 6>4){console.log("ok")}
// if (5>3 && 6>4 && 4<1){ console.log("ok")}
// undefined

// if (5>3 && 6>4 && 4>5){ console.log("ok")}
// undefined

// if (5>3 && 6>4 && 0>5){ console.log("ok")}
// undefined

// if (5>3 && 6>4 ){ console.log("ok")}
// undefined

// alert(1&&0)
// undefined

// alert(1&&5)
// undefined

// 1 && 0
// 0

// 0 && 1
// 0

// Boolean(0)
// false

// 0 && 1 && "ok"
// 0

// 0 && 1 && "ok" && true
// 0

// 1 && 0 && "ok" && true
// 0

// Boolean("0")
// true

// Boolean("null")
// true

// 1 && true && 5>2 & "ok"
// 0

// 1 && true && 5>2 && "ok"
// "ok"

// 1&&5
// 5

// alert(null&&5)
// undefined

// 0 && "ok"
// 0

// 0 && null && "ok"
// 0

// null && null && "ok"
// null


// null && 0 && "ok"
// null

// true && alert("cc6") && null && 0 && "ok"
// undefined

// Boolean(true && alert("cc6") && null && 0 && "ok")
// false

// true &&  0 && alert("cc6") && null && 0 && "ok"
// 0

// Boolean(alert("cc6"))
// false

// let x = prompt("input x")
// undefined

// let x = prompt("input x")
// if (x>0) console.log("มากกว่า0")
// VM1118:2 มากกว่า0
// undefined

// let x = prompt("input x")
// if (x>0) console.log("มากกว่า0")
// undefined

// let x = prompt("input x");
// (x>0)&&console.log("มากกว่า5")
// VM1200:2 มากกว่า5
// undefined


// let x = prompt("Input x");
// (x>0) && console.log("มากกว่า0")
// VM1346:2 มากกว่า0
// undefined  

///////////////////////////////////////////////////////////////////////////////////////////
//เมื่อ&& ใช้คู่กับ ||  and จะสำคัญกว่า OR
///////////////////////////////////////////////////////////////////////////////////////////////
//not !  จะกลับระหว่าง t กับ f
// !true
// false

// !false
// true

// (1>2)
// false

// !(1>2)
// true

// !!(1>2)
// false

// !!true
// true

// null
// null

// !null
// true

// Boolean(null)
// false

// Boolean(0)
// false

// Boolean(undefined)
// false

// Boolean("")
// false

// !!null
// false

// !!0
// false

// !!3
// true

// !!undefined
// false

// !!" "
// true

// Boolean("")
// false

// Boolean(" ")
// true

// !!("0")
// true

// !!NaN
// false

// Number("DDD")
// NaN

// +("DDD")
// NaN

// Boolean(Number("DDD"))
// false

// !!(+"DDD")
// false

// let x = 20 
// undefined

// let y = -x 
// undefined

// y
// -20

// let z = -y
// undefined

// z
// 20

// z = -(x)
// -20

////////////////////////////////////////////////////////////////////////////////////////
//loop
//while ตราบใดที่เงือนไขยัังถูก จะทำจนเป็นเท็จ
// let i =0;
// while (i<3){
//     console.log(i);
//     i++;
// }
// console.log("bye");

// let i =0;
// while (i<90){
//     console.log(i);
//     i++;
// }

// let i =0;
// while (i<=10){
//     console.log(i);
//     // i++;           //เครื่องจะแฮ้ง
// }

// let tex = prompt('Enter text to show')
// document.querySelector("#p1").innerText = tex

// let tex = prompt('Enter text to show')
// document.querySelector("#p2").innerText = tex







////////////////////////////////////////////////////////////////////////////////////////
//for นับจำนวนได้สะดวกกว่า ลักษณะคือรันloop
// for (let i = 0 ; i < 3; i++){
//     alert(i);
// }

// for (let i = 0 ; i < 3; i++){
//     alert(i);
// }
// console.log("bye")


// for (let i = 0 ; i < 3; i++){
//     console.log(i);
// }
// console.log("bye")


// for (let i = 0 ; i < 11; i+=2){  //i = i+2
//     console.log("รอบที่" +i);
// }
// console.log("bye")

// for (let i=1; i<129;i*=2){
//     console.log("i=" + i)
// }
// console.log("bye")



///////////////////////////////////////////////////////////////////////////////////////////////
//ES5
// for(let i = 1; i < 10; i++ ){  letจะปลอดภัยกว่า
//     console.log(i)
// }

// for (var i = 1 ; i < 10 ; i++){  var มันอาจจะกวนคนอื่นได้
//     console.log(i)
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////
//ลูปซ้อนลูป
// for(let m =1; m<3; m++){  //mเป็น1ถ้าmน้อยกว่า3จะเข้าลูปให้ใล่ n=1แต่น้อยกว่า5  m จะไม่เปลี่ยน จนn จะครบรอบ
//     for(let n=1;n<5;n++){
//          console.log(`${m} , ${n}`) //แบคติกคือเอาตัวแปลมาแสดงได้ทันที
//     } //for n
// }//for m


// for(let m =1; m<4; m++){  //mเป็น1ถ้าmน้อยกว่า3จะเข้าลูปให้ใล่ n=1แต่น้อยกว่า5  m จะไม่เปลี่ยน จนn จะครบรอบ
//     for(let n=1;n<7;n++){
//          console.log(`${m} , ${n}`) //แบคติกคือเอาตัวแปลมาแสดงได้ทันที
//     } //for n
//     console.log("---------") //ก่อนขึ้นรอบให้ห้มีขีด
// }//for m


/////////////////////////////////////////////////////////////////////////////////////////////////////
//สูตรคูณ
// for(let m = 2; m<12; m++){  //mเป็น1ถ้าmน้อยกว่า3จะเข้าลูปให้ใล่ n=1แต่น้อยกว่า5  m จะไม่เปลี่ยน จนn จะครบรอบ
//     for(let n=1;n<13;n++){
//          console.log(`${m} x ${n} =${m*n}`) //แบคติกคือเอาตัวแปลมาแสดงได้ทันที จะอยู่ใน${}
//     } //for n
//     console.log("---------") //ก่อนขึ้นรอบให้ห้มีขีด
// }//for m
///////////////////////////////////////////////////////////////////////////////////////////////
// for(let m =2; m<13;m++ ){
//     for(let n=1; n<13;n++){
//         document.querySelector("#p1").innerHTML += `${m} x ${n} =${m*n} <br>` //ถ้ามีHTMLให้ใช้innerHtml มันถึงจะเข้าใจแทรกHTML แต่ถ้าไม่มีให้ใช้innerTexe
//     }//for n
//     document.querySelector("#p1").innerHTML += "<hr>"
// } //for m
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ให้ใส่promถาม
// for(let m =2; m<13;m++ ){
//     for(let n=1; n<13;n++){
//         document.querySelector("#p1").innerHTML += `${m} x ${n} =${m*n} <br>` //ถ้ามีHTMLให้ใช้innerHtml มันถึงจะเข้าใจแทรกHTML แต่ถ้าไม่มีให้ใช้innerTexe
//     }//for n
//     document.querySelector("#p1").innerHTML += "<hr>"
// } //for m

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//เรื่องbreak  ตัวคอนโทนลูป
// for(let i = 1; i<=9; i++ ){
//     console.log(i)
//     if(i===6)
//     break //เจอแล้วจะออกจากloop
// }

// for(let i = 1; i<=9; i++ ){
//     console.log(i)
//     if(i===6)
//     break //เจอแล้วจะออกจากloop
// }console.log("End")


// for(let i = 1; i<=9; i++ ){
//     if(i===6){
//         break //เจอแล้วจะออกจากloop
//     }
//     console.log(i)
//     }
// console.log("End")



// for(let i = 1; i<=9; i++ ){
//     console.log(i)
//     if(i===6){
//         break //เจอแล้วจะออกจากloop
// }
//     }
// console.log("End") //แบบนี้จะได้6


// let sum = 0;
// while (true){
//     let value = +prompt("ใส่เลข"," ");
//     if(!value) break; //ถ้าvalue เป็นtrue ให้break ใส่0มันจะเบรก
//     sum += value // ถ้าเป็น F  ถ้าไม่ใช่ให้ทำ
// }
// alert("sum: " + sum );

// let sum = 0;
// while(true){
//     let v = +prompt("Enter number"," ")
//     if(!v){break}
//     sum += v //sum = sum+v
// }
// console.log("sum:"+sum)


////////////////////////////////////////////////////////////////////////////////////////////////
//continue อย่าไปทำข้างล่าง ให้เด้งขึ้นไปข้างบนถ้ามันเข้าเงื่อนไขนี้
// for(let i=0; i<10; i++){
//     if (i%2===0)continue; //ถ้าเท่ากับ0จะกลับไปทำที่iใหม่
// console.log(i) //ถ้าไม่เท่ากับ0ให้แสดงค่าi
// }

// for(let i=0; i<10;i++){
//     if (i%2 !==0) continue; เศษไม่เท่ากับ0ให้continue
//     console.log(i) ถ้าเท่ากับ0ให้แสดงค่าi
// 

///////////////////////////////////////////////////////////////////////////////////////////////
//switch cases
// let a =2+2;
// switch (a){
//     case 3:
//         alert("Too small");
//         break
//     case 4:
//         alert("Exactly");
//         break;
//     case 5:
//         alert("Too large");
//         break
//     default:
//         alert("ไม่ตรงกับcaseใดๆ")
// }

////////////////////////////////////////////////////////////////////////////////////////////////
// let x = Number(prompt("2+2=?"))  //let x = +(prompt("2+2=?"))
//   switch(x){
//       case 3 :
//           alert("Too small")
//           break
//       case 4:
//           alert("yessssss")
//           break
//       case 5:
//           alert("Too big")
//           break   //ถ้าไม่ใส่break
//       default:
//           alert("Whattttttt....?")
//   }
//   console.log("Bye")


//   let x = Number(prompt("2+2=?"))  //let x = +(prompt("2+2=?"))
//   switch(x){
     
//       case 4:
//           alert("yessssss")
//           break
//       case 3:
//       case 5:
//           alert("Too big")
//           break   //ถ้าไม่ใส่break
//       default:
//           alert("Whattttttt....?")
//   }
//   console.log("Bye")

//////////////////////////////////////////////////////////////////////////////////////////
//function เราสามารถเอาโค้ดมาทำได้หลายๆๆครั้ง
// function showMessage(){   //ในวงเล็บเรียกว่าพารามิเตอร์
//     alert('Hello everyone!');
// }
// showMessage();

// function show2(){ //ถ้าตัวแปลอยู่ในฟังชั่นมันจะใช้ได้แค่ข้างใน
//     let user = "codecamp"
//     console.log("Hello,"+ user)
//     alert("Hello,  "  + user)
// }
// show2();

/////////////////////local variable ตัวแปลเฉพราะฟังชั่น
// function showMessage(){
//     let message = "Hello,Im Codecamp"; //local variable
//     alert(message);
// }
// showMessage();
// alert(message); //ตัวแปลจะใช้ได้ในฟังชั่นท่านั้น ข้างนอกไม่ได้

/////////////////////Global variable ทุกตัวแปรสามารถใช้งานได้ แต่เราควรใช้ให้น้อยเพราะมันสามารถเปลี่ยนได้
// let userName = "Sonter"
// function showMessage(){
//     let message = "Hello, "+ userName ;
//     alert(message);
// }
// showMessage();


// let user = prompt("User name is :")  //ถ้ามีฟังชั่นมากกว่า1ฟังชั่นก็สามารถเอาตัวแปลนี้ไปใช้ได้ user จะเป็นไปตามที่เรากรอก
// function show2(){
//     console.log("Hello," + user)
//     alert("Hello,"+user)
// }
// function show3(){
//     for(let i=1; i<4; i++)
//     console.log(i+"Hello,"+user)
// }
// //ถ้ามีฟังชั่นเปลี่ยน เปลี่ยนuser มันก็จะเปลี่ยน
// function changeUser(){
//     user = " React.js"
// }

//ตัวอย่าง ถ้ามีการเปลี่ยนแล้วเมื่อเราอยากใช้johnจะทำให้เกิดปัญหา
//  let userName ="John";
//  function showMessage(){ //ถ้ามีการเปลี่ยนแปลงมันจะกะทบแค่ในฟังชั่นเท่านั้น
//      let userName = "Bob"; //ประกาศตัวแปร local variable

//      let message = "Hello," +userName;
//      alert(message);
//  }
//  showMessage();
//  alert(userName);

// let user = prompt("User nsme is :")

// function show2(){
//     console.log("Hello," + user)
//     alert("Hello,"+user)
// }
// function show3(){
//     for(let i=1; i<4; i++)
//     console.log(i+"Hello,"+user)
// }
// //ถ้ามีฟังชั่นเปลี่ยน เปลี่ยนuser มันก็จะเปลี่ยน
// function changeUser(){  //changeUserของตัวมันเอง ไม่ใช่Globle
//     user = " React.js"
//     console.log("My local var:user ="+user)
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//parameters รับค่าจากตัวแปร
// function showMessage(from,text){  //ชื่อตัวแปลหมายถึงเอาฟังชั่นนี้ไปใช้ได้ทันที
//     alert(from+": " +text);



// }
// showMessage("ann","Hello");
// showMessage("ann","what's up");

// let name = "Tony" //เป็นGoble 
// showMessage(name,"HI")  //ส่งตัวแปรมา

// let msg = "Greeing"
// showMessage(name,msg) 


/////////////////function ทำสำเนาค่าแล้วมาใส่ไว้ในParameter
// function showMessage(from,text){
//     from = "*" + from + "*"; //fromจะโดนเปลี่ยน
//     alert(from + ": " +text);

// }
// let name = "Ann"; 
// showMessage(name,"hello"); //nameแค่ก๊อปปี้ค่าให้เสยๆ

/////////////////////////////////เรียกพารามิเตอร์ตัวเดียว 
// function showMessage(from,text){
//     from = "*" + from + "*"; //fromจะโดนเปลี่ยน
//     alert(from + ": " +text);

// }
// let name = "Ann"; 
// showMessage(name);  //undefined

/////////////////////////////////////////////////////////////////////////////
//ถ้าฟังชั่นไม่กำหนดตัวแปล มันจะแสดงคำว่าundefined  แต่ถ้าอยากให้มันไม่โชว์undefined ให้ใส่เเครื่องหมายเท่ากับพร้อมกำหมดค่าในparameterในแต่ละตัว
// function showMessage(from,text = " no text given"){ //ต้องบอกไว้ว่าถ้าไม่มีให้ใส่อะไร
//     alert(from+": "+text);
// }
// showMessage("Ann");



// function showMessage(from = " No text ",text = " no text given"){ //ต้องบอกไว้ว่าถ้าไม่มีให้ใส่อะไร
//     alert(from+": "+text);
// }
// showMessage();

////////////////////////////////////////////////////////////// แบบเดิม
// function showMessage(from,text){ //ต้องบอกไว้ว่าถ้าไม่มีให้ใส่อะไร
//     text = text ||"No text" //มันจะแสดงtext หลักการของ||ถ้าเป็นtrue มันจะตัดจบ

//     alert(from+": "+text);
// }
// showMessage("Mint");

////////////////////////////////////////////////////////////////////////////////////////////////////////
//การคืนค่าของฟังชั่น  functionที่มีการreturn
// function sum(a,b){
//     return a+b //คล้ายๆกับมีตัวแปล เวลาเรียกใช้
// }
// let x = sum(2,4) //สามารถเอาไปแทนที่ใหมาๆ
// console.log(x) //พิมสิ่งที่อยู่ในวงเล็ปออกมาทาง console


//functionเชคเลขคู่ เลขคี่
// function isEven(num){  //isEvenคือเชคว่าเป็นเลขคู่ไหม
//     let result         //resultเก็บค่า
//     if (num%2===0){
//         result = true
//     } else {
//         result = false
//     }
//     return result //เข้ามาเป็นตัวเลข แต่return เป็นบูลีน
// }

//functionเชคเลขคู่ เลขคี่อีกแบบ
// function isEven(num){  //isEvenคือเชคว่าเป็นเลขคู่ไหม
//     let result = (num%2===0)?  true : false      //resultเก็บค่า
//     return result //เข้ามาเป็นตัวเลข แต่return เป็นบูลีน
// }

//functionเชคเลขคู่ เลขคี่อีกแบบ  0 = true
// function isEven(num){
//     return (num%2 === 0)? true : false  //แบบนี้จะทำให้สั้นลงไปอีก
// }


//function จะบอกเลขว่าเป็นเลขคู่หรือคี่
// function evenOdd(num){
//     return(num%2 === 0)?"เลขคู่":"เลขคี่" //หาร2ลงตัวให้คืนค่าเลขคู่ถ้าไม่ใช่ให้พิมเลขคี่  รีเทินเป็นสตริง
// }


// function evenOdd(num){
//     return (num===0)? num:  (num%2 === 0)?"เลขคู่":"เลขคี่" //หาร2ลงตัวให้คืนค่าเลขคู่ถ้าไม่ใช่ให้พิมเลขคี่  รีเทินเป็นสตริง //ถ้าเป็น0ให้ใส่num
// }


//การคืนค่าของฟังชั่น
// function checkAge(age){
//     if(age >=18){
//         return true;
//     } else {
//         return confirm ('Do you have permission from your parents'); //ถ้าน้อยกว่า18
//     }
// }
// let age = prompt("How old are you?",18);
// if(checkAge(age)){
//     alert("Access granted"); //ถ้าน้อยกว่า18
// } else {
//     alert("Access denied");
// }

//การคืนค่าของฟังชั่น ตัวอย่างที่2 confirm คือ ต้องการพารามิเตอร์1ตัวโดยจะแสดงเป็นกรอบให้คลิก
// function checkAge(age){
//     if(age >=18){
//         return true; //รับข้อมูลเป็นตัวเลขและให้รีเทินเป็นบูลีน
//     } else {
//         return confirm ('Do you have permission from your parents'); //confirmจะรีเทินเป็นtrue กับ f ดูว่าเขากดokหรือแคนเชิน ถ้าokจะเป็นtrue ถ้าแคนเชินจะเป็นf
//     }
// }


// let age = prompt("How old are you?",18); //ตั้งค่าตัวแปรage  รับอินพุต
// if(checkAge(age)){  //ใช้คำสั่งif เรียกฟังชั่นcheckAge  ชื่อตัวแปรเดียวกันได้
//     alert("Access granted"); //true
// } else {
//     alert("Access denied"); //f
// }


//การคืนค่าฟังชั่น return เสยๆ
// function showMovie(age){
//     if(!checkAge(age)){ //ถ้าเชคageแล้วไม่ผ่าน ให้รีเทินเสยๆๆ
//         return;
//     }
//     alert("Showing you the movie"); //ถ้าไม่งั้นก็แสดง
// } 


// function checkAge(age){
//     if(age >= 18){
//         return true; //รับข้อมูลเป็นตัวเลขและให้รีเทินเป็นบูลีน
//     } else {
//         return confirm ('Do you have permission from your parents'); //confirmจะรีเทินเป็นtrue กับ f ดูว่าเขากดokหรือแคนเชิน ถ้าokจะเป็นtrue ถ้าแคนเชินจะเป็นf
//     }
// } //ผ่านก่อนค่อยจะกระเด้งออก

// function showMovie(age){
//     if(!checkAge(age)){ //ถ้าเชคageแล้วไม่ผ่าน ให้รีเทินเสยๆๆ
//         return;
//     }
//     alert("Showing you the movie"); //ถ้าไม่งั้นก็แสดง
// } 



// // เขียนreturn; เฉยๆแต่ไม่มีการคืนค่า
// function f1(){
//     return; //เด้งออกจากฟังชั่นทันที่
// }
// f1(); //undefined


//ตัวอย่างแบบฝึกหัด






































//function Expression
//ให้ผลลัพธ์เหมือนกัน
//แบบแรก
// function sayHi(){
//     alert("Hello");
// }

// //แบบที่2
// let sayHi = function(){ //กำหนดตัวแปร
//     alert("Hello");
// };


//ตัวอย่างการเรียกฟังชั่น
// function sayHi(){
//     alert("Hello")
// }
// let func = sayHi; //กำหนดตัวแปร let แล้วมีfunctionข้างในได้
// func();
// sayHi();


//function declaration VS function Expression  ประกาศก่อนหรือหลังเรียกใช้ได้
// sayHi("John")
// let sayHi = function(name){
//     alert(`Hello,${name}`);
// };

 //ตัวอย่าง
// console.log(evenOdd(15));
// console.log(evenOdd(22));
//  function evenOdd(num){ //เรียกใช้ได้เลยทั้งที่มันอยู่ข้างล่าง แบบนี้เรียกฮ้อยติ้ง
//      return(num%2===0)?"Even":"Odd"
//  }



// //function Expression
// //แบบนี้error
//  console.log(evenOdd(15));
// console.log(evenOdd(22));

// let evenOdd = function(num) { 
//  return ( num%2 === 0) ? "Even":"Odd"
// }



//function Expression
//แบบนี้ไม่error
// let evenOdd = function(num) { 
//  return ( num%2 === 0) ? "Even":"Odd"
// }
// console.log(evenOdd(15));
// console.log(evenOdd(22));




//callback function //ใช้คุมลำดับการทำงาน เอาฟังชั่นส่งเป็นพารามิเตอร์
// function ask(question,yes,no){ //สร้างfunction ขึ้นมา3ตัว
//     if(confirm(question)) yes() //questionแสดงในกรอบของconfirm
//     else no();
// }
// function showOk(){ //functionก็สามารถส่งผ่านเป็นพารามิเตอร์ได้ yes = showOk
//     alert("You agreed.");
// }
// function showCanel(){   //no = showCanel
//     alert("you canceled the execution.");
// }
// ask("Do you agree?",showOk,showCanel) //ask ส่ง2ฟังชั่น 1สตริง



///////////////////////////callback functionตัวอย่างอีกอัน
// function ask(question,yes,no){ //สร้างfunction ขึ้นมา3ตัว
//     if(confirm(question)) yes() //questionแสดงในกรอบของconfirm
//     else no();
// }
// function showOk(){ //functionก็สามารถส่งผ่านเป็นพารามิเตอร์ได้ yes = showOk
//     alert("You agreed.");
// }
// function showCanel(){   //no = showCanel
//     alert("you canceled the execution.");
// }
// function showOk2(){
//     console.log("Agree......................")
// }
// ask("Do you agree?",showOk2,showCanel) //ask ส่ง2ฟังชั่น 1สตริง




///////////////////////Arrow function Ex6 functionแบบย่อ
// let sum = function(a,b){ //แบบเติม
//     return a+b
// }
// let sum2 = (a,b) => a+b //แบบย่อ

// let sum2 = (a,b) => a+b //return a+bออกมา

// console.log(sum(3,4))
// console.log(sum(5,4))



//////////////////////////////////////////////
// let evenOdd = function(num) { 
//  return ( num%2 === 0) ? "Even":"Odd"
// }

// let evenOdd2 = num =>( num%2 === 0) ? "Even":"Odd" // แบบย่อสามารถใช้ได้ num ถ้ามีพารามิเตอร์ตัวเดียว ไม่ต้องใส่()
// console.log(evenOdd(15));
// console.log(evenOdd(22));



/////////////////////////////////////////////////แบบนี้ก็สามารถทำได้
// let double = (n) => n*2


///////////////////////////////ถ้าไม่มีargument ให้ใส่วงเลปเปล่า
// let sayHi = () => alert("Hello");
// sayHi();


//////////////////////////////////////////// ถ้ามีหายคำสั่ง ต้องใส่ปีกกาครอบ ถ้ามีreturnใส่ด้วย
// let sayHi = () =>{
//     alert("Hello")
//     console.log("Hi")
// } 
// sayHi();



let sayHi = () =>{
    alert("Hello")
    console.log("Hi")
    return null
} 
sayHi();







 

















 


















