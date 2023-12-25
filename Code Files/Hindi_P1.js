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
     name: "Song - Is Qadar",
     path: "../Music/Isqadar_m.mp3",
     img:  "../Images/Isqadar_w.jpg",
     singer: "Singer - Tulsi and Darshan",
		 movie : "Album - Is Qadar"
   },
   {
     name: "Song - Aila Re Ailla",
     path: "../Music/Aila_m.mp3",
     img:  "../Images/Aila_w.jpg",
     singer: "Singer - Daler Mehndi",
		 movie : "Movie - Sooryavanshi"
   },
   {
     name: "Song - Naacho Naacho",
     path: "../Music/Naacho_m.mp3",
     img:  "../Images/Naacho_w.jpg",
     singer: "Singer - Vishal and Rahul",
		 movie : "Movie - RRR"
   },
   {
     name: "Song - Raatan Lambiyan",
     path: "../Music/RTLB_m.mp3",
     img:  "../Images/RTLB_w.jpg",
     singer: "Singer - Jubin and Asses",
		 movie : "Movie - Shershaah"
   },
   {
     name: "Song - Sakhiyan 2.0",
     path: "../Music/Sakh_m.mp3",
     img:  "../Images/Sakh_w.jpg",
     singer: "Singer - Zara Khan and Maninder",
		 movie : "Movie - Bell Bottom"
   },
	 {
     name: "Song - Mann Bharya 2.0",
     path: "../Music/Mann_m.mp3",
     img:  "../Images/Mann_w.jpg",
     singer: "Singer - B - Praak",
		 movie : "Movie - Shershaah"
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
		movie1.innerHTML = All_song[index_no].movie;
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