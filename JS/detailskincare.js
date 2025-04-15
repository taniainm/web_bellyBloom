document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const productName = params.get("name");

    const skincareData = [
        {
          name: "Avoskin Perfect Hydrating Treatment Essence",
          price: 120000,
          type: "Essence",
          description: "Avoskin Hydrating Treatment Essence hadir dengan kandungan utama 5% Niacinamide dan Centella Asiatica, dilengkapi dengan ekstrak natural seperti Forsythia Suspensa dan Peppermint Oil yang bermanfaat untuk menjaga kelembapan kulit, menyejukkan kulit, membantu kulit agar tampak lebih cerah, membantu menenangkan kulit. Kandungan terbaik dalam produk ini menjadikannya multifungsi, sehingga bisa digunakan sebagai micro-essence, face mist, hydrating toner, dan setting spray.",
          usage: "- Tuangkan sedikit Perfect Hydrating Treatment Essence ke telapak tangan. - Usap dan tepuk-tepuk secara merata ke seluruh wajah hingga meresap dengan sempurna. - Gunakan setiap pagi dan malam setelah mencuci wajah atau setelah menggunakan toner. - Untuk ekstra hidrasi, gunakan juga serum dan moisturizer yang sesuai kebutuhan dan jenis kulitmu - Akhiri dengan sunscreen, untuk perlindungan di pagi hari. - Perfect Hydrating Treatment Essence juga bisa digunakan sebagai pelembap atau primer sebelum bermakeup.",
          ingredients: "Aqua, Ethyl Ascorbic Acid, Propylene Glycol, Glycerin, Chamomile (Anthemis Nobilis) Extract, Carrot (Carota Sativa) Oil, Rosa Canina (Rosehip) Oil, Carbomer, Triethanolamine, Alcohol.",
          image: "/Assets/img/skincare.jpg"
        },
        {
          name: "The Originote Niacinamide Brightening Serum",
          price: 75000,
          type: "Serum",
          description: "Serum dengan kandungan Niacinamide 10% dan Zinc 1% untuk membantu menyamarkan noda hitam, mengontrol minyak berlebih, dan mencerahkan kulit secara alami.",
          usage: "- Bersihkan wajah terlebih dahulu. - Teteskan serum secukupnya ke wajah. - Ratakan dan tepuk perlahan hingga meresap. - Gunakan pagi dan malam hari sebelum pelembap.",
          ingredients: "Niacinamide, Zinc PCA, Glycerin, Betaine, Allantoin, Aqua, Propanediol.",
          image: "/Assets/img/skincare1.jpg"
        },
        {
          name: "Somethinc Ceramic Skin Saviour Moisturizer Gel",
          price: 98000,
          type: "Moisturizer",
          description: "Pelembap berbahan dasar ceramide yang membantu memperkuat skin barrier dan memberikan kelembapan tahan lama. Cocok untuk kulit sensitif dan dehidrasi.",
          usage: "- Ambil secukupnya dan aplikasikan pada wajah dan leher. - Gunakan setelah serum di pagi dan malam hari.",
          ingredients: "Ceramide NP, Centella Asiatica Extract, Sodium Hyaluronate, Glycerin, Aqua, Caprylic/Capric Triglyceride.",
          image: "/Assets/img/skincare2.jpg"
        },
        {
          name: "Skintific 5X Ceramide Barrier Repair Moisturizer",
          price: 115000,
          type: "Moisturizer",
          description: "Mengandung 5 jenis Ceramide untuk menguatkan skin barrier, menghidrasi secara mendalam, dan menenangkan kulit iritasi.",
          usage: "- Gunakan setelah serum. - Oleskan secara merata di wajah. - Pijat lembut hingga meresap.",
          ingredients: "Ceramide NP, Ceramide AP, Ceramide EOP, Cholesterol, Phytosphingosine, Panthenol.",
          image: "/Assets/img/skincare1.jpg"
        },
        {
          name: "Wardah UV Shield Essential Sunscreen Gel SPF 30",
          price: 37000,
          type: "Sunscreen",
          description: "Sunscreen gel ringan dengan Broad Spectrum Protection SPF 30 PA++ yang melindungi kulit dari sinar UVA & UVB serta polusi.",
          usage: "- Gunakan pada pagi hari setelah pelembap. - Oleskan secara merata ke seluruh wajah dan leher.",
          ingredients: "Ethylhexyl Methoxycinnamate, Butyl Methoxydibenzoylmethane, Niacinamide, Aloe Vera Extract.",
          image: "/Assets/img/skincare2.jpg"
        },
        {
          name: "Azarine Hydrasoothe Sunscreen Gel SPF 45",
          price: 65000,
          type: "Sunscreen",
          description: "Gel sunscreen dengan tekstur ringan dan dingin, cocok untuk kulit berminyak dan berjerawat. Mengandung Aloe Vera, Green Tea, Propolis, dan Pomegranate.",
          usage: "- Oleskan merata ke wajah sebelum aktivitas di luar ruangan. - Gunakan ulang setiap 3-4 jam.",
          ingredients: "Aqua, Aloe Barbadensis Extract, Camellia Sinensis Extract, Propolis Extract, Punica Granatum Extract.",
          image: "/Assets/img/skincare.jpg"
        },
        {
          name: "Emina Bright Stuff Face Wash",
          price: 18000,
          type: "Face Wash",
          description: "Pembersih wajah dengan ekstrak summer plum dan vitamin B3 untuk kulit tampak lebih cerah dan lembut.",
          usage: "- Basahi wajah. - Tuangkan face wash dan usapkan lembut ke wajah. - Bilas hingga bersih.",
          ingredients: "Niacinamide, Prunus Domestica Fruit Extract, Glycerin, Sodium Laureth Sulfate, Aqua.",
          image: "/Assets/img/skincare2.jpg"
        },
        {
          name: "Scarlett Whitening Brightly Ever After Serum",
          price: 75000,
          type: "Serum",
          description: "Serum pencerah dengan Phyto Whitening, Glutathione, dan Vitamin C untuk membantu menyamarkan flek hitam dan meratakan warna kulit.",
          usage: "- Teteskan 2–3 tetes ke wajah. - Ratakan dan tepuk perlahan hingga meresap. - Gunakan pagi dan malam hari.",
          ingredients: "Glutathione, Ascorbyl Glucoside, Niacinamide, Aqua, Glycerin.",
          image: "/Assets/img/skincare1.jpg"
        },
        {
          name: "Nivea MicellAIR Skin Breathe Micellar Water",
          price: 25000,
          type: "Makeup Remover",
          description: "Pembersih wajah dengan teknologi micellar yang efektif menghapus makeup dan kotoran tanpa membuat kulit kering.",
          usage: "- Tuangkan ke kapas. - Usapkan lembut ke wajah hingga bersih. - Tidak perlu dibilas.",
          ingredients: "Aqua, Glycerin, PEG-40 Hydrogenated Castor Oil, Decyl Glucoside, Poloxamer 184.",
          image: "/Assets/img/skincare.jpg"
        }];      

    const product = skincareData.find(item => item.name === productName);

    if (product) {
        document.getElementById("skincare-image").src = product.image;
        document.getElementById("skincare-type").innerText = product.type;
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