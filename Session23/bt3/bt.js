let arr = []
let n = +prompt('nhập vào số phần tử của mảng')
for (let i = 1; i <= n; i++){
    arr[i] = Number(prompt(`nhập vào phân tử index thứ ${i}`))
}
let count = 0
for (let i = 1; i <= n; i++){
    if (arr[i] < 0 && Number.isInteger(arr[i])){
        count ++
    }
}
if(n === 0){
    console.log(`Mảng không có phần tử`)
}else if(n < 0){
    console.log(`Số lượng phần tử không hợp lệ`)
}else{
    console.log(count)
}