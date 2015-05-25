var info = function(){	
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.open("GET","public\\xml\\webInfo.xml",false);
	xmlhttp.send();
	xmlDoc=xmlhttp.responseXML; 
	var value={};
	
	value["name"]=xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;
	value["about"]=xmlDoc.getElementsByTagName("about")[0].childNodes[0].nodeValue;
	if (xmlDoc.getElementsByTagName("pageHeading")[0].childNodes[0]!=null)
	value["pageHeading"]=xmlDoc.getElementsByTagName("pageHeading")[0].childNodes[0].nodeValue;
	value["pageTitle"]=xmlDoc.getElementsByTagName("pageTitle")[0].childNodes[0].nodeValue;
	if (xmlDoc.getElementsByTagName("links")[0].getElementsByTagName("googleAnalytics")[0].childNodes[0]!=null)
	value["googleAnalytics"]=xmlDoc.getElementsByTagName("links")[0].getElementsByTagName("googleAnalytics")[0].childNodes[0].nodeValue;
	value["disqus"]=xmlDoc.getElementsByTagName("links")[0].getElementsByTagName("disqus")[0].childNodes[0].nodeValue;
	value["mail"]=xmlDoc.getElementsByTagName("mail")[0].childNodes[0].nodeValue;
	var i=0;
	var x=xmlDoc.getElementsByTagName("socialNetworks")[0].getElementsByTagName("account");
	while(i<x.length)
	{
		value[x[i].getAttribute('type')]=x[i].childNodes[0].nodeValue;
		i++;
	}
	//document.title=info["pageTitle"];
	return value;
}(document.onload);