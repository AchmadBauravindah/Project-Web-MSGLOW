<?php
// import function
require "../functions.php";
// Koneksi
$conn = mysqli_connect("localhost", "root", "", "msglow");

// Ambil data id di URL
// var_dump($_GET);
$id = $_GET["id"];
$jenis_produk = $_GET["jenis"];
// var_dump($id);

// qurry data berdasarkan id
$msglow = query("SELECT * FROM $jenis_produk WHERE id = $id")[0];
// var_dump($msglow);
// echo $msglow["nama"];

// echo mysqli_error($conn);
// Cek apakah tombol submit sudah ditekan atau belum
if (isset($_POST["submit"])) {
    if (edit_produk($_POST, $jenis_produk) > 0) {
        echo "
        <script>
            alert('Data berhasil diubah');
            document.location.href='index.php';
        </script>
        ";
    } else {
        echo "
        <script>
            alert('Data gagal diubah');
            document.location.href='update.php';
        </script>
        ";
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
    <title>Ubah Data</title>
</head>

<body>
    <form action="" method="post">
        <input type="hidden" name="id" value="<?= $msglow["id"]; ?>">
        <ul>
            <li>
                <label for="nama">Nama : </label>
                <input required type="text" name="nama" id="nama" value="<?= $msglow["nama"]; ?>">
            </li>
            <li>
                <label for="harga">Harga : </label>
                <input required type="text" name="harga" id="harga" value="<?= $msglow["harga"]; ?>">
            </li>
            <li>
                <label for="gambar">Gambar : </label>
                <input required type="text" name="gambar" id="gambar" value="<?= $msglow["gambar"]; ?>">
            </li>
            <li>
                <button type="submit" name="submit">Ubah</button>
            </li>
        </ul>
    </form>
</body>

</html>