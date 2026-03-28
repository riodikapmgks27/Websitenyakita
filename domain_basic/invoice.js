document.addEventListener("DOMContentLoaded",()=>{
    // Ambil data dari localStorage
    const domain = localStorage.getItem("domain");
    const hosting = localStorage.getItem("hosting");
    const durasi = localStorage.getItem("durasi");
    const ketDomain = localStorage.getItem("ketDomain");
    const ketHosting = localStorage.getItem("ketHosting");
    const ketDurasi = localStorage.getItem("ketDurasi");
    const totalText = localStorage.getItem("total");
    const metode = localStorage.getItem("metode");

    document.getElementById("domain").innerText = domain;
    document.getElementById("hosting").innerText = hosting;
    document.getElementById("durasi").innerText = durasi;
    document.getElementById("ketDomain").innerText = ketDomain;
    document.getElementById("ketHosting").innerText = ketHosting;
    document.getElementById("ketDurasi").innerText = ketDurasi;

    document.getElementById("total").innerText = totalText;

    // Tabel
    const tbody = document.querySelector("#invoiceTable tbody");
    let totalHarga = parseInt(totalText.replace(/[^0-9]/g,""));

    const items = [
        {no:1, item:"Domain "+domain, qty:1, harga:totalHarga},
        {no:2, item:"Hosting "+hosting, qty:1, harga:totalHarga - (parseInt(totalText.replace(/[^0-9]/g,""))-64000*durasi)}
    ];

    items.forEach(i=>{
        const row = document.createElement("tr");
        row.innerHTML = `<td>${i.no}</td><td>${i.item}</td><td>${i.qty}</td><td>Rp ${i.harga.toLocaleString()}</td>`;
        tbody.appendChild(row);
    });

    // Tambahkan total row
    const totalRow = document.createElement("tr");
    totalRow.classList.add("total-row");
    totalRow.innerHTML = `<td colspan="3">Total</td><td>${totalText}</td>`;
    tbody.appendChild(totalRow);

    // Metode pembayaran
    const detail = document.getElementById("detailMetode");
    if(metode === "bank") detail.innerHTML = "<div class='bank-card'>Bank Transfer ke BCA 0661940386 A/N RioDikaPamungkas</div>";
    else if(metode === "ewallet") detail.innerHTML = "<div class='bank-card'>E-Wallet ke 081313737616 A/N RioDikaPamungkas</div>";
    else detail.innerText = "Metode pembayaran belum dipilih";
});

function uploadBukti(){
    const file = document.getElementById("buktiUpload").files[0];
    const status = document.getElementById("statusUpload");

    if(!file){
        status.innerText = "Silakan pilih file terlebih dahulu!";
        status.style.color = "red";
        return;
    }

    status.innerText = "Bukti berhasil diupload: "+file.name;
    status.style.color = "green";

    localStorage.setItem("buktiUpload", file.name);
}
document.addEventListener("DOMContentLoaded", ()=>{
    // Ambil data dari localStorage
    const domain = localStorage.getItem("domain");
    const hosting = localStorage.getItem("hosting");
    const totalText = localStorage.getItem("total"); // total gabungan hosting+domain
    const durasi = parseInt(localStorage.getItem("durasi"));

    // Nama domain & hosting
    document.getElementById("domainItem").innerText = domain;
    document.getElementById("hostingItem").innerText = hosting;

    // Hitung harga domain & hosting terpisah
    let hargaDomain = 0;
    let hargaHosting = 64000 * durasi; // Basic 
    // Diskon 12 bulan
    if(durasi === 12) hargaHosting *= 0.8;

    // Ekstrak harga domain dari totalText
    let totalNumber = parseInt(totalText.replace(/[^0-9]/g,""));
    hargaDomain = totalNumber - hargaHosting;

    // Tampilkan harga
    document.getElementById("hargaDomain").innerText = "Rp" + hargaDomain.toLocaleString();
    document.getElementById("hargaHosting").innerText = "Rp" + hargaHosting.toLocaleString();

    // Tampilkan total
    document.getElementById("totalHarga").innerText = totalText;
});a
const btnUpload = document.getElementById("btnUpload");
const fileInput = document.getElementById("buktiUpload");
const previewBukti = document.getElementById("previewBukti");
const statusUpload = document.getElementById("statusUpload");

btnUpload.addEventListener("click", () => {
    const file = fileInput.files[0];
    if (!file) {
        alert("Silakan pilih file bukti terlebih dahulu!");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const base64 = e.target.result;

        // Tampilkan preview di halaman invoice
        previewBukti.innerHTML = `<img src="${base64}" style="max-width:100%;border-radius:8px;">`;

        // Simpan data di localStorage untuk halaman status
        localStorage.setItem("buktiSS", base64);
        localStorage.setItem("statusBayar", "Bukti diterima - Menunggu konfirmasi");

        // Update status lokal
        statusUpload.innerText = "✔ Bukti berhasil diunggah";
        statusUpload.style.color = "green";

        // Setelah upload bisa pindah ke halaman status
        // window.location.href = "status.html"; // optional redirect
    };
    reader.readAsDataURL(file);
});
