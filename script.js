
		var userdata = {
			'title' : "",
			'mousex' : [],
			'mousey' : [],
			'name' : "",
			'email' : "",
			'height' : "",
			'width' : "",
			'useragent' : ""
		};
		
		function onWindowLoad() {
			userdata.title = document.title;
			userdata.height = window.innerHeight;
			userdata.width = window.innerWidth;
			userdata.useragent = window.navigator.userAgent
		};
		
		window.addEventListener('load', onWindowLoad);
				
		function onMouseMove(e){
			userdata.mousex.push(e.clientX);
			userdata.mousey.push(e.clientY);
			//e.clientY;
		
			if ( userdata.mousex.length > 100 ) {
				document.removeEventListener('mousemove', onMouseMove);
			}
		}	
		
		document.addEventListener('mousemove', onMouseMove);
		
		var fname = document.getElementById("fullname");
		fname.addEventListener('blur', function (){userdata.name = fname.value;
		console.log(userdata.name);})
		
		
		var email = document.getElementById("email");
		email.addEventListener('blur', function (){userdata.email = email.value;
		console.log(userdata.email);})
			
		function showResults() {
			console.clear();
			console.log(userdata);
		}
			
		var results = document.getElementById('showResults');
	
			
		results.addEventListener("click", showResults);