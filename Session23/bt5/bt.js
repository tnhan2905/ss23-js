let arr = []
let n = +prompt('nhập vào số phần tử của mảng')
for (let i = 1; i <= n; i++){
    arr[i] = Number(prompt(`nhập vào phân tử index thứ ${i}`))
}
let count = 0, sum = 0
for (let i = 1; i <= n; i++){
    if (isNaN(Number(arr[i]))){
        continue
    }else{
        sum += Number(arr[i])
        count ++
    }
}
if(count === 0 && n > 0){
    console.log(`Không có phần tử nào là số`)
}
if(n === 0){
    console.log(`Mảng không có phần tử`)
}else if(n < 0){
    console.log(`Số lượng phần tử không được âm`)
}else if (count > 0) {
    console.log(sum)
}