<?php
include_once('01_koneksi.php');

// dari form
$nama_barang = $_POST['nama_barang'];
$deskripsi = $_POST['deskripsi'];
$jumlah = $_POST['jumlah'];

// send
$sql = "INSERT INTO barang VALUES (null, '$nama_barang', '$deskripsi', '$jumlah')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
