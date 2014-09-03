App.controller('page2', function (page) 
{

 // Do stuff when the "Send" button is clicked
 $(page).find('#button-send').click(function () 
 {
		var message = "mekaka";
		if (kik.send) 
		{
			// Send message to friends
			kik.send({
				title: message,
				text: 'This is just a test',
				pic: '../img/face/evil.png',
				data: {'text': message}
			});
		}
	// put stuff here
});
});
