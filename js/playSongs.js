
			var currentFile = ""; //Global variable to track current file
			
			function playAudio(idButton, idNowPlaying, idInputList, idAudioControls) {
			
					
					// Check for audio element support.
					if (window.HTMLAudioElement) {
					
							try {
										var oAudio = document.getElementById(idAudioControls);
										var btn = document.getElementById(idButton);
										var audioURL = document.getElementById(idInputList);
										
										//Skip loading if current file hasn't changed.
										if (audioURL.value !== currentFile) {
										oAudio.src = "assets/music/" + audioURL.value + ".mp3";
										currentFile = audioURL.value;
										}
										
										// Show the user which song is now playing
										var nowPlayingNumber = document.getElementById(idInputList).value;
										document.getElementById(idNowPlaying).innerHTML = "Now Playing: " + nowPlayingNumber;
										
										// Tests the current state of audio play and play or pause depending on whether audio is already playing or hasn't started yet
										if (oAudio.paused) {
											oAudio.play();
											document.getElementById(idButton).innerHTML = '<img class="icon-stop" src="img/stop.png">Stop';
											
											// Change state of button and make audio controls and now playing visible
											document.getElementById(idButton).className += " redStop";
											document.getElementById(idNowPlaying).className = document.getElementById(idNowPlaying).className.replace	( /(?:^|\s)hidden-inactive-element(?!\S)/g , '' );
											document.getElementById(idAudioControls).className = document.getElementById(idAudioControls).className.replace	( /(?:^|\s)hidden-inactive-element(?!\S)/g , '' );
											
										} else {
											oAudio.pause();
											oAudio.currentTime = 0;
											document.getElementById(idButton).innerHTML = '<img class="icon-play" src="img/play2.png">Play';
											
											// Set play button back to ready and hide audio controls and now playing text
											document.getElementById(idButton).className = document.getElementById(idButton).className.replace	( /(?:^|\s)redStop(?!\S)/g , '' );
											document.getElementById(idNowPlaying).className += " hidden-inactive-element";
											document.getElementById(idAudioControls).className += " hidden-inactive-element";
										}
							}
							
							catch (e) {
							// Fail silently but show in F12 developer tools console
							if(window.console && console.error("Error:" + e));
							}
					}
					
			}
			
			// At end of song resets the state of the play button back to ready
			function resetButton(idButton, idNowPlaying, idInputList, idAudioControls) {
				
				document.getElementById(idButton).innerHTML = '<img class="icon-play" src="img/play2.png">Play';
				document.getElementById(idNowPlaying).className += " hidden-inactive-element";
				document.getElementById(idAudioControls).className += " hidden-inactive-element";
				document.getElementById(idButton).className = document.getElementById(idButton).className.replace	( /(?:^|\s)redStop(?!\S)/g , '' );
			
			}
			
			
	