<?php
    try {
        $conn = new PDO("mysql:host=localhost:3306;dbName=DB_ViralaLata", "root", "na@@2013");
        $conn -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOExpection $e) {
        echo json_encode("Error: " . $e -> getMessage());
    }
?>
