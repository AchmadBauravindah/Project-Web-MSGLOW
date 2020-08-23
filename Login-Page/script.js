// Ini adalah bagian untuk mengecek bagian nama apakah valid
function checkName() {
    let V_Name = document.getElementById("Username").value;
    if (V_Name == "admin") {
        return true;
    } else {
        return false;
    }

}

// Ini adalah bagian mengecek password
function checkPassword() {
    let V_Password = document.getElementById("Password").value;
    if (V_Password == "admin") {
        return true;
    } else {
        return false;
    }
}

// Membuat Requirednya
// Requir_Name Dibuat untuk mengecek apakah isian Username sudah diisi atau belum
function Requir_Name() {
    if (document.getElementById("Username").value == "") {
        document.getElementById("Name_Required").style.visibility = "visible";
        // style.visibility : visible, digunakan untuk memvisible tulisan
        // yang ada di span yaitu tulisan "Name is required field"
        document.Login.Username.focus();
        return false;
    } else {
        return true;
    }
}

function Requir_Password() {
    if (document.getElementById("Password").value == "") {
        document.getElementById("Password_Required").style.visibility = "visible";
        document.Login.Password.focus();
        return false;
    } else {
        return true;
    }
}

// Fungsi ini digunakan untuk menyembunyikan tulisan required yang ada di tag span
// fungsi ini berada dalam onclick, jadi FUNGSI INI AKAN DIPANGGIL JIKA
// USER MEN-KLIK KOTAK ISIAN USERNAME MAUPUN PASSWORD
function hide_required_name() {
    document.getElementById('Name_Required').style.visibility = "hidden";
    document.getElementById('Wrong_Username_Password').style.visibility = "hidden";
}

function hide_required_password() {
    document.getElementById('Password_Required').style.visibility = "hidden";
    document.getElementById('Wrong_Username_Password').style.visibility = "hidden";
}

function Wrong_Fill() {
    Valid_Name = checkName();
    Valid_Password = checkPassword();
    if (Valid_Name == true && Valid_Password == true) {
        return true;
    } else {
        document.getElementById("Wrong_Username_Password").style.visibility = "visible";
        return false;
    }
}


// Ini adalah bagian untuk keluaran dari Semua fungsi diatas
// Jadi apakah true atau false, nanti fungsi ini yang dipakai
// untuk keluaran boolean di HTML 
function checkAll() {
    Wrong = Wrong_Fill();
    R_Name = Requir_Name();
    R_Password = Requir_Password();
    if (Wrong == true && R_Name == true && R_Password == true) {
        return true;
    } else {
        // alert("Username atau Password yang anda masukan salah!")
        return false;
    }
}