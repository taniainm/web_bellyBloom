document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const productName = params.get("name");

    const skincareData = [
        { name: "Skincare A", price: "110.000", skinType: "Toner", description: "Avoskin Hydrating Treatment Essence hadir dengan kandungan utama 5% Niacinamide dan Centella Asiatica, dilengkapi dengan ekstrak natural seperti Forsythia Suspensa dan Peppermint Oil yang bermanfaat untuk menjaga kelembapan kulit, menyejukkan kulit, membantu kulit agar tampak lebih cerah, membantu menenangkan kulit. Kandungan terbaik dalam produk ini menjadikannya multifungsi, sehingga bisa digunakan sebagai micro-essence, face mist, hydrating toner, dan setting spray.",usage: "Pakai Sebelum Serum", ingredients: "Aqua, Glycerin, Niacinamide", image: "/Assets/img/skincare.jpg" },
        { name: "Skincare B", price: 150, skinType: "Serum", description: "Mengurangi minyak berlebih pada kulit.", usage: "Gunakan sebelum pelembap.", ingredients: "Salicylic Acid, Hyaluronic Acid", image: "/Assets/img/skincare1.jpg" },
        // Tambahkan data lainnya
    ];

    const product = skincareData.find(item => item.name === productName);

    if (product) {
        document.getElementById("skincare-image").src = product.image;
        document.getElementById("skincare-type").innerText = product.skinType;
        document.getElementById("skincare-name").innerText = product.name;
        document.getElementById("skincare-price").innerText = `Rp${product.price}`;
        document.getElementById("skincare-description").innerText = product.description;
        document.getElementById("skincare-usage").innerText = product.usage;
        document.getElementById("skincare-ingredients").innerText = product.ingredients;
    } else {
        alert("Produk tidak ditemukan!");
    }
});

function showTab(tabId) {
    const tabs = document.querySelectorAll(".tab");
    const buttons = document.querySelectorAll(".tab-menu button");

    tabs.forEach(tab => tab.classList.remove("active"));
    buttons.forEach(button => button.classList.remove("active"));

    document.getElementById(tabId).classList.add("active");
    document.querySelector(`.tab-menu button[onclick="showTab('${tabId}')"]`).classList.add("active");
}