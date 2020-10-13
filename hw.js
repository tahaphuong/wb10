// 1. Chương trình tạo số X ngẫu nhiên 1-10
let num = Math.floor(Math.random() * 10 + 1) // trả về số từ 1-10
// 2. Tạo ra prompt để người dùng nhập số
let input = prompt("Hãy nhập số của bạn") // lấy input ng dùng
let n = Number(input)

// 3. Nếu người dùng nhập đúng => alert "Yeah, chúc mừng"
// 4. Nếu người dùng nhập sai => alert "Số bạn nhập quá lớn/nhỏ! Số cần tìm là X
if (n==num) {
  alert("Yeah, chúc mừng")
} else if (n>num) {
  alert("Số của bạn quá lớn! Số cần tìm là " + num)
} else if (n<num) {
  alert("Số của bạn quá nhỏ! Số cần tìm là " + num)
} else {
  alert("Đầu vào không hợp lệ!")
}