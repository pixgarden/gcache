	console.log('module cache actif');

	links = document.getElementsByTagName('a');
    console.log(links.length);
    
    for (var i = 5 ; i < links.length; i++) {
	   		links[i].addEventListener('click', function(event) {
	   		event.preventDefault();
        	document.location.href = 'http://webcache.googleusercontent.com/search?source=hp&q=cache:'+this.href.split('?')[0];
    	});
	}