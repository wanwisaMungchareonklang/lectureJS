//study05.js
//Control Flow: Condition/Decision/Selection
//ใช้พิสูจน์ตรวจสอบก่อนทำงานใดๆ
//if, if-else, if-else-if, switch-case
//if
let a = 10;
if(a == "10"){
    console.log('Wow....')
}
console.log('--------------')
//if-else
let b = 'Sombat'
if(b < 'Somjai'){
    console.log('Hi...')
}else{
    console.log('Hey...')
}
console.log('--------------')
//if-else-if
let score = 56
if(score >= 80){
    console.log('A')
}else if(score >= 60){
    console.log('B')
}else if(score >= 40){
    console.log('C')
}else{
    console.log('F')
}
console.log('--------------')
//switch-case
let day = 20
switch( day ){
    case 1 : console.log('Monday'); break;
    case 2 : console.log('Tuesday'); break;
    case 3 : console.log('Wednesday'); break;
    case 4 : console.log('Thursday'); break;
    case 5 : console.log('Firday'); break;
    case 6 : console.log('Saturday'); break;
    case 7 : console.log('Sunday'); break;
    default : console.log('Invalid day');
}