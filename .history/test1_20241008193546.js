var diem = 5;

if (diem < 4) {
  console.log("Học Lại");
} else if (diem >= 4 && diem < 5.5) {
  console.log("Loại D");
} else if (diem >= 5.5 && diem < 7) {
  console.log("Loại C");
} else if (diem >= 7 && diem < 8.5) {
  console.log("Loại B");
} else if (diem >= 8.5 && diem <= 10) {
  console.log("Loại A");
} else {
  console.log("Điểm không hợp lệ");
}
