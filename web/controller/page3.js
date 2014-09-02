
App.controller('page3', function (page) 
{

 // Do stuff when the "Send" button is clicked
 $(page).find('#button-pick').click(function () 
 {
 		var message = "hello"; //a variable
		//var face = document.getElementById("face").value;
		var message = "mekaka";
		if (kik.send) 
		{
			// Send message to friends
			kik.send({
				title: 'NEWFACE',
				text: 'This is a real test',
				pic: '../img/face/evil.png'
				data: {'text': message}
			});
		}
	// put stuff here
});
});

