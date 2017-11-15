	console.log('module cache actif');

	links = document.getElementsByTagName('a');
    console.log(links.length);
    
    for (var i = 0 ; i < links.length; i++) {
	   		links[i].addEventListener('click', function(event) {
	   		console.log("we ve got a click to "+this.href);
	   		event.preventDefault();
        	alert('http://webcache.googleusercontent.com/search?source=hp&q=cache:'+this.href);
        	document.location.href = 'http://webcache.googleusercontent.com/search?source=hp&q=cache:'+this.href;
       
    	});
	}