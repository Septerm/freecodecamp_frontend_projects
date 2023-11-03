
import { useState } from 'react';
import './App.css';
import Previewer from './components/Previewer';
import Editor from './components/Editor';

function App() {
  const pretext = "# Welcome to my markdown previewer\n--- \n## This is a subheading...\n--- \n### This is a sub-subheading..."
  const [markdown, setMarkdown] = useState(pretext);
  const[expand,setExpand] = useState(true);
  const [expand2, setExpand2] = useState(true);


  return (

    <div className="container">
      
      {expand2 ? 
        <Editor 
          text = {markdown}
          setText = {setMarkdown}
          expand = {expand}
          setExpand = {setExpand}
        /> 
        : null
      }
      
      { expand ?   
          <Previewer 
            text = {markdown}
            expand = {expand2}
            setExpand = {setExpand2}     
                    
          />    
          : null 
        }
     

    </div> 
  );
}

export default App;
