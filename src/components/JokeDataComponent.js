
import JokeData from './JokesData'
import Jokes from './Jokes'

export default ()=>{
    const jokes = JokeData.map((e)=>{
        return(
            <Jokes
                setup={e.setup}
                punchline={e.punchline}
                
            />
        )
    })
    return(
        <div>
            <h3>{jokes}</h3>
        </div>
    )
}