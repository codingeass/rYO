<?php
	require("sessionv.php");
	if(isset($_REQUEST["title"])&&isset($_REQUEST["content"])&&isset($_REQUEST["tags"])){	
		$xml=simplexml_load_file("../../xml/blog.xml");
		$blogsection=$xml->addChild('BlogSection');
		$xml->max_id[0]=intval($xml->max_id[0])+1;
		$xml->max_sequence[0]=intval($xml->max_sequence[0])+1;
		$blogsection->addChild('id',$xml->max_id[0]);
		$blogsection->addChild('sequence',$xml->max_sequence[0]);
		$blogsection->addChild('time',date("F j, Y, g:i a"));
		$blogsection->addChild('title',htmlspecialchars(urldecode(strip_tags($_REQUEST["title"])), ENT_QUOTES));
		$blogsection->addChild('author',htmlspecialchars(urldecode(strip_tags($_SESSION["user"])), ENT_QUOTES));
		$blogsection->addChild('content',htmlspecialchars(urldecode(strip_tags($_REQUEST["content"])), ENT_QUOTES));
		$tags_add=$blogsection->addChild('tags');
		$tags=explode(",",$_REQUEST["tags"]);
		for ($i=0; $i < strlen($tags)-1 ; $i++) { 
			$attr=$tags_add->addChild('tag',$tags[$i]);
			
			$attr->addAttribute('id', 'stars');
		}
		$xml->saveXML('../../xml/blog.xml');
		echo "Correct";
	}
	else
		echo "Error occured"; 		
?>