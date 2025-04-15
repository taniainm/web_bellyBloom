let skincareList = [
    {
      nama: "Hydrating Gentle Cleanser",
      brand: "Cetaphil",
      jenis: "Cleanser",
      kandungan: "Glycerin",
      harga: "50000",
      gambar: "/assets/img/skincare.jpg",
      deskripsi: "Pembersih wajah yang lembut untuk kulit sensitif.",
      caraPakai: "Gunakan pada pagi dan malam hari.",
      kulit: "sensitif",
    },
  ];
  
  let editingIndex = -1;
  
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnTambah").addEventListener("click", () => {
      document.getElementById("formProduk").classList.remove("hidden");
      document.getElementById("formTitle").textContent = "Tambah Produk";
      clearForm();
      editingIndex = -1;
    });
  
    document.getElementById("kategori").addEventListener("change", renderTable);
  
    renderTable();
  });
  
  function renderTable() {
    const tbody = document.getElementById("produkList");
    const filter = document.getElementById("kategori").value;
    tbody.innerHTML = "";
  
    skincareList
      .filter((product) => filter === "all" || product.kulit === filter)
      .forEach((product, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td><img src="${product.gambar}" alt="${product.nama}" width="50"></td>
          <td>${product.nama}</td>
          <td>${product.brand}</td>
          <td>${product.jenis}</td>
          <td>${product.kandungan}</td>
          <td>Rp${product.harga}</td>
          <td>${product.kulit}</td>
          <td>
            <button class="edit" onclick="editProduk(${index})">Edit</button>
            <button class="delete" onclick="hapusProduk(${index})">Hapus</button>
          </td>
        `;
        tbody.appendChild(row);
      });
  }
  
  function simpanProduk() {
    const produk = {
      nama: document.getElementById("nama").value,
      brand: document.getElementById("brand").value,
      jenis: document.getElementById("jenis").value,
      kandungan: document.getElementById("kandungan").value,
      harga: document.getElementById("harga").value,
      gambar: document.getElementById("gambar").value,
      deskripsi: document.getElementById("deskripsi").value,
      caraPakai: document.getElementById("caraPakai").value,
      kulit: document.getElementById("kulit").value,
    };
  
    if (editingIndex === -1) {
      skincareList.push(produk);
    } else {
      skincareList[editingIndex] = produk;
      editingIndex = -1;
    }
  
    renderTable();
    clearForm();
    document.getElementById("formProduk").classList.add("hidden");
  }
  
  function editProduk(index) {
    const p = skincareList[index];
    document.getElementById("nama").value = p.nama;
    document.getElementById("brand").value = p.brand;
    document.getElementById("jenis").value = p.jenis;
    document.getElementById("kandungan").value = p.kandungan;
    document.getElementById("harga").value = p.harga;
    document.getElementById("gambar").value = p.gambar;
    document.getElementById("deskripsi").value = p.deskripsi;
    document.getElementById("caraPakai").value = p.caraPakai;
    document.getElementById("kulit").value = p.kulit;
  
    editingIndex = index;
    document.getElementById("formTitle").textContent = "Edit Produk";
    document.getElementById("formProduk").classList.remove("hidden");
  }
  
  function hapusProduk(index) {
    if (confirm("Yakin ingin menghapus produk ini?")) {
      skincareList.splice(index, 1);
      renderTable();
    }
  }
  
  function batalEdit() {
    clearForm();
    editingIndex = -1;
    document.getElementById("formProduk").classList.add("hidden");
  }
  
  function clearForm() {
    document.getElementById("nama").value = "";
    document.getElementById("brand").value = "";
    document.getElementById("jenis").value = "";
    document.getElementById("kandungan").value = "";
    document.getElementById("harga").value = "";
    document.getElementById("gambar").value = "";
    document.getElementById("deskripsi").value = "";
    document.getElementById("caraPakai").value = "";
    document.getElementById("kulit").value = "";
  }

const sidebar = document.getElementById("sidebar");
const toggleSidebar = document.getElementById("toggleSidebar");
const content = document.getElementById("content");

toggleSidebar.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
    content.classList.toggle("full-width");
});