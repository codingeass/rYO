<?php
	require("sessionv.php");
	if(isset($_REQUEST["title"])&&isset($_REQUEST["content"])&&isset($_REQUEST["i"])){
		$xml=simplexml_load_file("../../xml/blog.xml");
		$blogsection=$xml->BlogSection[intval($_REQUEST["i"])];
		$blogsection->time=date("F j, Y, g:i a");
		$blogsection->title=htmlspecialchars(urldecode(strip_tags($_REQUEST["title"])), ENT_QUOTES);
		$blogsection->content=htmlspecialchars(urldecode(strip_tags($_REQUEST["content"])), ENT_QUOTES);
		$xml->saveXML('../../xml/blog.xml');
		echo "Correct";
	}
	else
		echo "Error occured"; 		
?>