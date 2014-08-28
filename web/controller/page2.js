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
				title: 'NEWFACE',
				text: 'This is just a test',
				data: {'text': message}
			});
		}
	// put stuff here
});
});
