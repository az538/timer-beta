let numOfMin;
let timer;
let count = 0
let r = 0
let mySound = new Audio("alarm ring.mp3");

function startTimer() {
    if(document.getElementById("myText").value != ""){ 
        numOfMin = document.getElementById("myText").value;
        timer = numOfMin * 60;
        count = 0
        
            

        
      funky();

    }
    else{
        alert("put something in the box")
    }

  }

  function funky(){
    setTimeout(function() {   //  call a 3s setTimeout when the loop is called
        console.log(count); 
        document.getElementById("start").innerText = count;  //  your code here
        count++;
        if(count === timer){
            mySound.play();
           
          }                         //  increment the counter
        if (count != timer) { 
          if(count!= "stopped") {
             funky(); }         //  if the counter < 10, call the loop function
                     //  ..  again which will trigger another 
        }   
                  //  ..  setTimeout()
      }, 1000)
  }



  function stopNow(){
 count = "stopped"
  }
