<?php
include_once('01_koneksi.php');

$sql = "SELECT * FROM barang"; //* jika butuh semua
$result = $conn->query($sql);

if ($result->num_rows > 0) { //num_rows mengecek isi datanya
?>
    <table border="1" style="text-align:center;">
        <tr>
            <td>ID</td>
            <td>Nama_barang</td>
            <td>Deskripsi</td>
            <td>Jumlah</td>
            <td>Option</td>
        </tr>
        <?php
        while ($row = $result->fetch_assoc()) :
        ?>

            <tr>
                <td><?= $row['id'] ?></td>
                <td><?= $row['nama_barang'] ?></td>
                <td><?= $row['deskripsi'] ?></td>
                <td><?= $row['jumlah'] ?></td>
                <td>
                    <a href="07_form_edit.php?id=<?= $row['id'] ?>">edit</a>
                    <a href="05_delete.php?id=<?= $row['id'] ?>">delete</a>
                    <!-- $row['id'] mendapatkan id dari tabel yang sudah dibuat -->
                </td>
            </tr>
        <?php endwhile ?>
    </table>
<?php
} else {
    echo "0 results";
}
?>