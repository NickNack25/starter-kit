App.controller('page2', function (page) 
{

 // Do stuff when the "Send" button is clicked
  $('#button-send').click(function () 
  {
    var message = "eepch";
    kik.send(
	{
	title: 'Incoming Message!',
	text: 'This will self-destruct 3 seconds after opening.',
	big: true, 
	pic: 'http://example.com/amazing_thumbnail',
	data: {'text': message}
	});
  }

	// put stuff here
});
