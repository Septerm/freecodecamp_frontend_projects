import { useState } from "react";


export default function Editor(props) {

   const [height, setHeight] = useState('200px')
    
    
    
    function changeExpand() {
        if (props.expand === true){
            props.setExpand(false)
            setHeight('100vh')
        } else {
            props.setExpand(true)
            setHeight('200px')
        }
        
    }

    return (

        <div class="editor">
            <nav>
                <span>
                    <i class="fa fa-edit"></i> Editor</span>
                <i onClick={changeExpand} id="expand" class="fa fa-arrows-alt"></i>
            </nav>
            <textarea
              style={{height: height}} 
              value={props.text}
              onChange={(e) => props.setText(e.target.value)}
            ></textarea>
        </div>
    );
}