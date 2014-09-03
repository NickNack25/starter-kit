App.controller('page3', function (page) 
{
 // Do stuff when the "Send" button is clicked
 $(page).find('#button-pick').click(function () 
 {
 		var message = "hello"; //a variable
		//var face = document.getElementById("face").value;
		//var face = document.getElementById("face").value;
		if (kik.send) 
		{
			// Send message to friends
			kik.send({
				title: 'NEWFACE',
				text: 'This is a real test',
				pic: 'http://thumbs.dreamstime.com/z/little-baby-girl-cute-face-closeup-33761529.jpg',
				data: {'text': message}
			});
		} 
	// Dont put stuff here
});
});

