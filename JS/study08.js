//study08.js
//Function คือ การทำงานหน่งๆ จะไม่ทำงานถ้าไม่เรียกใช้ (call function)
//Function มี 4 ประเภท
//1. no parameter(คือ สิ่งที่อยู่ในวงเล็บ)-no return(คือ คำสั่ง)
function funcA( ){
    console.log('wow wow wow')
}
 
//2. have parameter-no return
function funcB( a, b ){
    console.log(a + b)
}
 
//3. no parameter-have return
function funcC( ){
    console.log('Hello....')
    return 10
}
 
//4. have parameter-have return
function funcD( a, b, c, d ){
    console.log(a, b, c, d)
    return a * b * c * d
}
 
funcA()
funcB(10, 20) //เราเรียกข้อมูลที่ส่งให้ parameter ว่า argument
 
console.log(funcC())
console.log(funcD(1, 2, 3, 4)) //เราเรียกข้อมูลที่ส่งให้ parameter ว่า argument