<html>
<head>
<link rel="stylesheet" type="text/css" href="css/inmain.css">
<script type="text/javascript" src="js/inmain.js"></script>
</head>
<body>

<!--document.title = "Hello World";-->

<?php

require("php/sessionv.php");
?>

<section id="first">
	<div onclick="editacontent()" id="s1">ADD new blog post</div>
	<div onclick="editcontent()" id="s2">Edit older Post</div>
</section>

<section id="add_content">
	<center>Post : <input type="text" size="60" name="title">&nbsp;&nbsp;&nbsp;<button onclick="addcontent()">Publish</button>&nbsp;&nbsp;<button onclick="addback()">Close</button><center>
	<br/><br/>
	<textarea rows="50" cols="100" name="content">
	</textarea>
</section>

<section id="select_post">
Select Post from given below :
</section>

<script type="text/javascript" src="js/contentin.js"></script>
</body>
</html>