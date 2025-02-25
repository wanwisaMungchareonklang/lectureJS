//study06.js
//Control Flow: Loop/Iteration/Repetition
//ทำงานเดิมๆ ซ้ำ
//while, do-while, for, foreach
//while พิสูจน์ก่อนแล้วค่อยทำ
let x = 1;
while(x <= 5){
    // console.log(x,'Hello...',true)
    // console.log(x + ' Hello... ' + true)
    console.log(`${x} Hello... ${true}`) //***    
    x++;
}
console.log('-----------------')
//do-while ทำก่อนพิสูจน์
let y = 1;
do{
    console.log(`${y} Hey... ${true}`)
    y++;
}while(y <= 5)
console.log('-----------------')
//for
for(let i = 1; i <= 5; i++){
    console.log(`${i} Hi... ${true}`)
}