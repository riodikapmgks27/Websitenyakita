document.getElementById("domain").innerText = localStorage.getItem("domain");
document.getElementById("hosting").innerText = localStorage.getItem("hosting");
document.getElementById("durasi").innerText = localStorage.getItem("durasi");
document.getElementById("total").innerText = localStorage.getItem("total");

// 🔥 tampilkan keterangan
document.getElementById("ketDomain").innerText = localStorage.getItem("ketDomain");
document.getElementById("ketHosting").innerText = localStorage.getItem("ketHosting");

function tampilSubMetode(){
    let metode = document.getElementById("metode").value;
    let sub = document.getElementById("subMetode");
    let detail = document.getElementById("detailBayar");

    detail.innerHTML = ""; // reset detail

    if(metode === "bank"){
        // Pilihan bank
        sub.innerHTML = `
        <select id="pilihBank" onchange="tampilDetailBank()">
            <option value="">Pilih Bank</option>
            <option value="BRI">BRI</option>
            <option value="BCA">BCA</option>
            <option value="Mandiri">Mandiri</option>
        </select>
        `;
    } else if(metode === "ewallet"){
        // Pilihan e-wallet
        sub.innerHTML = `
        <select id="pilihEwallet" onchange="tampilDetailEwallet()">
            <option value="">Pilih E-wallet</option>
            <option value="DANA">DANA</option>
            <option value="OVO">OVO</option>
            <option value="Gopay">Gopay</option>
            <option value="QRIS">QRIS</option>
            <option value="ShopeePay">ShopeePay</option>
        </select>
        `;
    } else{
        sub.innerHTML = "";
    }
}
function tampilSubMetode(){
    let metode = document.getElementById("metode").value;
    let sub = document.getElementById("subMetode");
    let detail = document.getElementById("detailBayar");

    detail.innerHTML = ""; // reset detail

    if(metode === "bank"){
        // Pilihan bank
        sub.innerHTML = `
        <select id="pilihBank" onchange="tampilDetailBank()">
            <option value="">Pilih Bank</option>
            <option value="BRI">BRI</option>
            <option value="BCA">BCA</option>
            <option value="Mandiri">Mandiri</option>
        </select>
        `;
    } else if(metode === "ewallet"){
        // Pilihan e-wallet
        sub.innerHTML = `
        <select id="pilihEwallet" onchange="tampilDetailEwallet()">
            <option value="">Pilih E-wallet</option>
            <option value="DANA">DANA</option>
            <option value="OVO">OVO</option>
            <option value="Gopay">Gopay</option>
            <option value="QRIS">QRIS</option>
            <option value="ShopeePay">ShopeePay</option>
        </select>
        `;
    } else{
        sub.innerHTML = "";
    }
}
// 🔹 PAYPAL
else if(metode === "paypal"){
    info.innerHTML = `
    <div style="background:#f8f9fa;padding:12px;border-radius:8px;border:1px solid #ddd;">
        <b>PayPal / Internasional</b><br><br>
        <div id="detailPayPal"></div>
    </div>
    `;
    tampilDetailPayPal();
}
