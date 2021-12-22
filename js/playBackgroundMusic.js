		
			function playBackgroundMusic(idbackgroundMusicControls, idplayBgButton) {			
			
					//set or reset state of play background button. added here rather than within if,else below due to issues with firefox
					document.getElementById(idplayBgButton).innerHTML = 'Play Background Music';
					document.getElementById(idplayBgButton).className = document.getElementById(idplayBgButton).className.replace( /(?:^|\s)playBgStopped(?!\S)/g , '' );
					
					// Playlist array
					var files = [
					"assets/music/1.mp3",
					"assets/music/2.mp3",
					"assets/music/3445.mp3"
					];

					// Current index of the files array
					var current = 0;
					
					// Get the audio element
					var playlistPlayer = document.getElementById(idbackgroundMusicControls);
					
											
					// Determines whether music is playing, then plays or pauses
					if (playlistPlayer.paused){

							playlistPlayer.src = files[current];
							playlistPlayer.play();
							document.getElementById(idplayBgButton).innerHTML = 'Stop Background Music';
							document.getElementById(idplayBgButton).className += " playBgStopped";
							
							
					} else {
							
							playlistPlayer.src = files[current];
							playlistPlayer.pause();
							playlistPlayer.currentTime = 0;
							
							
					};
						
					// Listen for the playback ended event and then play the next media in playlist array
					playlistPlayer.addEventListener('ended', next, false);
					// Listen for the playback erro event, skip, and play the next media in playlist array
					playlistPlayer.addEventListener('error', next, false);
			
				
				
			}
				
				
			// Selects the next file to be played
			function next() {
				// Check for last media in the playlist
				if (current === files.length - 1) {
					current = 0;
					} else {
					current++;
					};
					// Change the audio element source
					playlistPlayer.src = files[current];
					
					playlistPlayer.play();
			}

			
			
