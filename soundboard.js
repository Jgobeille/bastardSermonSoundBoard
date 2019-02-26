


function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // brackets[] are attribute selector of HTML Audio & the ${} is ES6 template literal in which e.keyCode(whatever key is pressed) is passed into the function 
    const key = document.querySelector(`.button[data-key="${e.keyCode}"]`);
    if(!audio) return //stop the function from runnng all together
    audio.currentTime = 0; //resets the audio timing to zero after pressed so it will keep playing
    audio.play(); //function that will play the src audio
    key.classList.add('playing'); // adds the class .playing which add the .07 seconds animation onto the .key class
    
};

function clickPlaySound(){
    const keyCode = this.dataset.key; //this refers to the entire div information, then enter into the dataset and then access the 
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`); // brackets[] are attribute selector of HTML Audio & the ${} is ES6 template literal in which e.keyCode(whatever key is pressed) is passed into the function 
    const key = document.querySelector(`.button[data-key="${keyCode}"]`);
    if(!audio) return
    key.classList.add('playing');
    audio.play();
    audio.currentTime = 0;   
    
    
};

function removeTransition(e) {
    if(e.propertyName === 'transform') return; // skip it if its not a transform
    this.classList.remove('playing'); // 
    
};

const button = Array.from(document.querySelectorAll('.button')); // grabs all the elements with .key class

button.forEach(key => key.addEventListener('transitionend', removeTransition)); //loops over the .key elements and notices the css transition on the keyCode used which will run the function removeTransition
button.forEach(key => key.addEventListener('click', clickPlaySound));
window.addEventListener('keydown', playSound); // When keydown function is pressed starts function playSound
