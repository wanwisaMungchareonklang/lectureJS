//Exception Handling : Error/Exception
//try-catch
//try-catch-finally
try{
    let data1 = 'Hello...';
    console.log(data1)
}catch(err){
    console.log('พบปัญหาการทำงานติดต่อ Admin/IT...')
    //console.log(err.name)
   // console.log(err.message)
    console.log(err.stack)
    //console.log(err)
}finally{
    console.log('ขอบคุณที่ใช้บริการ')
}
