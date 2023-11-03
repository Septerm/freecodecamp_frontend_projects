
function App() {


    //const button1 = document.querySelector(".Q")
    //const button2 = document.querySelector(".W")
    let vol = 1;
    const buttons = document.querySelectorAll(".buttons button")
    const text = document.querySelector(".screen")
    const slider = document.getElementById("volumeSlider")
    
    slider.addEventListener("change", function () {
         vol = this.value
        
    })

    let bankChecker = 0;
    let powerChecker = 0;

    function drumMachine () {

        buttons.forEach(button => {

            button.addEventListener("click", function (){
               
                const option = this.textContent;
    
                switch (option) {
                    case 'Q':
                        if (bankChecker == 0 && powerChecker == 1) {
                            text.textContent = 'Heater 1'

                            const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3")
                            snd.volume = vol
                            snd.play()
                        } else if (bankChecker == 1 && powerChecker == 1) {
                            text.textContent = "Chord 1"
                            const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3")
                            snd.volume = vol
                            snd.play()
                        }
                        break
                    case 'W':
                        if (bankChecker == 0 && powerChecker == 1) {
                            text.textContent = 'Heater 2'
                            const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3")
                            snd.volume = vol
                            snd.play()
                        } else if (bankChecker == 1 && powerChecker == 1) {
                            text.textContent = "Chord 2"
                            const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3")
                            snd.volume = vol
                            snd.play()
                        }
                        break
                    case 'E':
                        if (bankChecker == 0 && powerChecker == 1) {
                            text.textContent = 'Heater 3'
                            const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3")
                            snd.volume = vol
                            snd.play()
                        } else if (bankChecker == 1 && powerChecker == 1) {
                            text.textContent = "Chord 3"
                            const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3")
                            snd.volume = vol
                            snd.play()
                        }
                        break
                    case 'A':
                        if (bankChecker == 0 && powerChecker == 1) {
                            text.textContent = 'Heater 4'
                            const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3")
                            snd.volume = vol
                            snd.play()
                        } else if (bankChecker == 1 && powerChecker == 1) {
                            text.textContent = "Shaker"
                            const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3")
                            snd.volume = vol
                            snd.play()
                        }
                        break
                    case 'S':
                        if (bankChecker == 0 && powerChecker == 1) {
                            text.textContent = 'Clap'
                            const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3")
                            snd.volume = vol
                            snd.play()
                        } else if (bankChecker == 1 && powerChecker == 1) {
                            text.textContent = "Open HH"
                            const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3")
                            snd.volume = vol
                            snd.play()
                        }
                        break
                    case 'D':
                        if (bankChecker == 0 && powerChecker == 1) {
                            text.textContent = 'Open HH'
                            const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3")
                            snd.volume = vol
                            snd.play()
                        } else if (bankChecker == 1 && powerChecker == 1) {
                            text.textContent = "Closed HH"
                            const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3")
                            snd.volume = vol
                            snd.play()
                        }
                        break
                    case 'Z':
                        if (bankChecker == 0 && powerChecker == 1) {
                            text.textContent = 'Kick n Hat'
                            const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3")
                            snd.volume = vol
                            snd.play()
                        } else if (bankChecker == 1 && powerChecker == 1) {
                            text.textContent = "Punchy Kick"
                            const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3")
                            snd.volume = vol
                            snd.play()
                        }
                        break
                    case 'X':
                        if (bankChecker == 0 && powerChecker == 1) {
                            text.textContent = 'Kick'
                            const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3")
                            snd.volume = vol
                            snd.play()
                        } else if (bankChecker == 1 && powerChecker == 1) {
                            text.textContent = "Side Stick"
                            const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3")
                            snd.volume = vol
                            snd.play()
                        }
                        break
                    case 'C':
                        if (bankChecker == 0 && powerChecker == 1) {
                            text.textContent = 'Closed HH'
                            const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3")
                            snd.volume = vol
                            snd.play()
                        } else if (bankChecker == 1 && powerChecker == 1) {
                            text.textContent = "Snare"
                            const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3")
                            snd.volume = vol
                            snd.play()
                        }
                        break
                };
                
            })
        })

        window.onkeydown = function(event) {
            if (event.keyCode == 81) {
                if (bankChecker == 0 && powerChecker == 1) {
                    text.textContent = 'Heater 1'

                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3")
                    snd.volume = vol
                    snd.play()
                } else if (bankChecker == 1 && powerChecker == 1) {
                    text.textContent = "Chord 1"
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3")
                    snd.volume = vol
                    snd.play()
                }
            } else if (event.keyCode == 87) {
                if (bankChecker == 0 && powerChecker == 1) {
                    text.textContent = 'Heater 2'
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3")
                    snd.volume = vol
                    snd.play()
                } else if (bankChecker == 1 && powerChecker == 1) {
                    text.textContent = "Chord 2"
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3")
                    snd.volume = vol
                    snd.play()
                }
            } else if (event.keyCode == 69) {
                if (bankChecker == 0 && powerChecker == 1) {
                    text.textContent = 'Heater 3'
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3")
                    snd.volume = vol
                    snd.play()
                } else if (bankChecker == 1 && powerChecker == 1) {
                    text.textContent = "Chord 3"
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3")
                    snd.volume = vol
                    snd.play()
                }
            } else if (event.keyCode == 65) {
                if (bankChecker == 0 && powerChecker == 1) {
                    text.textContent = 'Heater 4'
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3")
                    snd.volume = vol
                    snd.play()
                } else if (bankChecker == 1 && powerChecker == 1) {
                    text.textContent = "Shaker"
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3")
                    snd.volume = vol
                    snd.play()
                }
            } else if (event.keyCode == 83) {
                if (bankChecker == 0 && powerChecker == 1) {
                    text.textContent = 'Clap'
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3")
                    snd.volume = vol
                    snd.play()
                } else if (bankChecker == 1 && powerChecker == 1) {
                    text.textContent = "Open HH"
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3")
                    snd.volume = vol
                    snd.play()
                }
            } else if (event.keyCode == 68) {
                if (bankChecker == 0 && powerChecker == 1) {
                    text.textContent = 'Open HH'
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3")
                    snd.volume = vol
                    snd.play()
                } else if (bankChecker == 1 && powerChecker == 1) {
                    text.textContent = "Closed HH"
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3")
                    snd.volume = vol
                    snd.play()
                }
            } else if (event.keyCode == 90) {
                if (bankChecker == 0 && powerChecker == 1) {
                    text.textContent = 'Kick n Hat'
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3")
                    snd.volume = vol
                    snd.play()
                } else if (bankChecker == 1 && powerChecker == 1) {
                    text.textContent = "Punchy Kick"
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3")
                    snd.volume = vol
                    snd.play()
                }
            } else if (event.keyCode == 88) {
                if (bankChecker == 0 && powerChecker == 1) {
                    text.textContent = 'Kick'
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3")
                    snd.volume = vol
                    snd.play()
                } else if (bankChecker == 1 && powerChecker == 1) {
                    text.textContent = "Side Stick"
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3")
                    snd.volume = vol
                    snd.play()
                }
            } else if (event.keyCode == 67) {
                if (bankChecker == 0 && powerChecker == 1) {
                    text.textContent = 'Closed HH'
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3")
                    snd.volume = vol
                    snd.play()
                } else if (bankChecker == 1 && powerChecker == 1) {
                    text.textContent = "Snare"
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3")
                    snd.volume = vol
                    snd.play()
                }
            }
         }



    }

    const bank = document.getElementById("Bank")
    const power = document.getElementById("Power")

    power.addEventListener ("change", function () {
        if (this.checked) {
            powerChecker = 1;
            bank.disabled = false
        } else {
            
           powerChecker = 0 ;
           bank.disabled = true
           text.textContent = ""
        }
    })

    bank.addEventListener ("change", function () {
        if (this.checked) {
            bankChecker = 1;
            if (powerChecker == 1) {
                text.textContent = "Piano Kit"
            }
        } else {
            bankChecker = 0;
            if (powerChecker == 1) {
                text.textContent = "Heater Kit"
            }
        }
    })


    drumMachine();


}


App()