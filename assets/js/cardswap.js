// checks for load state of DOM //

if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    let card = Array.from(document.getElementsByClassName("card"));
    let overlay = Array.from(document.getElementsByClassName("overlay"));

    // card.forEach(card => card.addEventListener("click", cardFlip));
    // };
    overlay.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            // game.startGame();
        });
    });
    card.forEach(card => {
        card.addEventListener('click', () => {
            this.cardFlip(card);
        });
    });
}




/*function cardFlip() {
    this.classList.toggle("flipped");
}



/*class cardSwap {
    constructor(totalTime, cards) {
        this.cardArray = cards;
        this.totalTime = totalTime;
        this.timer = document.getElementById("total-time");
        this.counter = document.getElementById("total-moves");
    }
    startGame() {
        this.totalMoves = 0;
        this.matchedCards = [];
        this.totalTime = 0;
        this.audioEvents = new AudioEvents();
    }
}

class AudioEvents {
    constructor() {
        this.gameOverAudio = new Audio("assets/audio/fail.wav");
        this.gameSuccessAudio = new Audio("assets/audio/success.wav");
        this.flipAudio = new Audio("assets/audio/card-flip.wav");
        this.cardMatchAudio = new Audio("assets/audio/coin.wav");
        this.cardNoMatchAudio = new Audio("assets/audio/incorrect.wav")
        this.BGM = new Audio("assets/audio/Chiptronical.ogg")
        BGM.volume  = 0.8;
    }
    gameOver() {
        this.gameOverAudio.play()
    }
    gameSuccess() {
        this.gameSuccessAudio.play()
    }     
    cardFlip() {
        this.flipAudio.play();
    }
    cardMatch() {
        this.cardMatchAudio.play()
    }
    cardNomatch() {
        this.cardNoMatchAudio.play()
    }
}

//BGM//

/*let bgm = document.getElementById("bgm");
let isPlaying = false;
let musicButtonToggle = document.getElementById("music-button")
let musicButtonToggleGame = document.getElementById("music-button-game")

function togglePlay() {
  if (isPlaying) {
    bgm.pause()
  } else {
    bgm.play();
  }
};
bgm.onplaying = function() {
  isPlaying = true;
  musicButtonToggle.innerHTML = "Music: on";
  musicButtonToggleGame.innerHTML = "Music: on";
};
bgm.onpause = function() {
  isPlaying = false;
  musicButtonToggle.innerHTML = "Music: off";
  musicButtonToggleGame.innerHTML = "Music: off"
};

// Modals

let modal = document.getElementsByClassName('modal');
let btn = document.getElementsByClassName("modalOpen");
let span = document.getElementsByClassName("close");

// Open modal 
btn[0].onclick = function() {
    modal[0].style.display = "block";
}

btn[1].onclick = function() {
    modal[1].style.display = "block";
}
// close on x
span[0].onclick = function() {
    modal[0].style.display = "none";
}

span[1].onclick = function() {
    modal[1].style.display = "none";
}
// click outside modal close
window.onclick = function(event) {
    if (event.target == modal[0]) {
        modal[0].style.display = "none";
    }
    if (event.target == modal[1]) {
        modal[1].style.display = "none";
    }
};

// Game //

// jQuery to hide difficulty-text and gameBox cards when difficulty button clicked//
/*$('#gameBox').hide();
$('#start-button').on('click',
  function() {
    $('.difficulty-text, #gameBox').toggle();
  }
);*/

// flip card on click functionality

// let card = document.querySelectorAll(".card")

/* function cardFlip() {
    this.classList.toggle("flipped");
    
} */

// card.forEach(card => card.addEventListener("click", cardFlip))

// Audio /
