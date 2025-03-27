document.addEventListener("DOMContentLoaded", function () {
    const buttonContainer = document.getElementById("buttonContainer");
    const judulPerkembangan = document.getElementById("judulPerkembangan");
    const ilustrasi = document.querySelector(".ilustrasi");
    const weekInput = document.getElementById("weekInput");
    const pilihButton = document.querySelector("button");
    const deskripsiContainer = document.createElement("p"); // Untuk deskripsi
    document.body.appendChild(deskripsiContainer);

    // Data ilustrasi dan deskripsi (Simulasi database)
    const perkembanganData = {
        1: { img: "/assets/img/w1.jpg", desc: "Minggu pertama kehamilan dihitung sejak HPHT." },
        2: { img: "/assets/img/w2.jpg", desc: "Di minggu ini, ovulasi dan pembuahan terjadi." },
        3: { img: "/assets/img/w3.jpg", desc: "Sel telur mulai membelah menjadi embrio." },
        13: { img: "/assets/img/w13.jpg", desc: "Janin mulai mengembangkan sidik jari." }, 
        // ... Tambahkan data lainnya hingga minggu 40
        40: { img: "/assets/img/w40.jpg", desc: "Persiapan persalinan, bayi siap dilahirkan." }
    };

    document.querySelectorAll(".week").forEach(button => {
        button.addEventListener("click", function() {
            const minggu = parseInt(this.dataset.minggu);
            updateMinggu(minggu);
        });
    });

    // Fungsi untuk memperbarui tampilan berdasarkan minggu
    function updateContent(week) {
        if (week >= 1 && week <= 40) {
            judulPerkembangan.textContent = `Perkembangan Janin Minggu ke-${week}`;
            ilustrasi.src = perkembanganData[week]?.img || "/assets/img/default.jpg";
            deskripsiContainer.textContent = perkembanganData[week]?.desc || "Deskripsi tidak tersedia.";

            updateActiveButton(week);
            scrollToButton(week);
        } else {
            alert("Masukkan angka antara 1 hingga 40!");
        }
    }

    // Fungsi untuk mengubah warna tombol yang dipilih
    function updateActiveButton(selectedWeek) {
        const buttons = document.querySelectorAll(".week");
        buttons.forEach(button => button.classList.remove("active")); // Reset semua active

        // Pilih tombol berdasarkan minggu yang dipilih
        const activeButton = document.querySelector(`.week[data-week='${selectedWeek}']`);
        if (activeButton) {
            activeButton.classList.add("active");
        }
    }

    // Fungsi untuk menggeser tombol yang dipilih ke tengah
    function scrollToButton(selectedWeek) {
        const activeButton = document.querySelector(`.week[data-week='${selectedWeek}']`);
        if (activeButton) {
            const container = document.getElementById("buttonContainer");
            const buttonWidth = activeButton.offsetWidth;
            const containerWidth = container.offsetWidth;
            const scrollLeft = activeButton.offsetLeft - (containerWidth / 2) + (buttonWidth / 2);

            container.scrollTo({
                left: scrollLeft,
                behavior: "smooth"
            });
        }
    }

    // Loop untuk membuat tombol minggu 1-40
    for (let i = 1; i <= 40; i++) {
        let link = document.createElement("a");
        link.href = "#";
        link.className = "week";
        link.setAttribute("data-week", i); // Tambahkan atribut untuk identifikasi
        link.innerHTML = `<h3>${i} Minggu</h3>`;

        link.addEventListener("click", function (event) {
            event.preventDefault();
            updateContent(i);
            updateMinggu(i); // Pastikan fungsi ini dipanggil
        });

        buttonContainer.appendChild(link);
    }

    // Event untuk tombol "Pilih"
    pilihButton.addEventListener("click", function () {
        const week = parseInt(weekInput.value);
        updateContent(week);
        updateMinggu(week);
    });

    const dataMinggu = [
        {
            minggu: 1,
            gambar: "/assets/img/w1.jpg",
            berat: "0-0 Gram",
            panjang: "0-0 Cm",
            detak: "0-0 Per detik",
            deskripsi: "Apa yang terjadi di Minggu 1... (deskripsi lengkap)."
        },
        {
            minggu: 2,
            gambar: "/assets/img/w2.jpg",
            berat: "1-2 Gram",
            panjang: "0.1-0.2 Cm",
            detak: "100-120 Per detik",
            deskripsi: "Apa yang terjadi di Minggu 2... (deskripsi lengkap)."
        },
        {
            minggu: 3,
            gambar: "/assets/img/w3.jpg",
            berat: "2-4 Gram",
            panjang: "0.3-0.5 Cm",
            detak: "120-140 Per detik",
            deskripsi: "Apa yang terjadi di Minggu 3... (deskripsi lengkap)."
        },
    ];

    function updateMinggu(minggu) {
        // Cari data sesuai minggu yang dipilih
        const data = dataMinggu.find(item => item.minggu === minggu);
        
        if (data) {
            document.getElementById("mingguKalender").textContent = "Minggu " + data.minggu;
            document.getElementById("janinImage").src = data.gambar;
            document.getElementById("ukuranJanin").textContent = data.berat;
            document.getElementById("panjangJanin").textContent = data.panjang;
            document.getElementById("detakJantung").textContent = data.detak;
            document.getElementById("deskripsiContent").textContent = data.deskripsi;
        }
    }
    

});
