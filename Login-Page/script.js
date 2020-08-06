function checkName() {
    V_Name = document.getElementById("Username").value;
    if (V_Name == "") {
        return false;
    } else if (V_Name == "Pearlindah" || V_Name == "Kamilah" || V_Name == "Cicik") {
        return true
    } else {
        return false
    }

}

function checkPassword() {
    V_Password = document.getElementById("Password").value
    if (V_Password == "") {
        return false
    } else if (V_Password == "erlin105") {
        return true;
    } else {
        return false;
    }
}

function checkAll() {
    Valid_Name = checkName();
    Valid_Password = checkPassword();
    if (Valid_Name == true && Valid_Password == true) {
        return true;
    } else {
        alert("Username atau Password yang anda masukan salah!")
        return false;
    }
}