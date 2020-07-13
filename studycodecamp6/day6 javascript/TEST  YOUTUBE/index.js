//console.log("Goodbye world");


//ตัวแปร เป็นสิ่งที่เราสร้างขึ้นมา ตั้งชื่อให้มันด้วยเพื่อเก็บข้อมูล  ตัวแปรควรเป็นภาษาอังกฤษ และไม่ให้เกิดปัญหาเวลากลับมาอ่าน 
// let x = 2;
// let y = 10;
// let z = x + y;
// console.log(z); 
////////////////////////////////////////////////////////////////////////////////////////


// data type 
// let myData = 5.5;
// let myData1 = "abccc";
// let myData3 = ture; //booleen

// let x =  12;
// let y = Number ("16"); // Number ในการแปลงข้อมูล
// console.log(x+y);

//////////////////////////////////////////////////////////////////////////////////////////

// operators
//เครื่องหมายคำนวน 
// a1 = 3 + 2;
// a2 = 3 - 2;
// a3 = 3 * 2; //คูณ
// a4 = 3 / 2; //หาร
// a5 = 3 ** 2;
// a6 = 3 % 2; //หาเศสที่ได้จากการหาร 

// x = 5;
// x++; //เพิ่มค่าไป1
// x--; // ลบค่าไป1
// X += 5; //ใส่เลขที่ต้องการบวกเข้าไป  

// เครื่องหมายเปรียบเทียบ 
//     let x = 7;
//     let y = 5;
// let a1 = x > y ;
// let a2 = x >= y ;

// let a3 = x < y ;
// let a4 = x <= y ;

// let a5 = x === y; 
// let a6 = x !== y;
// ตรรกศาสตร์

// let p = true;
// let q = false;

// let a1 = p && q ;
// let a2 = p || q ; 
// let a3 = !p


// // condition ตรวจสอบเงื่อนไข
// let score = prompt("garde");
// alert(score);
// // if (ตรวจสอบเงื่อนไข มีค่าเป็น True false){ ถ้าเป็น true จะอยู่ในวงเล็บ 
// // }
// if (score>=80){
//     console.log("Grade A")

// } else if ( score >= 70){
//     console.log("grade B")

// }else if ( score >= 60){
//     console.log("grade C")

// }else if (score>=50){
//     console.log("grade D")
// }  




 // loops  
//  for (ค่าเริ่มต้น){เงื่อนไขที่ต้องการตรวจสอบ}
// for(let i = 1; i <= 12; i++) { //iไม่เกิน12 เลยใส่ i <=12 i++คือนับเพิ่มขึ้นที่ละ1


    // if (i % 2 === 0) {
    //     continue;  // โปรแกรมจะข้ามเงื่อนไขที่อยู่ข้างล่าง  รอบไหนที่iหาร2ลงตัว มันจะข้าม 
    // }

//      if (i % 10 === 0){ // อะไรที่หารด้วย10ลงตัว มันจะ break 
//          break;
//      }
//     let answer = i ** 2; // i**2 หมายถึงการยกกำลัง2
//     console.log(answer);
// }


// Function  สิ่งที่เราสร้างขึ้นมาแล้วก็ตั้งชื่อให้มัน และสามารถใส่คำสั่งลงไปได้  

// function getPyramidArea (length, width, height) {
//     let baseArea = length * width;
//     let pyramidVolume  = 1/3 * baseArea * height;
//     console.log (pyramidVolume );
//      }
//      getPyramidArea(2,3,4);



    //  function getPyramidArea (length, width, height) {
    //     let baseArea = length * width;
    //     let pyramidVolume  = 1/3 * baseArea * height;
    //     return pyramidVolume ;
    //      }
    //     let area1 =  getPyramidArea(2,3,4);
    //     console.log(area1);


    //HTML Controls
    let content2 =  document.getElementById("content-2");
    let textHtml =  '<b>ไม่มีใครหน้าด้านเหมือนเทอ  </b>'


