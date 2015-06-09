<?php

//		$send_to = "spn2@spondonit.com";
		$send_to = "dumblee1@gmail.com";
		$send_subject = "Subscription Online";
		/*Be careful when editing below this line */
		$userEmail = $_POST["uemail"];
		$userMessage = $_POST["umessage"];
		$userName = $_POST["uname"];
		$from_ip = $_SERVER['REMOTE_ADDR'];
		$from_browser = $_SERVER['HTTP_USER_AGENT'];

		$message = "This email was submitted on " . date('m-d-Y') . 
		"\n\nE-Mail: " . $userEmail ."\n\n\n User Message :\n".
		"\n\n\n User Message :\n". $userMessage.
		"\n\n\nTechnical Details:\n" . $from_ip . "\n" . $from_browser ;

		$send_subject .= " - {$userName}";
		
		if(mail($send_to, $send_subject, $message)){
			echo "Your Message has been sent";
		}
		else{
			echo "<span style='color:#F16161;'>Error . Please Try Again</span>";
		}

?>
