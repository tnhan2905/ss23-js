let arr = []
let n = +prompt('nhập vào số phần tử của mảng')
for (let i = 0; i < n; i++){
    arr[i] = Number(prompt(`Nhập vào phần tử index thứ ${i}`));
}
let count = 0
for (let i = 0; i < n; i++){
    if (arr[i] < 0 && Number.isInteger(arr[i])){
        count++;
    }
}
if (n < 0) {
    console.log("Số lượng phần tử không hợp lệ");
} else if (n === 0) {
    console.log("Mảng không có phần tử");
}
