const skincareData = [
    {
        name: "Avoskin Perfect Hydrating Treatment Essence",
        price: 120000,
        skinType: "Dry",
        description: "Membantu menghidrasi kulit, menjaga kelembapan, sekaligus menenangkan iritasi.",
        image: "/Assets/img/skincare.jpg"
    },
    {
        name: "The Originote Niacinamide Brightening Serum",
        price: 75000,
        skinType: "Oily",
        description: "Mencerahkan kulit dan mengontrol minyak berlebih dengan kandungan Niacinamide dan Zinc.",
        image: "/Assets/img/skincare1.jpg"
    },
    {
        name: "Somethinc Ceramic Skin Saviour Moisturizer Gel",
        price: 98000,
        skinType: "Sensitive",
        description: "Pelembap ringan yang memperkuat skin barrier dan cocok untuk kulit sensitif.",
        image: "/Assets/img/skincare2.jpg"
    },
    {
        name: "Skintific 5X Ceramide Barrier Repair Moisturizer",
        price: 115000,
        skinType: "Combination",
        description: "Menghidrasi dan memperkuat lapisan pelindung kulit dengan 5 jenis Ceramide.",
        image: "/Assets/img/skincare1.jpg"
    },
    {
        name: "Wardah UV Shield Essential Sunscreen Gel SPF 30",
        price: 37000,
        skinType: "All",
        description: "Melindungi kulit dari sinar UVA & UVB serta polusi, dengan tekstur ringan.",
        image: "/Assets/img/skincare2.jpg"
    },
    {
        name: "Azarine Hydrasoothe Sunscreen Gel SPF 45",
        price: 65000,
        skinType: "Oily",
        description: "Sunscreen ringan dan menyegarkan, cocok untuk kulit berminyak dan berjerawat.",
        image: "/Assets/img/skincare.jpg"
    },
    {
        name: "Emina Bright Stuff Face Wash",
        price: 18000,
        skinType: "Normal",
        description: "Membersihkan wajah sambil mencerahkan dengan ekstrak buah dan vitamin B3.",
        image: "/Assets/img/skincare2.jpg"
    },
    {
        name: "Scarlett Whitening Brightly Ever After Serum",
        price: 75000,
        skinType: "Dry",
        description: "Serum pencerah dengan Glutathione dan Vitamin C untuk meratakan warna kulit.",
        image: "/Assets/img/skincare1.jpg"
    },
    {
        name: "Nivea MicellAIR Skin Breathe Micellar Water",
        price: 25000,
        skinType: "Sensitive",
        description: "Membersihkan makeup dan kotoran tanpa membuat kulit kering atau iritasi.",
        image: "/Assets/img/skincare.jpg"
    },
    {
        name: "Wardah Lightening Day Cream",
        price: 50000,
        skinType: "Oily",
        description: "Dengan Advanced Niacinamide dan SPF 30, membantu mencerahkan dan melindungi kulit.",
        image: "/Assets/img/skincare1.jpg"
    }
];


let currentPage = 1;
const itemsPerPage = 8;
let filteredData = skincareData;
let selectedSkinType = '';
let priceRange = 300;

function renderSkincare() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageData = filteredData.slice(start, end);
    const listElement = document.getElementById('skincare-list');
    listElement.innerHTML = '';

    pageData.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'skincare-item';
        itemElement.onclick = () => goToDetailPage(item.name);
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" />
            <div class="details">
                <h3>${item.name}</h3>
                <p class="price-skin-type">Harga: Rp${item.price} | Jenis Kulit: ${item.skinType}</p>
                <p>${item.description}</p>
            </div>
        `;
        listElement.appendChild(itemElement);
    });

    document.getElementById('page-number').innerText = currentPage;
}

function searchSkincare() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    filteredData = skincareData.filter(item => item.name.toLowerCase().includes(searchTerm));
    currentPage = 1;
    renderSkincare();
}

function filterSkinType(type) {
    // Menghapus kelas 'active' dari semua tombol
    const buttons = document.querySelectorAll('.skin-type-options button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Menambahkan kelas 'active' pada tombol yang dipilih
    const selectedButton = document.querySelector(`button[data-skin-type="${type}"]`);
    selectedButton.classList.add('active');

    // Menyaring data berdasarkan jenis kulit yang dipilih
    selectedSkinType = type;
    filteredData = skincareData.filter(item => 
        item.skinType.toLowerCase() === type.toLowerCase() || !type);
    currentPage = 1;
    renderSkincare();
}


function updatePriceLabel() {
    const priceValue = document.getElementById('price-input').value;
    document.getElementById('price-label').innerText = `Rp0 - Rp${priceValue}`;
    priceRange = priceValue;
    filteredData = skincareData.filter(item => item.price <= priceRange);
}

function applyFilters() {
    currentPage = 1;
    renderSkincare();
    document.getElementById('filter-box').style.display = 'none';
}

function toggleFilterBox() {
    const filterBox = document.getElementById('filter-box');
    filterBox.style.display = filterBox.style.display === 'none' || filterBox.style.display === '' ? 'block' : 'none';
}

function changePage(direction) {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const newPage = currentPage + direction;
    if (newPage > 0 && newPage <= totalPages) {
        currentPage = newPage;
        renderSkincare();
    }
}

function goToDetailPage(productName) {
    // Implement navigation to a detail page (example)
    window.location.href = `/HTML/detailskincare.html?name=${encodeURIComponent(productName)}`;
}

// Initial render
renderSkincare();
