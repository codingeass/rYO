<html>
<head>

<link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="css/inmain.css">
<script type="text/javascript" src="js/inmain.js"></script>
</head>
<body >

<!--document.title = "Hello World";-->
<?php
require("php/sessionv.php");
?>

<section id="page_header">
	<h1 id="page_title">
		Blog-XML
	</h1>
</section>

<section class="container row">

<section id="first" class="col-md-3">
	<div onclick="editacontent()" id="s1">ADD new blog post</div>
	<div onclick="editcontent()" id="s2">Edit older Post</div>
</section>

<section class="col-md-9">

<section id="select_post">
Select Post from given below :
</section>

<section id="add_content" class="form-horizontal">
	<div class="form-group">

	<label class="control-label col-sm-2" for="title_add_post">Title:</label>
	
	<div class="col-sm-10">
	<input type="text" name="title" id="title_add_post" class="form-control">
	</div>

	</div>
	<button onclick="addcontent()" class="btn btn-primary">Publish</button>&nbsp;&nbsp;<button onclick="addback()" class="btn btn-primary">Close</button>
	<br/><br/>	
	<textarea rows="15"  name="content" class="form-control">
	</textarea>
</section>


<section id="edit_content" class="form-horizontal">
	<div class="form-group">

	<label class="control-label col-sm-2" for="title_add_post">Title:</label>
	
	<div class="col-sm-10">
	<input type="text" name="title" id="title_add_post" class="form-control">
	</div>

	</div>
	<button onclick="upcontent()" class="btn btn-primary">Update</button>&nbsp;&nbsp;<button onclick="addback()" class="btn btn-primary">Close</button>
	<br/><br/>	
	<textarea rows="15"  name="content" class="form-control">
	</textarea>
</section>

</section>

</section>

<script type="text/javascript" src="js/contentin.js"></script>
<script type="text/javascript">document.onload=display_edit(0);</script>
</body>
</html>