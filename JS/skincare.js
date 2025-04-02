const skincareData = [
    { name: "Skincare A", price: 100, skinType: "Dry", description: "Merawat kulit kering dengan kelembapan optimal.", image: "/Assets/img/skincare.jpg" },
    { name: "Skincare B", price: 150, skinType: "Oily", description: "Mengurangi minyak berlebih pada kulit.", image: "/Assets/img/skincare1.jpg" },
    { name: "Skincare C", price: 120, skinType: "Combination", description: "Menyeimbangkan kulit kombinasi.", image: "/Assets/img/skincare2.jpg" },
    { name: "Skincare D", price: 90, skinType: "Sensitive", description: "Menghidrasi kulit sensitif dengan lembut.", image: "/Assets/img/skincare.jpg" },
    { name: "Skincare E", price: 200, skinType: "Oily", description: "Membantu mengontrol minyak berlebih.", image: "/Assets/img/skincare1.jpg" },
    { name: "Skincare F", price: 80, skinType: "Dry", description: "Memberikan kelembapan bagi kulit kering.", image: "/Assets/img/skincare2.jpg" },
    { name: "Skincare G", price: 110, skinType: "Combination", description: "Menjaga keseimbangan kelembapan kulit.", image: "/Assets/img/skincare.jpg" },
    { name: "Skincare H", price: 170, skinType: "Sensitive", description: "Bebas bahan kimia keras, aman untuk kulit sensitif.", image: "/Assets/img/skincare1.jpg" },
    { name: "Skincare I", price: 50, skinType: "Oily", description: "Menyegarkan kulit berminyak tanpa membuat kering.", image: "/Assets/img/skincare2.jpg" },
    { name: "Skincare J", price: 130, skinType: "Dry", description: "Menutrisi kulit kering dengan formula khusus.", image: "/Assets/img/skincare.jpg" },
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
