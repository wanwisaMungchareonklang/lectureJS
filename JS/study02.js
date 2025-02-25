//study02.js
//Block Scope ของ JS คือ { ..... }
 
//Variable ตัวแปร
var myData1 = 'Hello...'; //เปลี่ยนค่าได้ เป็น Global
let myData2 = 20; //เปลี่ยนค่าได้ เป็น Local
const myData3 = 'Wow...'; //เปลี่ยนค่าไม่ได้ เป็น Local
 
myData1 = 'Hi...';
myData2 = 30;
// myData3 = 'Wow...';
 
//Global Scope-Local Scope
{
    var a = 1;
    let b = 2;
    const c = 3;
    {
        var x = 4;
        let y = 5;
        const z = 6;
        console.log(a)
        console.log(x)
        console.log(b, c)
        console.log(y, z)
    }
    console.log(a)
    console.log(x)
    console.log(b, c)
    // console.log(y, z) Error
}
console.log(a)
console.log(x)
// console.log(b, c) Error
// console.log(y, z) Erro