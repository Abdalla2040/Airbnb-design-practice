import './jokes.css'

export default function Jokes(props){
    return(
        <div className="jokes-container">
            <h4 className="setup">{props.setup}</h4>
            <p className="punchline">{props.punchline}</p>
        </div>
    )
}