<?php
include_once('01_koneksi.php');

// mendapatka id untuk dihapus, id dari form
$id = $_GET['id'];
$sql = "DELETE FROM barang WHERE id= $id";

if ($conn->query($sql) === TRUE) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . $conn->error;
}
