<?php

	session_start();
	if(isset($_SESSION["var"]))
	{
		if($_SESSION["var"]=="true")
		{

		}
		else
		{
			session_unset(); 
			session_destroy();
			echo "<script>window.location.assign('index.html');</script>";			
		}
	}
	else
	{
		session_unset(); 
		session_destroy();
		echo "<script>window.location.assign('index.html');</script>";
	}
?>