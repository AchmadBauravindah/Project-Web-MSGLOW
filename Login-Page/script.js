// Ini adalah bagian untuk mengecek bagian nama apakah valid
function checkName() {
    let V_Name = document.getElementById("Username").value;
    if (V_Name == "") {
        return false;
    } else if (V_Name = "admin") {
        return true
    } else {
        return false
    }

}

// Ini adalah bagian mengecek password
function checkPassword() {
    let V_Password = document.getElementById("Password").value;
    if (V_Password == "") {
        return false
    } else if (V_Password == "admin") {
        return true;
    } else {
        return false;
    }
}

// Membuat Requirednya
function Requir_Name() {
    if (document.getElementById("Username").value == "") {
        document.getElementById("Name_Required").style.visibility = "visible";
        document.Login.Username.focus();
        return false;
    } else {
        return true;
    }
}

function Requir_Name() {
    if (document.getElementById("Username").value == "") {
        document.getElementById("Name_Required").style.visibility = "visible";
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

function hide_required_name() {
    document.getElementById('Name_Required').style.visibility = "hidden";
}

function hide_required_password() {
    document.getElementById('Name_Required').style.visibility = "hidden";
}




// Ini adalah bagian untuk keluaran dari Semua fungsi diatas
// Jadi apakah true atau false, nanti fungsi ini yang dipakai
// untuk keluaran di HTML 
function checkAll() {
    Valid_Name = checkName();
    Valid_Password = checkPassword();
    R_Name = Requir_Name();
    R_Password = Requir_Password();
    if (Valid_Name == true && Valid_Password == true && R_Name == true && R_Password == true) {
        return true;
    } else {
        alert("Username atau Password yang anda masukan salah!")
        return false;
    }
}