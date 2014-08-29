function choose(src)
{
document.getElementById("face").value = src;
document.getElementById("button-send").click();
}

(function (App) {
	try {
		App.restore();
	} catch (err) {
		App.load('home');
	}
})(App);

 