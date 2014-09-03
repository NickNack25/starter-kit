App.controller('page3', function (page) 
{
$(page).find('#button-pick').click(function () 
{
		var message = "hello"; //a variable
		var face = document.getElementById("face").value;
		if (kik.send) 
		{
			// Send message to friends
				kik.send({
				title: 'Incoming Message!',
				pic: face,
				text: 'This will self-destruct 3 seconds after opening.',
				data: {'text': message}
			});
		} 

});

	// Dont put stuff here
});
