import ReactMarkdown from 'react-markdown'




export default function Previewer(props) {


    
    function changeExpand() {

        if (props.expand === true){
            props.setExpand(false)
        } else {
            props.setExpand(true)
        }
        
    }
    return (

        <div class="previewer">
            <nav>
                <span>
                    <i class="fa fa-eye"></i> Previewer</span>
                <i  onClick={changeExpand}  id="expand" class="fa fa-arrows-alt"></i>
            </nav>
            <article><ReactMarkdown>{props.text}</ReactMarkdown></article>
        </div>

    );
};