<!DOCTYPE html>
<html>
<head>
	<title></title>
    <style type="text/css">
		/* border and styling for table data */
		td{
			border: 1px solid silver;
			text-align: center;
			width: 40px;
			height: 40px;
		}
		/* background and bolding for the first element of our rows and data */
		td:first-child, tr:first-child{
			background-color: silver;
			font-weight: bold;
		}
	</style>
</head>
<body>
	<div id="target"></div>
</body>
<script type="text/javascript">
	// define draw table
	function draw_table(){
		// create our html string, open up the table tag
		let html_string = "<table>";
		// outer loop ------------------- rows
		for(let i = 0; i<13; i++){
			
			// create a row for each iteration of the outer loop
			html_string += "<tr>";
            // inner loop -----------------------columns
            
			for(let j = 0; j<13; j++){
				// calculate our number
				let nums = i * j;
				// draw first row
				if(i==0){
					nums = j;
				}
				// draw first column
				if(j==0){
					nums = i;
				}
				if(i==0 && j==0){
					nums = "X"
				}
				
				// attach our table data tags around the number
				let data = "<td>" + nums + "</td>";
				// add it to the html
				html_string += data;
				
			}
			// after the inner loop, we cap our table rows
			html_string += "</tr>";
		
            
		}
		// after the outer loop, we cap our entire table
		html_string += "</table>";
		document.getElementById("target").innerHTML = html_string;
	}
	draw_table();
</script>
</html>
