		// Loads Video and pauses before plays						
		(function localFileVideoPlayerInit(win) {
		
					var URL = win.URL || win.webkitURL,
					
					displayMessage = (function displayMessageInit() {
											
											var node = document.querySelector('#message');

											return function displayMessage(message, isError) {
												node.innerHTML = message;
												node.className = isError ? 'error' : 'info';
											};
									}
									
									());
					
					function playSelectedFileInit(idFileInput) {
									
									
									return function (event) {
												
											var file = $(idFileInput)[0].files[0];

											var type = file.type;

											var videoNode = document.querySelector('#videoControls');

											var canPlay = videoNode.canPlayType(type);

											canPlay = (canPlay === '' ? 'no' : canPlay);

											var message = 'Can play type "' + type + '": ' + canPlay;

											var isError = canPlay === 'no';

											displayMessage(message, isError);

											if (isError) {
												return;
											}

											var fileURL = URL.createObjectURL(file);

											videoNode.src = fileURL;
											
											videoNode.pause();
									
									}
									
					}
				
				inputNode = document.querySelector('#playVid');
				inputNode.addEventListener('click', playSelectedFileInit('#fileInput', false));
				
				inputNode2 = document.querySelector('#playVid2');
				inputNode2.addEventListener('click', playSelectedFileInit('#fileInput2', false));
				
				inputNode3 = document.querySelector('#playVid3');
				inputNode3.addEventListener('click', playSelectedFileInit('#fileInput3', false));
		
		}(window));
	
// Play or pauses video currently loaded

							pauseVideo = document.querySelector('#stopVid');
							pauseVideo.addEventListener('click', videoControl, false);
							
								function videoControl() {
								var myVideo = document.getElementById('videoControls');
								if (myVideo.paused) {
								myVideo.play();
								} else {
								myVideo.pause();
								}
								}

								

// video fullscreen
							// Find the right method, call on correct element
							function launchFullscreen(element) {
							  if(element.requestFullscreen) {
								element.requestFullscreen();
							  } else if(element.mozRequestFullScreen) {
								element.mozRequestFullScreen();
							  } else if(element.webkitRequestFullscreen) {
								element.webkitRequestFullscreen();
							  } else if(element.msRequestFullscreen) {
								element.msRequestFullscreen();
							  }
							}