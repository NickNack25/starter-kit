
App.controller('page3', function (page) 
{
<<<<<<< HEAD
$(page).find('#button-pick').click(function () 
{
		var message = "hello"; //a variable
		var face = document.getElementById("face").value;
=======

 // Do stuff when the "Send" button is clicked
 $(page).find('#button-pick').click(function () 
 {
 		var message = "hello"; //a variable
		//var face = document.getElementById("face").value;
		var message = "mekaka";
>>>>>>> 56560fc288b73180b204c3362807a1eef8287bf2
		if (kik.send) 
		{
			// Send message to friends
			kik.send({
				title: 'NEWFACE',
				text: 'This is a real test',
				pic: '../img/face/evil.png'
				data: {'text': message}
			});
<<<<<<< HEAD
		} 

});

	// Dont put stuff here
=======
		}
	// put stuff here
>>>>>>> 56560fc288b73180b204c3362807a1eef8287bf2
});
});

