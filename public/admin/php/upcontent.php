<?php
	require("sessionv.php");
	if(isset($_REQUEST["title"])&&isset($_REQUEST["content"])&&isset($_REQUEST["i"])&&isset($_REQUEST["tags"])&&isset($_REQUEST["oldTag"])){
		$xml=simplexml_load_file("../../xml/blog.xml");

		$tags=explode(",",htmlspecialchars(urldecode($_REQUEST["tags"])));
		$oldTags=explode(",",htmlspecialchars(urldecode($_REQUEST["oldTag"])));
		$i=0;
		$j=0;
		$new_tag=array();
		while ( $i< count($tags)-1) {
			if(!in_array($tags[$i], $oldTags))
			{
				$new_tag[$j]=$tags[$i];
				$j++;
			}
			$i++;
		}
		$removed_tag=array();
		$i=0;
		$k=0;
		while ( $i< count($oldTags)-1) {
			if(!in_array($oldTags[$i], $tags))
			{
				$removed_tag[$k]=$oldTags[$i];
				$k++;
			}
			$i++;
		}
		
		//removing tags removed from list

		$tags_xml_file=simplexml_load_file("../../xml/tag.xml");
		$node=intval($_REQUEST["i"]);
		$tags_xml=$tags_xml_file->tag;

		$i=0;
		///make it faster by reversing its
		while($i<count($tags_xml)){
			if(array_search($tags_xml[$i]->name,$removed_tag)){
				$blogs=$tags_xml[array_search($tags_xml[$i]->name,$removed_tag)]->blogs->blog_id;
				$j=0;
				while($j<count($blogs))
				{
					if($blogs[$j]==$node)
					{
						$blogs->removeChild($blogs[$j]);
						break;
					}
					$j++;
				}
			}
			$i++;
		}

		//end


		//
		$blogsection=$xml->BlogSection[$node];
		$blogsection->time=date("F j, Y");
		$blogsection->title=htmlspecialchars(urldecode(strip_tags($_REQUEST["title"])), ENT_QUOTES);
		$blogsection->content=htmlspecialchars(urldecode(strip_tags($_REQUEST["content"])), ENT_QUOTES);

		///


		//adding new tags
		
		$tags_add=$blogsection->tags;

		for ($i=0; $i < count($new_tag) ; $i++) { 
			$attr=$tags_add->addChild('tag',$new_tag[$i]);
			$j=0;
			$tag_list_len=count($tags_xml);
			while ($j<$tag_list_len) {
				if($tags_xml[$j]->name==$new_tag[$i])
				{
					$attr->addAttribute('id',$tags_xml[$j]->id);
					$tags_xml[$j]->blogs->addChild('blog_id',$node);
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
				$new_tag_tag->addChild('name',$new_tag[$i]);
				$new_tag_tag->addChild('blogs')->addChild('blog_id',$node);
			}
		}
		//end

		$xml->saveXML('../../xml/blog.xml');
		$tags_xml_file->saveXML('../../xml/tag.xml');
		echo "Correct";
	}
	else
		echo "Error occured"; 		
?>