<html>
<head>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sunzra - Conatct Us</title>
    <link rel="stylesheet" href="Contact2_css.css">
   	<link rel = "icon" href = "../Images/Tab_Logo_B.png">
</head>
<body>
    
	
		<div class = "navbar">
			<nav>
				<div class = "logo">
					<a href = "Home.html" title = "Sunzra - Music"><img src = "../Images/Tab_Logo_B.png" class = "logo"></a>
				</div>
				<div class = "logotext"> SUN ZRA </div>
				
				<div class = "menus">
					<ul>
						<li> <a href = "Home.html"> Home </a></li>
						<li> <a href = "Hindi.html"> Hindi </a></li>
						<li> <a href = "English.html"> English </a></li>
						<li> <a href = "About.html"> About </a></li>
					</ul>
				</div>
				
				<div class = "contact">
				<a href = "Contact1.html" title = "Contact Us"><img src = "../Images/Contact.png" class = "contact"></a>
				</div>
				
			</nav>
		</div>
		
		
		
		
		<div class="container">
        <header>
            <br><br><h1>Contact Us</h1><br>
            <p>
                If you want to request any song or have any query then please fill up the below form and send a message to us. Our team contact you soon!!!
						</p>
        </header>

    </div>
		
		<div class = "thankyou">
		
			<img src = "../Images/Thankyou.png" class = "thankyou">
		
		<div>


		
</body>
</html>

<!--PHP code to connect with sql-->	
	
	<?php
				
				$name = $_POST['name'];
				$email = $_POST['email'];
				$message = $_POST['message'];
	


				// Database connection
				$conn = new mysqli('localhost','root','','sunzra_contact');
				
				if($conn->connect_error)
					{
						echo "$conn->connect_error";
						die("Connection Failed : ". $conn->connect_error);
					} 
				
				else
					{
					$stmt = $conn->prepare("insert into user_data(Full_Name, Email_Id, Message) values(?, ?, ?)");
					$stmt->bind_param("sss", $name, $email, $message);
					$execval = $stmt->execute();
					
					
					
					$stmt->close();
				 	$conn->close();
				  }
	?>
 	