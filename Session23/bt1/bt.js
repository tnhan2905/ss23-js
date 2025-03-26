let arr = [];
for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt(`Nhập số nguyên thứ ${i + 1}:`));
    while (isNaN(num)) {
        num = parseInt(prompt(`Vui lòng nhập một số nguyên hợp lệ cho số thứ ${i + 1}:`));
    }
    arr.push(num);
}
let count = arr.filter(x => x >= 10).length;
alert(`Có ${count} số nguyên lớn hơn hoặc bằng 10 trong mảng.`);
console.log(arr)