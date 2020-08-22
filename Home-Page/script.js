// // Ini adalah bagian untuk mengecek bagian nama apakah valid
// function checkName() {
//     let V_Name = document.getElementById("Username").value;
//     if (V_Name = "admin") {
//         return true
//     } else {
//         return false
//     }

// }

// // Ini adalah bagian mengecek password
// function checkPassword() {
//     let V_Password = document.getElementById("Password").value;
//     if (V_Password == "admin") {
//         return true;
//     } else {
//         return false;
//     }
// }

// Membuat Requirednya
// Requir_Name Dibuat untuk mengecek apakah isian Username sudah diisi atau belum
function Requir_Name() {
    if (document.getElementById("Nama").value == "") {
        document.getElementById("Nama_Required").style.visibility = "visible";
        // style.visibility : visible, digunakan untuk memvisible tulisan
        // yang ada di span yaitu tulisan "Name is required field"
        document.Pemesanan.Nama.focus();
        return false;
    } else {
        return true;
    }
}

function Requir_Email() {
    if (document.getElementById("Email").value == "") {
        document.getElementById("Email_Required").style.visibility = "visible";
        document.Pemesanan.Email.focus();
        return false;
    } else {
        return true;
    }
}

function Requir_No_HP() {
    if (document.getElementById("Nomer_HP").value == "") {
        document.getElementById("Nomer_HP_Required").style.visibility = "visible";
        document.Pemesanan.Nomer_HP.focus();
        return false;
    } else {
        return true;
    }
}

function Requir_Jenis_Produk() {
    if (document.getElementById("Jenis_Produk").value == "") {
        document.getElementById("Jenis_Produk_Required").style.visibility = "visible";
        document.Pemesanan.Jenis_Produk.focus();
        return false;
    } else {
        return true;
    }
}

function Requir_Jumlah_Produk() {
    if (document.getElementById("Jumlah_Produk").value == "") {
        document.getElementById("Jumlah_Produk_Required").style.visibility = "visible";
        document.Pemesanan.Jumlah_Produk.focus();
        return false;
    } else {
        return true;
    }
}

function Requir_Jenis_Pengiriman() {
    let Selection = document.getElementsByName('Jenis_Pengiriman');
    // console.log(Selection)
    let selectValue = false;
    for (let i = 0; i < Selection.length; i++) {
        if (Selection[i].checked == true) {
            // console.log(Selection[i])
            selectValue = true;
        }
    }
    if (selectValue == false) {
        document.getElementById("Jenis_Pengiriman_Required").style.visibility = "visible";
        return false;
    } else {
        return true;
    }
}

function Requir_Alamat() {
    if (document.getElementById("Alamat").value == "") {
        document.getElementById("Alamat_Required").style.visibility = "visible";
        document.Pemesanan.Alamat.focus();
        return false;
    } else {
        return true;
    }
}

function Requir_Yakin() {
    let Selection = document.getElementsByName('Apakah_Yakin');
    // console.log(Selection)
    let selectValue = false;
    for (let i = 0; i < Selection.length; i++) {
        if (Selection[i].checked == true) {
            // console.log(Selection[i])
            selectValue = true;
        }
    }
    if (selectValue == false) {
        document.getElementById("Apakah_Yakin_Required").style.visibility = "visible";
        return false;
    } else {
        return true;
    }
}

// Fungsi ini digunakan untuk menyembunyikan tulisan required yang ada di tag span
// fungsi ini berada dalam onclick, jadi FUNGSI INI AKAN DIPANGGIL JIKA
// USER MEN-KLIK KOTAK ISIAN USERNAME MAUPUN PASSWORD
function hide_required_nama() {
    document.getElementById('Nama_Required').style.visibility = "hidden";
}

function hide_required_email() {
    document.getElementById('Email_Required').style.visibility = "hidden";
}

function hide_required_nomer_hp() {
    document.getElementById('Nomer_HP_Required').style.visibility = "hidden";
}

function hide_required_jenis_produk() {
    document.getElementById('Jenis_Produk_Required').style.visibility = "hidden";
}

function hide_required_jumlah_produk() {
    document.getElementById('Jumlah_Produk_Required').style.visibility = "hidden";
}

function hide_required_jenis_pengiriman() {
    document.getElementById('Jenis_Pengiriman_Required').style.visibility = "hidden";
}

function hide_required_alamat() {
    document.getElementById('Alamat_Required').style.visibility = "hidden";
}

function hide_required_yakin() {
    document.getElementById('Apakah_Yakin_Required').style.visibility = "hidden";
}



// Ini adalah bagian untuk keluaran dari Semua fungsi diatas
// Jadi apakah true atau false, nanti fungsi ini yang dipakai
// untuk keluaran boolean di HTML 
function checkAll() {
    let R_Name = Requir_Name();
    let R_Email = Requir_Email();
    let R_No_HP = Requir_No_HP();
    let R_Jenis_Produk = Requir_Jenis_Produk();
    let R_Jumlah_Produk = Requir_Jumlah_Produk();
    let R_Jeniss_Pengiriman = Requir_Jenis_Pengiriman();
    let R_Alamat = Requir_Alamat();
    let R_Apakah_Yakin = Requir_Yakin();
    if (R_Name == true && R_Email == true && R_No_HP == true &&
        R_Jenis_Produk == true && R_Jumlah_Produk == true &&
        R_Jenis_Pengiriman == true && R_Alamat == true && R_Apakah_Yakin == true) {
        return true;
    } else {
        // alert("Username atau Password yang anda masukan salah!")
        return false;
    }
}