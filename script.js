<script>

/* MENU MOBILE */

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-menu");

toggle.addEventListener("click", function(){
nav.classList.toggle("active");
});


/* SLIDER LAYANAN */

const layanan = document.getElementById("layananContainer");

function slideRight(){
layanan.scrollBy({
left:300,
behavior:"smooth"
});
}

function slideLeft(){
layanan.scrollBy({
left:-300,
behavior:"smooth"
});
}


/* SLIDER PORTFOLIO */

const portfolio = document.getElementById("portfolioContainer");

function portfolioRight(){
portfolio.scrollBy({
left:300,
behavior:"smooth"
});
}

function portfolioLeft(){
portfolio.scrollBy({
left:-300,
behavior:"smooth"
});
}

</script>
const slideTrack = document.querySelector('.slide-track');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const cards = document.querySelectorAll('.card');

let currentIndex = 0;

// Jumlah total kartu yang terlihat di layar
let visibleCards = Math.floor(document.querySelector('.slider').offsetWidth / cards[0].offsetWidth);

// Fungsi untuk update posisi
function updateSlider(){
  const cardWidth = cards[0].offsetWidth + 20; // +gap 20px
  slideTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

// Tombol kanan
nextBtn.addEventListener('click', () => {
  if(currentIndex < cards.length - visibleCards){
    currentIndex++;
    updateSlider();
  }
});

// Tombol kiri
prevBtn.addEventListener('click', () => {
  if(currentIndex > 0){
    currentIndex--;
    updateSlider();
  }
});

// Swipe untuk mobile
let startX = 0;
let isDragging = false;

slideTrack.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

slideTrack.addEventListener('touchmove', e => {
  if(!isDragging) return;
  const x = e.touches[0].clientX;
  const move = startX - x;
  slideTrack.style.transform = `translateX(-${currentIndex * (cards[0].offsetWidth + 20) + move}px)`;
});

slideTrack.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX;
  if(diff > 50 && currentIndex < cards.length - visibleCards) currentIndex++; // geser kanan
  if(diff < -50 && currentIndex > 0) currentIndex--; // geser kiri
  updateSlider();
  isDragging = false;
});

// Resize listener untuk responsive
window.addEventListener('resize', () => {
  visibleCards = Math.floor(document.querySelector('.slider').offsetWidth / cards[0].offsetWidth);
  if(currentIndex > cards.length - visibleCards){
    currentIndex = cards.length - visibleCards;
    if(currentIndex < 0) currentIndex = 0;
    updateSlider();
  }
});
const form = document.getElementById('domain_basic/form-bayar');
const struk = document.getElementById('domain_basic/struk');

form.addEventListener('submit', function(e){
  e.preventDefault(); // supaya halaman tidak reload

  // Ambil input user
  const nama = document.getElementById('nama').value;
  const metode = document.getElementById('metode').value;
  const nominal = document.getElementById('nominal').value;
  const buktiFile = document.getElementById('bukti').files[0];

  // Update struk
  document.getElementById('s-nama').textContent = nama;
  document.getElementById('s-metode').textContent = metode;
  document.getElementById('s-nominal').textContent = Number(nominal).toLocaleString();

  // Tampilkan gambar bukti
  const reader = new FileReader();
  reader.onload = function(e){
    document.getElementById('s-bukti').src = e.target.result;
  }
  reader.readAsDataURL(buktiFile);

  struk.style.display = 'block';
});

// Fungsi cetak struk
function cetakStruk(){
  const isiStruk = struk.innerHTML;
  const win = window.open('', '', 'width=400,height=600');
  win.document.write('<html><head><title>domain_basic/Struk Pembayaran</title></head><body>');
  win.document.write(isiStruk);
  win.document.write('</body></html>');
  win.document.close();
  win.print();
}
const form = document.getElementById('form-tanda');
const kwitansi = document.getElementById('kwitansi');

form.addEventListener('submit', function(e){
  e.preventDefault();

  const nama = document.getElementById('nama').value;
  const paketSelect = document.getElementById('paket');
  const paket = paketSelect.value;
  const harga = paketSelect.options[paketSelect.selectedIndex].dataset.harga;
  const buktiFile = document.getElementById('bukti').files[0];

  document.getElementById('s-nama').textContent = nama;
  document.getElementById('s-paket').textContent = paket;
  document.getElementById('s-harga').textContent = Number(harga).toLocaleString();
  document.getElementById('s-status').textContent = "Lunas";

  const reader = new FileReader();
  reader.onload = function(e){
    document.getElementById('s-bukti').src = e.target.result;
  }
  reader.readAsDataURL(buktiFile);

  const today = new Date();
  document.getElementById('tanggal').textContent = today.toLocaleDateString();
  
  kwitansi.style.display = 'block';
});

function downloadKwitansiHTML(){
  const isi = kwitansi.innerHTML;
  const htmlContent = `
    <html>
    <head><title>Kwitansi Pembayaran</title></head>
    <body>${isi}</body>
    </html>
  `;

  const blob = new Blob([htmlContent], {type: "text/html"});
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "kwitansi.html"; // nama file
  link.click();
}
function downloadKwitansiPDF(){
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Ambil isi kwitansi sebagai text
  const text = kwitansi.innerText;
  doc.text(text, 10, 10);
  doc.save("kwitansi.pdf");
}
const form = document.getElementById('form-tanda');
const kwitansi = document.getElementById('kwitansi');

form.addEventListener('submit', function(e){
  e.preventDefault();

  const nama = document.getElementById('nama').value;
  const paketSelect = document.getElementById('paket');
  const paket = paketSelect.value;
  const harga = paketSelect.options[paketSelect.selectedIndex].dataset.harga;
  const buktiFile = document.getElementById('bukti').files[0];

  document.getElementById('s-nama').textContent = nama;
  document.getElementById('s-paket').textContent = paket;
  document.getElementById('s-harga').textContent = Number(harga).toLocaleString();
  document.getElementById('s-status').textContent = "Lunas";

  const reader = new FileReader();
  reader.onload = function(e){
    document.getElementById('s-bukti').src = e.target.result;
  }
  reader.readAsDataURL(buktiFile);

  const today = new Date();
  document.getElementById('tanggal').textContent = today.toLocaleDateString();

  kwitansi.style.display = 'block';
});

// Fungsi cetak
function cetakKwitansi(){
  const isi = kwitansi.innerHTML;
  const win = window.open('', '', 'width=500,height=700');
  win.document.write('<html><head><title>Kwitansi Pembayaran</title></head><body>');
  win.document.write(isi);
  win.document.write('</body></html>');
  win.document.close();
  win.print();
}

// Fungsi download PDF (dengan html2canvas + jsPDF)
function downloadPDF(){
  html2canvas(kwitansi).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('p','pt','a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('kwitansi.pdf');
  });
}
const form = document.getElementById('form-tanda');
const kwitansi = document.getElementById('kwitansi');

form.addEventListener('submit', function(e){
  e.preventDefault();

  const nama = document.getElementById('nama').value;
  const paketSelect = document.getElementById('paket');
  const paket = paketSelect.value;
  const harga = paketSelect.options[paketSelect.selectedIndex].dataset.harga;
  const buktiFile = document.getElementById('bukti').files[0];

  document.getElementById('s-nama').textContent = nama;
  document.getElementById('s-paket').textContent = paket;
  document.getElementById('s-harga').textContent = Number(harga).toLocaleString();
  document.getElementById('s-status').textContent = "Lunas";

  const reader = new FileReader();
  reader.onload = function(e){
    document.getElementById('s-bukti').src = e.target.result;
  }
  reader.readAsDataURL(buktiFile);

  const today = new Date();
  document.getElementById('tanggal').textContent = today.toLocaleDateString();

  kwitansi.style.display = 'block';
});

// Cetak
function cetakKwitansi(){
  const isi = kwitansi.innerHTML;
  const win = window.open('', '', 'width=500,height=700');
  win.document.write('<html><head><title>Kwitansi Pembayaran</title></head><body>');
  win.document.write(isi);
  win.document.write('</body></html>');
  win.document.close();
  win.print();
}

// Download PDF
function downloadPDF(){
  html2canvas(kwitansi).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('p','pt','a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('kwitansi.pdf');
  });
}
const form = document.getElementById('form-tanda');
const kwitansi = document.getElementById('kwitansi');

form.addEventListener('submit', function(e){
  e.preventDefault();

  const nama = document.getElementById('nama').value;
  const paketSelect = document.getElementById('paket');
  const paket = paketSelect.value;
  const harga = paketSelect.options[paketSelect.selectedIndex].dataset.harga;
  const buktiFile = document.getElementById('bukti').files[0];

  document.getElementById('s-nama').textContent = nama;
  document.getElementById('s-paket').textContent = paket;
  document.getElementById('s-harga').textContent = Number(harga).toLocaleString();
  document.getElementById('s-status').textContent = "Lunas";

  const reader = new FileReader();
  reader.onload = function(e){
    document.getElementById('s-bukti').src = e.target.result;
  }
  reader.readAsDataURL(buktiFile);

  const today = new Date();
  document.getElementById('tanggal').textContent = today.toLocaleDateString();

  kwitansi.style.display = 'block';
});

function cetakKwitansi(){
  const isi = kwitansi.innerHTML;
  const win = window.open('', '', 'width=500,height=700');
  win.document.write('<html><head><title>Kwitansi Pembayaran</title></head><body>');
  win.document.write(isi);
  win.document.write('</body></html>');
  win.document.close();
  win.print();
}

function downloadPDF(){
  html2canvas(kwitansi).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('p','pt','a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('kwitansi.pdf');
  });
}
document.addEventListener("DOMContentLoaded", function(){

const slider = document.querySelector(".slide-track");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if(slider){

const scrollAmount = 320;

nextBtn.addEventListener("click", () => {
slider.scrollBy({
left: scrollAmount,
behavior: "smooth"
});
});

prevBtn.addEventListener("click", () => {
slider.scrollBy({
left: -scrollAmount,
behavior: "smooth"
});
});

}

});
