<?php
require "../functions.php";
$id = $_GET["id"];
$jenis_produk = $_GET["jenis"];
if (hapus($id, $jenis_produk)) {
    echo "
        <script>
            alert('Data berhasil dihapus');
            document.location.href='index.php';
        </script>
        ";
} else {
    echo "
        <script>
            alert('Data gagal dihapus');
            document.location.href='index.php';
        </script>
        ";
}
