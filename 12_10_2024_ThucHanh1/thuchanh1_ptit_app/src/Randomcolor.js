function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  document.querySelectorAll('.ToDoItem input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.style.borderColor = getRandomColor(); // Đặt màu viền ngẫu nhiên khi load
  
    checkbox.addEventListener('mouseover', function() {
      this.style.borderColor = getRandomColor(); // Đổi màu viền khi hover
    });
  
    checkbox.addEventListener('click', function() {
      this.style.borderColor = getRandomColor(); // Đổi màu viền khi click
    });
  });
  