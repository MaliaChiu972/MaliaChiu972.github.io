	<script> 
		const buttonEl = document.getElementById("PetBtn");

		function correctMax() {
			const givenMax = document.getElementById("MaxPets").value;
			const correctMax = 3;
			if (givenMax == correctMax) {
				document.getElementById("Correct").innerHTML = "Congratulations! You got it right!"
			} else {
				document.getElementById("Correct").innerHTML= "Sorry. The Correct Answer was 3!"
			}
		}
	</script>

document.getElementById('PetBtn').addEventListener("click", correctMax());











































<!DOCTYPE html>
<html>
<head>
	<title>My Website</title>
	<style>
		header {
			text-align: center;
            background: radial-gradient(#FF033E, #FA5F55);

		}
        body{ 
        	margin:0;
            background: #FA5F55;
        }
        table, th, td { 
         	border: 1px solid black; 
         	border-collapse: collapse;
            margin 5px;
            text-align: center;
            padding: 5px 10px;
        }
		.button {
			display: inline-block;
			padding: 10px 20px;
			background-color: #8A8AFF;
			color: white;
			text-align: center;
			text-decoration: none;
			font-size: 16px;
			margin: 10px 40px;
			border-radius: 7px;
            cursor: pointer;
		}
        .button:hover{ 
            color: black;
        }
		.image-container {
			display: flex;
			align-items: flex-start;
			margin: 20px 20px;
            
		}
		.image {
			width: 40%;
			height: auto;
		}
		.paragraphs {
			flex: 1;
            margin: 10px 30px;
		}
        .input {
        	padding: 2px 5px;
            margin: 5px 15%;
            background-color: #FFFDD0.;
            cursor: pointer;
        }
        
	</style>
</head>
<body>
	<header>
		<h1>My Family</h1>
            <button onclick="document.location='index.html'" class="button">Me</button>
		<button onclick="document.location='index.html'" class="button">Pets</button>
		<button onclick="document.location='index.html'" class="button">Mom</button>
	</header>

	<div class="image-container">
		<img src="https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80" alt="Your Image" class="image">
		<div class="paragraphs">
			<p class = "paragraphs">Paragraph 1</p>
			<table class = "table">
	<thead>
		<tr>
			<th>Name</th>
			<th>What age I was when I got them</th>
			<th>What age I was when they passed</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Angel</td>
			<td>2</td>
			<td>15</td>
		</tr>
		<tr>
			<td>Sweetie</td>
			<td>2</td>
			<td>19</td>
		</tr>
		<tr>
			<td>Mia</td>
			<td>12</td>
			<td>TBD</td>
		</tr>
		<tr>
			<td>Koda</td>
			<td>18</td>
			<td>TBD</td>
		</tr>
	</tbody>
</table>
<p class = "paragraphs">According to the table above. What were the maximum amount of pets I had at the same time?</p>
<input type = "number" class = "input" id = "MaxPets" value = "0" place holder = "Enter the Max Number of Pets">
<button class = "button" id = "PetBtn"> Submit Answer</button>
		</div>
	</div>
</body>
</html>

