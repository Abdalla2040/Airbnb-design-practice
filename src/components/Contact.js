
import './contact.css'



export default function Contact(props){
    return(
        <section className='contact-container'>
            <img src={props.image} alt="image" className='black' />
            <h1>{props.name}</h1>
            <div className="tools-container">
                <div className="phone">
                    <img src={props.phoneLogo} alt="phone" />
                    <p>{props.phone}</p>
                </div>
                <div className="mail">
                    <img src={props.emailLogo} alt="env" />
                    <p>{props.email}</p>
                </div>
            </div>
        </section>
    )
}

/**
 * Another way of doing props
 */
// export default function Contact({image, name, phoneLogo, phone, emailLogo, email}){
//     return(
//         <section className='contact-container'>
//             <img src={image} alt="image" className='black' />
//             <h1>{name}</h1>
//             <div className="tools-container">
//                 <div className="phone">
//                     <img src={phoneLogo} alt="phone" />
//                     <p>{phone}</p>
//                 </div>
//                 <div className="mail">
//                     <img src={emailLogo} alt="env" />
//                     <p>{email}</p>
//                 </div>
//             </div>
//         </section>
//     )
//}