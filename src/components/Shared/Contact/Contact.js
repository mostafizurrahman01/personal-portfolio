import emailjs from 'emailjs-com';
import React from 'react';
import './Contact.css';

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail123', 'template_h0hjehk', e.target, 'user_AlQpzpIeNCuLSwa1IhlOD')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    }

    return (
        <section className="contact mb-3">
            <div className="container">
                <div className="section-header text-center text-white mb-5">
                    {/* <h5 className="text-primary">Contact</h5> */}
                    <h1 className="text-primary">Contact With Me</h1>
                </div>
                <div className="col-md-9 mx-auto">
                    <form action="" onSubmit={sendEmail}>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Full Name *" name="name" />
                        </div>
                        <div className="form-group mt-1">
                            <input type="text" className="form-control" placeholder="Email Address *" name="email" />
                        </div>
                        <div className="form-group mt-1">
                            <input type="tel" className="form-control" placeholder="Phone Number*" name="phone" />
                        </div>
                        <div className="form-group mt-1">
                            <input type="text" className="form-control" placeholder="Subject *" name="subject" />
                        </div>
                        <div className="form-group mt-1">
                            <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *" name="message"></textarea>
                        </div>
                        <div className="form-group text-center mt-1 modify">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
