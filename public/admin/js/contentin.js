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
	window.location.assign('javascript:display_edit('+i+')');
}
var k=0;

function display_edit(i){
		if (window.XMLHttpRequest)
		  {// code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlhttp=new XMLHttpRequest();
		  }
		else
		  {// code for IE6, IE5
		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		  k=i;
		xmlhttp.open("GET","..\\xml\\chatting.xml",false);
		xmlhttp.send();
		xmlDoc=xmlhttp.responseXML; 
		var x=xmlDoc.getElementsByTagName("BlogSection");
		document.getElementsByName('title')[1].value=x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
		document.getElementsByName('content')[1].value=x[i].getElementsByTagName("content")[0].childNodes[0].nodeValue;
		var mg=document.getElementById("edit_comment");
		var s=x[i].getElementsByTagName("comment");
		var mk="<h3>Comment</h3>";
		for(j=0;j<s.length;j++)
		{ 
		  	mk=mk+"<li style='list-style:none;'>"+x[i].getElementsByTagName("comment")[j].childNodes[0].nodeValue+"&nbsp;&nbsp;&nbsp;x</li>"
		}
		mg.innerHTML=mk;
}

function upcontent(){
		var title= document.getElementsByName('title')[1].value;
	var content=document.getElementsByName("content")[1].value;	
			var xmlhttp=false;
			if (window.XMLHttpRequest)
			{// code for IE7+, Firefox, Chrome, Opera, Safari
				xmlhttp=new XMLHttpRequest();
			}
			else
			{// code for IE6, IE5
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
			if(xmlhttp)
			{
				
				xmlhttp.open("GET",'php/upcontent.php?title='+title+'&content='+content+'&i='+k);
				xmlhttp.send();
				xmlhttp.onreadystatechange=function()
				{
					if(xmlhttp.readyState==4 && xmlhttp.status==200)
					{
						if(xmlhttp.responseText=="Correct")
						{
							alert("Updated Successfully");							//window.location.assign('admin.php');
						}
						else
							alert("Error occured");
					}				
				}				
			}

}