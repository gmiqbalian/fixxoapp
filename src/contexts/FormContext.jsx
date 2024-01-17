import { createContext, useContext} from "react";
import emailjs from '@emailjs/browser';

const FormContext = createContext();

export const useFormContext = () => {
    return useContext(FormContext)
}

export const FormProvider = ({children}) => {
    const validateName = (value) => {
        const regEx = /^([a-öA-Ö\u00C0-\u017F]+(([' -][a-öA-Ö])?[a-öA-Ö]*)){2,}$/;
        const errorField = document.getElementById("nameError");

        if (!regEx.test(value)) {
            errorField.innerHTML = "Enter a valid name";
            return false;
        }
        errorField.innerHTML = ``
        return true;
    }

    const validateEmail = (value) => {
        const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const errorField = document.getElementById("emailError");

        if (!regEx.test(value)) {
            errorField.innerHTML = "Enter a valid email address";
            return false;
        }
        errorField.innerHTML = ``
        return true;
    }

    const validateComment = (value) => {
        const regExChar = /^.{10,}$/;
        const regExComment = /^[A-Za-z0-9\s.,!?'"()$#@%&*-]+$/;
        const errorField = document.getElementById("commentError");

        if (!regExChar.test(value)) {
            errorField.innerHTML = "Enter atleast 10 characters in comments field";
            return false;
        }

        if (!regExComment.test(value)) {
            errorField.innerHTML = "Enter only allowed characters in comments field";
            return false;
        }

        errorField.innerHTML = ``
        return true;
    }

    const validateField = (e) => {
        switch (e.target.name) {
            case "sender":
                validateName(e.target.value)
                break;
            case "email_id":
                validateEmail(e.target.value);
                break;
            case "comment":
                validateComment(e.target.value);
                break;
        }
    }
    
    const sendEmail = (e, form) => {
        e.preventDefault();
        
        emailjs.sendForm('service_jx87jyd', 'template_jtz5jzr', form, 'qeWbri4ykoM17W-2m')
            .then((result) => {
                console.log(result.text);
                alert("Email sent successfully!")
            }, (error) => {
                console.log(error.text);
            });

        e.target.name.value = '';
        e.target.email.value = '';
        e.target.comment.value = '';
    }

    return <FormContext.Provider
        value={{validateField, sendEmail}}>
        {children}
    </FormContext.Provider>
}