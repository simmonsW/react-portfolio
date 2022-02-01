import React from 'react';
// import { validateEmail } from '../../utils/helpers';

function Contact() {

  // const [ formState, setFormState ] = useState({ name: '', email: '', message: '' });
  // const [ errorMessage, setErrorMessage ] = useState('');

  // const { name, email, message } = formState;

  // function handleChange(e) {
  //   if (e.target.name = 'email') {
  //     const isValid = validateEmail(e.target.value);

  //     if (!isValid) {
  //       setErrorMessage('Your email is invalid.');
  //     } else {
  //       setErrorMessage('');
  //     }
  //   }
                                                                                   

  
  //   if (!errorMessage) {
  //     setFormState({...formState, [e.target.name]: e.target.value });
  //   }
  // };

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(formState);
  // }

  return(
    <section className="contact-me">
      <div>
        <h1 id="contact-title">
          Contact Me
        </h1>
      </div>
      <div id="contact-body">
        <p className="contact-blurb">
          If you wish to get in touch, feel free to send an email to:
          <br />
          <span className="contact-email"> wya.simmons@gmail.com</span>
          <br />
          or reach out over on LinkedIn.
        </p>
      </div>

      {/* <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="name">Name:</label>
          <input type="name" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div className="form-input">
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div className="form-input">
          <label htmlFor="message">Message:</label>
          <textarea type="message" name="message" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="err-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit" className='submit-btn'>Submit</button>
      </form> */}
    </section>
  )
};

export default Contact;