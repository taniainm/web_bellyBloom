const articles = [
    {
        title: "14 Gerakan yang Tidak Boleh Dilakukan Ibu Hamil",
        image: "/assets/img/image.jpg",
        summary: "Olah raga memang penting untuk kesehatan ibu hamil. Namun, ada aturan yang perlu diperhatikan...",
        date: "Mar 12, 2025"
    },
    {
        title: "Fase Perkembangan Janin, Kapan Embrio...",
        image: "/assets/img/image.jpg",
        summary: "",
        date: "Mar 12, 2025"
    },
    {
        title: "4 Jenis Persalinan yang Perlu Bumil Tahu",
        image: "/assets/img/image.jpg",
        summary: "",
        date: "Mar 12, 2025"
    },
    {
        title: "Ketahui 18 Fakta Bayi Baru Lahir",
        image: "/assets/img/image.jpg",
        summary: "",
        date: "Mar 12, 2025"
    },
    {
        title: "Melahirkan Lebih Tenang dengan Gentle Birth",
        image: "/assets/img/image.jpg",
        summary: "",
        date: "Mar 12, 2025"
    },
    {
        title: "Apakah Ibu Hamil Boleh Memakai Skincare?",
        image: "/assets/img/image.jpg",
        summary: "",
        date: "Mar 12, 2025"
    },
    {
        title: "11 Makanan Penambah Nafsu Makan Ibu Hamil",
        image: "/assets/img/image.jpg",
        summary: "",
        date: "Mar 12, 2025"
    }
];

// Render artikel utama
function loadMainArticle() {
    const mainArticle = document.getElementById("main-article");
    mainArticle.innerHTML = `
        <a href="detail_artikel.html?title=${encodeURIComponent(articles[0].title)}">
            <img src="${articles[0].image}" alt="Artikel utama">
            <h2>${articles[0].title}</h2>
            <p>${articles[0].summary}</p>
        </a>
    `;
}

// Render sidebar artikel
function loadSidebar() {
    const sidebar = document.getElementById("sidebar");
    let sidebarHTML = "";
    for (let i = 1; i < 4; i++) {
        sidebarHTML += `
            <a href="detail_artikel.html?title=${encodeURIComponent(articles[i].title)}" class="article-card">
                <img src="${articles[i].image}" alt="Artikel samping">
                <p>${articles[i].title}</p>
            </a>
        `;
    }
    sidebar.innerHTML = sidebarHTML;
}

// Render artikel lainnya
function loadArticles() {
    const articleContainer = document.getElementById("article-container");
    let articlesHTML = "";
    for (let i = 4; i < articles.length; i++) {
        articlesHTML += `
            <a href="detail_artikel.html?title=${encodeURIComponent(articles[i].title)}" class="article-card">
                <img src="${articles[i].image}" alt="Artikel">
                <p>${articles[i].date}</p>
                <h3>${articles[i].title}</h3>
            </a>
        `;
    }
    articleContainer.innerHTML = articlesHTML;
}

// Fungsi pencarian artikel berdasarkan judul
function searchArticles() {
    let keyword = document.getElementById("search-box").value.toLowerCase();
    let articleContainer = document.getElementById("article-container");

    if (!articleContainer) {
        console.error("Elemen #article-container tidak ditemukan!");
        return;
    }

    // Filter artikel berdasarkan judul
    let filteredArticles = articles.filter(article => 
        article.title.toLowerCase().includes(keyword)
    );

    // Kosongkan kontainer sebelum menampilkan hasil
    articleContainer.innerHTML = "";

    if (filteredArticles.length === 0) {
        articleContainer.innerHTML = "<p>Tidak ada artikel yang ditemukan.</p>";
        return;
    }

    // Tampilkan hasil pencarian
    filteredArticles.forEach(article => {
        let articleHTML = `
            <div class="article-card">
                <img src="${article.image}" alt="Gambar Artikel">
                <p>${article.date}</p>
                <h3>${article.title}</h3>
            </div>
        `;
        articleContainer.innerHTML += articleHTML;
    });
}

document.addEventListener("DOMContentLoaded", function () {
    loadMainArticle();
    loadSidebar();
    loadArticles();

    let searchBox = document.getElementById("search-box");

    if (searchBox) {
        searchBox.addEventListener("input", searchArticles);
    } else {
        console.error("Elemen #search-box tidak ditemukan!");
    }});