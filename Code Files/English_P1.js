let title = document.querySelector('#title1');
let singer = document.querySelector('#singers1');
let movie = document.querySelector('#movie1');
let recent_volume= document.querySelector('#volume1');
let slider = document.querySelector('#seeker1');
let track_image = document.querySelector('#track_image1');
let auto_play = document.querySelector('#auto1');


let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
   {
     name: "Song - LOST",
     path: "../Music/Lost_m.mp3",
     img:  "../Images/Lost_w.jpg",
     singer: "Artist - Maroon 5",
		 
   },
   {
     name: "Song - Peaches",
     path: "../Music/Peaches_m.mp3",
     img:  "../Images/Peaches_w.jpg",
     singer: "Artist - Justin Bieber",
		 
   },
   {
     name: "Song - STAY",
     path: "../Music/Stay_m.mp3",
     img:  "../Images/Stay_w.jpg",
     singer: "Artist - Justin Bieber",
		 
   },
   {
     name: "Song - Jalebi Baby",
     path: "../Music/JalebiB_m.mp3",
     img:  "../Images/JalebiB_w.jpg",
     singer: "Artist - Tesher and Jason",
		 
   },
   {
     name: "Song - Easy On Me",
     path: "../Music/Easy_m.mp3",
     img:  "../Images/Easy_w.jpg",
     singer: "Artist - Adele",
		 
   },
	 {
     name: "Song - Shivers",
     path: "../Music/Shivers_m.mp3",
     img:  "../Images/Shivers_w.jpg",
     singer: "Artist - Ed - Sheeran",
		 
   },
	 
];





// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title1.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    singers1.innerHTML = All_song[index_no].singer;
		
    track.load();

	timer = setInterval(range_slider ,1000);

}

load_track(index_no);




// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();               

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play1.innerHTML = '<img class = "pause" src = "../Images/Pause.png">';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play1.innerHTML = '<img class = "play" src = "../Images/Play.png">';
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){         
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;                           
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// change volume
function volume_change(){
	volume_show1.innerHTML = recent_volume.value;       
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;                            
}

// autoplay function
function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "#707070";
	}else {																															
       autoplay = 1;
       auto_play.style.background = "#ffb300";
	}
}


function range_slider(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       // function will run when the song is over
    if(track.ended)
		 {
       	 play1.innerHTML = '<img class = "play" src = "../Images/Play.png">';
           
					 
				if(autoplay==1)
				{
					
					if(index_no == 5)
					  {
							index_no = 0;
							load_track(index_no);
							playsong();
						}
					else
					{
						index_no += 1;
						load_track(index_no);
						playsong();
					}
					 
			  }	 
					 
			}	
}