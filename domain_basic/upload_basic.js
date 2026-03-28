document.getElementById('uploadForm').addEventListener('submit', function(e){
    e.preventDefault();
    const file = document.getElementById('fileUpload').files[0];
    if(!file) { alert("Pilih file dulu!"); return; }

    // Simpan status pembayaran sementara
    localStorage.setItem("paymentStatus", "Menunggu Konfirmasi");
    alert("Bukti pembayaran berhasil diunggah!");
    window.location.href = "domain_basic/status.html";
});