let score = 0; // Variabel untuk menyimpan skor

// Ambil elemen untuk menampilkan skor
const scoreElement = document.getElementById("score");

// Ambil gambar yang dapat diklik
const clickImage = document.querySelector(".click-image");

// Event listener untuk gambar yang diklik
clickImage.addEventListener("click", function() {
  // Tambah skor setiap kali gambar diklik
  score++;
  // Perbarui tampilan skor
  scoreElement.textContent = score;
});
