
		 if (window.XMLHttpRequest)
		  {// code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlhttp=new XMLHttpRequest();
		  }
		else
		  {// code for IE6, IE5
		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		xmlhttp.open("GET","..\\xml\\blog.xml",false);
		xmlhttp.send();
		xmlDoc=xmlhttp.responseXML; 

		var mg=document.getElementById("select_post_list");

		x=xmlDoc.getElementsByTagName("BlogSection");
		var mk='';		
		for (i=0;i<x.length;i++)
		{
			mk=mk+'<h3 id="select_post_title"><span onclick="display_edit(\''+i+'\')">'+x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue+'</span></h3>';
		}
		mg.innerHTML=mk;


var k=0;

function display_edit(i){
		document.getElementById("edit_content").style.display="block";
		document.getElementById("add_content").style.display="none";
		document.getElementById("select_post").style.display="none";

		if (window.XMLHttpRequest)
		  {// code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlhttp=new XMLHttpRequest();
		  }
		else
		  {// code for IE6, IE5
		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		  k=i;
		xmlhttp.open("GET","..\\xml\\blog.xml",false);
		xmlhttp.send();
		xmlDoc=xmlhttp.responseXML; 
		var x=xmlDoc.getElementsByTagName("BlogSection");
		document.getElementsByName('title')[1].value=x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
		document.getElementsByName('content')[1].value=x[i].getElementsByTagName("content")[0].childNodes[0].nodeValue;
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