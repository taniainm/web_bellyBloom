let weeks = [
    {
        minggu: 1,
        gambar: "/assets/img/w1.jpg",
        berat: "0 gram",
        panjang: "0 cm",
        detak: "Belum terdeteksi",
        deskripsi: "Pada minggu pertama, kehamilan belum terjadi. Namun, perhitungan usia kehamilan dimulai dari hari pertama menstruasi terakhir."
      },
      {
        minggu: 2,
        gambar: "/assets/img/w2.jpg",
        berat: "0 gram",
        panjang: "0 cm",
        detak: "Belum terdeteksi",
        deskripsi: "Minggu kedua masih merupakan bagian dari siklus menstruasi. Ovulasi biasanya terjadi pada akhir minggu ini."
      },
      {
        minggu: 3,
        gambar: "/assets/img/w3.jpg",
        berat: "Kurang dari 1 gram",
        panjang: "Kurang dari 0.1 cm",
        detak: "Belum terdeteksi",
        deskripsi: "Pembuahan terjadi, membentuk zigot yang akan berkembang menjadi embrio."
      },
      {
        minggu: 4,
        gambar: "/assets/img/w4.jpg",
        berat: "Kurang dari 1 gram",
        panjang: "0.1 cm",
        detak: "Belum terdeteksi",
        deskripsi: "Embrio mulai menempel pada dinding rahim dan membentuk kantung ketuban serta plasenta."
      },
      {
        minggu: 5,
        gambar: "/assets/img/w5.jpg",
        berat: "Kurang dari 1 gram",
        panjang: "0.2 cm",
        detak: "Belum terdeteksi",
        deskripsi: "Tabung saraf mulai terbentuk, yang akan berkembang menjadi otak dan sumsum tulang belakang."
      },
      {
        minggu: 6,
        gambar: "/assets/img/w6.jpg",
        berat: "Kurang dari 1 gram",
        panjang: "0.4 cm",
        detak: "Sekitar 110 kali per menit",
        deskripsi: "Jantung mulai berdetak dan struktur dasar wajah mulai terbentuk."
      },
      {
        minggu: 7,
        gambar: "/assets/img/w7.jpg",
        berat: "0.8 gram",
        panjang: "1.3 cm",
        detak: "Sekitar 120 kali per menit",
        deskripsi: "Tunas lengan dan kaki mulai berkembang, dan otak serta mata mulai terbentuk."
      },
      {
        minggu: 8,
        gambar: "/assets/img/w8.jpg",
        berat: "1 gram",
        panjang: "1.6 cm",
        detak: "Sekitar 130 kali per menit",
        deskripsi: "Jari-jari tangan dan kaki mulai terbentuk, serta telinga bagian dalam mulai berkembang."
      },
      {
        minggu: 9,
        gambar: "/assets/img/w9.jpg",
        berat: "2 gram",
        panjang: "2.3 cm",
        detak: "Sekitar 140 kali per menit",
        deskripsi: "Kelopak mata terbentuk dan organ-organ vital mulai berkembang."
      },
      {
        minggu: 10,
        gambar: "/assets/img/w10.jpg",
        berat: "4 gram",
        panjang: "3.1 cm",
        detak: "Sekitar 150 kali per menit",
        deskripsi: "Janin mulai bergerak, meskipun ibu belum merasakannya. Organ vital terus berkembang."
      },
      {
        minggu: 11,
        gambar: "/assets/img/w11.jpg",
        berat: "7 gram",
        panjang: "4.1 cm",
        detak: "Sekitar 160 kali per menit",
        deskripsi: "Kuku mulai tumbuh dan janin dapat membuka dan menutup tangan."
      },
      {
        minggu: 12,
        gambar: "/assets/img/w12.jpg",
        berat: "14 gram",
        panjang: "5.4 cm",
        detak: "Sekitar 160 kali per menit",
        deskripsi: "Organ reproduksi mulai terbentuk, namun jenis kelamin belum dapat dipastikan melalui USG."
      },
      {
        minggu: 13,
        gambar: "/assets/img/w13.jpg",
        berat: "23 gram",
        panjang: "7.4 cm",
        detak: "Sekitar 150 kali per menit",
        deskripsi: "Sidik jari mulai terbentuk dan janin mulai menghisap jempol."
      },
      {
        minggu: 14,
        gambar: "/assets/img/w14.jpg",
        berat: "43 gram",
        panjang: "8.7 cm",
        detak: "Sekitar 150 kali per menit",
        deskripsi: "Wajah janin semakin jelas dan rambut halus mulai tumbuh di kepala."
      },
      {
        minggu: 15,
        gambar: "/assets/img/w15.jpg",
        berat: "70 gram",
        panjang: "10.1 cm",
        detak: "Sekitar 150 kali per menit",
        deskripsi: "Janin mulai merespons cahaya dan dapat mendengar suara dari luar rahim."
      },
      {
        minggu: 16,
        gambar: "/assets/img/w16.jpg",
        berat: "100 gram",
        panjang: "11.6 cm",
        detak: "Sekitar 150 kali per menit",
        deskripsi: "Otot janin berkembang dan ibu mungkin mulai merasakan gerakan janin."
      },
      {
        minggu: 17,
        gambar: "/assets/img/w17.jpg",
        berat: "140 gram",
        panjang: "13 cm",
        detak: "Sekitar 150 kali per menit",
        deskripsi: "Lemak mulai terbentuk di bawah kulit dan janin dapat mengisap jempol."
      },
      {
        minggu: 18,
        gambar: "/assets/img/w18.jpg",
        berat: "190 gram",
        panjang: "14.2 cm",
        detak: "Sekitar 150 kali per menit",
        deskripsi: "Telinga janin sudah pada posisi akhir dan dapat mendengar suara ibu."
      },
      {
        minggu: 19,
        gambar: "/assets/img/w19.jpg",
        berat: "240 gram",
        panjang: "15.3 cm",
        detak: "Sekitar 150 kali per menit",
        deskripsi: "Kulit janin mulai membentuk vernix caseosa, lapisan pelindung berwarna putih."
      },
      {
        minggu: 20,
        gambar: "/assets/img/w20.jpg",
        berat: "300 gram",
        panjang: "16.4 cm",
        detak: "Sekitar 150 kali per menit",}
  ];
  
  const listDiv = document.getElementById("listMinggu");
  const modal = document.getElementById("modalForm");
  const form = document.getElementById("weekForm");
  const btnTambah = document.getElementById("btnTambah");
  const cancelBtn = document.getElementById("cancelBtn");
  
  let editIndex = null;
  
  function renderList() {
    listDiv.innerHTML = "";
    weeks.sort((a, b) => a.minggu - b.minggu).forEach((item, index) => {
      const div = document.createElement("div");
      div.className = "card";
  
      div.innerHTML = `
        <img src="${item.gambar}" alt="minggu-${item.minggu}">
        <div class="card-content">
          <h3>Minggu ke-${item.minggu}</h3>
          <p><strong>Berat:</strong> ${item.berat}</p>
          <p><strong>Panjang:</strong> ${item.panjang}</p>
          <p><strong>Detak Jantung:</strong> ${item.detak}</p>
          <p>${item.deskripsi}</p>
          <button class="edit" onclick="editData(${index})">Edit</button>
          <button class="hapus" onclick="hapusData(${index})">Hapus</button>
        </div>
      `;
      listDiv.appendChild(div);
    });
  }
  
  btnTambah.onclick = () => {
    form.reset();
    editIndex = null;
    modal.classList.remove("hidden");
  };
  
  cancelBtn.onclick = () => {
    modal.classList.add("hidden");
  };
  
  form.onsubmit = function(e) {
    e.preventDefault();
    const minggu = parseInt(document.getElementById("minggu").value);
    const berat = document.getElementById("berat").value;
    const panjang = document.getElementById("panjang").value;
    const detak = document.getElementById("detak").value;
    const deskripsi = document.getElementById("deskripsi").value;
    const gambarInput = document.getElementById("gambarInput");
    const gambar = gambarInput.files[0]
      ? URL.createObjectURL(gambarInput.files[0])
      : (editIndex !== null ? weeks[editIndex].gambar : "/assets/img/default.jpg");
  
    const newData = { minggu, gambar, berat, panjang, detak, deskripsi };
  
    if (editIndex !== null) {
      weeks[editIndex] = newData;
    } else {
      weeks.push(newData);
    }
  
    modal.classList.add("hidden");
    renderList();
  };
  
  function editData(index) {
    const data = weeks[index];
    editIndex = index;
    document.getElementById("minggu").value = data.minggu;
    document.getElementById("berat").value = data.berat;
    document.getElementById("panjang").value = data.panjang;
    document.getElementById("detak").value = data.detak;
    document.getElementById("deskripsi").value = data.deskripsi;
    modal.classList.remove("hidden");
  }
  
  function hapusData(index) {
    if (confirm("Yakin ingin menghapus info minggu ini?")) {
      weeks.splice(index, 1);
      renderList();
    }
  }
  
  const sidebar = document.getElementById("sidebar");
  const toggleSidebar = document.getElementById("toggleSidebar");
  const content = document.getElementById("content");
  
  toggleSidebar.addEventListener("click", () => {
      sidebar.classList.toggle("hidden");
      content.classList.toggle("full-width");
  });

  renderList();
  