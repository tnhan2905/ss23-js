let arr = []
let n = +prompt('nhập vào số phần tử của mảng')
for (let i = 1; i <= n; i++){
    arr[i] = Number(prompt(`nhập vào phân tử index thứ ${i}`))
}
let count = 0
for (let i = 1; i <= n; i++){
    if (isNaN(Number(arr[i]))){
        continue
    }else{
        console.log(Number(arr[i]))
        count ++
    }
}
if(count === 0){
    console.log(`Không có ký tự số`)
}