import './card.css'
export default function Card(props){
    return(
            <div className="card">
                {props.isAvailable && <p className='sold-card'>{props.available}</p>}
                <div className="image-container">
                    <img src={props.img} alt="swimmer" className='images'/>
                </div>
                
                <div className="text-container">
                    <p><span className='star'>&#9733;</span> {props.rating} <span className='fade'>({props.reviewCount})</span><span className='dot'>&#8901;</span><span className='fade'>{props.country}</span></p>
                    <p>{props.title}</p>
                    <p><strong>From &#36;{props.price}</strong>/person</p>
                </div>
            </div>
    )
}