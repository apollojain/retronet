function play(){
       var myAudio = document.getElementById("audio");
       
       if (typeof myAudio.loop == 'boolean')
		{
		    myAudio.loop = true;
		}
		else
		{
		    myAudio.addEventListener('ended', function() {
		        this.currentTime = 0;
		        this.play();
		    }, false);
		}
		myAudio.play();
		myAudio.play();
}
