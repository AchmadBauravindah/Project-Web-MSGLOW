<?php
require "../functions.php";


$nama_produk = $_GET["nama"];
$row_produk = query("SELECT * FROM $nama_produk");
$jenis_produk = $_GET["jenis"];

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
    <link rel="stylesheet" type="text/css" href="styles.css">
    <title>MS Glow Pearlindah</title>
</head>

<body>
    <div class="box">
        <!--HEADER-->
        <!--HEADER ini dibuat dengan tumpukan-tumpukan dari css-->
        <div class="header">
            <div class="headerstack">
                <img src="./images/logo.png" alt="Logo">
                <div class="headerstackkuadrat">
                    <h1>PEARLINDAH</h1>
                </div>
            </div>
        </div>
        <div class="products" id="Products">
            <div class="product-content">
                <h1>Kategori untuk "<?= $jenis_produk; ?>"</h1>
                <?php foreach ($row_produk as $row) : ?>
                    <a href="index.php#Pemesanan">
                        <div class="product-table">
                            <img src="./images/<?= $row['gambar']; ?>" alt="<?= $row['nama']; ?>">
                            <div>
                                <i><?= $row['nama']; ?></i><br>
                                <p class="harga-text">Rp. <?= $row['harga']; ?></p>
                            </div>
                        </div>
                    </a>
                <?php endforeach; ?>

                <button style="margin-left:680px;"><a href="index.php">Kembali</a></button>
            </div>
        </div>

    </div>
    </div>
</body>

</html>