//study07.js
// break ใน loop ทำงานเมื่อไหร่จบเลย
//
// continue ใน loop ทำงานเมื่อไหร่ ถือว่าจบรอบนั้นไปรอบต่อไป
 
for(let i = 1; i <= 5; i++){
    console.log(i, 'Hello....')
}
console.log('------------------')
for(let i = 1; i <= 5; i++){
    if(i == 3){
        break
    }
    console.log(i, 'Hi....')
}
console.log('------------------')
for(let i = 1; i <= 5; i++){
    if(i == 3){
        continue
    }
    console.log(i, 'Hey....')
}