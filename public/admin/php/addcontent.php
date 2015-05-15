<?php
	require("sessionv.php");
	if(isset($_REQUEST["title"])&&isset($_REQUEST["content"])){
		$xml=simplexml_load_file("../../xml/blog.xml");
		$blogsection=$xml->addChild('BlogSection');
		$blogsection->addChild('title',$_REQUEST["title"]);
		$blogsection->addChild('author',$_SESSION["user"]);
		$blogsection->addChild('content',$_REQUEST["content"]);
		$xml->saveXML('../../xml/blog.xml');
		echo "Correct";
	}
	else
		echo "Error occured"; 		
?>