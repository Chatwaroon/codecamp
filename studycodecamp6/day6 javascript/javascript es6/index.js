//const and let  

// const name = "mint";  //const เป็นค่าคงที่ ไม่สามารถเปลี่ยนแปลงได้ ข้อดีคือถ้ามีevent ให้ใช้cont แทน var 
//         name = "Ton";
// console.log(name);


// let name = "mint";
//     name = "Ton";
// console.log(name); สามารถเปลี่ยนแปลงได้

//es5
// function myFunc(name){
//     return "Hello " + name;
// }
// console.log(myFunc('mint'))


//es6
// const myFunc = name =>{  
//     return  `Hi ${name}`;  //`ls -al`;
// }
// console.log(myFunc('mint'));

// const myFunc = name => `HI ${name}`;
// console.log(myFunc('Miler'));


// const myArray = ['tony','Sara','Tom',5];
// let arr2 = myArray.map (item => item);
// console.log(arr2);


//es5
// function  myFunc(name,age){
//     return'Hi '+ name  + ' your age is '+ age +' year old';

// }
// console.log(myFunc('mint',22));


//ES6 Syntax  
const myFunc = (name,age) => {
    return `HI ${name},your age is ${age} year old`;

}
console.log(myFunc('chatwaroon',22));


