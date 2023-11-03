
export default function Dials(props) {

    function Sound(e) {

        
        
        const buttonText = e.target.innerText;
        

        switch (buttonText) {
            case 'Q':
                if (props.bank === 0 && props.power === 1) {

                    props.setText('Heater 1')
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3")
                    snd.volume = props.volume
                    snd.play()

                } else if (props.bank === 1 && props.power === 1) {
                    
                    props.setText('Chord 1')
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3")
                    snd.volume = props.volume
                    snd.play()
                }
                break
            case 'W':
                if (props.bank === 0 && props.power === 1) {
                   
                    props.setText('Heater 2')
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3")
                    snd.volume = props.volume
                    snd.play()

                } else if (props.bank === 1 && props.power === 1) {
                   
                    props.setText('Chord 2')
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3")
                    snd.volume = props.volume
                    snd.play()
                }
                break
            case 'E':
                if (props.bank === 0 && props.power === 1) {
                    
                    props.setText('Heater 3')
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3")
                    snd.volume = props.volume
                    snd.play()

                } else if (props.bank === 1 && props.power === 1) {
                   
                    props.setText('Chord 3')
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3")
                    snd.volume = props.volume
                    snd.play()
                }
                break
            case 'A':
                if (props.bank === 0 && props.power === 1) {
                    
                    props.setText('Heater 4')
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3")
                    snd.volume = props.volume
                    snd.play()

                } else if (props.bank === 1 && props.power === 1) {
                    
                    props.setText('Shaker')
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3")
                    snd.volume = props.volume
                    snd.play()
                }
                break
            case 'S':
                if (props.bank === 0 && props.power === 1) {
                    
                    props.setText('Clap')
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3")
                    snd.volume = props.volume
                    snd.play()

                } else if (props.bank === 1 && props.power === 1) {
                    
                    props.setText('Open HH')
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3")
                    snd.volume = props.volume
                    snd.play()
                }
                break
            case 'D':
                if (props.bank === 0 && props.power === 1) {
                    
                    props.setText('Open HH')
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3")
                    snd.volume = props.volume
                    snd.play()

                } else if (props.bank === 1 && props.power === 1) {
                    
                    props.setText('Closed HH')
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3")
                    snd.volume = props.volume
                    snd.play()
                }
                break
            case 'Z':
                if (props.bank === 0 && props.power === 1) {
                    
                    props.setText('Kick n Hat')
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3")
                    snd.volume = props.volume
                    snd.play()

                } else if (props.bank === 1 && props.power === 1) {
                    
                    props.setText('Punchy Kick')
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3")
                    snd.volume = props.volume
                    snd.play()
                }
                break
            case 'X':
                if (props.bank === 0 && props.power === 1) {
                    
                    props.setText('Kick')
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3")
                    snd.volume = props.volume
                    snd.play()

                } else if (props.bank === 1 && props.power === 1) {
                    
                    props.setText('Side Stick')
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3")
                    snd.volume = props.volume
                    snd.play()
                }
                break
            case 'C':
                if (props.bank === 0 && props.power === 1) {
                    
                    props.setText('Closed HH')
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3")
                    snd.volume = props.volume
                    snd.play()

                } else if (props.bank === 1 && props.power === 1) {
                    
                    props.setText('Heater 1')
                    const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3")
                    snd.volume = props.volume
                    snd.play()
                }
                break
            default :
                break
        };
        
    };

    window.onkeydown = function(event) {
        if (event.keyCode === 81) {
            if (props.bank === 0 && props.power === 1) {
                //text.textContent = 'Heater 1'
                props.setText("Heater 1")
                const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3")
                snd.volume = props.volume
                snd.play()
            } else if (props.bank === 1 && props.power === 1) {
                //text.textContent = "Chord 1"
                props.setText("Chord 1")
                const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3")
                snd.volume = props.volume
                snd.play()
            }
        } else if (event.keyCode === 87) {
            if (props.bank === 0 && props.power === 1) {
                //text.textContent = 'Heater 2'
                props.setText("Heater 2")
                const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3")
                snd.volume = props.volume
                snd.play()
            } else if (props.bank === 1 && props.power === 1) {
                //text.textContent = "Chord 2"
                props.setText("Chord 2")
                const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3")
                snd.volume = props.volume
                snd.play()
            }
        } else if (event.keyCode === 69) {
            if (props.bank === 0 && props.power === 1) {
                //text.textContent = 'Heater 3'
                props.setText("Heater 3")
                const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3")
                snd.volume = props.volume
                snd.play()
            } else if (props.bank === 1 && props.power === 1) {
                //text.textContent = "Chord 3"
                props.setText("Chord 3")
                const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3")
                snd.volume = props.volume
                snd.play()
            }
        } else if (event.keyCode === 65) {
            if (props.bank === 0 && props.power === 1) {
                //text.textContent = 'Heater 4'
                props.setText("Heater 4")
                const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3")
                snd.volume = props.volume
                snd.play()
            } else if (props.bank === 1 && props.power === 1) {
                //text.textContent = "Shaker"
                props.setText("Shaker")
                const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3")
                snd.volume = props.volume
                snd.play()
            }
        } else if (event.keyCode === 83) {
            if (props.bank === 0 && props.power === 1) {
                //text.textContent = 'Clap'
                props.setText("Clap")
                const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3")
                snd.volume = props.volume
                snd.play()
            } else if (props.bank === 1 && props.power === 1) {
                //text.textContent = "Open HH"
                props.setText("Open HH")
                const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3")
                snd.volume = props.volume
                snd.play()
            }
        } else if (event.keyCode === 68) {
            if (props.bank === 0 && props.power === 1) {
                //text.textContent = 'Open HH'
                props.setText("Open HH")
                const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3")
                snd.volume = props.volume
                snd.play()
            } else if (props.bank === 1 && props.power === 1) {
                //text.textContent = "Closed HH"
                props.setText("Closed HH")
                const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3")
                snd.volume = props.volume
                snd.play()
            }
        } else if (event.keyCode === 90) {
            if (props.bank === 0 && props.power === 1) {
                //text.textContent = 'Kick n Hat'
                props.setText("Kick n Hat")
                const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3")
                snd.volume = props.volume
                snd.play()
            } else if (props.bank === 1 && props.power === 1) {
                //text.textContent = "Punchy Kick"
                props.setText("Punchy Kick")
                const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3")
                snd.volume = props.volume
                snd.play()
            }
        } else if (event.keyCode === 88) {
            if (props.bank === 0 && props.power === 1) {
                //text.textContent = 'Kick'
                props.setText("Kick")
                const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3")
                snd.volume = props.volume
                snd.play()
            } else if (props.bank === 1 && props.power === 1) {
                //text.textContent = "Side Stick"
                props.setText("Side Stick")
                const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3")
                snd.volume = props.volume
                snd.play()
            }
        } else if (event.keyCode === 67) {
            if (props.bank === 0 && props.power === 1) {
                //text.textContent = 'Closed HH'
                props.setText("Closed HH")
                const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3")
                snd.volume = props.volume
                snd.play()
            } else if (props.bank === 1 && props.power === 1) {
                //text.textContent = "Snare"
                props.setText("Snare")
                const snd =  new Audio("https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3")
                snd.volume = props.volume
                snd.play()
            }
        }
     };

    
    return (
        <div class="buttons">
                <button onClick={Sound} class="Q">Q</button>
                <button onClick={Sound} class="W">W</button>
                <button onClick={Sound} class="E">E</button>
                <button onClick={Sound} class="A">A</button>
                <button onClick={Sound} class="S">S</button>
                <button onClick={Sound} class="D">D</button>
                <button onClick={Sound} class="Z">Z</button>
                <button onClick={Sound} class="X">X</button>
                <button onClick={Sound} class="C">C</button>
        </div>
    );
};