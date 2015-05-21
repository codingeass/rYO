var section=['add_content','edit_content','select_post','content_views'];

//
var xmlhttp=false;
if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp=new XMLHttpRequest();
}
else
{// code for IE6, IE5
	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
//

function alter_display(section_type){
	var i;
	for (i = 0, len = section.length; i < len; i++) { 
    document.getElementById(section[i]).style.display="none";
	}
	document.getElementById(section_type).style.display="block";
}

function addback(){
	document.getElementById("add_content").style.display="none";
	document.getElementsByName("content")[0].value="";
	document.getElementsByName("title")[0].value="";
}

function addeback(){
	document.getElementById("edit_content").style.display="none";
	document.getElementById("select_post").style.display="block";
}

function addcontent(){

	var title= document.getElementsByName('title')[0].value;
	var content=document.getElementsByName("content")[0].value;	
			
			if(xmlhttp)
			{
				
				xmlhttp.open("GET",'php/addcontent.php?title='+title+'&content='+content);
				xmlhttp.send();
				xmlhttp.onreadystatechange=function()
				{
					if(xmlhttp.readyState==4 && xmlhttp.status==200)
					{
						if(xmlhttp.responseText=="Correct")
						{
							alert("Added Successfully");							//window.location.assign('admin.php');
						}
						else
							alert("Error occured");
					}				
				}				
			}
}


function first_fun(){
	var name= document.getElementsByName('full_name')[0].value;
	var pass=document.getElementsByName("password")[0].value;
	var repass=document.getElementsByName("confir_pass")[0].value;
	if(pass==repass)
	{
		if(name!=''&&pass!=''&&repass!=''){
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
				
				xmlhttp.open("GET",'php/verify.php?full_name='+name+'&password='+pass);
				xmlhttp.send();
				xmlhttp.onreadystatechange=function()
				{
					if(xmlhttp.readyState==4 && xmlhttp.status==200)
					{
						if(xmlhttp.responseText=="Correct")
						{
							window.location.assign('admin.php');
						}
						else
							alert("Wrong Entries");
					}				
				}				
			}
		}
		else
			alert("Complete entries");
	}
	else
		alert("password don't match");
}