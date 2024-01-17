import React, { useRef} from 'react';
import { useFormContext } from '../../../contexts/FormContext';

const ContactForm = () => {

    const {validateField, sendEmail} = useFormContext();
    const form = useRef();

    return (
        <section className='contact-form'>
            <div className="container">
                <h1>Come in Contact With Us</h1>
                 <form ref={form} onSubmit={(event) => sendEmail(event, form.current)}>
                    <div className="name">
                        <input type="text" id="name" name="sender" placeholder='Enter your name' onKeyUp={(event) => validateField(event)} required />
                        <div id="nameError" className="error"></div>
                    </div>
                    <div className="email">
                        <input type="email" id="email" name="email_id" placeholder='Enter your email' onKeyUp={(event) => validateField(event)} required />
                        <div id="emailError" className="error"></div>
                    </div>
                    <div className="comments">
                        <textarea name="comment" id="comments" placeholder='Share your comments' onKeyUp={(event) => validateField(event)} required></textarea>
                        <div id="commentError" className="error"></div>
                    </div>
                    <button className="btn-theme" type='submit'>Post Comments</button>
                </form>
            </div>
        </section>
    )
}

export default ContactForm