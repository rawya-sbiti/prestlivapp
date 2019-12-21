<?php
include 'dbconfig.php';

// Create connection
$conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName);

if ($conn->connect_error) {

 die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM commandes_affectes";

$result = $conn->query($sql);
 $json1 = array();
 $json2 = array();
 $json3 = array();

if ($result->num_rows >0) {


 while($row = $result->fetch_assoc()) {
     //fetch vendeur details
     $sqluser="SELECT city,address,country,pincode from users where id='$row[id_customer]'";
     $resultuser = $conn->query($sqluser);
     if ($resultuser->num_rows >0) {
     while($rowuser = $resultuser->fetch_assoc()) {
         $json1[] = array_map('utf8_encode', $rowuser);
     }

     }
     //fetch commande details
     $sqlcommande= "SELECT id,id_prod FROM $row[type] where id='$row[id_commande]'";
     $resultcommande = $conn->query($sqlcommande);
     if ($resultcommande->num_rows >0) {
     while($rowcommande = $resultcommande->fetch_assoc()) {
         if ($row[type]=='commande'){
             $prodtab='details_produits' ;
         }
         else {
             $prodtab='allovoisin' ;
         };
         $sqlprod="SELECT * FROM $prodtab where id='$rowcommande[id_prod]'";
         $resultprod = $conn->query($sqlprod);
         if ($resultprod->num_rows >0) {
         while($rowprod = $resultprod->fetch_assoc()) {
             $json3[] = array_map('utf8_encode', $rowprod);
         }

         }
         $json2[] = array_map('utf8_encode', $rowcommande);
     }

     }
 }
    $data = array('vendeurdata' => $json1);
    $finaldata=json_encode($data,JSON_UNESCAPED_UNICODE);
    //echo $finaldata;
    $datacommande = array('commandedata' => $json2);
    $finaldatacommande=json_encode($datacommande,JSON_UNESCAPED_UNICODE);
    //echo $finaldatacommande;
    $dataprod = array('proddata' => $json3);
    $finaldataprod=json_encode($dataprod,JSON_UNESCAPED_UNICODE);
   // echo $finaldataprod;
    $vendeurcommaneprod[]=json_decode($finaldata,true);
    $vendeurcommaneprod[]=json_decode($finaldatacommande,true);
    $vendeurcommaneprod[]=json_decode($finaldataprod,true);
    $json_merge = json_encode($vendeurcommaneprod,JSON_UNESCAPED_UNICODE);
    echo $json_merge;

} else {
 echo "No Results Found";
}
$conn->close();
?>
