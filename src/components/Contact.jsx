import React from 'react';
import './Contact.css';

// const Contact = ({image, name, online}) => {
//     const isOnline = online ? "status-online" : "status-offline";
//     const textIsOnline = online ? "Online" : "Offline";
//     return (
//     <div className="Contact">
//         <img className="avatar" src={image} alt={name}></img>
//         <div>
//             <p className="name">{name}</p>
//             <p className="status">
//                 <span className={isOnline}></span>
//                 <span className="status-text">
//                     {textIsOnline}
//                 </span>
                
//             </p>
//         </div>

//     </div>
//     )
// }

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: false,
        };
    }

    render() {
        return (
            <div className="Contact">
                <img className="avatar" src={this.props.image} alt={this.props.name}></img>
                <div>
                    <p className="name">{this.props.name}</p>
                    <p className="status">
                        <span className={this.state.online ? "status-online" : "status-offline"}></span>
                        <span className="status-text">
                            {this.state.online ? "Online" : "Offline"}
                        </span>
                    </p>
                </div>
            </div>
        )
    }
}

export default Contact;