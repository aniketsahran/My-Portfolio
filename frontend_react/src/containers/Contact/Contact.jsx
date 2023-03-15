import React, {useState} from 'react';

import {client} from '../../client';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {name, email, message} = formData;
  
  const handleChangeInput = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]:value});
  }

  const handleSubmit = () => {
    setLoading(true);
    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }
    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })
  }

  return (
    <div className='app__contact' id='contact'>
      <div className='app__contact-heading gradient__text'>
        <h1>
          Take a Coffee and Chat with me.
        </h1>
      </div>
      <div className='app__contact-container'>
        {!isFormSubmitted ?
          <div>
            <div className='app__contact-container__A'>
              <div className='app__contact-container__A-1'>
                <input className='app__contact-container__p-text' type='text' placeholder='Your Name' value={name} name='name' onChange={handleChangeInput} />
              </div>
              <div className='app__contact-container__A-2'>
                <input className='app__contact-container__p-text' type='email' placeholder='Your Email' value={email} name='email' onChange={handleChangeInput} />
              </div>
            </div>
            <div className='app__contact-container__B'>
              <input className='app__contact-container__p-text' type='text' placeholder='Your Message' value={message} name='message' onChange={handleChangeInput} />
            </div>
            <button type='button' className='app__contact-container__button' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
          </div>
          : <div className='app__contact-submitted'>
            <h3 className='head-text'>Thank you for getting in touch.</h3>
          </div>
        }
      </div>
    </div>
  )
}

export default Contact;