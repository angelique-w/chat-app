import React from 'react';
import Contact from './Contact'

const contacts = [
    {
        name: "Melissa West",
        image: "https://randomuser.me/api/portraits/women/55.jpg",
        online: false
    },
    {
        name: "Ted Myers",
        image: "https://randomuser.me/api/portraits/men/52.jpg",
        online: false
    },
    {
        name: "Don Spencer",
        image: "https://randomuser.me/api/portraits/men/82.jpg",
        online: true
    }, 
    {
        name: "Becky Jennings",
        image: "https://randomuser.me/api/portraits/women/82.jpg",
        online : true
    },
    {
        name: "Jacob Phillips",
        image: "https://randomuser.me/api/portraits/men/97.jpg", 
        online: false
    }
];

const ContactList = () => (
    <div>
        {contacts.map(item => (
            <Contact name={item.name} image={item.image} online={item.online} />
        ))}
    </div>
);

export default ContactList;