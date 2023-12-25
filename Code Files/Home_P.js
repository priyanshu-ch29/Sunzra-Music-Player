let track = document.createElement('audio');

let Playing_song = false;

let index_no = 0;


let All_song = [
   {

     path: "../Music/Mann_m.mp3",
     
   },
   {
    
     path: "../Music/Aila_m.mp3",
     
   },
   {
   
     path: "../Music/Naacho_m.mp3",
     
   },
   {
    
     path: "../Music/Isqadar_m.mp3",
     
   },
   {
    
     path: "../Music/Kaun_m.mp3",
     
   },
	 {
     
     path: "../Music/Khairiyat_m.mp3",
     
   },
	 {
     
     path: "../Music/RTLB_m.mp3",
     
   },
	 {
    
     path: "../Music/Zindagi_m.mp3",
     
   },
];


function load_track(index_no){
			
			track.src = All_song[index_no].path;
	
	
    track.load();
		}


			

 function justplay(songName){
			
      if (songName == "mann")

				{
							load_track(0);
						
					if(Playing_song==false)
					{
						playsong();                

					 }
					else
					{
						pausesong();
					}
				 
				 
				 // To play song
						function playsong(){
							track.play();
							Playing_song = true;
							playm.innerHTML = '<img class = "pause" src = "../Images/Pause.png">';
						}

				// To pause song
						function pausesong(){
							track.pause();
							Playing_song = false;
							playm.innerHTML = '<img class = "play" src = "../Images/Play.png">';
						}
				}
				
			else if (songName == "aila_re")

				{
							load_track(1);
						
					if(Playing_song==false)
					{
						playsong();                  

					 }
					else
					{
						pausesong();
					}
				 
				 
				 // To play song
						function playsong(){
							track.play();
							Playing_song = true;
							playai.innerHTML = '<img class = "pause" src = "../Images/Pause.png">';
						}

				// To pause song
						function pausesong(){
							track.pause();
							Playing_song = false;
							playai.innerHTML = '<img class = "play" src = "../Images/Play.png">';
						}
				}	
				
			else if (songName == "naacho")

				{
							load_track(2);
						
					if(Playing_song==false)
					{
						playsong();               

					 }
					else
					{
						pausesong();
					}
				 
				 
				 // To play song
						function playsong(){
							track.play();
							Playing_song = true;
							playn.innerHTML = '<img class = "pause" src = "../Images/Pause.png">';
						}

				// To pause song
						function pausesong(){
							track.pause();
							Playing_song = false;
							playn.innerHTML = '<img class = "play" src = "../Images/Play.png">';
						}
				}	


			else if (songName == "isqadar")

				{
							load_track(3);
						
					if(Playing_song==false)
					{
						playsong();                  

					 }
					else
					{
						pausesong();
					}
				 
				 
				 // To  play song
						function playsong(){
							track.play();
							Playing_song = true;
							playis.innerHTML = '<img class = "pause" src = "../Images/Pause.png">';
						}

					// To pause song
						function pausesong(){
							track.pause();
							Playing_song = false;
							playis.innerHTML = '<img class = "play" src = "../Images/Play.png">';
						}
				}	
				
				
			else if (songName == "kaun")

				{
							load_track(4);
						
					if(Playing_song==false)
					{
						playsong();                  

					 }
					else
					{
						pausesong();
					}
				 
				 
				 // To play song
						function playsong(){
							track.play();
							Playing_song = true;
							playkt.innerHTML = '<img class = "pause" src = "../Images/Pause.png">';
						}

				// To pause song
						function pausesong(){
							track.pause();
							Playing_song = false;
							playkt.innerHTML = '<img class = "play" src = "../Images/Play.png">';
						}
				}	
				
			else if (songName == "khairiyat")

				{
							load_track(5);
						
					if(Playing_song==false)
					{
						playsong();                 

					 }
					else
					{
						pausesong();
					}
				 
				 
				 // To  play song
						function playsong(){
							track.play();
							Playing_song = true;
							playkh.innerHTML = '<img class = "pause" src = "../Images/Pause.png">';
						}

				// To pause song
						function pausesong(){
							track.pause();
							Playing_song = false;
							playkh.innerHTML = '<img class = "play" src = "../Images/Play.png">';
						}
				}	
				
			else if (songName == "rtlb")

				{
							load_track(6);
						
					if(Playing_song==false)
					{
						playsong();                  

					 }
					else
					{
						pausesong();
					}
				 
				 
				 // To  play song
						function playsong(){
							track.play();
							Playing_song = true;
							playrt.innerHTML = '<img class = "pause" src = "../Images/Pause.png">';
						}

				// To pause song
						function pausesong(){
							track.pause();
							Playing_song = false;
							playrt.innerHTML = '<img class = "play" src = "../Images/Play.png">';
						}
				}	
				

			else if (songName == "zindagi")

				{
							load_track(7);
						
					if(Playing_song==false)
					{
						playsong();                  

					 }
					else
					{
						pausesong();
					}
				 
				 
				 // To play song
						function playsong(){
							track.play();
							Playing_song = true;
							playzd.innerHTML = '<img class = "pause" src = "../Images/Pause.png">';
						}

				// To pause song
						function pausesong(){
							track.pause();
							Playing_song = false;
							playzd.innerHTML = '<img class = "play" src = "../Images/Play.png">';
						}
				}	
						
				
				
  } 
	
	
	
