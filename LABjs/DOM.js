// Tạo một số ngẫu nhiên từ 1 đến 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Lưu số lượng lần đoán
let guessCount = 0;

// Hàm xử lý đoán số
function guessNumber() {
  // Lấy giá trị người dùng đoán
  let userGuess = document.getElementById("guess").value;

  // Tăng số lần đoán
  guessCount++;

  // Kiểm tra đoán đúng hay không
  if (userGuess == randomNumber) {
    alert(`Chúc mừng, bạn đã đoán đúng sau ${guessCount} lần!`);
  } else if (userGuess < randomNumber) {
    alert("Số bạn đoán nhỏ hơn số cần đoán.");
  } else {
    alert("Số bạn đoán lớn hơn số cần đoán.");
  }

  // Xóa giá trị nhập vào ô đoán
  document.getElementById("guess").value = "";
}

// Gán sự kiện click cho nút "Đoán"
document.getElementById("guessButton").addEventListener("click", guessNumber)
