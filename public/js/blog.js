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
		xmlhttp.open("GET","public\\xml\\blog.xml",false);
		xmlhttp.send();
		xmlDoc=xmlhttp.responseXML; 

		var mg=document.getElementById("inner_text");

		var x=xmlDoc.getElementsByTagName("BlogSection");
		var mk="<center><h1>"+x[url["uv"]].getElementsByTagName("title")[0].childNodes[0].nodeValue+"</h1></center>";
		mk=mk+"<div style='float:right;font-size:20px;'>Author:"+x[url["uv"]].getElementsByTagName("author")[0].childNodes[0].nodeValue+"</div>"
		mk=mk+"<div style='font-size:19px'>"+x[url["uv"]].getElementsByTagName("content")[0].childNodes[0].nodeValue+"</div>";
		mk=mk+"<br/><br/><div style='font-size:19px'>Comment</div>"
		mg.innerHTML=mk;
		mk="";
		mg=document.getElementById("comment_section");
		var s=x[url["uv"]].getElementsByTagName("comment");
		for (i=0;i<s.length;i++)
		  { 
		  		mk=mk+"<li style='list-style:none'>"+x[url["uv"]].getElementsByTagName("comment")[i].childNodes[0].nodeValue+"</li>"
		  }
		mg.innerHTML=mk;
		function addcomment()
		{
			var mk=document.getElementById("comment_add").value;
			if(mk=="")
				alert("Add comment first"+mk);
			else
			{
				if (window.XMLHttpRequest)
		  		{// code for IE7+, Firefox, Chrome, Opera, Safari
		  			xmlhttp1=new XMLHttpRequest();
		  		}
				else
		  		{// code for IE6, IE5
		  			xmlhttp1=new ActiveXObject("Microsoft.XMLHTTP");
		 		 }

				xmlhttp1.open("GET","public/php/commentadd.php?comment="+mk+"&no="+url["uv"],false);

				//xmlhttp1.send();
				xmlhttp1.onreadystatechange =function()
				{
					if(xmlhttp1.readyState==4&&xmlhttp.status==200)
						;//alert(xmlhttp1.responseText);
				}
				xmlhttp1.send(null);
		      //xmlDoc=xmlhttp.responseXML; 
		      mg=document.getElementById("comment_section");
		      document.getElementById("comment_add").value=" ";
		      mg.innerHTML=mg.innerHTML+"<li style='list-style:none'>"+mk+"</li>";
			}
		}