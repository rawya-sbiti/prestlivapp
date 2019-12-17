<?php
include 'dbconfig.php';

// Create connection
$conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName);

if ($conn->connect_error) {

 die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM state";

$result = $conn->query($sql);
 $json = array();

if ($result->num_rows >0) {


 while($row = $result->fetch_assoc()) {
     $json[] = array_map('utf8_encode', $row);

 }
    $data = array('cities' => $json);
    $finaldata=json_encode($data,JSON_UNESCAPED_UNICODE);
    echo $finaldata;

} else {
 echo "No Results Found.";
}
$conn->close();
?>
