document.addEventListener("DOMContentLoaded", () => {
    const statusBayarEl = document.getElementById("statusBayar");
    const previewStatus = document.getElementById("previewStatus");

    // Ambil data dari localStorage
    const statusBayar = localStorage.getItem("statusBayar") || "Belum ada pembayaran";
    const buktiSS = localStorage.getItem("buktiSS");

    // Tampilkan status
    statusBayarEl.innerText = statusBayar;
    statusBayarEl.style.color = buktiSS ? "green" : "black";

    // Tampilkan preview bukti jika ada
    if (buktiSS) {
        previewStatus.innerHTML = `<img src="${buktiSS}" style="max-width:100%;border-radius:8px;">`;
    }
});
<script>
document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("btnUpload");

    if (!btn) return; // biar gak error kalau elemen belum ada

    btn.addEventListener("click", function () {
        const fileInput = document.getElementById("buktiUpload");
        const status = document.getElementById("statusUpload");
        const preview = document.getElementById("previewBukti");

        const file = fileInput.files[0];

        if (!file) {
            status.innerText = "❌ Pilih file dulu!";
            status.style.color = "red";
            return;
        }

        if (!file.type.startsWith("image/")) {
            status.innerText = "❌ File harus gambar!";
            status.style.color = "red";
            return;
        }

        const reader = new FileReader();

        reader.onload = function (e) {
            const base64 = e.target.result;

            localStorage.setItem("buktiGambar", base64);
            localStorage.setItem("statusPembayaran", "Menunggu Verifikasi");

            preview.innerHTML = `<img src="${base64}" style="max-width:200px;">`;

            status.innerText = "✅ Upload berhasil...";
            status.style.color = "green";

            setTimeout(() => {
                window.location.href = "status.html";
            }, 1500);
        };

        reader.readAsDataURL(file);
    });

});
</script>