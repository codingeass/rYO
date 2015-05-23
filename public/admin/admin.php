<html>
<head>

<link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="css/inmain.css">
<script type="text/javascript" src="js/inmain.js"></script>
<link rel="stylesheet" type="text/css" href="css/bootstrap-tagsinput.css">

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

<section class="container row" id="admin_page">

<section id="first" class="col-md-3">
	<div  id="selection_type">Home</div>
	<div onclick="alter_display('add_content')" id="selection_type">ADD new blog post</div>
	<div onclick="alter_display('select_post')" id="selection_type">Edit older Post</div>
	<div onclick="website_attributes('content_views')" id="selection_type">Edit Website</div>
</section>

<section class="col-md-9" id="second">

<section id="select_post">
	<div>
		Select Post from given below :
	</div>
	<div id="select_post_list">
	</div>

</section>

<section id="content_views">

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

	<div class="row">
	<label class="control-label col-sm-2" for="tags_add_content">Tags:</label>
	<div class="col-sm-10" style="font-size:16px;margin-top:10px;text-align:left;">
	<select id="tags_add_content"   multiple data-role="tagsinput">
	</select>
	</div>
	</div>
</section>


<section id="edit_content" class="form-horizontal">
	<div class="form-group">

	<label class="control-label col-sm-2" for="title_add_post">Title:</label>
	
	<div class="col-sm-10">
	<input type="text" name="title" id="title_add_post" class="form-control">
	</div>

	</div>
	<button onclick="upcontent()" class="btn btn-primary">Update</button>&nbsp;&nbsp;<button onclick="addeback()" class="btn btn-primary">Close</button>
	<br/><br/>	
	<textarea rows="15"  name="content" class="form-control">
	</textarea>
</section>

</section>

</section>

<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="../js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/contentin.js"></script>
<script type="text/javascript">document.onload=alter_display('add_content');</script>
<script src="js/bootstrap-tagsinput.min.js"></script>
<script>

</script>

</body>
</html>