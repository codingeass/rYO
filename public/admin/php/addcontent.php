<?php
	require("sessionv.php");
	if(isset($_REQUEST["title"])&&isset($_REQUEST["content"])&&isset($_REQUEST["tags"])){	
		$xml=simplexml_load_file("../../xml/blog.xml");
		$blogsection=$xml->addChild('BlogSection');
		$xml->max_id[0]=intval($xml->max_id[0])+1;
		$xml->max_sequence[0]=intval($xml->max_sequence[0])+1;
		$blogsection->addChild('id',$xml->max_id[0]);
		$blogsection->addChild('sequence',$xml->max_sequence[0]);
		//$blogsection->addChild('time',date("F j, Y, g:i a"));
		$blogsection->addChild('time',date("D ,F j Y"));
		$blogsection->addChild('title',htmlspecialchars(urldecode(strip_tags($_REQUEST["title"])), ENT_QUOTES));
		$blogsection->addChild('author',htmlspecialchars(urldecode(strip_tags($_SESSION["user"])), ENT_QUOTES));
		$blogsection->addChild('content',htmlspecialchars(urldecode(strip_tags($_REQUEST["content"])), ENT_QUOTES));
		$tags_add=$blogsection->addChild('tags');
		$tags=explode(",",htmlspecialchars(urldecode($_REQUEST["tags"])));
		//writing slow code make it faster later
		//remove dupplicate tags in the value
		$tags_xml_file=simplexml_load_file("../../xml/tag.xml");	
		for ($i=0; $i < count($tags)-1 ; $i++) { 
			$attr=$tags_add->addChild('tag',$tags[$i]);
			$j=0;
			//added here 2 line below to prevent duplicate from destroying style in code
			$tag_list=$tags_xml_file->tag;
			$tag_list_len=count($tag_list);
			while ($j<$tag_list_len) {
				if($tag_list[$j]->name==$tags[$i])
				{
					$attr->addAttribute('id',$tag_list[$j]->id);
					$tag_list[$j]->blogs->addChild('blog_id',$xml->max_id[0]);
					break;
				}
				$j++;
			}
			if($j==$tag_list_len)
			{
				$new_tag_tag=$tags_xml_file->addChild('tag');
				$new_tag_tag->addChild('id',$tags_xml_file->max_id[0]+1);
				$attr->addAttribute('id', $tags_xml_file->max_id[0]+1);
				$tags_xml_file->max_id[0]=intval($tags_xml_file->max_id[0])+1;
				$new_tag_tag->addChild('name',$tags[$i]);
				$new_tag_tag->addChild('blogs')->addChild('blog_id',$xml->max_id[0]);
			}
		}
		$xml->saveXML('../../xml/blog.xml');
		$tags_xml_file->saveXML('../../xml/tag.xml');
		echo "Correct";
	}
	else
		echo "Error occured"; 		
?>