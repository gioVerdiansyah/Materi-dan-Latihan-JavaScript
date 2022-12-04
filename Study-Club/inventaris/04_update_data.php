<?php
include_once('01_koneksi.php');

// select data form
$id_barang = $_POST['id_barang'];
$nama_barang = $_POST['nama_barang'];
$deskripsi = $_POST['deskripsi'];
$jumlah = $_POST['jumlah'];

// send update data
$sql = "UPDATE barang SET nama_barang='$nama_barang', deskripsi='$deskripsi', jumlah='$jumlah' WHERE id= $id_barang";
//  nama_barang='HP ASUS',
//  jumlah='10' 
//  ini multiple
//   WHERE id=3";
if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}


// yang pertama dulu
// <?php
// include_once('koneksi.php');

// $sql = "UPDATE barang SET jumlah='10' WHERE id=3"; //idnya harus sama dengan row yang mau di ubah 
// //  nama_barang='HP ASUS',
// //  jumlah='10' 
// //  ini multiple
// //   WHERE id=3";
// if ($conn->query($sql) === TRUE) {
//     echo "Record updated successfully";
// } else {
//     echo "Error updating record: " . $conn->error;
// }
