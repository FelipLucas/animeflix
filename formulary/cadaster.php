<?php 
   $dbhost = 'Localhost';
   $dbUsername = 'root';
   $dbPassword = '';
   $dbName  = 'cataster-animeflix';

   $conexao = new mysqli($dbhost, $dbUsername, $dbPassword, $dbName);

   if($conexao -> connect_errno){
      echo 'erro';
   } else{
      echo "coneção efetuada com sucesso";
   }
?>