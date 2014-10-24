<?php

if(isset($_REQUEST["full_name"])&&isset($_REQUEST["password"]))
{
	$xml=simplexml_load_file("../impfile/admin.xml");
	$mk=$xml;
	$i=0;
	foreach($mk->user as $user)
	{
		if($_REQUEST["full_name"]==$user->username&&$_REQUEST["password"]==$user->password)
		{
			$i=1;
			session_start();
			$_SESSION["user"] = $_REQUEST["full_name"];
			$_SESSION["var"]="true";
			break;
		}
	}

	if($i==1)
		echo "Correct";
	else
		echo "Invalid Entry";
}
else
{
	echo "Invalid Entry";
}
?>
