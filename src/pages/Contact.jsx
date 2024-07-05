import {React, useState} from 'react';
import AnimatedPage from "../animations/AnimatedPage";
import emailjs from '@emailjs/browser';
import * as EmailValidator from 'email-validator';
import Circuit from '../assets/Contact/Circuit.svg';
import LoadAnimation from '../components/LoadAnimation';
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
                                <input type="text" placeholder='e.g. John' autoComplete='given-name' className='Input'/>
                            </div>
                            <div className='InputContainer'>
                                <div className='ContactTitle'>
                                    Last Name
                                    <div className='Required'>* Required</div>
                                </div>
                                <input type="text" placeholder='Smith' autoComplete='family-name' className='Input'/>
                            </div>
                            <div className='InputContainer'>
                                <div className='ContactTitle'>
                                    Email
                                    <div className='Required'>* Required</div>
                                    <div className='EmailWarning'>* Invalid Email</div>
                                </div>
                                <input type="text" placeholder='john@gmail.com' autoComplete='email' className='Input'/>
                            </div>
                        </div>
                        <div className='MessageContainer'>
                            <div className='ContactTitle'>
                                    Message
                                    <div className='Required'>* Required</div>
                            </div>
                            <textarea placeholder="Write about anything you&#39;d like." className='Input' id='Message'></textarea>
                        </div>
                        <div className='ContactButtonContainer'>
                            <div className='ContactAndErrorContainer'>
                                <div className='ContactButton' onClick={() => sendEmail(isSent, setSent)}>
                                    <div className='TransitionContainer'>
                                        Submit
                                        <LoadAnimation/>
                                        <img src={Checkmark} alt="" className='Checkmark'/>
                                    </div>
                                </div>
                                <div className='Error'>* An error has occurred.</div>
                            </div>
                        </div>
                    </div>
                    <img src={Circuit} alt="" className='Circuit'/>
                </div>
            </div>
        </AnimatedPage>
    );
}

// Function that sends email once all fields are filled in
const sendEmail = (isSent, setSent) => {
    // If an email has already been sent or is being sent, don't allow another one to be sent
    if (isSent) return;

    const setDisplay = (isVisible, index) => {
        if (isVisible) document.getElementsByClassName("Required")[index].style.display = 'block';
        else document.getElementsByClassName("Required")[index].style.display = 'none';  
    };

    // Removes error message at the start of send if it is shown
    document.getElementsByClassName("Error")[0].style.display = 'none';

    // Grabs values filled into each respective box in the contact box
    const firstName = document.getElementsByClassName("Input")[0].value;
    const lastName = document.getElementsByClassName("Input")[1].value;
    const email = document.getElementsByClassName("Input")[2].value;
    const message = document.getElementsByClassName("Input")[3].value;

    // Checks if the email provided by the user is a valid email. If not, notify the user
    if (!(email.trim() === "") && !EmailValidator.validate(email)) document.getElementsByClassName("EmailWarning")[0].style.display = 'block';
    else document.getElementsByClassName("EmailWarning")[0].style.display = 'none';

    // If any value is empty, notify the user with a "*required"
    (firstName.trim() === "") ? setDisplay(true, 0) : setDisplay(false, 0);
    (lastName.trim() === "") ? setDisplay(true, 1) : setDisplay(false, 1);
    (email.trim() === "") ? setDisplay(true, 2) : setDisplay(false, 2);
    (message.trim() === "") ? setDisplay(true, 3) : setDisplay(false, 3);

    // Exit the attempt to send email
    if (!EmailValidator.validate(email) || lastName.trim() === "" || email.trim() === "" || message.trim() === "") return;
    
    // Template for email to send to the API
    var templateParams = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message
    };
    var serviceID = "service_7jliuze";
    var templateID = "template_aj3q2j6";
    var publicKey = "8AzjtoiVxirowkOtx";

    // Set is sent to true to only force one request at a time
    setSent(true);
    
    // Start loading animation and attempt to send the email
    document.getElementsByClassName("TransitionContainer")[0].style.animation = 'LoadingTransition 1s ease forwards';
    emailjs.send(serviceID, templateID, templateParams, publicKey)
    .then(function(response) {
        // Wait a second to ensure that the loading transition is complete
        setTimeout(() => {
            document.getElementsByClassName("TransitionContainer")[0].style.animation = 'CheckmarkTransition 1s ease forwards';
            console.log('SUCCESS!', response.status, response.text);
        }, 1000);
    }, function(error) {
        setSent(false);
        document.getElementsByClassName("Error")[0].style.display = 'block';  // If error has occurred, notify the user
        document.getElementsByClassName("TransitionContainer")[0].style.animation = '';
        console.log('FAILED...', error);
    });
};

export default Contact;
