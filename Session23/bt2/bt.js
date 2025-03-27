let arr = []
for (let i = 1; i <= 10; i++){
    arr[i] = +prompt(`nhập vào phân tử index thứ ${i}`)
}
let count = 0
let max = 0,index = 0
for (let i = 1; i <= 10; i++){
    if (arr[i+1] > arr[i]){
        max = arr[i+1]
        index = i
        count ++
    }
}
if(count === 0){
    console.log(`không có số lớn nhất`)
}else {
    console.log(`Số lớn nhất là: ${max}`)
    console.log(`Vị trí: ${index}`)
}
