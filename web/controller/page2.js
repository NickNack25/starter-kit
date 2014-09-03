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
				pic: 'http://thumbs.dreamstime.com/z/little-baby-girl-cute-face-closeup-33761529.jpg',
				data: {'text': message}
			});
		}
	// put stuff here
});
});
