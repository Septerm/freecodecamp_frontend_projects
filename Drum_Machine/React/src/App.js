
import './App.css';
import Dials from './components/Dials'
import Controls from './components/Controls'
import {useState} from 'react'


function App() {

  const [text, setText] = useState("")
  const [power, setPower] = useState(0)
  const [bank, setBank] = useState(0)
  const [volume, setVolume]  = useState(1)


  return (
    <div class="container">
        <div class="drumMachine">

          <Dials
            setText = {setText}
            power = {power}
            bank = {bank}
            volume = {volume}
          />
          <Controls
            text = {text}
            setText = {setText}
            power = {power}
            setPower = {setPower}
            bank = {bank}
            setBank = {setBank}
            setVolume = {setVolume}
          
          />
        
            
        </div>
    </div>
    
  );
}

export default App;
