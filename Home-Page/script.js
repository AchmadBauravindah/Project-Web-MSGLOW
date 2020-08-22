function Validasi_Email() {
    let Email_Value = document.getElementById("Email").value;
    let R_Email = Requir_Email();
    // console.log(Email_Value)
    let Cek_Email = false;
    // Mengecek dulu apakah email sudah terisi atau belum
    if (R_Email==false){
        return false;
    }
    for (let i = 0; i < Email_Value.length; i++) {
        if (Email_Value[i] == "@"){
            Cek_Email=true;
        } 
    }
    if (Cek_Email==false){
        document.getElementById("Email_Validasi").style.visibility = "visible";
        document.Pemesanan.Email.focus();
        return false;
    }else{
        return true;
    }
}


function Validasi_Nomer_HP(){
    let Nomer_HP_Value = document.getElementById("Nomer_HP").value;
    let R_No_HP = Requir_No_HP();
    let Cek_Nomer_HP = true;
    // Mengecek dulu apakah isian No_HP sudah terisi atau belum
    if (R_No_HP==false){
        return false;
    }
	for (i=0; i < Nomer_HP_Value.length; i++) {
		allowed = /^\d$/g;
		if (allowed.test(Nomer_HP_Value[i]) == false) {
            Cek_Nomer_HP = false;
            break;
            }
    }
    if (Cek_Nomer_HP==false){
        document.getElementById("Nomer_HP_Validasi").style.visibility = "visible";
        document.Pemesanan.Nomer_HP.focus();
        return false;
    }else{
        return true;
    }

}

function Validasi_Jumlah_Produk(){
    let Jumlah_Produk_Value = document.getElementById("Jumlah_Produk").value;
    let R_Jumlah_Produk = Requir_Jumlah_Produk();
    let Cek_Jumlah_Produk = true;
    // Mengecek dulu apakah isian Jumlah Produk sudah terisi atau belum
    if (R_Jumlah_Produk==false){
        return false;
    }
	for (i=0; i < Jumlah_Produk_Value.length; i++) {
		allowed = /^\d$/g;
		if (allowed.test(Jumlah_Produk_Value[i]) == false) {
            Cek_Jumlah_Produk = false;
            break;
            }
    }
    if (Cek_Jumlah_Produk==false){
        document.getElementById("Jumlah_Produk_Validasi").style.visibility = "visible";
        document.Pemesanan.Jumlah_Produk.focus();
        return false;
    }else{
        return true;
    }

}

function hide_validasi_email() {
    document.getElementById('Email_Validasi').style.visibility = "hidden";
}
function hide_validasi_nomer_hp() {
    document.getElementById('Nomer_HP_Validasi').style.visibility = "hidden";
}
function hide_validasi_jumlah_produk() {
    document.getElementById('Jumlah_Produk_Validasi').style.visibility = "hidden";
}



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
    console.log(Selection)
    let selectValue = false;
    for (let i = 0; i < Selection.length; i++) {
        if (Selection[i].checked == true) {
            console.log(Selection[i],"Yes")
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
// USER MEN-KLIK KOTAK ISIAN INPUT
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
function checkRequired() {
    let R_Name = Requir_Name();
    let R_Email = Requir_Email();
    let R_No_HP = Requir_No_HP();
    let R_Jenis_Produk = Requir_Jenis_Produk();
    let R_Jumlah_Produk = Requir_Jumlah_Produk();
    let R_Jenis_Pengiriman = Requir_Jenis_Pengiriman();
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

function checkAll(){
    let CR = checkRequired();
    let Valid_Email = Validasi_Email();
    let Valid_Nomer_HP = Validasi_Nomer_HP();
    let Valid_Jumlah_Produk = Validasi_Jumlah_Produk();
    if (CR==true && Valid_Email==true && Valid_Nomer_HP==true && Valid_Jumlah_Produk==true){
        alert("dh")
        return true;
    }else {
        return false;
    }
}