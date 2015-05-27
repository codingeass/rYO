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
		//if(url["uv"])
  	  //alert(""+qs["topic"]);


		if (window.XMLHttpRequest)
		  {// code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlhttp=new XMLHttpRequest();
		  }
		else
		  {// code for IE6, IE5
		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		xmlhttp.open("GET","public/xml/blog.xml",false);
		xmlhttp.send();
		xmlDoc=xmlhttp.responseXML; 

		var mg=document.getElementById("inner_text");

		var x=xmlDoc.getElementsByTagName("BlogSection");

		var mk="<center><h1 id='b_title'>"+x[url["uv"]].getElementsByTagName("title")[0].childNodes[0].nodeValue+"</h1></center>";
		mk=mk+"<div id='b_author'>Author:"+x[url["uv"]].getElementsByTagName("author")[0].childNodes[0].nodeValue+"</div>"
		mk=mk+"<div id='b_content'>"+x[url["uv"]].getElementsByTagName("content")[0].childNodes[0].nodeValue+"</div>";
		
		mg.innerHTML=mk;
