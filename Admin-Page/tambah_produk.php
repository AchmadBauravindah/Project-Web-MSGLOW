<?php
// import function
require "../functions.php";

$jenis_produk = $_GET["jenis"];
// Cek apakah tombol submit sudah ditekan atau belum
if (isset($_POST["submit"])) {
    if (tambah($_POST, $jenis_produk) > 0) {
        echo "
        <script>
            alert('Data berhasil ditambahkan');
            document.location.href='index.php';
        </script>
        ";
    } else {
        echo "
        <script>
            alert('Data gagal ditambahkan');
            document.location.href='index.php';
        </script>
        ";
        echo "<br>";
        echo mysqli_error($conn);
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
    <title>Tambah Produk</title>
</head>

<body>
    <form action="" method="post">
        <ul>
            <li>
                <label for="nama">Nama Produk : </label>
                <input required type="text" name="nama" id="nama">
            </li>
            <li>
                <label for="harga">Harga Produk : </label>
                <input required type="text" name="harga" id="harga">
            </li>
            <li>
                <label for="gambar">Gambar Produk : </label>
                <input required type="text" name="gambar" id="gambar">
            </li>
            <li>
                <button type="submit" name="submit">Submit</button>
            </li>
        </ul>
    </form>
</body>

</html>