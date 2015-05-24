var url = (function(a) {
    		if (a == "") return {};
    		var b = {};
    		for (var i = 0; i < a.length; ++i)
    		{
        	var p=a[i].split('=', 2);
        	if (p.length == 1)
          	  b[p[0]] = "";
        	else
          	  b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    		}
   	 return b;
		})(window.location.search.substr(1).split('&'))

  	  if(url["tag"]==null)
  	  	window.location="index.html"
		
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.open("GET","public\\xml\\blog.xml",false);
	xmlhttp.send();
	xmlDoc=xmlhttp.responseXML; 

	var mg=document.getElementById("inner_text");

	x=xmlDoc.getElementsByTagName("BlogSection");
	var mk="";

	for (i=0;i<x.length;i++)
	{
		/// make this calculation faster for bigger blogs by taking content from tag.xml
		var tags_node=x[i].getElementsByTagName("tags")[0].getElementsByTagName("tag");
		var j=0;
		while(j<tags_node.length)
		{
			if(tags_node[j].childNodes[0].nodeValue==url["tag"])
				break;
			j++;
		}
		if(j==tags_node.length)
			continue;
		mk=mk+"<section id='blog_post_small'><h2><span class='glyphicon glyphicon-link'></span><a href='blog.html?uv="+i+"'>"+x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue+"</a></h2>";
		mk=mk+"<div id='s_content'>"+x[i].getElementsByTagName("content")[0].childNodes[0].nodeValue.substring(0,300)+"</div>";
		mk=mk+"<div id='s_author'>Author:"+x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue+"</div></section>"
	}
	mg.innerHTML=mk;
