import {React, useState} from 'react';
import AnimatedPage from "../animations/AnimatedPage";
import emailjs from '@emailjs/browser';
import Circuit from '../assets/Contact/Circuit.svg';
import Checkmark from '../assets/Contact/Checkmark.png';
import '../styles/pages/Contact.css';

const Contact = () => {
    const [isSent, setSent] = useState(false);

    return (
        <AnimatedPage>
            <div className='ContactPanel'>
                <div className='Title'>
                    Contact Us.
                </div>
                <div className="ContactTitleDivider"/>
                <div className='SubText' id='ContactSubtext'>
                    Connect with Us - Get in touch with SnapCycle for questions, advice, or just to chat!
                </div>
                <div className='ContactBoxContainer'>
                    <div className='ContactBox'>
                        <div className='ContactBoxTitle'>
                            Talk with our team
                        </div>
                        <div className='ContactBoxRow'>
                            <div className='InputContainer'>
                                <div className='ContactTitle'>
                                    First Name
                                    <div className='Required'>* Required</div>
                                </div>
                                <input type="text" placeholder='e.g. John' className='Input'/>
                            </div>
                            <div className='InputContainer'>
                                <div className='ContactTitle'>
                                    Last Name
                                    <div className='Required'>* Required</div>
                                </div>
                                <input type="text" placeholder='Smith' className='Input'/>
                            </div>
                            <div className='InputContainer'>
                                <div className='ContactTitle'>
                                    Email
                                    <div className='Required'>* Required</div>
                                </div>
                                <input type="text" placeholder='john@gmail.com' className='Input'/>
                            </div>
                        </div>
                        <div className='MessageContainer'>
                            <div className='ContactTitle'>
                                    Message
                                    <div className='Required'>* Required</div>
                            </div>
                            <textarea placeholder="Write about anything you&#39;d like." className='Input' id='Message'></textarea>
                        </div>
                        <div className='ContactButtonContainer' onClick={() => sendEmail(isSent, setSent)}>
                            <div className='ContactButton'>
                                <div className='TransitionContainer'>
                                    Submit
                                    <img src={Checkmark} alt="" className='Checkmark'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <img src={Circuit} alt="" className='Circuit'/> */}
            </div>
        </AnimatedPage>
    );
}

const sendEmail = (isSent, setSent) => {
    const setDisplay = (isVisible, index) => {
        if (isVisible) document.getElementsByClassName("Required")[index].style.display = 'block';
        else document.getElementsByClassName("Required")[index].style.display = 'none';  
    };

    const firstName = document.getElementsByClassName("Input")[0].value;
    const lastName = document.getElementsByClassName("Input")[1].value;
    const email = document.getElementsByClassName("Input")[2].value;
    const message = document.getElementsByClassName("Input")[3].value;

    (firstName.trim() === "") ? setDisplay(true, 0) : setDisplay(false, 0);
    (lastName.trim() === "") ? setDisplay(true, 1) : setDisplay(false, 1);
    (email.trim() === "") ? setDisplay(true, 2) : setDisplay(false, 2);
    (message.trim() === "") ? setDisplay(true, 3) : setDisplay(false, 3);
    if (firstName.trim() === "" || lastName.trim() === "" || email.trim() === "" || message.trim() === "") return;

    var templateParams = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message
    };
    var serviceID = "service_7jliuze";
    var templateID = "template_aj3q2j6";
    var publicKey = "8AzjtoiVxirowkOtx";
    
    if (!isSent) {
        emailjs.send(serviceID, templateID, templateParams, publicKey)
        .then(function(response) {
            document.getElementsByClassName("TransitionContainer")[0].style.animation = 'CheckmarkTransition 1s ease forwards';
            setSent(true);
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
    }
};

export default Contact;
