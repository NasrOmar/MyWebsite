<?php

if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$subject = 'Email from Portfolio Form';
	$mailFrom = $_POST['email'];
	$message = $_POST['message'];

	$mailTo = "info@nasr.ai";
	$headers = "From: ".$mailFrom;
	$txt = "You have received an e-mail from ".$name.".\n\n".$message;

	mail($mailTo, $subject, $txt, $headers);
	header("Location: index.html");
}

?>