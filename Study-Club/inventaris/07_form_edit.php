<?php
include_once('01_koneksi.php');

// mendapatkan id dari anchor yang di click, 03_select.php line 27 dan 28
$id = $_GET['id'];
$sql = "SELECT * FROM barang WHERE id = $id";
$result = $conn->query($sql);

if ($result->num_rows < 1) {
    echo "Tidak ada data";
    exit;
}
$row = $result->fetch_assoc();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Edit</title>
</head>

<body>
    <form action="04_update_data.php" method="post">
        <input type="hidden" name="id_barang" value="<?= $id ?>">
        <label for="">Nama barang:</label>
        <input type="text" name="nama_barang" id="" value="<?= $row['nama_barang'] ?>"><br>
        <label for="">Deskripsi:</label><br>
        <textarea name="deskripsi" id="" cols="30" rows="10"><?= $row['deskripsi'] ?></textarea><br>
        <label for="">Jumlah:</label><br>
        <input type="number" name="jumlah" id="" value="<?= $id ?>"><br>
        <button type="submit">Submit</button>
    </form>
</body>

</html>