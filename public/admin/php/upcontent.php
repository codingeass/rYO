<?php
	require("sessionv.php");
	if(isset($_REQUEST["title"])&&isset($_REQUEST["content"])&&isset($_REQUEST["i"])){
		$xml=simplexml_load_file("../../xml/chatting.xml");
		$blogsection=$xml->BlogSection[intval($_REQUEST["i"])];
		$blogsection->title=$_REQUEST["title"];
		$blogsection->content=$_REQUEST["content"];
		$xml->saveXML('../../xml/chatting.xml');
		echo "Correct";
	}
	else
		echo "Error occured"; 		
?>