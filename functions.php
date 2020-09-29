<?php

$conn = mysqli_connect("localhost", "root", "", "msglow");

function query($query)
{
    global $conn;
    $result = mysqli_query($conn, $query);
    $rows = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
    return $rows;
}

function tambah($data, $jenis)
{
    global $conn;
    // Ambil data dari input
    $nama = htmlspecialchars($data["nama"]);
    $harga = htmlspecialchars($data["harga"]);
    $gambar = htmlspecialchars($data["gambar"]);

    // Insert Data
    $query = "INSERT INTO $jenis 
                VALUES
                (null,'$nama','$harga','$gambar')
                ";

    mysqli_query($conn, $query);

    // cek data apakah berhasil ditambah
    return mysqli_affected_rows($conn);
}
function hapus($id, $jenis)
{
    global $conn;
    mysqli_query($conn, "DELETE FROM $jenis WHERE id = $id");

    return mysqli_affected_rows($conn);
}

function edit_produk($data, $jenis_produk)
{
    global $conn;
    // Ambil data dari input
    $id = $data["id"];
    $nama = htmlspecialchars($data["nama"]);
    $harga = htmlspecialchars($data["harga"]);
    $gambar = htmlspecialchars($data["gambar"]);

    // Update Data
    $query = "UPDATE $jenis_produk SET
                nama = '$nama',
                harga = '$harga',
                gambar = '$gambar'
            WHERE id = $id
                ";
    // ! Code di atas ada kelemahannya, jika aku input data yang ada
    // ! petik satu ->' <- tersebut maka data gagal ditambahkan maupun
    // ! di update

    mysqli_query($conn, $query);

    return mysqli_affected_rows($conn);
}
