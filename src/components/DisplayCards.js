import Card from './Card'
import CardData from './CardData'
import './displayCards.css'

export default ()=>{
    const cardData = CardData.map((e)=>{
        return <Card
            key={e.title}
            img={e.img}
            isAvailable={e.isAvailable}
            available={e.available}
            rating={e.rating}
            reviewCount={e.reviewCount}
            country={e.country}
            title={e.title}
            price={e.price}
        />
    })
    return(
        <div className='display-card-container'>
            {cardData}
        </div>
            
        
    )
}
