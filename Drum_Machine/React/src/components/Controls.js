import {useState} from 'react'


export default function Controls (props) {


    function powerSwitch () {

        props.setPower(!props.power ? 1 : 0 )
        setDisabled(!props.power ? false : true)
        props.setText("")
    }

    function bankSwitch () {

        props.setBank(!props.bank ? 1 : 0)
        props.setText(!props.bank ? "Piano Set" : "Heater Set")
    }

    function volumeControl (e) {
        
        const vol = e.target.value
        props.setVolume(vol)
    }

    const [d, setDisabled] = useState(true)

    return (
        <div class="controls">
                
                <div class="contolSwitch">
                    <div class="switchText">Power</div>
                    <label class="switch">
                        <input onChange={powerSwitch} id="Power" type="checkbox" defaultValue="0" />
                        <span class="slider"></span>
                    </label>
                </div>

                <div class="screen">{props.text}</div>

                <input onChange={volumeControl} id="volumeSlider" max="1" min="0" step="0.1" defaultValue="1" type="range"/>

                <div class="contolSwitch">
                    <div class="switchText">Bank</div>
                    <label class="switch">
                        <input onChange={bankSwitch} id="Bank" type="checkbox" defaultValue= "0" disabled={d}/>
                        <span class="slider"></span>
                    </label>
                </div>

            </div>
    );
};