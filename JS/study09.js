//study09.js
//Function Expression (Anonymus/Arrow)
//คือ การเอาฟังก์ชันไปเก็บไว้ในตัวแปร
 
const aa = 'Hello...';
 
//Anonymus Function
const xx = function(){
    console.log('Wow wow wow')
}
 
//Arrow Function
const yy = () => {
    console.log('Wow wow wow')
}
 
const zz = (a, b) => {
    console.log(a + b)
}
 
const mm = (a) => {
    return a * 100
}
 
const nn = () => console.log('Hey....')
// const nn = () =>{
//     console.log('Hey....')
// }
 
const oo = (x, y) => x ** y
// const oo = (x, y) => {
//     return x ** y
// }
 
console.log(aa)
xx()
yy()
zz(10, 20)
console.log( mm(999) )