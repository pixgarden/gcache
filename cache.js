
	console.log('module cache actif');

	links = document.getElementsByTagName('a');
    console.log(links.length);
    
    for (var i = 5 ; i < links.length; i++) {
	   		links[i].addEventListener('click', function(event) {
	   		event.preventDefault();
        	document.location.href = 'http://webcache.googleusercontent.com/search?hl=en&source=hp&q=cache:'+this.href.split('?')[0];
    	});
	}

date1 = new Date(document.getElementById('google-cache-hdr').innerText.split(" on ")[1].split(".")[0]);

console.log("date: "+date1);
  var difference_ms = new Date() - date1;
  difference_ms = difference_ms/1000;
  var seconds = Math.floor(difference_ms % 60);
  difference_ms = difference_ms/60; 
  var minutes = Math.floor(difference_ms % 60);
  difference_ms = difference_ms/60; 
  var hours = Math.floor(difference_ms % 24);  
  var days = Math.floor(difference_ms/24);
  
  diffDays = '<u>' +days + 'd, ' + hours + 'h and ' + minutes + 'min. ago</u>';

document.getElementById('google-cache-hdr').firstChild.innerHTML += diffDays;

