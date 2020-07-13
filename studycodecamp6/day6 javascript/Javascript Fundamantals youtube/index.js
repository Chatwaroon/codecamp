// array
//แบบที่1
// var cars = new Array();
//     car[0] = "Honda";
//     car[1] = "Toyota";
//     car[2] = "Ford";
//แบบที่2
//var cars = new Array("Honda","Toyota","Ford");
//////////////////////////////////////////////////////////////////////////////////////////
// Loops จะทำซ้ำเดิมจนกว่าจะเข้าเงื่อนไข  
// i เท่ากับ 0 ถ้า i น้อยกว่า5 ให้บวกเพิ่ม1
// for (var i = 0; i < 5; i++){
//     document.write("number" + i + "<br>") // document.write เขียนตัวเลขแสดงในหน้าจอ 
// }
//////////////////////////////////////////////////////////////////////////////////////
//while Loop
//  var i = 0;
//  while ( i < 5 ){ // while ขณะที่i น้อยกว่า5 
//     document.write("number" + i + "<br>"); //แล้วให้เขียนตัวเลข แล้วค่อยให้i มันเพิ่ม
//     i++;
//  }
///////////////////////////////////////////////////////////////////////////////////////
//JavaScript Functions  


// creat a function 
// function myFunction(){
//     document.write("This is my function");
// }
//  // call a Function
//  myFunction();

//////////////////////////////////////////////////////////////////////////////////////////
// javaScript Object ทุกสิ่งที่อยู่ใน JAvascript จะเป็น object หมดเลย 

// var greeting = "Hello";
// var x = greeting.length; // สร้างตัวแปร var ให้มาเก็บค่าความยาวของ greeting  objrct.popertes
// console.log(x);
//////////////////////////////////////////////////////////////////////////////////////////
//ตัวแปร และชนิดของข้อมูล  
//Number
//String
//Array 
//object

//Number
// var number1 = 55;
// var number2 = 40;
// alert(number1 + number2);


//การตั้งชื่อตัวแปร 
// //var test = "this is test";
// var TEST = "this is another"
// alert(test);

// // camel case 
// var myNumber;

// //partial case
//  var MyFavoriteNumber;

//  //underscore
//  var my_favorite_number;


 //Array เก็บค่าหลายๆค่าไว้ในตัวแปรเดียว 
 //แบบแรก
//  var color = ['red','blue','green']
//  alert(color[1]);

//แบบที่2 add ค่าเพิ่ม
//  var color = new Array ('red','bule','greem');
//      color[3] = 'orange';
// alert(color);


//แบบที่3 .push  วิธีการ 
// var color = new Array ('red','bule','greem');
//      color.push('purple')
// alert(color[3]);  


//แบบที่4
// var numbers = [5,77,6,43];
// alert (numbers.length);


//แบบที่5 
// var number = [2,1,4,3,7,8,9,5];
// alert (number.sort()); //sort เรียงจากน้อยไปหามาก 

//แบบทีุ่ 6
// var number = [2,1,4,3,7,8,9,5];
// alert (number.reverse()); 





// Loopการทำซ้ำ  ทำได้ดดยการดึงค่าจาก array มาแสดงผล  หรือ เอาผลลัพธืจากดาต้าเบสมาแสดงผล
//for loop 

// for( var i =0 ; i < 10 ; i++ ){
//     console.log(i);

// }


// forEach loop  forEach  เมดดอด
// var number = [2,3,4,55,64,23,50];
// number.forEach(function(number){
//     console.log(number);
// }) 

// var number = [2,3,4,55,64,23,50];
// // number.reverse();

// for(var i = 0; i < number.length; i++){
//     console.log(number[i]);

// }


//if  else 
// if( 1 == 1){  // ==หมายถึงการเปรียบเทียบค่า  ===เปรียบเที่ยบชนิดข้อมู
//     console.log('this is true');
// } else {
//     console.log('this is false');
// }


// var num1 = 3;
// var num2 = 4;
// if (num1 == num2){
//     console.log('this is true')
// } else {
//     console.log("this is false")
// }
  

// var num1 = 3;
// var num2 = 4;
// if (num1 == num2 || num1 == 3){
//     console.log('this is true')
// } else {
//     console.log("this is false")
// }
  

// var fruit = "watermalon";

// switch(fruit){
//     case "banana":
//         alert('i have banana');
//         break;
//     case "apple":
//         alert("i have apple");
//         break;
//     case "coconut":
//         alert("i have coconut");
//         break;
//     default:
//         alert("I Love all other fruit");
//         break;
// }

/////////////////////////////////////////////////////////////////

//function โค้สที่ทำงานเฉพาะส่วน ทำงานซ้ำๆ 
// function myFunction(ค่าพารามิเตอร์){
    
// }

// function myFunction(){
//     document.write('Chatwaroon');
// }
// myFunction();


// function แบบไม่retrun
// function myCal(num1,num2){ // ในวงเล็ปเรียกพารามิเตอร์ 
//     var result = num1 + num2;
//     console.log(result);
// }
// myCal (3,5); // ในวงเล็บคือ อาร์กิวเม้น ค่าที่ส่งไป


// function แบบมReture
// function myCal(num1,num2){
//     return num1 * num2;
// }
// console.log(myCal(4,5));



// function myName(fname,lname){
//     return fname +" " + lname;
// }
// console.log(myName('chatwaroon','boonprakob'));

//////////////////////////////////////////////////////////////////////////////////////
//Object literal 
// var person = {
//     firstName:'Chatwaroon',
//     lastName:'Boonprakob',
//     age:22
// }
// console.log(person.firstName);


// var person = {
//     firstName:'Chatwaroon',
//     lastName:'Boonprakob',
//     age:22;
//     car : ['Almera','Move']

// }
// console.log(person.car);

// var person = {
//     firstName:'Chatwaroon',
//     lastNane:'Boonprakob',
//     age:22,
//     car:['Almer','Moove']

// }
// console.log(person.car[0]);

// var person = {
//     firstName:'Chatwaroon',
//     lastNane:'Boonprakob',
//     age:22,
//     car:['Almer','Moove'],
//     address: {
//         street:'123 Something st',
//         city:'Bankok',
//         state:'TH'
//     },
//     //สามารถใส่ฟังชั่นเข้าไปใน object
//     fullName: function(){
//         return this.firstName + " " + this.lastNane; //this จะอ้างถึงตัวฟังชั่น
//     }

// }
// console.log(person.fullName());

/////////////////////////////////////////////////////////////////////////////////////
//object Constructor
// var apple = new Object();
//     apple.color = "red";
//     apple.shape = "round";

//     apple.descripe = function() {
//         return 'an apple is the color' + this.color +
//     }

//     console.log(apple);

// var apple = new Object();
//     apple.color = 'red';
//     apple.shape = 'round';

//     apple.descripe = function(){
//         return 'an apple is the color' +this.color + 'and is the shape' +this.shape;
//     }
//     console.log(apple.descripe()); 

// function Fruits(name,color,shape){
//     this.name = name;
//     this.color = color;
//     this.shape = shape;

//     this.describe = function(){
//         return 'a'+this.name+ 'is the color' +this.color + 'is this shape' +this.shape;
//     }
// }
// var apple = new Fruits('apple','red','round');
// console.log(apple.describe()); 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ใช้ ARRAY กับ object
// var users = [
//     {
//         name : 'mint',
//         age: 33
//     },
//     {
//         name : 'mint1',
//         age:40
//     },
//     {
//         name : 'mint2',
//         age:55
//     }

// ];
// console.log(users[1]);

/////////////////////////////////////////////////////////////////////////////
//Events เพื่อให้ดูมีอะไรมากขึ้น 
//function alert จะโชว์เมื่อคลิก
    // function doClik(){
    //     alert('You Clicke');
    // }


    //กดแล้วเปลี่ยน
    // function changeText(id){
    //     id.innerHTML = 'you Clicked'
    // }

    //คลิกแล้วตัวหนังสือเปลี่ยน 
    // function changeText(id){
    //   var heading = document.getElementById('heading');
    //   heading.innerHTML = 'Chatwaroon';
    // }


    //  ShowDate  โชว์เวลา 
    //  function showDate() {
    //      var time = document.getElementById('time');
    //      time.innerHTML = Date();
    //  }

    // function clearDate(){
    //     var time = document.getElementById('time');
    //     time.innerHTML = ' ';
    // }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    







