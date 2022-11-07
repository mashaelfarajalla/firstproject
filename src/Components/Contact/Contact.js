import React, { Fragment } from "react";
import Footer from "./../Footer/Footer";
import { ContactSection, ContactSpan, ContactTitle, Form, FormInput, Input, InputEmail, InputSub, InputText, Submit, TextTarea } from './style.js'
const Contact = () => {
    return (
        <Fragment>
            <ContactSection>
                <div className="container">
                    <ContactTitle><ContactSpan>Drop </ContactSpan>Me A line</ContactTitle>
                    <Form action="">
                        <FormInput>
                            <InputText type="text" placeholder="Your Name" />
                            <InputEmail type="email" placeholder="Your Email" />
                        </FormInput>
                        <InputSub type="text" placeholder="Your Subject" />
                        <TextTarea cols="30" rows="10" placeholder="Your Message"></TextTarea>
                        <Submit type="submit" value="Send Message" />
                    </Form>
                </div>
            </ContactSection>
            <Footer />
        </Fragment>

    );
}

export default Contact;
