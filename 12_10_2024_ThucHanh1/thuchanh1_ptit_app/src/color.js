// Hàm tạo màu ngẫu nhiên
function getRandomColor() {
    const letters = '0123456789ABCDEF'; // Bảng mã màu HEX
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Lấy tất cả các checkbox trong trang
  document.querySelectorAll('.ToDoItem input[type="checkbox"]').forEach(function(checkbox) {
    // Áp dụng màu ngẫu nhiên cho border của mỗi checkbox
    checkbox.style.borderColor = getRandomColor();
  });
  