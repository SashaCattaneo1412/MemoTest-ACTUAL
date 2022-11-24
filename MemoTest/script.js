document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'Dibu',
        img: '1.jpg'
      },
      {
        name: 'Acuña',
        img: '2.jpg'
      },
      {
        name: 'Molina',
        img: '3.jpg'
      },
      {
        name: 'Otamendi',
        img: '4.jpg'
      },
      {
        name: 'Cristian Romero',
        img: '5.jpg'
      },
      {
        name: 'De paul',
        img: '6.jpg'
      },
      {
        name: 'Di Maria',
        img: '7.jpg'
      },
      {
        name: 'Lo Celso',
        img: '8.jpg'
      },
      {
        name: 'Paredes',
        img: '9.jpg'
      },
      {
        name: 'Lautaro Martinez',
        img: '10.jpg'
      },
      {
        name: 'Messi',
        img: '11.jpg'
      },
      {
        name: 'Escudo',
        img: 'escudoArg.jpg'
      },
    {

      name: 'Dibu',
      img: '1.jpg'
    },
    {
      name: 'Acuña',
      img: '2.jpg'
    },
    {
      name: 'Molina',
      img: '3.jpg'
    },
    {
      name: 'Otamendi',
      img: '4.jpg'
    },
    {
      name: 'Cristian Romero',
      img: '5.jpg'
    },
    {
      name: 'De paul',
      img: '6.jpg'
    },
    {
      name: 'Di Maria',
      img: '7.jpg'
    },
    {
      name: 'Lo Celso',
      img: '8.jpg'
    },
    {
      name: 'Paredes',
      img: '9.jpg'
    },
    {
      name: 'Lautaro Martinez',
      img: '10.jpg'
    },
    {
      name: 'Messi',
      img: '11.jpg'
    },
    {
      name: 'Escudo',
      img: 'escudoArg.jpg'
    },
    ]
    cardArray.sort(() => 0.5 - Math.random())
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

   //audios

    let wrongAudio = new Audio('wrong.wav');
    let RightAudio = new Audio('right.wav');
    let loseAudio = new Audio('Ganaste.wav');
    // timer 

    let temporazidor = false;
    let timer = 60;
    let mostrarTiempo = document.getElementById("t-restante");
    let tiempoRegresivoId = null


    function Timer(){
    tiempoRegresivoId = setInterval(() =>{
    timer--;
    mostrarTiempo.innerHTML =  `TIEMPO: ${timer}s`;
    if(timer == 0)
    {
      loseAudio.play();
      return window.location.assign("Perdiste.html")
    }
    },1000)
    }

    if(temporazidor == false){
      Timer();
      temporazidor = true;
    }
       
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
          const card = document.createElement('img')
          card.style.width = '150px';
          card.style.height = '200px';
          card.setAttribute('src', 'figurita.jpg')
          card.setAttribute('data-id', i)
          card.addEventListener('click', flipCard)
          grid.appendChild(card)
        }
      }


      function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        
        if(optionOneId == optionTwoId) {
          cards[optionOneId].setAttribute('src', 'carta.jpg')
          cards[optionTwoId].setAttribute('src', 'carta.jpg')
          alert('You have clicked the same image!')
        }

        else if (cardsChosen[0] === cardsChosen[1]) {
           // alert('You found a match')
            RightAudio.play();
            cards[optionOneId].setAttribute('src', 'figu.jpg')
            cards[optionTwoId].setAttribute('src', 'figu.jpg')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
          } else {
           // counterError = 0;
            cards[optionOneId].setAttribute('src', 'figurita.jpg')
            cards[optionTwoId].setAttribute('src', 'figurita.jpg')
            //alert('Sorry, try again')
            //document.getElementById("Err").style.display="block";
            wrongAudio.play();
            /*
            if(counterError == 3)
             {
             alert('You lost')
             }
             counterError++;
             */
          }
          cardsChosen = []
          cardsChosenId = []
          resultDisplay.textContent = cardsWon.length
          if  (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
            return window.location.assign("Ganaste.html")
          }

         


        }



    function flipCard(){

        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length ===2) {
          setTimeout(checkForMatch, 500)
        }
    }

    createBoard()

})