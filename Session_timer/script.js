const screen = document.querySelector('[screen]')
const arrow1 = document.querySelector('[up-arrow-two]')
const arrow2 = document.querySelector('[down-arrow-two]')
const arrow3 = document.querySelector('[up-arrow-one]')
const arrow4 = document.querySelector('[down-arrow-one]')
const sessionNumber = document.querySelector('[session-length]')
const breakNumber = document.querySelector('[break-length]')
const refresh = document.querySelector('[refresh]')
const play = document.querySelector('[play]')
const pause = document.querySelector('[pause]')

const seconds = document.querySelector('[secondTime]')
const minutes = document.querySelector('[minTime]')
let switcher = 0

//----------------------------------- --------------------Button Functions ---------------------------------------------------------------------------------

function increaseSession () {

    if(minutes.innerText == '25') return
    sessionNumber.innerText = Number(minutes.innerHTML) + 1
    minutes.innerText =  Number(minutes.innerHTML) + 1
    
    //sessionNumber.innerText
    
}

function decreaseSession() {
    
    if(minutes.innerText === '1') return
    sessionNumber.innerText = Number(minutes.innerHTML) - 1
    minutes.innerText =  Number(minutes.innerHTML) - 1
    
    
}

function increaseBreak () {

    if(breakNumber.innerText === '5') return
    breakNumber.innerText =  Number(breakNumber.innerHTML) + 1
    
}

function decreaseBreak () {

    if(breakNumber.innerText === '1') return
    breakNumber.innerText =  Number(breakNumber.innerHTML) - 1
    
}

function refreshButton () {
    
    minutes.innerText = sessionNumber.innerText
    seconds.innerText = "00"
}

function stopWatch () {

    
    
    if (seconds.innerText === "00") {
        seconds.innerText = 60
        minutes.innerText = Number(minutes.innerText) - 1
    }
    
    seconds.innerText = Number(seconds.innerText) - 1


    switch(Number(seconds.innerText)) {

        case 9:
            seconds.innerText = "09"
            break
        case 8:
            seconds.innerText = "08"
            break
        case 7:
            seconds.innerText = "07"
            break
        case 6:
            seconds.innerText = "06"
            break
        case 5:
            seconds.innerText = "05"
            break
        case 4:
            seconds.innerText = "04"
            break
        case 3:
            seconds.innerText = "03"
            break
        case 2:
            seconds.innerText = "02"
            break
        case 1:
            seconds.innerText = "01"
            break
        case 0:
            seconds.innerText = "00"
            break
        default:
            break
    }

    if (Number(seconds.innerText) === 0 && Number(minutes.innerText) === 0 && switcher == 0) {

        minutes.innerText = breakNumber.innerText
        switcher = 1

    }

    if (Number(seconds.innerText) === 0 && Number(minutes.innerText) === 0 && switcher == 1) {

        minutes.innerText = sessionNumber.innerText
        switcher = 0

    }


    //minutes.innerText = Number(minutes.innerText) - 1
    
}

function playButton () {

    const timer = setInterval(stopWatch, 1000)

    function pauseButton () {
        clearInterval(timer)
    }

    pause.addEventListener('click',pauseButton)

}

//----------------------------------------------------------Event Listeners-------------------------------------------------------------------------

arrow1.addEventListener('click', increaseSession )
arrow2.addEventListener('click', decreaseSession)
arrow3.addEventListener('click', increaseBreak)
arrow4.addEventListener('click', decreaseBreak)
refresh.addEventListener('click', refreshButton)
play.addEventListener('click', playButton)

