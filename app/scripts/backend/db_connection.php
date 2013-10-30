<?php
	$host = "localhost";
	$user = "root";
	$pass = "root";
	$db_name = "aba";

	function mysql_aba_open() {
		// Set up database connection
		global $dbh = mysqli_connect($host, $user, $pass, $db_name);
		if(!$dbh) {
			trigger_error(mysql_error(), E_USER_ERROR)
		}
	}

	function mysql_aba_close() {
		mysqli_close($dbh);
	}
?>