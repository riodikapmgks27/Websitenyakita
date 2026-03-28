document.getElementById('btnCari').addEventListener('click', function() {
    const name = document.getElementById('domainName').value.trim();
    const ext = document.getElementById('domainExt').value;

    if (!name) { alert("Masukkan nama domain!"); return; }

    const fullDomain = name + ext;
    const invoice = "INV-" + Math.floor(Math.random()*1000000);

    localStorage.setItem("selectedDomain", fullDomain);
    localStorage.setItem("invoiceID", invoice);
    localStorage.setItem("price", "Rp150.000");

    window.location.href = "domain_basic/pembayaran.html";
});
