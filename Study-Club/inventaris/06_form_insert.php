<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Insert</title>
</head>

<body>
    <form action="02_insert.php" method="post">
        <label for="">Nama barang:</label>
        <input type="text" name="nama_barang" id=""><br>
        <label for="">Deskripsi</label><br>
        <textarea name="deskripsi" id="" cols="30" rows="10"></textarea><br>
        <label for="">Jumlah:</label><br>
        <input type="number" name="jumlah" id=""><br>
        <button type="submit">Submit</button>
    </form>
</body>

</html>