
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.open("GET","public\/xml\/blog.xml",false);
xmlhttp.send();
xmlDoc=xmlhttp.responseXML; 

var mg=document.getElementById("inner_text");

x=xmlDoc.getElementsByTagName("BlogSection");
var mk="";

for (i=0;i<x.length;i++)
{
	mk=mk+"<section id='blog_post_small'><h2><span class='glyphicon glyphicon-link'></span><a href='blog.html?uv="+i+"'>"+x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue+"</a></h2>";
	mk=mk+"<div id='s_content'>"+x[i].getElementsByTagName("content")[0].childNodes[0].nodeValue.substring(0,300)+"</div>";
	mk=mk+"<div id='s_author'>Author:"+x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue+"</div></section>"
}
mg.innerHTML=mk;
<<<<<<< HEAD


function meta_social_tag(title,image,url,description){
	var meta='<meta property="og:title" content="'+title+'" /><meta property="og:type" content="article" /> \
        <meta property="og:image" content="'+image+'" /> \
        <meta property="og:url" content="'+url+'" /> \
        <meta property="og:description" content="'+description+'" />';
	document.getElementsByTagName('head')[0].innerHTML=document.getElementsByTagName('head')[0].innerHTML+meta; 
}
meta_social_tag("Amandeep Gupta","http://codingeass.github.io/dist/img/profile.png","http://codingeass.github.io","Portfolio ,Web Developer | Software Developer | Programmer");
=======
>>>>>>> 143950832e0b97f638f0d94d650b8266eed9b19b
