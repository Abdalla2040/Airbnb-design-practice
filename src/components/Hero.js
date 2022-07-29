import './hero.css'
import Image22 from '../images/image22.svg'
import Image23 from '../images/image23.png'
import Image24 from '../images/image24.png'
import Image25 from '../images/image25.png'
import Image26 from '../images/image26.png'
import Image27 from '../images/image27.png'
import Image28 from '../images/image28.png'
import Image29 from '../images/image29.png'
import Image30 from '../images/image30.svg'

export default function Hero(){
    return(
        <section>
            <div className="hero-container">
                <img src={Image28} alt="image" className="image28"/>
                <img src={Image30} alt="image" className="image30"/>
                <img src={Image26} alt="image" className="image26"/>
                <img src={Image27} alt="image" className="image27"/>
                <img src={Image29} alt="image" className="image29"/>
                <img src={Image22} alt="image" className="image22"/>
                <img src={Image23} alt="image" className="image23"/>
                <img src={Image25} alt="image" className="image25"/>
                <img src={Image24} alt="image" className="image24"/>
            </div>
            <h1 className="title">Online Experiences</h1>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic officiis vel quam fugit tenetur.</p>
        </section>
    )
}