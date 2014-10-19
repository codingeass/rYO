
		if (window.XMLHttpRequest)
		  {// code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlhttp=new XMLHttpRequest();
		  }
		else
		  {// code for IE6, IE5
		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		xmlhttp.open("GET","public\\xml\\chatting.xml",false);
		xmlhttp.send();
		xmlDoc=xmlhttp.responseXML; 

		var mg=document.getElementById("inner_text");

		x=xmlDoc.getElementsByTagName("BlogSection");
		var mk="";

		for (i=0;i<x.length;i++)
		{
			mk=mk+"<section style='border:1px solid black;border-radius:3px;padding:15px;margin:50px;'><h2><a href='blog.html?uv="+i+"'>"+x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue+"</a></h2>";
			mk=mk+"<div style='font-size:19px'>"+x[i].getElementsByTagName("content")[0].childNodes[0].nodeValue.substring(0,300)+"</div>";
			mk=mk+"<div style='right:23px;font-size:20px;'>Author:"+x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue+"</div></section>"
		}
		mg.innerHTML=mk;