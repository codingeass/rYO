var section=['add_content','edit_content','select_post','content_views'];


function alter_display(section_type){
	var i;
	for (i = 0, len = section.length; i < len; i++) { 
    document.getElementById(section[i]).style.display="none";
	}
	document.getElementById(section_type).style.display="block";
}
document.onload=function(){alter_display('content_views')};

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
	var x=document.getElementById('tags_add_content');
	var tags="";
	//document.write(x.options.length);
	for(var i=0;i<x.options.length;i++){
		tags+=x.options[i].value+",";
	}

		var xmlhttp=false;
		if (window.XMLHttpRequest)
		{// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
		}
		else
		{// code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.open("GET",'php/addcontent.php?title='+encodeURIComponent(title)+'&content='+encodeURIComponent(content)+'&tags='+encodeURIComponent(tags));
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

function xml_request(page,element){
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
		
		xmlhttp.open("GET",'views/'+page);
		xmlhttp.send();
		xmlhttp.onreadystatechange=function()
		{
			if(xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				if(xmlhttp.responseText)
				{
					document.getElementById(element).innerHTML=xmlhttp.responseText;
				}
			}				
		}				
	}
}

function website_attribute_xml()
{
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
		
		xmlhttp.open("GET",'../xml/webInfo.xml');
		xmlhttp.send();
		xmlhttp.onreadystatechange=function()
		{
			if(xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				if(xmlhttp.responseText)
				{
					return xmlhttp.responseText;
				}
			}				
		}				
	}	
}
function website_attributes(section_type)
{
	alter_display(section_type);
	xml_request('edit_website.html','content_views');
}