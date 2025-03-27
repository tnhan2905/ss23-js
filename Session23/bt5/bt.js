let arr = [];
let n = +prompt('Nhập vào số phần tử của mảng');
if (n < 0) {
    console.log("Số lượng phần tử không được âm");
} else if (n === 0) {
    console.log("Mảng không có phần tử");
} else {
for (let i = 0; i < n; i++) {
    arr[i] = Number(prompt(`Nhập vào phần tử index thứ ${i}`));
}
let count = 0, sum = 0;
for (let i = 0; i < n; i++) {
if (isNaN(arr[i])) {
    continue;
    } else {
        sum += arr[i];
        count++;
    }
}
if (count === 0) {
  console.log(`Không có phần tử nào là số`);
} else {
  console.log(`Tổng các số hợp lệ trong mảng: ${sum}`);
  }
}
