<?php
$xml=simplexml_load_file("..\/xml\/blog.xml");

if(isset($_REQUEST["comment"])&&isset($_REQUEST["no"]))
{
	$mk=intval($_REQUEST["no"]);
    $xml->BlogSection[$mk]->comments->addChild('comment',$_REQUEST["comment"]);
}
else
{
	echo "Error";
}
$xml->saveXML('..\/xml\/chatting.xml'); 

?>
