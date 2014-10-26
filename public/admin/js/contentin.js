		 if (window.XMLHttpRequest)
		  {// code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlhttp=new XMLHttpRequest();
		  }
		else
		  {// code for IE6, IE5
		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		xmlhttp.open("GET","..\\xml\\chatting.xml",false);
		xmlhttp.send();
		xmlDoc=xmlhttp.responseXML; 

		var mg=document.getElementById("select_post");

		x=xmlDoc.getElementsByTagName("BlogSection");
		var mk='<br/>';		
		for (i=0;i<x.length;i++)
		{
			mk=mk+"<h3><a href=javascript:editpost('"+i+"')>"+x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue+"</a></h3>";
		}
		mg.innerHTML=mk;

function editpost(i){
	alert(parseInt(i));

}