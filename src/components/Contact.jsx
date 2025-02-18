import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
    name: '',
    email: '',
    message: '',
}

function Contact() {
    const [form, setForm] = useState(initialState)

    const onChange = (e) => {
        e.preventDefault()
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const { name, email, message } = form
        const template = {
            name: name,
            email: email,
            message: message,
        }

        console.log(template)
        emailjs
            .send(
                'service_2h9efny',
                'template_0s94nmj',
                template,
                'user_Sgv7C27nsh1f1dYWCCetb'
            )
            .then(
                function (response) {
                    alert('Message Successfully Sent!')
                    console.log('SUCCESS!', response.status, response.text)
                },
                function (error) {
                    alert('Message Not Sent, Check Information')
                    console.log('FAILED...', error)
                }
            )
        setForm({
            name: '',
            email: '',
            message: '',
        })
    }

    return (
        <div className="contact-container">
            <form onSubmit={onSubmit}>
                <h2>Contact Nick</h2>
                <input
                    name="name"
                    type="text"
                    value={form.name || ''}
                    onChange={onChange}
                    placeholder="Enter Name Here"
                />

                <input
                    name="email"
                    type="text"
                    value={form.email || ''}
                    onChange={onChange}
                    placeholder="Enter Email Here"
                />

                <textarea
                    id="message"
                    name="message"
                    value={form.message || ''}
                    onChange={onChange}
                    placeholder="Type Message Here"
                    rows="5"
                    cols="35"
                ></textarea>

                <button type="submit">Submit</button>
            </form>
            <div className="social-icons">
                <a href="https://www.instagram.com/the.nick.almanza/">
                    <div className="soc-icon">
                        <img
                            src="https://nick-portfolio.s3-us-west-2.amazonaws.com/iconfinder_Rounded_Instagram_svg_5282544.png"
                            alt="Instagram profile for Nick Almanza"
                        />
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/steadi-nick-almanza/">
                    <div className="soc-icon">
                        <img
                            src="https://nick-portfolio.s3-us-west-2.amazonaws.com/iconfinder_Rounded_Linkedin2_svg_5282542.png"
                            alt="LinkedIn profile for Nick Almanza"
                        />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Contact
