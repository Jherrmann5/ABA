<?php
	include "db_connection.php";

	mysql_aba_open();

	$query = "SELECT * FROM drink_combos";
	$result = mysqli_query($dbh, $query);
	echo json_encode($result);

	mysql_aba_close();
?>	