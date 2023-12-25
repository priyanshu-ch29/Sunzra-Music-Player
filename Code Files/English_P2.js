let title2 = document.querySelector('#title2');
let singer2 = document.querySelector('#singers2');
let movie2 = document.querySelector('#movie2');
let recent_volume2= document.querySelector('#volume2');
let slider2 = document.querySelector('#seeker2');
let track_image2 = document.querySelector('#track_image2');
let auto_play2 = document.querySelector('#auto2');


let timer2;
let autoplay2 = 0;

let index_no2 = 0;
let Playing_song2 = false;

//create a audio Element
let track2 = document.createElement('audio');


//All songs list
let All_song2 = [
   {
     name2: "Song - Peaky Blinder",
     path2: "../Music/Peaky_m.mp3",
     img2:  "../Images/Peaky_w.jpg",
     singer2: "Artist - Otnicka",
	
   },
   {
     name2: "Song - Believer",
     path2: "../Music/Believer_m.mp3",
     img2:  "../Images/Believer_w.jpg",
     singer2: "Artist - Imagine Dragons",

   },
   {
     name2: "Song - Runaway",
     path2: "../Music/Runaway_m.mp3",
     img2:  "../Images/Runaway_w.jpg",
     singer2: "Artist - AURORA",

   },
   {
     name2: "Song - See You Again",
     path2: "../Music/Seeyou_m.mp3",
     img2:  "../Images/Seeyou_w.jpg",
     singer2: "Artist - Wiz Khalifa",

   },
   {
     name2: "Song - Lovely",
     path2: "../Music/Lovely_m.mp3",
     img2:  "../Images/Lovely_w.jpg",
     singer2: "Artist - Billie Eilish and Khalid",

   },
	 {
     name2: "Song - Shape of You",
     path2: "../Music/Shape_m.mp3",
     img2:  "../Images/Shape_w.jpg",
     singer2: "Artist - Ed - Sheeran",
		
   },
	
];





// function load the track
function load_track2(index_no2){
	clearInterval(timer2);
	reset_slider2();

	track2.src = All_song2[index_no2].path2;
	title2.innerHTML = All_song2[index_no2].name2;	
	track_image2.src = All_song2[index_no2].img2;
    singers2.innerHTML = All_song2[index_no2].singer2;
	
    track2.load();

	timer2 = setInterval(range_slider2 ,1000);

}

load_track2(index_no2);




// checking.. the song is playing or not
 function justplay2(){
 	if(Playing_song2==false){
 		playsong2();                

 	}else{
 		pausesong2();
 	}
 }


// reset song slider
 function reset_slider2(){
 	slider2.value = 0;
 }

// play song
function playsong2(){
  track2.play();
  Playing_song2 = true;
  play2.innerHTML = '<img class = "pause2" src = "../Images/Pause.png">';
}

//pause song
function pausesong2(){
	track2.pause();
	Playing_song2 = false;
	play2.innerHTML = '<img class = "play2" src = "../Images/Play.png">';
}


// next song
function next_song2(){
	if(index_no2 < All_song2.length - 1){         
		index_no2 += 1;
		load_track2(index_no2);
		playsong2();
	}else{
		index_no2 = 0;
		load_track2(index_no2);
		playsong2();

	}
}


// previous song
function previous_song2(){
	if(index_no2 > 0){
		index_no2 -= 1;                       
		load_track2(index_no2);
		playsong2();

	}else{
		index_no2 = All_song2.length;
		load_track2(index_no2);
		playsong2();
	}
}


// change volume
function volume_change2(){
	volume_show2.innerHTML = recent_volume2.value;       
	track2.volume = recent_volume2.value / 100;
}

// change slider position 
function change_duration2(){
	slider_position = track2.duration * (slider2.value / 100);
	track2.currentTime = slider_position;                         
}

// autoplay function
function autoplay_switch2(){
	if (autoplay2==1){
       autoplay2 = 0;
       auto_play2.style.background = "#707070";
	}else {																																		
       autoplay2 = 1;
       auto_play2.style.background = "#ffb300";
	}
}


function range_slider2(){
	let position2 = 0;
        
        // update slider position
		if(!isNaN(track2.duration)){
		   position2 = track2.currentTime * (100 / track2.duration);
		   slider2.value =  position2;
	      }

       
       // function will run when the song is over
    if(track2.ended)
		 {
       	 play2.innerHTML = '<img class = "play2" src = "../Images/Play.png">';
          
				if(autoplay2==1)
				{
					
					if(index_no2 == 5)
					  {
							index_no2 = 0;
							load_track2(index_no2);
							playsong2();
						}
					else
					{
						index_no2 += 1;
						load_track2(index_no2);
						playsong2();
					}
					 
			  }
			}
}